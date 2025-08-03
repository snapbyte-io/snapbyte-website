import React from 'react';
import { LanguageProvider } from './ThemeLanguageProvider';
import { Chatbot } from './chat';

interface ChatbotWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWrapper: React.FC<ChatbotWrapperProps> = ({ isOpen, onClose }) => {
  return (
    <LanguageProvider>
      <Chatbot isOpen={isOpen} onClose={onClose} />
    </LanguageProvider>
  );
};

export default ChatbotWrapper;
