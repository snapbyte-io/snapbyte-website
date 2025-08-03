import React, { useMemo } from 'react';
import { useLanguage } from '../ThemeLanguageProvider';

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
  isVisible: boolean;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ 
  onQuestionClick, 
  isVisible 
}) => {
  const { t } = useLanguage();
  
  if (!isVisible) return null;

  const QUESTIONS = [
    t.chatbotQuickQuestion1,
    t.chatbotQuickQuestion2,
    t.chatbotQuickQuestion3,
    t.chatbotQuickQuestion4,
    t.chatbotQuickQuestion5,
  ];

  // Memoize the selected questions to prevent them from changing on every render
  const selectedQuestions = useMemo(() => {
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [t.chatbotQuickQuestion1, t.chatbotQuickQuestion2, t.chatbotQuickQuestion3, t.chatbotQuickQuestion4, t.chatbotQuickQuestion5]);

  return (
    <div className="px-4 pb-2 space-y-2">
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {t.chatbotQuickQuestionsTitle}
      </div>
      {selectedQuestions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          className="w-full text-left text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors"
        >
          {question}
        </button>
      ))}
    </div>
  );
};
