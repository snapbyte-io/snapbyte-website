import React from 'react';

interface ChatHeaderProps {
  title: string;
  isConnected: boolean;
  onlineText: string;
  offlineText: string;
  hasMessages: boolean;
  onClearHistory: () => void;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  isConnected,
  onlineText,
  offlineText,
  hasMessages,
  onClearHistory,
  onClose
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">S</span>
        </div>
        <div>
          <h3 className="font-medium text-sm text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {isConnected ? onlineText : offlineText}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {hasMessages && (
          <button
            onClick={onClearHistory}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            title="Clear chat history"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
