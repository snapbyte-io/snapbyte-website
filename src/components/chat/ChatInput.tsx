import React from 'react';
import { LoadingDots } from './LoadingDots';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  isConnected: boolean;
  isStreaming: boolean;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholderText: string;
  connectingText: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  setInputValue,
  isConnected,
  isStreaming,
  onSendMessage,
  onKeyPress,
  inputRef,
  placeholderText,
  connectingText
}) => {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex space-x-2">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder={isConnected ? placeholderText : connectingText}
          disabled={!isConnected || isStreaming}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          onClick={onSendMessage}
          disabled={!isConnected || !inputValue.trim() || isStreaming}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isStreaming ? (
            <LoadingDots />
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
