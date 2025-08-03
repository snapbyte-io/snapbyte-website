import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../ThemeLanguageProvider';
import { useChatbot } from '../../hooks/useChatbot';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
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
  } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && !sessionId && !isLoading) {
      startChatSession(t.chatbotWelcome);
    }
  }, [isOpen, sessionId, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50 md:items-end md:justify-end md:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md h-full max-h-[600px] flex flex-col md:w-[420px] md:h-[600px] md:max-w-none">
        <ChatHeader
          title={t.chatbotTitle}
          isConnected={isConnected}
          onlineText={t.chatbotOnline}
          offlineText={t.chatbotOffline}
          hasMessages={messages.length > 0}
          onClearHistory={clearChatHistory}
          onClose={onClose}
        />

        <MessageList
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
          showQuickQuestions={!isLoading && !isStreaming}
          showRetryButton={showRetryButton}
          connectionError={connectionError}
          onQuestionClick={sendQuickQuestion}
          onRetryConnection={retryConnection}
        />

        <ChatInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          isConnected={isConnected}
          isStreaming={isStreaming}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
          inputRef={inputRef}
          placeholderText={t.chatbotPlaceholder}
          connectingText={t.chatbotConnecting}
        />
      </div>
    </div>
  );
};

export default Chatbot;
