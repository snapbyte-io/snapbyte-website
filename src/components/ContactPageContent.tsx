import React from 'react';
import { useLanguage, LanguageProvider } from './ThemeLanguageProvider';
import ContactForm from './ContactForm';
import { contactInfo, faqs } from '../data/contact';

const ContactPageContentInner: React.FC = () => {
  const { t } = useLanguage();

  // Prepare translations for ContactForm component
  const contactFormTranslations = {
    nameLabel: t.nameLabel || 'Name',
    emailLabel: t.emailLabel || 'Email',
    companyLabel: t.companyLabel || 'Company',
    subjectLabel: t.subjectLabel || 'Subject',
    messageLabel: t.messageLabel || 'Message',
    selectSubject: t.selectSubject || 'Select a subject',
    generalInquiry: t.generalInquiry || 'General Inquiry',
    technicalSupportOption: t.technicalSupportOption || 'Technical Support',
    salesPricing: t.salesPricing || 'Sales & Pricing',
    enterpriseSolutions: t.enterpriseSolutions || 'Enterprise Solutions',
    partnershipOpportunities: t.partnershipOpportunities || 'Partnership Opportunities',
    namePlaceholder: t.namePlaceholder || 'Your full name',
    emailPlaceholder: t.emailPlaceholder || 'your@email.com',
    companyPlaceholder: t.companyPlaceholder || 'Your company name',
    messagePlaceholder: t.messagePlaceholder || 'Tell us how we can help you...',
    sendMessageButton: t.sendMessageButton || 'Send Message',
    messageSuccess: t.messageSuccess || 'Thank you! Your message has been sent successfully.',
    messageError: t.messageError || 'Sorry, there was an error sending your message. Please try again.',
    sending: t.sending || 'Sending...',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.contactTitle || 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.contactDescription || 'Get in touch with our team for any questions, support, or business inquiries.'}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t.contactInformation || 'Contact Information'}
              </h2>
              <div className="space-y-6 pt-6">
                {/* General Inquiries */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start space-x-4 pt-2">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.95a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t.generalInquiries || 'General Inquiries'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {t.generalInquiriesDesc || 'Questions about Snapbyte or general information'}
                      </p>
                      <a href={`mailto:${contactInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Technical Support */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t.technicalSupport || 'Technical Support'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {t.technicalSupportDesc || 'Need help with integration or troubleshooting?'}
                      </p>
                      <a href={`mailto:${contactInfo.support}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {contactInfo.support}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sales & Enterprise */}
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V9a2 2 0 11-4 0V6m0 0V4.5a2 2 0 10-4 0V6m4 0H8m5 5v.01M19 10v8a2 2 0 01-2 2H7a2 2 0 01-2-2V10"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {t.salesEnterprise || 'Sales & Enterprise'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {t.salesEnterpriseDesc || 'Interested in enterprise solutions or have questions about pricing?'}
                      </p>
                      <a href={`mailto:${contactInfo.sales}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {contactInfo.sales}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                {contactInfo.address.city && (
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {t.ourOffice || 'Our Office'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {contactInfo.address.city}, {contactInfo.address.state}<br/>
                          {contactInfo.address.country}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t.sendMessage || 'Send Us a Message'}
              </h2>
              <ContactForm translations={contactFormTranslations} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactPageContent: React.FC = () => {
  return (
    <LanguageProvider>
      <ContactPageContentInner />
    </LanguageProvider>
  );
};

export default ContactPageContent;
