import React from 'react';
import type { Message } from '../../hooks/useChatbot';
import { formatMessage } from '../../utils/messageFormatter';
import { LoadingDots } from './LoadingDots';
import { QuickQuestions } from './QuickQuestions';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  showQuickQuestions?: boolean;
  showRetryButton?: boolean;
  connectionError?: string | null;
  onQuestionClick?: (question: string) => void;
  onRetryConnection?: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  isLoading, 
  messagesEndRef,
  showQuickQuestions = false,
  showRetryButton = false,
  connectionError = null,
  onQuestionClick,
  onRetryConnection
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {isLoading && (
        <div className="flex justify-center">
          <LoadingDots />
        </div>
      )}
      
      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs lg:max-w-sm px-3 py-2 rounded-lg text-sm ${
            message.isUser
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          }`}>
            <div 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
            />
            {message.text === '' && !message.isUser && (
              <LoadingDots />
            )}
          </div>
        </div>
      ))}

      {/* Retry button when connection fails */}
      {showRetryButton && connectionError && onRetryConnection && (
        <div className="flex justify-center py-4">
          <div className="text-center">
            <p className="text-sm text-red-600 dark:text-red-400 mb-3">{connectionError}</p>
            <button
              onClick={onRetryConnection}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors"
            >
              Retry Connection
            </button>
          </div>
        </div>
      )}

      {/* Quick questions at the end of message list */}
      {showQuickQuestions && onQuestionClick && (
        <QuickQuestions
          onQuestionClick={onQuestionClick}
          isVisible={true}
        />
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};
