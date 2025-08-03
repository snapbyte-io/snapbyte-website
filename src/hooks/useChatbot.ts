import { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface StoredHistory {
  messages: Message[];
  timestamp: number;
}

const CHATBOT_API_URL = 'https://snapbee.ifateam.dev/api/chat';
const CHAT_HISTORY_KEY = 'snapbyte_chatbot_history';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showRetryButton, setShowRetryButton] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const loadChatHistory = () => {
    try {
      const storedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
      if (storedHistory) {
        const { messages: storedMessages }: StoredHistory = JSON.parse(storedHistory);
        const restoredMessages = storedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(restoredMessages);
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
      localStorage.removeItem(CHAT_HISTORY_KEY);
    }
  };

  const saveChatHistory = (messages: Message[]) => {
    try {
      const historyData: StoredHistory = {
        messages,
        timestamp: Date.now()
      };
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(historyData));
    } catch (error) {
      console.error('Failed to save chat history:', error);
    }
  };

  const clearChatHistory = () => {
    try {
      localStorage.removeItem(CHAT_HISTORY_KEY);
      setMessages([]);
      setSessionId(null);
      setIsConnected(false);
      setShowRetryButton(false);
      setConnectionError(null);
    } catch (error) {
      console.error('Failed to clear chat history:', error);
    }
  };

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => {
      const updatedMessages = [...prev, newMessage];
      saveChatHistory(updatedMessages);
      return updatedMessages;
    });
  };

  const startChatSession = async (welcomeMessage?: string) => {
    if (isLoading || (sessionId && isConnected)) return;

    try {
      setIsLoading(true);
      setConnectionError(null);
      setShowRetryButton(false);
      
      const response = await fetch(`${CHATBOT_API_URL}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: 'Hello!' })
      });

      if (!response.ok) {
        throw new Error('Failed to start chat session');
      }

      const data = await response.json();
      setSessionId(data.session_id);
      setIsConnected(true);
      
      if (messages.length === 0 && welcomeMessage) {
        addMessage(welcomeMessage, false);
      }
      
    } catch (error) {
      console.error('Failed to start chat session:', error);
      setIsConnected(false);
      setConnectionError('Failed to connect to chat service');
      setShowRetryButton(true);
      
      if (welcomeMessage) {
        addMessage('Connection failed. Please use the retry button below.', false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const retryConnection = async () => {
    // Clear everything and start fresh
    setSessionId(null);
    setIsConnected(false);
    setShowRetryButton(false);
    setConnectionError(null);
    
    await startChatSession();
  };

  const sendMessage = async () => {
    const messageText = inputValue.trim();
    if (!messageText || !sessionId || isStreaming) return;

    addMessage(messageText, true);
    setInputValue('');
    setIsStreaming(true);

    try {
      const response = await fetch(`${CHATBOT_API_URL}/stream/${sessionId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText })
      });

      if (response.status === 404) {
        setIsStreaming(false);
        setShowRetryButton(true);
        setConnectionError('Session expired. Please retry the connection.');
        addMessage('Session expired. Please use the retry button below.', false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Create streaming message
      const streamingMessage: Message = {
        id: `streaming-${Date.now()}`,
        text: '',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => {
        const updatedMessages = [...prev, streamingMessage];
        saveChatHistory(updatedMessages);
        return updatedMessages;
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.substring(6));

                if (data.type === 'text') {
                  accumulatedText += data.data;
                  
                  // Character-by-character animation
                  for (let i = accumulatedText.length - data.data.length; i < accumulatedText.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 10));
                    setMessages(prev => {
                      const updatedMessages = prev.map(msg => 
                        msg.id === streamingMessage.id 
                          ? { ...msg, text: accumulatedText.substring(0, i + 1) }
                          : msg
                      );
                      saveChatHistory(updatedMessages);
                      return updatedMessages;
                    });
                  }
                } else if (data.type === 'stream_end') {
                  setIsStreaming(false);
                } else if (data.type === 'action' && data.action === 'contact_sales') {
                  const contactText = '\n\n[Contact Sales](https://snapbyte.io/contact)';
                  accumulatedText += contactText;
                  
                  // Animate contact link character by character
                  for (let i = accumulatedText.length - contactText.length; i < accumulatedText.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 20));
                    setMessages(prev => {
                      const updatedMessages = prev.map(msg => 
                        msg.id === streamingMessage.id 
                          ? { ...msg, text: accumulatedText.substring(0, i + 1) }
                          : msg
                      );
                      saveChatHistory(updatedMessages);
                      return updatedMessages;
                    });
                  }
                }
              } catch (err) {
                console.error('Failed to parse SSE data:', err);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      addMessage('Connection error. Please try again.', false);
    } finally {
      setIsStreaming(false);
    }
  };

  const sendQuickQuestion = async (question: string) => {
    if (!sessionId || isStreaming) return;
    // Send the message immediately
    addMessage(question, true);
    setIsStreaming(true);

    try {
      const response = await fetch(`${CHATBOT_API_URL}/stream/${sessionId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });

      if (response.status === 404) {
        setIsStreaming(false);
        setShowRetryButton(true);
        setConnectionError('Session expired. Please retry the connection.');
        addMessage('Session expired. Please use the retry button below.', false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Create streaming message
      const streamingMessage: Message = {
        id: `streaming-${Date.now()}`,
        text: '',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => {
        const updatedMessages = [...prev, streamingMessage];
        saveChatHistory(updatedMessages);
        return updatedMessages;
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.substring(6));

                if (data.type === 'text') {
                  accumulatedText += data.data;
                  
                  // Character-by-character animation
                  for (let i = accumulatedText.length - data.data.length; i < accumulatedText.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 20));
                    setMessages(prev => {
                      const updatedMessages = prev.map(msg => 
                        msg.id === streamingMessage.id 
                          ? { ...msg, text: accumulatedText.substring(0, i + 1) }
                          : msg
                      );
                      saveChatHistory(updatedMessages);
                      return updatedMessages;
                    });
                  }
                } else if (data.type === 'stream_end') {
                  setIsStreaming(false);
                } else if (data.type === 'action' && data.action === 'contact_sales') {
                  const contactText = '\n\n[Contact Sales](https://snapbyte.io/contact)';
                  accumulatedText += contactText;
                  
                  // Animate contact link character by character
                  for (let i = accumulatedText.length - contactText.length; i < accumulatedText.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 20));
                    setMessages(prev => {
                      const updatedMessages = prev.map(msg => 
                        msg.id === streamingMessage.id 
                          ? { ...msg, text: accumulatedText.substring(0, i + 1) }
                          : msg
                      );
                      saveChatHistory(updatedMessages);
                      return updatedMessages;
                    });
                  }
                }
              } catch (err) {
                console.error('Failed to parse SSE data:', err);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      addMessage('Connection error. Please try again.', false);
    } finally {
      setIsStreaming(false);
      setInputValue(''); // Clear input after sending
    }
  };

  useEffect(() => {
    loadChatHistory();
  }, []);

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    isConnected,
    sessionId,
    isStreaming,
    showRetryButton,
    connectionError,
    startChatSession,
    sendMessage,
    sendQuickQuestion,
    retryConnection,
    clearChatHistory
  };
};

export type { Message };
