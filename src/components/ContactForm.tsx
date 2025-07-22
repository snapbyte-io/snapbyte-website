import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

interface EmailPayload {
  email: string;
  content: string;
  subject: string;
  recaptchaToken: string;
  name: string;
  company?: string;
  category: string;
}

interface ContactFormProps {
  translations: {
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    subjectLabel: string;
    messageLabel: string;
    selectSubject: string;
    generalInquiry: string;
    technicalSupportOption: string;
    salesPricing: string;
    enterpriseSolutions: string;
    partnershipOpportunities: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    sendMessageButton: string;
    messageSuccess: string;
    messageError: string;
    sending: string;
  };
}

// Declare global grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = '6LfMxS4rAAAAALOf-uWoW3kaH9gJmC7sfESdJcO-';
const EMAIL_API_URL = 'https://mail-for-portfolio.vercel.app/api/send-smtp-email';

// Custom hook for reCAPTCHA v3
const useRecaptcha = (siteKey: string) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsReady(true);
      });
      return;
    }

    // Load reCAPTCHA script if not already loaded
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setIsReady(true);
      });
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(`script[src*="recaptcha"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, [siteKey]);

  const executeRecaptcha = useCallback(async (action: string): Promise<string> => {
    if (!isReady || !window.grecaptcha) {
      throw new Error('reCAPTCHA is not ready');
    }
    return window.grecaptcha.execute(siteKey, { action });
  }, [isReady, siteKey]);

  return { isReady, executeRecaptcha };
};

// Email sending function using async/await pattern
const sendEmail = async (data: EmailPayload): Promise<void> => {
  try {
    const response = await axios.post(EMAIL_API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 second timeout
    });

    if (response.status !== 200) {
      throw new Error(response.data?.message || 'Failed to send email');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message || 'Failed to send email');
    }
    throw error;
  }
};

export const ContactForm: React.FC<ContactFormProps> = ({ translations: t }) => {
  const { isReady: isRecaptchaReady, executeRecaptcha } = useRecaptcha(RECAPTCHA_SITE_KEY);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      if (!isRecaptchaReady) {
        throw new Error('reCAPTCHA is not ready. Please wait and try again.');
      }

      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('contact_form');

      // Prepare email payload
      const emailPayload: EmailPayload = {
        email: formData.email,
        content: formData.message,
        subject: `[Contact Form - ${formData.subject}] ${formData.name}${
          formData.company ? ` from ${formData.company}` : ''
        }`,
        recaptchaToken,
        name: formData.name,
        company: formData.company,
        category: formData.subject,
      };

      // Send email
      await sendEmail(emailPayload);

      // Success: Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
      setIsSuccess(true);

    } catch (error) {
      console.error('Contact form submission error:', error);
      setError(error instanceof Error ? error.message : t.messageError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Success Message */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-200">{t.messageSuccess}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200">
            {error || t.messageError}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.nameLabel} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder={t.namePlaceholder}
            disabled={isSubmitting}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.emailLabel} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder={t.emailPlaceholder}
            disabled={isSubmitting}
          />
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.companyLabel}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder={t.companyPlaceholder}
            disabled={isSubmitting}
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.subjectLabel} *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            disabled={isSubmitting}
          >
            <option value="">{t.selectSubject}</option>
            <option value="general">{t.generalInquiry}</option>
            <option value="support">{t.technicalSupportOption}</option>
            <option value="sales">{t.salesPricing}</option>
            <option value="enterprise">{t.enterpriseSolutions}</option>
            <option value="partnership">{t.partnershipOpportunities}</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.messageLabel} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
            placeholder={t.messagePlaceholder}
            disabled={isSubmitting}
          />
        </div>

        {/* reCAPTCHA Status Indicator */}
        <div className="flex items-center justify-center py-2">
          {isRecaptchaReady ? (
            <div></div>
          ) : (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Loading reCAPTCHA...
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isRecaptchaReady}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.sending : t.sendMessageButton}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
