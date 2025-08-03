export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  // Navigation
  home: string;
  features: string;
  pricing: string;
  docs: string;
  about: string;
  blog: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  learnMore: string;
  seeHowItWorks: string;
  talkToSales: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  intelligentOptimization: string;
  intelligentOptimizationDesc: string;
  globalEdgeNetwork: string;
  globalEdgeNetworkDesc: string;
  developerFriendlyAPI: string;
  developerFriendlyAPIDesc: string;
  lowBandwidthCosts: string;
  lowBandwidthCostsDesc: string;
  twentyFourSevenSupport: string;
  twentyFourSevenSupportDesc: string;
  easyIntegration: string;
  easyIntegrationDesc: string;

  //Demo Section
  demoTitle: string;
  demoDescription: string;
  seeDocumentation: string;

  //Team Section
  meetOurTeam: string;
  viewProfile: string;

  // Customers Section
  customersTitle: string;
  customersSubtitle: string;
  customersBandwidthPerMonth: string;
  customersDataServed: string;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  startFreeTrial: string;
  
  // Theme
  lightMode: string;
  darkMode: string;
  
  // Auth
  signin: string;
  
  // Pricing Page
  pricingTitle: string;
  pricingSubtitle: string;
  pricingDescription: string;
  mostPopular: string;
  perMonth: string;
  perYear: string;
  save: string;
  
  // About Page
  aboutTitle: string;
  aboutDescription: string;
  
  // Contact Page
  contactTitle: string;
  contactDescription: string;
  contactInformation: string;
  generalInquiries: string;
  generalInquiriesDesc: string;
  technicalSupport: string;
  technicalSupportDesc: string;
  salesEnterprise: string;
  salesEnterpriseDesc: string;
  phoneSupport: string;
  phoneSupportDesc: string;
  ourOffice: string;
  sendMessage: string;
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
  
  // FAQ
  faqTitle: string;
  faqQuestion1: string;
  faqAnswer1: string;
  faqQuestion2: string;
  faqAnswer2: string;
  faqQuestion3: string;
  faqAnswer3: string;
  faqQuestion4: string;
  faqAnswer4: string;
  faqQuestion5: string;
  faqAnswer5: string;
  faqQuestion6: string;
  faqAnswer6: string;
  
  // Footer & Legal
  navigation: string;
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
  
  // Pricing Plans
  trialPlan: string;
  trialDescription: string;
  trialCacheLifetime: string;
  trialAutoExtension: string;
  trialBandwidthLimit: string;
  
  proPlan: string;
  proDescription: string;
  proCacheLifetime: string;
  proAutoExtension: string;
  proBandwidthPrice: string;
  
  enterprisePlan: string;
  enterpriseDescription: string;
  enterpriseCacheLifetime: string;
  enterpriseAutoExtension: string;
  enterpriseStorageFees: string;
  enterpriseBandwidthPrice: string;
  enterpriseStoragePrice: string;
  enterpriseNote: string;
  
  noStorageFees: string;
  contactSales: string;
  getStartedFree: string;
  
  // Pricing Features
  trialFeature1: string;
  trialFeature2: string;
  trialFeature3: string;
  trialFeature4: string;
  
  proFeature1: string;
  proFeature2: string;
  proFeature3: string;
  proFeature4: string;
  
  enterpriseFeature1: string;
  enterpriseFeature2: string;
  enterpriseFeature3: string;
  enterpriseFeature4: string;
  
  // Calculator
  calculator: string;
  calculatorDescription: string;
  selectUnit: string;
  gb: string;
  tb: string;
  pb: string;
  dataAmount: string;
  dataStograge: string;
  dataBandwidth: string;
  dataTransfer: string;
  monthlyBandwidthCost: string;
  monthlyStorageCost: string;
  totalMonthlyCost: string;
  pbPerMonthDataTransfer: string;
  tbPerMonthStorage: string;

  // Chatbot
  chatbotTitle: string;
  chatbotWelcome: string;
  chatbotPlaceholder: string;
  chatbotConnecting: string;
  chatbotOnline: string;
  chatbotOffline: string;
  chatbotError: string;
  chatbotSendButton: string;
  chatbotQuickQuestionsTitle: string;
  chatbotQuickQuestion1: string;
  chatbotQuickQuestion2: string;
  chatbotQuickQuestion3: string;
  chatbotQuickQuestion4: string;
  chatbotQuickQuestion5: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
];

export const translations: Record<string, Translation> = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    docs: 'Docs',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'File & Object Caching System.',
    heroDescription: 'Optimize, transform, and deliver files at scale with our intelligent CDN. Built for developers who demand performance.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    seeHowItWorks: 'See How It Works',
    talkToSales: 'Talk to Sales',
    
    // Features Section
    featuresTitle: 'Everything You Need to Deliver Fast',
    featuresSubtitle: 'Powerful features designed to make file delivery effortless, fast, and reliable for developers and their users.',
    intelligentOptimization: 'Intelligent Optimization',
    intelligentOptimizationDesc: 'Automatic compression, format conversion, and sizing. WebP, AVIF, and responsive variants generated on-the-fly.',
    globalEdgeNetwork: 'Global Edge Network',
    globalEdgeNetworkDesc: '150+ edge locations worldwide ensure your files are delivered from the closest point to your users for maximum speed.',
    developerFriendlyAPI: 'Developer-Friendly API',
    developerFriendlyAPIDesc: 'Simple, intuitive API with comprehensive SDKs. Get started in minutes, not hours of configuration.',
    lowBandwidthCosts: 'Low Bandwidth Costs, No Storage Costs',
    lowBandwidthCostsDesc: 'No hidden fees, no storage limits — just fast, efficient delivery at the best bandwidth rates in the market.',
    twentyFourSevenSupport: '24/7 Support',
    twentyFourSevenSupportDesc: 'And whenever you need help, our 24/7 support team is here to assist you — anytime, anywhere.',
    easyIntegration: 'Easy Integration',
    easyIntegrationDesc: 'Works with any framework or platform. Drop-in replacement for existing file storage with zero configuration.',

    //Demo Section
    demoTitle: 'Simple API, Powerful Results, Easy integration',
    demoDescription: 'Experience the power of Snapbyte with our easy-to-use API. Transform and deliver files effortlessly.',
    seeDocumentation: 'See Documentation',
    //Team Section
    meetOurTeam: 'Meet Our Team',
    viewProfile: 'View Profile',

    // Customers Section
    customersTitle: 'Featured Customers',
    customersSubtitle: 'See how our customers are using Snapbyte to optimize their file delivery.',
    customersBandwidthPerMonth: 'bandwidth/month',
    customersDataServed: 'data served',

    // CTA
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: 'Try Snapbyte today and experience the difference intelligent file optimization can make for your application.',
    startFreeTrial: 'Start Free Trial',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    
    // Auth
    signin: 'Sign In',
    
    // Pricing Page
    pricingTitle: 'Simple, Transparent Pricing',
    pricingSubtitle: 'Start free and scale as you grow. No hidden fees, no surprises.',
    pricingDescription: 'Simple, transparent pricing for developers and teams. Start free and scale as you grow.',
    mostPopular: 'Most Popular',
    perMonth: '/month',
    perYear: '/year',
    save: 'save',
    
    // About Page
    aboutTitle: 'About Snapbyte',
    aboutDescription: 'Learn more about our mission to make file delivery fast and simple for developers.',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactDescription: 'Get in touch with our team. We\'re here to help you succeed.',
    contactInformation: 'Contact Information',
    generalInquiries: 'General Inquiries',
    generalInquiriesDesc: 'Questions about Snapbyte or general information',
    technicalSupport: 'Technical Support',
    technicalSupportDesc: 'Need help with integration or troubleshooting?',
    salesEnterprise: 'Sales & Enterprise',
    salesEnterpriseDesc: 'Interested in enterprise solutions or have questions about pricing?',
    phoneSupport: 'Phone Support',
    phoneSupportDesc: 'Prefer to talk? Give us a call',
    ourOffice: 'Our Office',
    sendMessage: 'Send Us a Message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    companyLabel: 'Company',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    selectSubject: 'Select a subject',
    generalInquiry: 'General Inquiry',
    technicalSupportOption: 'Technical Support',
    salesPricing: 'Sales & Pricing',
    enterpriseSolutions: 'Enterprise Solutions',
    partnershipOpportunities: 'Partnership Opportunities',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'your@email.com',
    companyPlaceholder: 'Your company name',
    messagePlaceholder: 'Tell us how we can help you...',
    sendMessageButton: 'Send Message',
    messageSuccess: 'Thank you! Your message has been sent successfully.',
    messageError: 'Sorry, there was an error sending your message. Please try again.',
    sending: 'Sending...',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqQuestion1: 'Can I change plans anytime?',
    faqAnswer1: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
    faqQuestion2: 'What happens if I exceed my limits?',
    faqAnswer2: 'We\'ll notify you before you reach your limits. For storage and bandwidth, you can either upgrade your plan or purchase additional resources as needed.',
    faqQuestion3: 'Do you offer custom enterprise solutions?',
    faqAnswer3: 'Absolutely! Our Enterprise plan includes custom configurations, dedicated support, and can be tailored to meet specific compliance and performance requirements.',
    faqQuestion4: 'Is there any storage limit or quota included in the plan?',
    faqAnswer4: 'With our Pro Plan, there is no storage limit or quota. You can cache as much data as needed. Please note: files that haven\'t been downloaded in the past 30 days will be automatically purged to optimize resources. However, storage is free and you can re-cache any file at any time with no limitations.',
    faqQuestion5: 'Are there any requirements or restrictions on the ratio between stored content and bandwidth usage?',
    faqAnswer5: 'No, there are no such restrictions. Snapbyte is a data caching system, and we only charge based on actual bandwidth usage. In fact, we encourage high download activity. For low-access files, we apply the 30-day auto-purge policy mentioned above, but you\'re always free to request those files be cached again at any time.',
    faqQuestion6: 'Do you have any usage guidelines or best practices for optimal caching efficiency?',
    faqAnswer6: 'Snapbyte is still in its early stage, and while our documentation is evolving, you can find helpful information at: https://docs.snapbyte.io. We also offer free support and testing to help you get started. Feel free to reach out directly via Telegram to our co-founder: @neokrypt',
    
    // Footer & Legal
    navigation: 'Navigation',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved',
    
    // Pricing Plans
    trialPlan: 'Trial Plan',
    trialDescription: 'Perfect for testing Snapbyte\'s caching capabilities',
    trialCacheLifetime: 'Files are cached for up to 7 days',
    trialAutoExtension: 'No auto-extension',
    trialBandwidthLimit: '10 TB bandwidth limit',
    
    proPlan: 'Pro Plan',
    proDescription: 'Ideal for high-volume or time-sensitive content',
    proCacheLifetime: 'Files are cached for up to 30 days',
    proAutoExtension: 'Auto-extension: If a file is frequently accessed, its cache lifetime is automatically extended',
    proBandwidthPrice: 'Data Transfer: $2990 per PB/month',

    enterprisePlan: 'Enterprise Plan',
    enterpriseDescription: 'Best for critical assets requiring long-term availability',
    enterpriseCacheLifetime: 'Files are cached indefinitely',
    enterpriseAutoExtension: 'Guaranteed persistent caching',
    enterpriseStorageFees: 'Storage fee included',
    enterpriseBandwidthPrice: 'Data Transfer: $2990 per PB/month',
    enterpriseStoragePrice: 'Storage: $7 per TB/month',
    enterpriseNote: '⚠️ Note: Although files are cached permanently, Snapbyte is a data caching system — it should not be used as a primary or long-term storage location.',
    
    noStorageFees: 'No storage fees',
    contactSales: 'Contact Sales',
    getStartedFree: 'Get Started Free',
    
    // Pricing Features
    trialFeature1: '7-day cache lifetime',
    trialFeature2: '10 TB bandwidth included',
    trialFeature3: 'Basic analytics',
    trialFeature4: 'Community support',
    
    proFeature1: '30-day cache lifetime',
    proFeature2: 'Intelligent auto-extension',
    proFeature3: 'Advanced analytics',
    proFeature4: 'Priority support',
    
    enterpriseFeature1: 'Indefinite cache lifetime',
    enterpriseFeature2: 'Guaranteed persistent caching',
    enterpriseFeature3: 'Premium analytics',
    enterpriseFeature4: '24/7 dedicated support',
    
    // Calculator
    calculator: 'Pricing Calculator',
    calculatorDescription: 'Calculate your monthly costs based on your bandwidth usage',
    selectUnit: 'Select unit',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataAmount: 'Data amount',
    dataStograge: 'Storage',
    dataBandwidth: 'Bandwidth',
    dataTransfer: 'Data Transfer',
    monthlyBandwidthCost: 'Monthly bandwidth cost',
    monthlyStorageCost: 'Monthly storage cost',
    totalMonthlyCost: 'Total',
    pbPerMonthDataTransfer: '1 PB/month Data Transfer',
    tbPerMonthStorage: '1 TB/month Storage',

    // Chatbot
    chatbotTitle: 'Snapbee Assistant',
    chatbotWelcome: 'Hello! I\'m here to help you with any questions about Snapbyte. How can I assist you today?',
    chatbotPlaceholder: 'Type your message...',
    chatbotConnecting: 'Connecting...',
    chatbotOnline: 'Online',
    chatbotOffline: 'Offline',
    chatbotError: 'Sorry, I encountered an error. Please try again.',
    chatbotSendButton: 'Send',
    chatbotQuickQuestionsTitle: 'Quick questions:',
    chatbotQuickQuestion1: 'Is there any storage limit?',
    chatbotQuickQuestion2: 'Any requirements on content/bandwidth ratio?',
    chatbotQuickQuestion3: 'Usage guidelines for optimal caching?',
    chatbotQuickQuestion4: 'How fast is your system?',
    chatbotQuickQuestion5: 'Will I reduce costs?',
  },
  es: {
    // Navigation
    home: 'Inicio',
    features: 'Características',
    pricing: 'Precios',
    docs: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'Para Aplicaciones Modernas',
    heroDescription: 'Optimiza, transforma y entrega archivos a escala con nuestro CDN inteligente. Construido para desarrolladores que exigen rendimiento.',
    getStarted: 'Comenzar',
    learnMore: 'Saber Más',
    seeHowItWorks: 'Ver Cómo Funciona',
    talkToSales: 'Hablar con Ventas',

    // Features Section
    featuresTitle: 'Todo lo que Necesitas para Entregar Rápido',
    featuresSubtitle: 'Características poderosas diseñadas para hacer la entrega de archivos fácil, rápida y confiable para desarrolladores y sus usuarios.',
    intelligentOptimization: 'Optimización Inteligente',
    intelligentOptimizationDesc: 'Compresión automática, conversión de formato y dimensionamiento. Variantes WebP, AVIF y responsivas generadas al vuelo.',
    globalEdgeNetwork: 'Red Global Edge',
    globalEdgeNetworkDesc: '150+ ubicaciones edge en todo el mundo aseguran que tus archivos se entreguen desde el punto más cercano a tus usuarios.',
    developerFriendlyAPI: 'API Amigable para Desarrolladores',
    developerFriendlyAPIDesc: 'API simple e intuitiva con SDKs completos. Comienza en minutos, no horas de configuración.',
    lowBandwidthCosts: 'Costos Bajos de Ancho de Banda, Sin Costos de Almacenamiento',
    lowBandwidthCostsDesc: 'Sin tarifas ocultas, sin límites de almacenamiento — solo entrega rápida y eficiente a las mejores tarifas de ancho de banda del mercado.',
    twentyFourSevenSupport: 'Soporte 24/7',
    twentyFourSevenSupportDesc: 'Y cuando necesites ayuda, nuestro equipo de soporte 24/7 está aquí para asistirte — en cualquier momento, en cualquier lugar.',
    easyIntegration: 'Integración Fácil',
    easyIntegrationDesc: 'Funciona con cualquier framework o plataforma. Reemplazo directo para almacenamiento de archivos existente sin configuración.',

    //Demo Section
    demoTitle: 'API Simple, Resultados Poderosos, Integración Fácil',
    demoDescription: 'Experimenta el poder de Snapbyte con nuestra API fácil de usar. Transforma y entrega archivos sin esfuerzo.',
    seeDocumentation: 'Ver Documentación',

    // Team Section
    meetOurTeam: 'Conoce a Nuestro Equipo',
    viewProfile: 'Ver Perfil',

    // Customers Section
    customersTitle: 'Clientes Destacados',
    customersSubtitle: 'Vea cómo nuestros clientes están utilizando Snapbyte para optimizar la entrega de archivos.',
    customersBandwidthPerMonth: 'banda ancha/mes',
    customersDataServed: 'datos servidos',

    // CTA
    ctaTitle: '¿Listo para Comenzar?',
    ctaDescription: 'Prueba Snapbyte hoy y experimenta la diferencia que la optimización inteligente de archivos puede hacer en tu aplicación.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    
    // Theme
    lightMode: 'Modo Claro',
    darkMode: 'Modo Oscuro',
    
    // Auth
    signin: 'Iniciar Sesión',
    
    // Pricing Page
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Comienza gratis y escala a medida que creces. Sin tarifas ocultas, sin sorpresas.',
    pricingDescription: 'Precios simples y transparentes para desarrolladores y equipos. Comienza gratis y escala a medida que creces.',
    mostPopular: 'Más Popular',
    perMonth: '/mes',
    perYear: '/año',
    save: 'ahorra',
    
    // About Page
    aboutTitle: 'Acerca de Snapbyte',
    aboutDescription: 'Aprende más sobre nuestra misión de hacer la entrega de archivos rápida y simple para desarrolladores.',
    
    // Contact Page
    contactTitle: 'Contáctanos',
    contactDescription: 'Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte a tener éxito.',
    contactInformation: 'Información de Contacto',
    generalInquiries: 'Consultas Generales',
    generalInquiriesDesc: 'Preguntas sobre Snapbyte o información general',
    technicalSupport: 'Soporte Técnico',
    technicalSupportDesc: '¿Necesitas ayuda con integración o solución de problemas?',
    salesEnterprise: 'Ventas y Empresa',
    salesEnterpriseDesc: '¿Interesado en soluciones empresariales o tienes preguntas sobre precios?',
    phoneSupport: 'Soporte Telefónico',
    phoneSupportDesc: '¿Prefieres hablar? Llámanos',
    ourOffice: 'Nuestra Oficina',
    sendMessage: 'Envíanos un Mensaje',
    nameLabel: 'Nombre',
    emailLabel: 'Correo',
    companyLabel: 'Empresa',
    subjectLabel: 'Asunto',
    messageLabel: 'Mensaje',
    selectSubject: 'Selecciona un asunto',
    generalInquiry: 'Consulta General',
    technicalSupportOption: 'Soporte Técnico',
    salesPricing: 'Ventas y Precios',
    enterpriseSolutions: 'Soluciones Empresariales',
    partnershipOpportunities: 'Oportunidades de Asociación',
    namePlaceholder: 'Tu nombre completo',
    emailPlaceholder: 'tu@correo.com',
    companyPlaceholder: 'Nombre de tu empresa',
    messagePlaceholder: 'Dinos cómo podemos ayudarte...',
    sendMessageButton: 'Enviar Mensaje',
    messageSuccess: '¡Gracias! Tu mensaje ha sido enviado exitosamente.',
    messageError: 'Lo siento, hubo un error enviando tu mensaje. Por favor intenta de nuevo.',
    sending: 'Enviando...',
    
    // FAQ
    faqTitle: 'Preguntas Frecuentes',
    faqQuestion1: '¿Puedo cambiar planes en cualquier momento?',
    faqAnswer1: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios entran en vigencia inmediatamente, y prorratearemos cualquier ajuste de facturación.',
    faqQuestion2: '¿Qué pasa si excedo mis límites?',
    faqAnswer2: 'Te notificaremos antes de que alcances tus límites. Para almacenamiento y ancho de banda, puedes actualizar tu plan o comprar recursos adicionales según sea necesario.',
    faqQuestion3: '¿Ofrecen soluciones empresariales personalizadas?',
    faqAnswer3: '¡Absolutamente! Nuestro plan Enterprise incluye configuraciones personalizadas, soporte dedicado, y puede adaptarse para cumplir requisitos específicos de cumplimiento y rendimiento.',
    faqQuestion4: '¿Hay algún límite o cuota de almacenamiento incluido en el plan?',
    faqAnswer4: 'Con nuestro Plan Pro, no hay límite o cuota de almacenamiento. Puedes cachear tanto datos como necesites. Ten en cuenta: los archivos que no se han descargado en los últimos 30 días serán eliminados automáticamente para optimizar recursos. Sin embargo, el almacenamiento es gratuito y puedes volver a cachear cualquier archivo en cualquier momento sin limitaciones.',
    faqQuestion5: '¿Hay algún requisito o restricción en la proporción entre contenido almacenado y uso de ancho de banda?',
    faqAnswer5: 'No, no hay tales restricciones. Snapbyte es un sistema de caché de datos, y solo cobramos basado en el uso real de ancho de banda. De hecho, alentamos la alta actividad de descarga. Para archivos de bajo acceso, aplicamos la política de purga automática de 30 días mencionada arriba, pero siempre eres libre de solicitar que esos archivos sean cacheados nuevamente en cualquier momento.',
    faqQuestion6: '¿Tienen algunas pautas de uso o mejores prácticas para una eficiencia óptima de caché?',
    faqAnswer6: 'Snapbyte todavía está en su etapa temprana, y aunque nuestra documentación está evolucionando, puedes encontrar información útil en: https://docs.snapbyte.io. También ofrecemos soporte gratuito y pruebas para ayudarte a comenzar. No dudes en contactar directamente vía Telegram a nuestro cofundador: @neokrypt',
    
    // Footer & Legal
    navigation: 'Navegación',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    allRightsReserved: 'Todos los derechos reservados',
    
    // Pricing Plans
    trialPlan: 'Plan de Prueba',
    trialDescription: 'Perfecto para probar las capacidades de caché de Snapbyte',
    trialCacheLifetime: 'Los archivos se almacenan en caché hasta 7 días',
    trialAutoExtension: 'Sin extensión automática',
    trialBandwidthLimit: 'Límite de ancho de banda: 10 TB',
    
    proPlan: 'Plan Pro',
    proDescription: 'Ideal para contenido de alto volumen o crítico en el tiempo',
    proCacheLifetime: 'Los archivos se almacenan en caché hasta 30 días',
    proAutoExtension: 'Extensión automática: Si un archivo se accede frecuentemente, su tiempo de caché se extiende automáticamente',
    proBandwidthPrice: 'Transferencia de datos: $2990 por PB/mes',

    enterprisePlan: 'Plan Enterprise',
    enterpriseDescription: 'Mejor para recursos críticos que requieren disponibilidad a largo plazo',
    enterpriseCacheLifetime: 'Los archivos se almacenan en caché indefinidamente',
    enterpriseAutoExtension: 'Caché persistente garantizado',
    enterpriseStorageFees: 'Tarifa de almacenamiento incluida',
    enterpriseBandwidthPrice: 'Transferencia de datos: $2990 por PB/mes',
    enterpriseStoragePrice: 'Almacenamiento: $7 por TB/mes',
    enterpriseNote: '⚠️ Nota: Aunque los archivos se almacenan permanentemente en caché, Snapbyte es un sistema de caché de datos: no debe usarse como ubicación de almacenamiento primaria o a largo plazo.',
    
    noStorageFees: 'Sin tarifas de almacenamiento',
    contactSales: 'Contactar Ventas',
    getStartedFree: 'Comenzar Gratis',
    
    // Pricing Features
    trialFeature1: 'Tiempo de caché de 7 días',
    trialFeature2: '10 TB de ancho de banda incluido',
    trialFeature3: 'Análisis básicos',
    trialFeature4: 'Soporte de la comunidad',
    
    proFeature1: 'Tiempo de caché de 30 días',
    proFeature2: 'Extensión automática inteligente',
    proFeature3: 'Análisis avanzados',
    proFeature4: 'Soporte prioritario',
    
    enterpriseFeature1: 'Tiempo de caché indefinido',
    enterpriseFeature2: 'Caché persistente garantizado',
    enterpriseFeature3: 'Análisis premium',
    enterpriseFeature4: 'Soporte dedicado 24/7',
    
    // Calculator
    calculator: 'Calculadora de Precios',
    calculatorDescription: 'Calcula tus costos mensuales basado en tu uso de ancho de banda',
    selectUnit: 'Seleccionar unidad',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataAmount: 'Cantidad de datos',
    dataStograge: 'Almacenamiento',
    dataBandwidth: 'Ancho de banda',
    dataTransfer: 'Transferencia de datos',
    monthlyBandwidthCost: 'Costo mensual de ancho de banda',
    monthlyStorageCost: 'Costo mensual de almacenamiento',
    totalMonthlyCost: 'Costo total',
    pbPerMonthDataTransfer: '1 PB/mes Transferencia de Datos',
    tbPerMonthStorage: '1 TB/mes Almacenamiento',

    // Chatbot
    chatbotTitle: 'Asistente de Snapbee',
    chatbotWelcome: '¡Hola! Estoy aquí para ayudarte con cualquier pregunta sobre Snapbyte. ¿Cómo puedo asistirte hoy?',
    chatbotPlaceholder: 'Escribe tu mensaje...',
    chatbotConnecting: 'Conectando...',
    chatbotOnline: 'En línea',
    chatbotOffline: 'Desconectado',
    chatbotError: 'Lo siento, encontré un error. Por favor, inténtalo de nuevo.',
    chatbotSendButton: 'Enviar',
    chatbotQuickQuestionsTitle: 'Preguntas rápidas:',
    chatbotQuickQuestion1: '¿Hay límite de almacenamiento?',
    chatbotQuickQuestion2: '¿Requisitos en la relación contenido/ancho de banda?',
    chatbotQuickQuestion3: '¿Guías para un cacheo óptimo?',
    chatbotQuickQuestion4: '¿Qué tan rápido es su sistema?',
    chatbotQuickQuestion5: '¿Podré reducir costos?',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    docs: 'Documentation',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'Pour Applications Modernes',
    heroDescription: 'Optimisez, transformez et livrez des fichiers à grande échelle avec notre CDN intelligent. Conçu pour les développeurs qui exigent la performance.',
    getStarted: 'Commencer',
    learnMore: 'En Savoir Plus',
    seeHowItWorks: 'Voir Comment Ça Marche',
    talkToSales: 'Parler aux Ventes',
    
    // Features Section
    featuresTitle: 'Tout ce dont Vous Avez Besoin pour Livrer Rapidement',
    featuresSubtitle: 'Fonctionnalités puissantes conçues pour rendre la livraison de fichiers facile, rapide et fiable pour les développeurs et leurs utilisateurs.',
    intelligentOptimization: 'Optimisation Intelligente',
    intelligentOptimizationDesc: 'Compression automatique, conversion de format et dimensionnement. Variantes WebP, AVIF et responsives générées à la volée.',
    globalEdgeNetwork: 'Réseau Edge Global',
    globalEdgeNetworkDesc: '150+ emplacements edge dans le monde entier garantissent que vos fichiers sont livrés depuis le point le plus proche de vos utilisateurs.',
    developerFriendlyAPI: 'API Conviviale pour Développeurs',
    developerFriendlyAPIDesc: 'API simple et intuitive avec des SDKs complets. Commencez en quelques minutes, pas des heures de configuration.',
    lowBandwidthCosts: 'Coûts de Bande Passante Faibles, Aucun Coût de Stockage',
    lowBandwidthCostsDesc: 'Aucuns frais cachés, aucune limite de stockage — juste une livraison rapide et efficace aux meilleurs tarifs de bande passante du marché.',
    twentyFourSevenSupport: 'Support 24/7',
    twentyFourSevenSupportDesc: 'Et quand vous avez besoin d\'aide, notre équipe de support 24/7 est là pour vous assister — à tout moment, n\'importe où.',
    easyIntegration: 'Intégration Facile',
    easyIntegrationDesc: 'Fonctionne avec n\'importe quel framework ou plateforme. Remplacement direct pour le stockage de fichiers existant sans configuration.',

    //Demo Section
    demoTitle: 'API Simple, Résultats Puissants, Intégration Facile',
    demoDescription: 'Découvrez la puissance de Snapbyte avec notre API facile à utiliser. Transformez et livrez des fichiers sans effort.',
    seeDocumentation: 'Voir la Documentation',
    // Team Section
    meetOurTeam: 'Rencontrez Notre Équipe',
    viewProfile: 'Voir le Profil',
    // Customers Section
    customersTitle: 'Clients Présentés',
    customersSubtitle: 'Découvrez comment nos clients utilisent Snapbyte pour optimiser la livraison de fichiers.',
    customersBandwidthPerMonth: 'bande passante/mois',
    customersDataServed: 'données servies',

    // CTA
    ctaTitle: 'Prêt à Commencer?',
    ctaDescription: 'Essayez Snapbyte aujourd\'hui et découvrez la différence que l\'optimisation intelligente de fichiers peut faire pour votre application.',
    startFreeTrial: 'Commencer l\'Essai Gratuit',
    
    // Theme
    lightMode: 'Mode Clair',
    darkMode: 'Mode Sombre',
    
    // Auth
    signin: 'Se Connecter',
    
    // Pricing Page
    pricingTitle: 'Tarification Simple et Transparente',
    pricingSubtitle: 'Commencez gratuitement et évoluez au fur et à mesure. Pas de frais cachés, pas de surprises.',
    pricingDescription: 'Tarification simple et transparente pour les développeurs et les équipes. Commencez gratuitement et évoluez au fur et à mesure.',
    mostPopular: 'Plus Populaire',
    perMonth: '/mois',
    perYear: '/an',
    save: 'économisez',
    
    // About Page
    aboutTitle: 'À Propos de Snapbyte',
    aboutDescription: 'En savoir plus sur notre mission de rendre la livraison de fichiers rapide et simple pour les développeurs.',
    
    // Contact Page
    contactTitle: 'Nous Contacter',
    contactDescription: 'Contactez notre équipe. Nous sommes là pour vous aider à réussir.',
    contactInformation: 'Informations de Contact',
    generalInquiries: 'Demandes Générales',
    generalInquiriesDesc: 'Questions sur Snapbyte ou informations générales',
    technicalSupport: 'Support Technique',
    technicalSupportDesc: 'Besoin d\'aide pour l\'intégration ou le dépannage?',
    salesEnterprise: 'Ventes et Entreprise',
    salesEnterpriseDesc: 'Intéressé par les solutions d\'entreprise ou avez des questions sur les prix?',
    phoneSupport: 'Support Téléphonique',
    phoneSupportDesc: 'Vous préférez parler? Appelez-nous',
    ourOffice: 'Notre Bureau',
    sendMessage: 'Envoyez-nous un Message',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    companyLabel: 'Entreprise',
    subjectLabel: 'Sujet',
    messageLabel: 'Message',
    selectSubject: 'Sélectionnez un sujet',
    generalInquiry: 'Demande Générale',
    technicalSupportOption: 'Support Technique',
    salesPricing: 'Ventes et Prix',
    enterpriseSolutions: 'Solutions d\'Entreprise',
    partnershipOpportunities: 'Opportunités de Partenariat',
    namePlaceholder: 'Votre nom complet',
    emailPlaceholder: 'votre@email.com',
    companyPlaceholder: 'Nom de votre entreprise',
    messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
    sendMessageButton: 'Envoyer le Message',
    messageSuccess: 'Merci! Votre message a été envoyé avec succès.',
    messageError: 'Désolé, il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer.',
    sending: 'Envoi en cours...',
    
    // FAQ
    faqTitle: 'Questions Fréquemment Posées',
    faqQuestion1: 'Puis-je changer de plan à tout moment?',
    faqAnswer1: 'Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet immédiatement, et nous calculerons au prorata tout ajustement de facturation.',
    faqQuestion2: 'Que se passe-t-il si je dépasse mes limites?',
    faqAnswer2: 'Nous vous notifierons avant que vous atteigniez vos limites. Pour le stockage et la bande passante, vous pouvez soit mettre à niveau votre plan soit acheter des ressources supplémentaires selon vos besoins.',
    faqQuestion3: 'Proposez-vous des solutions d\'entreprise personnalisées?',
    faqAnswer3: 'Absolument! Notre plan Enterprise inclut des configurations personnalisées, un support dédié, et peut être adapté pour répondre aux exigences spécifiques de conformité et de performance.',
    faqQuestion4: 'Y a-t-il une limite ou un quota de stockage inclus dans le plan?',
    faqAnswer4: 'Avec notre Plan Pro, il n\'y a pas de limite ou quota de stockage. Vous pouvez mettre en cache autant de données que nécessaire. Veuillez noter: les fichiers qui n\'ont pas été téléchargés au cours des 30 derniers jours seront automatiquement purgés pour optimiser les ressources. Cependant, le stockage est gratuit et vous pouvez remettre en cache n\'importe quel fichier à tout moment sans limitations.',
    faqQuestion5: 'Y a-t-il des exigences ou restrictions sur le ratio entre le contenu stocké et l\'utilisation de la bande passante?',
    faqAnswer5: 'Non, il n\'y a pas de telles restrictions. Snapbyte est un système de mise en cache de données, et nous ne facturons que basé sur l\'utilisation réelle de la bande passante. En fait, nous encourageons une activité de téléchargement élevée. Pour les fichiers peu accessibles, nous appliquons la politique de purge automatique de 30 jours mentionnée ci-dessus, mais vous êtes toujours libre de demander que ces fichiers soient remis en cache à tout moment.',
    faqQuestion6: 'Avez-vous des directives d\'utilisation ou meilleures pratiques pour une efficacité de mise en cache optimale?',
    faqAnswer6: 'Snapbyte en est encore à ses débuts, et bien que notre documentation évolue, vous pouvez trouver des informations utiles à: https://docs.snapbyte.io. Nous offrons également un support gratuit et des tests pour vous aider à commencer. N\'hésitez pas à contacter directement via Telegram notre cofondateur: @neokrypt',
    
    // Footer & Legal
    navigation: 'Navigation',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions de Service',
    allRightsReserved: 'Tous droits réservés',
    
    // Pricing Plans
    trialPlan: 'Plan d\'Essai',
    trialDescription: 'Parfait pour tester les capacités de mise en cache de Snapbyte',
    trialCacheLifetime: 'Les fichiers sont mis en cache jusqu\'à 7 jours',
    trialAutoExtension: 'Pas d\'extension automatique',
    trialBandwidthLimit: 'Limite de bande passante : 10 TB',
    
    proPlan: 'Plan Pro',
    proDescription: 'Idéal pour du contenu à fort volume ou sensible au temps',
    proCacheLifetime: 'Les fichiers sont mis en cache jusqu\'à 30 jours',
    proAutoExtension: 'Extension automatique : Si un fichier est fréquemment accédé, sa durée de cache est automatiquement étendue',
    proBandwidthPrice: 'Bande passante : 2990$ par PB/mois',
    
    enterprisePlan: 'Plan Enterprise',
    enterpriseDescription: 'Meilleur pour les ressources critiques nécessitant une disponibilité à long terme',
    enterpriseCacheLifetime: 'Les fichiers sont mis en cache indéfiniment',
    enterpriseAutoExtension: 'Cache persistant garanti',
    enterpriseStorageFees: 'Frais de stockage inclus',
    enterpriseBandwidthPrice: 'Bande passante : 2990$ par PB/mois',
    enterpriseStoragePrice: 'Stockage : 7$ par TB/mois',
    enterpriseNote: '⚠️ Note : Bien que les fichiers soient mis en cache de manière permanente, Snapbyte est un système de mise en cache de données — il ne doit pas être utilisé comme emplacement de stockage principal ou à long terme.',
    
    noStorageFees: 'Pas de frais de stockage',
    contactSales: 'Contacter les Ventes',
    getStartedFree: 'Commencer Gratuitement',
    
    // Pricing Features
    trialFeature1: 'Durée de cache de 7 jours',
    trialFeature2: '10 TB de bande passante inclus',
    trialFeature3: 'Analyses de base',
    trialFeature4: 'Support communautaire',
    
    proFeature1: 'Durée de cache de 30 jours',
    proFeature2: 'Extension automatique intelligente',
    proFeature3: 'Analyses avancées',
    proFeature4: 'Support prioritaire',
    
    enterpriseFeature1: 'Durée de cache indéfinie',
    enterpriseFeature2: 'Cache persistant garanti',
    enterpriseFeature3: 'Analyses premium',
    enterpriseFeature4: 'Support dédié 24/7',
    
    // Calculator
    calculator: 'Calculateur de Prix',
    calculatorDescription: 'Calculez vos coûts mensuels basés sur votre utilisation de bande passante',
    selectUnit: 'Sélectionner l\'unité',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataStograge: 'Stockage',
    dataBandwidth: 'Bande passante',
    dataTransfer: 'Transfert de données',
    dataAmount: 'Quantité de données',
    monthlyBandwidthCost: 'Coût mensuel de bande passante',
    monthlyStorageCost: 'Coût mensuel de stockage',
    totalMonthlyCost: 'Coût total',
    pbPerMonthDataTransfer: '1 PB/mois Transfert de Données',
    tbPerMonthStorage: '1 TB/mois Stockage',

    // Chatbot
    chatbotTitle: 'Assistant Snapbyte',
    chatbotWelcome: 'Bonjour! Je suis ici pour vous aider avec toutes vos questions sur Snapbyte. Comment puis-je vous assister aujourd\'hui?',
    chatbotPlaceholder: 'Tapez votre message...',
    chatbotConnecting: 'Connexion...',
    chatbotOnline: 'En ligne',
    chatbotOffline: 'Hors ligne',
    chatbotError: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer.',
    chatbotSendButton: 'Envoyer',
    chatbotQuickQuestionsTitle: 'Questions rapides:',
    chatbotQuickQuestion1: 'Y a-t-il une limite de stockage?',
    chatbotQuickQuestion2: 'Exigences sur le ratio contenu/bande passante?',
    chatbotQuickQuestion3: 'Conseils pour un cache optimisé?',
    chatbotQuickQuestion4: 'Quelle est la vitesse de votre système?',
    chatbotQuickQuestion5: 'Puis-je réduire les coûts?',
  },
  de: {
    // Navigation
    home: 'Startseite',
    features: 'Funktionen',
    pricing: 'Preise',
    docs: 'Dokumentation',
    about: 'Über uns',
    blog: 'Blog',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'Für Moderne Anwendungen',
    heroDescription: 'Optimieren, transformieren und übertragen Sie Dateien im großen Maßstab mit unserem intelligenten CDN. Entwickelt für Entwickler, die Leistung verlangen.',
    getStarted: 'Loslegen',
    learnMore: 'Mehr Erfahren',
    seeHowItWorks: 'Sehen Sie, Wie Es Funktioniert',
    talkToSales: 'Kontaktieren Sie den Vertrieb',
    
    // Features Section
    featuresTitle: 'Alles was Sie für Schnelle Übertragung Brauchen',
    featuresSubtitle: 'Leistungsstarke Funktionen, die Datei-Übertragung mühelos, schnell und zuverlässig für Entwickler und ihre Nutzer machen.',
    intelligentOptimization: 'Intelligente Optimierung',
    intelligentOptimizationDesc: 'Automatische Kompression, Formatkonvertierung und Größenanpassung. WebP, AVIF und responsive Varianten werden on-the-fly generiert.',
    globalEdgeNetwork: 'Globales Edge-Netzwerk',
    globalEdgeNetworkDesc: '150+ Edge-Standorte weltweit stellen sicher, dass Ihre Dateien vom nächstgelegenen Punkt zu Ihren Nutzern übertragen werden.',
    developerFriendlyAPI: 'Entwicklerfreundliche API',
    developerFriendlyAPIDesc: 'Einfache, intuitive API mit umfassenden SDKs. In Minuten starten, nicht Stunden der Konfiguration.',
    lowBandwidthCosts: 'Niedrige Bandbreitenkosten, Keine Speicherkosten',
    lowBandwidthCostsDesc: 'Keine versteckten Gebühren, keine Speicherlimits — nur schnelle, effiziente Bereitstellung zu den besten Bandbreitentarifen am Markt.',
    twentyFourSevenSupport: '24/7 Support',
    twentyFourSevenSupportDesc: 'Und wann immer Sie Hilfe benötigen, ist unser 24/7-Support-Team da, um Sie zu unterstützen — jederzeit, überall.',
    easyIntegration: 'Einfache Integration',
    easyIntegrationDesc: 'Funktioniert mit jedem Framework oder Plattform. Drop-in-Ersatz für bestehende Dateispeicherung ohne Konfiguration.',

    //Demo Section
    demoTitle: 'Einfache API, Leistungsstarke Ergebnisse, Einfache Integration',
    demoDescription: 'Erleben Sie die Leistungsfähigkeit von Snapbyte mit unserer benutzerfreundlichen API. Transformieren und übertragen Sie Dateien mühelos.',
    seeDocumentation: 'Dokumentation Ansehen',
    // Team Section
    meetOurTeam: 'Lernen Sie Unser Team Kennen',
    viewProfile: 'Profil Ansehen',
    // Customers Section
    customersTitle: 'Vorstellung unserer Kunden',
    customersSubtitle: 'Sehen Sie, wie unsere Kunden Snapbyte nutzen, um die Datei-Übertragung zu optimieren.',
    customersBandwidthPerMonth: 'bandbreite/pro Monat',
    customersDataServed: 'daten/übertragen',
    
    // CTA
    ctaTitle: 'Bereit Loszulegen?',
    ctaDescription: 'Probieren Sie Snapbyte heute aus und erleben Sie den Unterschied, den intelligente Datei-Optimierung für Ihre Anwendung machen kann.',
    startFreeTrial: 'Kostenlose Testversion Starten',
    
    // Theme
    lightMode: 'Heller Modus',
    darkMode: 'Dunkler Modus',
    
    // Auth
    signin: 'Anmelden',
    
    // Pricing Page
    pricingTitle: 'Einfache, Transparente Preise',
    pricingSubtitle: 'Kostenlos starten und skalieren Sie mit dem Wachstum. Keine versteckten Gebühren, keine Überraschungen.',
    pricingDescription: 'Einfache, transparente Preise für Entwickler und Teams. Kostenlos starten und skalieren Sie mit dem Wachstum.',
    mostPopular: 'Beliebteste',
    perMonth: '/Monat',
    perYear: '/Jahr',
    save: 'sparen',
    
    // About Page
    aboutTitle: 'Über Snapbyte',
    aboutDescription: 'Erfahren Sie mehr über unsere Mission, die Dateiübertragung für Entwickler schnell und einfach zu machen.',
    
    // Contact Page
    contactTitle: 'Kontakt',
    contactDescription: 'Kontaktieren Sie unser Team. Wir sind hier, um Ihnen zum Erfolg zu verhelfen.',
    contactInformation: 'Kontaktinformationen',
    generalInquiries: 'Allgemeine Anfragen',
    generalInquiriesDesc: 'Fragen zu Snapbyte oder allgemeine Informationen',
    technicalSupport: 'Technischer Support',
    technicalSupportDesc: 'Brauchen Sie Hilfe bei der Integration oder Fehlersuche?',
    salesEnterprise: 'Vertrieb & Enterprise',
    salesEnterpriseDesc: 'Interessiert an Enterprise-Lösungen oder haben Sie Fragen zu Preisen?',
    phoneSupport: 'Telefonischer Support',
    phoneSupportDesc: 'Sprechen Sie lieber? Rufen Sie uns an',
    ourOffice: 'Unser Büro',
    sendMessage: 'Senden Sie uns eine Nachricht',
    nameLabel: 'Name',
    emailLabel: 'E-Mail',
    companyLabel: 'Unternehmen',
    subjectLabel: 'Betreff',
    messageLabel: 'Nachricht',
    selectSubject: 'Wählen Sie einen Betreff',
    generalInquiry: 'Allgemeine Anfrage',
    technicalSupportOption: 'Technischer Support',
    salesPricing: 'Vertrieb & Preise',
    enterpriseSolutions: 'Enterprise-Lösungen',
    partnershipOpportunities: 'Partnerschaftsmöglichkeiten',
    namePlaceholder: 'Ihr vollständiger Name',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    companyPlaceholder: 'Name Ihres Unternehmens',
    messagePlaceholder: 'Erzählen Sie uns, wie wir Ihnen helfen können...',
    sendMessageButton: 'Nachricht Senden',
    messageSuccess: 'Danke! Ihre Nachricht wurde erfolgreich gesendet.',
    messageError: 'Entschuldigung, es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.',
    sending: 'Senden...',
    
    // FAQ
    faqTitle: 'Häufig Gestellte Fragen',
    faqQuestion1: 'Kann ich jederzeit den Plan wechseln?',
    faqAnswer1: 'Ja, Sie können Ihren Plan jederzeit aktualisieren oder herabstufen. Änderungen werden sofort wirksam, und wir werden alle Abrechnungsanpassungen anteilig berechnen.',
    faqQuestion2: 'Was passiert, wenn ich meine Limits überschreite?',
    faqAnswer2: 'Wir benachrichtigen Sie, bevor Sie Ihre Limits erreichen. Für Speicher und Bandbreite können Sie entweder Ihren Plan aktualisieren oder zusätzliche Ressourcen nach Bedarf kaufen.',
    faqQuestion3: 'Bieten Sie maßgeschneiderte Unternehmenslösungen an?',
    faqAnswer3: 'Absolut! Unser Enterprise-Plan umfasst benutzerdefinierte Konfigurationen, dedizierten Support und kann an spezifische Compliance- und Leistungsanforderungen angepasst werden.',
    faqQuestion4: 'Gibt es ein Speicherlimit oder eine Speicherquote im Plan?',
    faqAnswer4: 'Mit unserem Pro-Plan gibt es kein Speicherlimit oder -quota. Sie können so viele Daten zwischenspeichern, wie Sie benötigen. Bitte beachten Sie: Dateien, die in den letzten 30 Tagen nicht heruntergeladen wurden, werden automatisch gelöscht, um Ressourcen zu optimieren. Der Speicher ist jedoch kostenlos und Sie können jede Datei jederzeit ohne Einschränkungen erneut zwischenspeichern.',
    faqQuestion5: 'Gibt es Anforderungen oder Beschränkungen bezüglich des Verhältnisses zwischen gespeicherten Inhalten und Bandbreitennutzung?',
    faqAnswer5: 'Nein, es gibt keine solchen Beschränkungen. Snapbyte ist ein Daten-Caching-System, und wir berechnen nur basierend auf der tatsächlichen Bandbreitennutzung. Tatsächlich ermutigen wir zu hoher Download-Aktivität. Für selten genutzte Dateien wenden wir die oben erwähnte 30-Tage-Auto-Purge-Richtlinie an, aber Sie können jederzeit frei verlangen, dass diese Dateien wieder zwischengespeichert werden.',
    faqQuestion6: 'Haben Sie Nutzungsrichtlinien oder bewährte Praktiken für optimale Caching-Effizienz?',
    faqAnswer6: 'Snapbyte befindet sich noch in der frühen Phase, und während sich unsere Dokumentation weiterentwickelt, finden Sie hilfreiche Informationen unter: https://docs.snapbyte.io. Wir bieten auch kostenlosen Support und Tests, um Ihnen den Einstieg zu erleichtern. Zögern Sie nicht, sich direkt über Telegram an unseren Mitgründer zu wenden: @neokrypt',
    
    // Footer & Legal
    navigation: 'Navigation',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    allRightsReserved: 'Alle Rechte vorbehalten',
    
    // Pricing Plans
    trialPlan: 'Testplan',
    trialDescription: 'Perfekt zum Testen der Snapbyte-Cache-Funktionen',
    trialCacheLifetime: 'Dateien werden bis zu 7 Tage zwischengespeichert',
    trialAutoExtension: 'Keine automatische Verlängerung',
    trialBandwidthLimit: 'Bandbreiten-Limit: 10 TB',
    
    proPlan: 'Pro Plan',
    proDescription: 'Ideal für hochvolumige oder zeitkritische Inhalte',
    proCacheLifetime: 'Dateien werden bis zu 30 Tage zwischengespeichert',
    proAutoExtension: 'Automatische Verlängerung: Wenn auf eine Datei häufig zugegriffen wird, wird ihre Cache-Lebensdauer automatisch verlängert',
    proBandwidthPrice: 'Datenübertragung: 2990$ pro PB/Monat',

    enterprisePlan: 'Enterprise Plan',
    enterpriseDescription: 'Am besten für kritische Assets, die langfristige Verfügbarkeit erfordern',
    enterpriseCacheLifetime: 'Dateien werden unbegrenzt zwischengespeichert',
    enterpriseAutoExtension: 'Garantierte persistente Zwischenspeicherung',
    enterpriseStorageFees: 'Speichergebühr inbegriffen',
    enterpriseBandwidthPrice: 'Datenübertragung: 2990$ pro PB/Monat',
    enterpriseStoragePrice: 'Speicher: 7$ pro TB/Monat',
    enterpriseNote: '⚠️ Hinweis: Obwohl Dateien dauerhaft zwischengespeichert werden, ist Snapbyte ein Daten-Cache-System — es sollte nicht als primärer oder langfristiger Speicherort verwendet werden.',
    
    noStorageFees: 'Keine Speichergebühren',
    contactSales: 'Vertrieb Kontaktieren',
    getStartedFree: 'Kostenlos Beginnen',
    
    // Pricing Features
    trialFeature1: '7-Tage Cache-Lebensdauer',
    trialFeature2: '10 TB Bandbreite inklusive',
    trialFeature3: 'Grundlegende Analysen',
    trialFeature4: 'Community-Support',
    
    proFeature1: '30-Tage Cache-Lebensdauer',
    proFeature2: 'Intelligente automatische Verlängerung',
    proFeature3: 'Erweiterte Analysen',
    proFeature4: 'Prioritätssupport',
    
    enterpriseFeature1: 'Unbegrenzte Cache-Lebensdauer',
    enterpriseFeature2: 'Garantierte persistente Zwischenspeicherung',
    enterpriseFeature3: 'Premium-Analysen',
    enterpriseFeature4: '24/7 dedizierter Support',
    
    // Calculator
    calculator: 'Preisrechner',
    calculatorDescription: 'Berechnen Sie Ihre monatlichen Kosten basierend auf Ihrem Bandbreitenverbrauch',
    selectUnit: 'Einheit auswählen',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataStograge: 'Speicher',
    dataBandwidth: 'Bandbreite',
    dataTransfer: 'Datenübertragung',
    dataAmount: 'Datenmenge',
    monthlyBandwidthCost: 'Monatliche Bandbreitenkosten',
    monthlyStorageCost: 'Monatliche Speicherkosten',
    totalMonthlyCost: 'Gesamte Kosten',
    pbPerMonthDataTransfer: '1 PB/Monat Datenübertragung',
    tbPerMonthStorage: '1 TB/Monat Speicher',
    // Chatbot
    chatbotTitle: 'Snapbyte Assistent',
    chatbotWelcome: 'Hallo! Ich bin hier, um Ihnen bei allen Fragen zu Snapbyte zu helfen. Wie kann ich Ihnen heute behilflich sein?',
    chatbotPlaceholder: 'Geben Sie Ihre Nachricht ein...',
    chatbotConnecting: 'Verbinden...',
    chatbotOnline: 'Online',
    chatbotOffline: 'Offline',
    chatbotError: 'Entschuldigung, ich habe einen Fehler festgestellt. Bitte versuchen Sie es erneut.',
    chatbotSendButton: 'Senden',
    chatbotQuickQuestionsTitle: 'Schnelle Fragen:',
    chatbotQuickQuestion1: 'Gibt es ein Speicherlimit?',
    chatbotQuickQuestion2: 'Anforderungen an Inhalt/Bandbreite-Verhältnis?',
    chatbotQuickQuestion3: 'Richtlinien für optimales Caching?',
    chatbotQuickQuestion4: 'Wie schnell ist Ihr System?',
    chatbotQuickQuestion5: 'Kann ich Kosten senken?',
  },
  ja: {
    // Navigation
    home: 'ホーム',
    features: '機能',
    pricing: '料金',
    docs: 'ドキュメント',
    about: '会社概要',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'モダンアプリケーション向け',
    heroDescription: 'インテリジェントCDNでファイルを大規模に最適化、変換、配信。パフォーマンスを求める開発者のために構築。',
    getStarted: '始める',
    learnMore: '詳細を見る',
    seeHowItWorks: '仕組みを見る',
    talkToSales: '営業に相談する',
    
    // Features Section
    featuresTitle: '高速配信に必要なすべて',
    featuresSubtitle: '開発者とそのユーザーにとってファイル配信を簡単、高速、信頼性の高いものにする強力な機能。',
    intelligentOptimization: 'インテリジェント最適化',
    intelligentOptimizationDesc: '自動圧縮、フォーマット変換、サイズ調整。WebP、AVIF、レスポンシブバリアントをオンザフライで生成。',
    globalEdgeNetwork: 'グローバルエッジネットワーク',
    globalEdgeNetworkDesc: '世界150+のエッジロケーションにより、ユーザーに最も近いポイントからファイルを配信し、最大速度を実現。',
    developerFriendlyAPI: '開発者向けAPI',
    developerFriendlyAPIDesc: '包括的なSDKを備えたシンプルで直感的なAPI。設定に何時間もかけることなく、数分で開始。',
    lowBandwidthCosts: '低帯域幅コスト、ストレージコストなし',
    lowBandwidthCostsDesc: '隠れた料金なし、ストレージ制限なし — 市場で最高の帯域幅料金で迅速かつ効率的な配信のみ。',
    twentyFourSevenSupport: '24/7サポート',
    twentyFourSevenSupportDesc: 'ヘルプが必要なときはいつでも、24/7サポートチームがお手伝いします — いつでも、どこでも。',
    easyIntegration: '簡単な統合',
    easyIntegrationDesc: 'あらゆるフレームワークやプラットフォームで動作。既存ファイルストレージの設定なしのドロップイン置換。',

    //Demo Section
    demoTitle: 'シンプルなAPI、強力な結果、簡単な統合',
    demoDescription: '使いやすいAPIでSnapbyteのパワーを体験してください。ファイルを簡単に変換、配信できます。',
    seeDocumentation: 'ドキュメントを見る',
    // Team Section
    meetOurTeam: '私たちのチームに会う',
    viewProfile: 'プロフィールを見る',
    // Customers Section
    customersTitle: '注目の顧客',
    customersSubtitle: 'Snapbyteを使用してファイル配信を最適化している顧客の事例を見てみましょう。',
    customersBandwidthPerMonth: '月間帯域幅',
    customersDataServed: '配信データ量',
    
    // CTA
    ctaTitle: '始める準備はできましたか？',
    ctaDescription: 'Snapbyteを今日試して、インテリジェントファイル最適化があなたのアプリケーションにもたらす違いを体験してください。',
    startFreeTrial: '無料トライアル開始',
    
    // Theme
    lightMode: 'ライトモード',
    darkMode: 'ダークモード',
    
    // Auth
    signin: 'サインイン',
    
    // Pricing Page
    pricingTitle: 'シンプルで透明な価格設定',
    pricingSubtitle: '無料で始めて、成長に合わせてスケール。隠れた料金や驚きはありません。',
    pricingDescription: '開発者とチーム向けのシンプルで透明な価格設定。無料で始めて、成長に合わせてスケール。',
    mostPopular: '最も人気',
    perMonth: '/月',
    perYear: '/年',
    save: '節約',
    
    // About Page
    aboutTitle: 'Snapbyteについて',
    aboutDescription: '開発者向けのファイル配信を高速かつシンプルにするという私たちのミッションについて詳しく学んでください。',
    
    // Contact Page
    contactTitle: 'お問い合わせ',
    contactDescription: '私たちのチームにお気軽にお問い合わせください。お客様の成功をサポートいたします。',
    contactInformation: '連絡先情報',
    generalInquiries: '一般的なお問い合わせ',
    generalInquiriesDesc: 'Snapbyteに関する質問や一般的な情報',
    technicalSupport: '技術サポート',
    technicalSupportDesc: '統合やトラブルシューティングのサポートが必要ですか？',
    salesEnterprise: '営業とエンタープライズ',
    salesEnterpriseDesc: 'エンタープライズソリューションに興味がありますか？価格について質問がありますか？',
    phoneSupport: '電話サポート',
    phoneSupportDesc: 'お電話でのサポートをご希望ですか？お電話ください',
    ourOffice: '私たちのオフィス',
    sendMessage: 'メッセージを送信',
    nameLabel: '名前',
    emailLabel: 'メール',
    companyLabel: '会社',
    subjectLabel: '件名',
    messageLabel: 'メッセージ',
    selectSubject: '件名を選択',
    generalInquiry: '一般的なお問い合わせ',
    technicalSupportOption: '技術サポート',
    salesPricing: '営業と価格',
    enterpriseSolutions: 'エンタープライズソリューション',
    partnershipOpportunities: 'パートナーシップの機会',
    namePlaceholder: 'あなたのフルネーム',
    emailPlaceholder: 'あなたのメールアドレス',
    companyPlaceholder: 'あなたの会社名',
    messagePlaceholder: 'どのようにお手伝いできるか教えてください...',
    sendMessageButton: 'メッセージを送信',
    messageSuccess: 'ありがとうございます！メッセージは正常に送信されました。',
    messageError: '申し訳ありませんが、メッセージの送信中にエラーが発生しました。もう一度お試しください。',
    sending: '送信中...',
    
    // FAQ
    faqTitle: 'よくある質問',
    faqQuestion1: 'プランはいつでも変更できますか？',
    faqAnswer1: 'はい、いつでもプランをアップグレードまたはダウングレードできます。変更は即座に有効になり、請求調整は日割り計算されます。',
    faqQuestion2: '制限を超えた場合はどうなりますか？',
    faqAnswer2: '制限に達する前に通知いたします。ストレージと帯域幅については、プランをアップグレードするか、必要に応じて追加リソースを購入できます。',
    faqQuestion3: 'カスタムエンタープライズソリューションは提供していますか？',
    faqAnswer3: 'もちろんです！Enterpriseプランには、カスタム設定、専用サポートが含まれ、特定のコンプライアンスとパフォーマンス要件に合わせて調整できます。',
    faqQuestion4: 'プランにストレージ制限やクォータは含まれていますか？',
    faqAnswer4: 'Proプランでは、ストレージ制限やクォータはありません。必要なだけデータをキャッシュできます。注意：過去30日間にダウンロードされていないファイルは、リソースを最適化するために自動的にパージされます。ただし、ストレージは無料で、いつでも制限なくファイルを再キャッシュできます。',
    faqQuestion5: '保存されたコンテンツと帯域幅使用量の比率に関する要件や制限はありますか？',
    faqAnswer5: 'いいえ、そのような制限はありません。Snapbyteはデータキャッシングシステムであり、実際の帯域幅使用量のみに基づいて課金します。実際、高いダウンロード活動を推奨しています。アクセス頻度の低いファイルには上記の30日自動パージポリシーを適用しますが、いつでもそれらのファイルを再度キャッシュするよう要求することができます。',
    faqQuestion6: '最適なキャッシング効率のための使用ガイドラインやベストプラクティスはありますか？',
    faqAnswer6: 'Snapbyteはまだ初期段階にあり、ドキュメントは進化していますが、https://docs.snapbyte.io で有用な情報を見つけることができます。また、開始をサポートするための無料サポートとテストも提供しています。共同創設者にTelegramで直接連絡することをお気軽にどうぞ：@neokrypt',
    
    // Footer & Legal
    navigation: 'ナビゲーション',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    allRightsReserved: '全著作権所有',
    
    // Pricing Plans
    trialPlan: 'トライアルプラン',
    trialDescription: 'Snapbyteのキャッシュ機能をテストするのに最適',
    trialCacheLifetime: 'ファイルは最大7日間キャッシュされます',
    trialAutoExtension: '自動延長なし',
    trialBandwidthLimit: '帯域幅制限：10 TB',
    
    proPlan: 'プロプラン',
    proDescription: '大容量または時間が重要なコンテンツに最適',
    proCacheLifetime: 'ファイルは最大30日間キャッシュされます',
    proAutoExtension: '自動延長：ファイルが頻繁にアクセスされる場合、キャッシュの寿命が自動的に延長されます',
    proBandwidthPrice: 'データ転送：月額PB当たり$2990',

    enterprisePlan: 'エンタープライズプラン',
    enterpriseDescription: '長期的な可用性が必要な重要なアセットに最適',
    enterpriseCacheLifetime: 'ファイルは無期限にキャッシュされます',
    enterpriseAutoExtension: '永続的キャッシュ保証',
    enterpriseStorageFees: 'ストレージ料金込み',
    enterpriseBandwidthPrice: 'データ転送：月額PB当たり$2990',
    enterpriseStoragePrice: 'ストレージ：月額TB当たり$7',
    enterpriseNote: '⚠️ 注意：ファイルは永続的にキャッシュされますが、Snapbyteはデータキャッシュシステムです — プライマリまたは長期ストレージ場所として使用すべきではありません。',
    
    noStorageFees: 'ストレージ料金なし',
    contactSales: '営業に連絡',
    getStartedFree: '無料で始める',
    
    // Pricing Features
    trialFeature1: '7日間のキャッシュ寿命',
    trialFeature2: '10 TBの帯域幅が含まれています',
    trialFeature3: '基本分析',
    trialFeature4: 'コミュニティサポート',
    
    proFeature1: '30日間のキャッシュ寿命',
    proFeature2: 'インテリジェント自動延長',
    proFeature3: '高度な分析',
    proFeature4: '優先サポート',
    
    enterpriseFeature1: '無期限のキャッシュ寿命',
    enterpriseFeature2: '永続的キャッシュ保証',
    enterpriseFeature3: 'プレミアム分析',
    enterpriseFeature4: '24/7専用サポート',
    
    // Calculator
    calculator: '料金計算機',
    calculatorDescription: '帯域幅使用量に基づいて月額費用を計算します',
    selectUnit: '単位を選択',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataStograge: 'ストレージ',
    dataBandwidth: '帯域幅',
    dataAmount: 'データ量',
    dataTransfer: 'データ転送',
    monthlyBandwidthCost: '月額帯域幅コスト',
    monthlyStorageCost: '月額ストレージコスト',
    totalMonthlyCost: '月額総コスト',
    pbPerMonthDataTransfer: '1 PB/月のデータ転送',
    tbPerMonthStorage: '1 TB/月のストレージ',
    // Chatbot
    chatbotTitle: 'Snapbyteアシスタント',
    chatbotWelcome: 'こんにちは！Snapbyteに関する質問をお手伝いします。今日はどのようにお手伝いできますか？',
    chatbotPlaceholder: 'メッセージを入力...',
    chatbotConnecting: '接続中...',
    chatbotOnline: 'オンライン',
    chatbotOffline: 'オフライン',
    chatbotError: '申し訳ありませんが、エラーが発生しました。もう一度お試しください。',
    chatbotSendButton: '送信',
    chatbotQuickQuestionsTitle: 'よくある質問:',
    chatbotQuickQuestion1: 'ストレージ制限はありますか？',
    chatbotQuickQuestion2: 'コンテンツ/帯域幅比の要件は？',
    chatbotQuickQuestion3: '最適なキャッシュのガイドライン？',
    chatbotQuickQuestion4: 'システムの速度はどの程度？',
    chatbotQuickQuestion5: 'コスト削減できますか？',
  },
  zh: {
    // Navigation
    home: '首页',
    features: '功能',
    pricing: '定价',
    docs: '文档',
    about: '关于我们',
    blog: '博客',
    contact: '联系我们',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: '为现代应用而生',
    heroDescription: '使用我们的智能CDN大规模优化、转换和传输文件。专为追求性能的开发者打造。',
    getStarted: '开始使用',
    learnMore: '了解更多',
    seeHowItWorks: '查看工作原理',
    talkToSales: '联系销售',
    
    // Features Section
    featuresTitle: '快速传输所需的一切',
    featuresSubtitle: '强大的功能，旨在为开发者及其用户提供轻松、快速、可靠的文件传输。',
    intelligentOptimization: '智能优化',
    intelligentOptimizationDesc: '自动压缩、格式转换和尺寸调整。实时生成WebP、AVIF和响应式变体。',
    globalEdgeNetwork: '全球边缘网络',
    globalEdgeNetworkDesc: '全球150+边缘位置确保从离用户最近的点传输文件，实现最大速度。',
    developerFriendlyAPI: '开发者友好的API',
    developerFriendlyAPIDesc: '简单直观的API，配备全面的SDK。几分钟内开始，无需数小时配置。',
    lowBandwidthCosts: '低带宽成本，无存储成本',
    lowBandwidthCostsDesc: '无隐藏费用，无存储限制 — 仅以市场上最优带宽费率提供快速高效的传输。',
    twentyFourSevenSupport: '24/7支持',
    twentyFourSevenSupportDesc: '无论何时您需要帮助，我们的24/7支持团队都在这里为您提供协助 — 随时随地。',
    easyIntegration: '轻松集成',
    easyIntegrationDesc: '适用于任何框架或平台。现有文件存储的即插即用替代品，无需配置。',

    //Demo Section
    demoTitle: '简单的API，强大的结果，轻松集成',
    demoDescription: '通过我们易于使用的API体验Snapbyte的强大功能 。轻松转换和传输文件。',
    seeDocumentation: '查看文档',
    // Team Section
    meetOurTeam: '认识我们的团队',
    viewProfile: '查看个人资料',
    // Customers Section
    customersTitle: '客户案例',
    customersSubtitle: '看看我们的客户如何使用Snapbyte优化文件传输。',
    customersBandwidthPerMonth: '每月带宽',
    customersDataServed: '传输数据量',
    
    // CTA
    ctaTitle: '准备开始了吗？',
    ctaDescription: '今天就试用Snapbyte，体验智能文件优化为您的应用程序带来的不同。',
    startFreeTrial: '开始免费试用',
    
    // Theme
    lightMode: '浅色模式',
    darkMode: '深色模式',
    
    // Auth
    signin: '登录',
    
    // Pricing Page
    pricingTitle: '简单透明的定价',
    pricingSubtitle: '免费开始，随着增长而扩展。没有隐藏费用，没有意外。',
    pricingDescription: '为开发者和团队提供简单透明的定价。免费开始，随着增长而扩展。',
    mostPopular: '最受欢迎',
    perMonth: '/月',
    perYear: '/年',
    save: '节省',
    
    // About Page
    aboutTitle: '关于Snapbyte',
    aboutDescription: '了解更多关于我们让开发者文件传输快速简单的使命。',
    
    // Contact Page
    contactTitle: '联系我们',
    contactDescription: '与我们的团队取得联系。我们在这里帮助您成功。',
    contactInformation: '联系信息',
    generalInquiries: '一般咨询',
    generalInquiriesDesc: '关于Snapbyte的常见问题或一般信息',
    technicalSupport: '技术支持',
    technicalSupportDesc: '需要集成或故障排除的帮助吗？',
    salesEnterprise: '销售与企业',
    salesEnterpriseDesc: '对企业解决方案感兴趣或有定价问题？',
    phoneSupport: '电话支持',
    phoneSupportDesc: '更喜欢通话？给我们打电话',
    ourOffice: '我们的办公室',
    sendMessage: '发送消息',
    nameLabel: '姓名',
    emailLabel: '电子邮件',
    companyLabel: '公司',
    subjectLabel: '主题',
    messageLabel: '消息',
    selectSubject: '选择主题',
    generalInquiry: '一般咨询',
    technicalSupportOption: '技术支持',
    salesPricing: '销售与定价',
    enterpriseSolutions: '企业解决方案',
    partnershipOpportunities: '合作机会',
    namePlaceholder: '您的全名',
    emailPlaceholder: '您的电子邮件地址',
    companyPlaceholder: '您的公司名称',
    messagePlaceholder: '告诉我们如何帮助您...',
    sendMessageButton: '发送消息',
    messageSuccess: '谢谢！您的消息已成功发送。',
    messageError: '抱歉，发送消息时发生错误。请再试一次。',
    sending: '发送中...',
    
    // FAQ
    faqTitle: '常见问题',
    faqQuestion1: '我可以随时更改计划吗？',
    faqAnswer1: '是的，您可以随时升级或降级您的计划。更改立即生效，我们将按比例调整任何计费调整。',
    faqQuestion2: '如果我超过限制会发生什么？',
    faqAnswer2: '我们会在您达到限制之前通知您。对于存储和带宽，您可以升级您的计划或根据需要购买额外资源。',
    faqQuestion3: '你们提供定制的企业解决方案吗？',
    faqAnswer3: '当然！我们的企业计划包括自定义配置、专用支持，并可以根据特定的合规性和性能要求进行定制。',
    faqQuestion4: '计划中是否包含存储限制或配额？',
    faqAnswer4: '使用我们的专业计划，没有存储限制或配额。您可以缓存所需的任意数量数据。请注意：过去30天内未下载的文件将被自动清除以优化资源。但是，存储是免费的，您可以随时无限制地重新缓存任何文件。',
    faqQuestion5: '对于存储内容和带宽使用之间的比例是否有任何要求或限制？',
    faqAnswer5: '不，没有此类限制。Snapbyte是一个数据缓存系统，我们仅根据实际带宽使用量收费。实际上，我们鼓励高下载活动。对于低访问文件，我们应用上述30天自动清除政策，但您始终可以自由要求重新缓存这些文件。',
    faqQuestion6: '您是否有使用指南或最佳实践来实现最佳缓存效率？',
    faqAnswer6: 'Snapbyte仍处于早期阶段，虽然我们的文档在不断发展，但您可以在https://docs.snapbyte.io找到有用的信息。我们还提供免费支持和测试来帮助您入门。欢迎通过Telegram直接联系我们的联合创始人：@neokrypt',
    
    // Footer & Legal
    navigation: '导航',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    allRightsReserved: '版权所有',
    
    // Pricing Plans
    trialPlan: '试用计划',
    trialDescription: '测试Snapbyte缓存功能的理想选择',
    trialCacheLifetime: '文件缓存时间最长7天',
    trialAutoExtension: '无自动延期',
    trialBandwidthLimit: '带宽限制：10 TB',
    
    proPlan: '专业计划',
    proDescription: '适合高容量或时间敏感的内容',
    proCacheLifetime: '文件缓存时间最长30天',
    proAutoExtension: '自动延期：如果文件被频繁访问，其缓存生命周期会自动延长',
    proBandwidthPrice: '带宽：每PB每月$2990',
    
    enterprisePlan: '企业计划',
    enterpriseDescription: '适合需要长期可用性的关键资产',
    enterpriseCacheLifetime: '文件无限期缓存',
    enterpriseAutoExtension: '保证持久缓存',
    enterpriseStorageFees: '存储费用已包含',
    enterpriseBandwidthPrice: '带宽：每PB每月$2990',
    enterpriseStoragePrice: '存储：每TB每月$7',
    enterpriseNote: '⚠️ 注意：虽然文件被永久缓存，但Snapbyte是一个数据缓存系统——不应用作主要或长期存储位置。',
    
    noStorageFees: '无存储费用',
    contactSales: '联系销售',
    getStartedFree: '免费开始',
    
    // Pricing Features
    trialFeature1: '7天缓存生命周期',
    trialFeature2: '包含10 TB带宽',
    trialFeature3: '基础分析',
    trialFeature4: '社区支持',
    
    proFeature1: '30天缓存生命周期',
    proFeature2: '智能自动延期',
    proFeature3: '高级分析',
    proFeature4: '优先支持',
    
    enterpriseFeature1: '无限缓存生命周期',
    enterpriseFeature2: '保证持久缓存',
    enterpriseFeature3: '高级分析',
    enterpriseFeature4: '24/7专用支持',
    
    // Calculator
    calculator: '价格计算器',
    calculatorDescription: '根据您的带宽使用量计算月度费用',
    selectUnit: '选择单位',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataStograge: '存储',
    dataBandwidth: '带宽',
    dataAmount: '数据量',
    dataTransfer: '数据传输',
    monthlyBandwidthCost: '月度带宽费用',
    monthlyStorageCost: '月度存储费用',
    totalMonthlyCost: '月度总费用',
    pbPerMonthDataTransfer: '每月1 PB数据传输',
    tbPerMonthStorage: '每月1 TB存储',
    // Chatbot
    chatbotTitle: 'Snapbyte助手',
    chatbotWelcome: '您好！我在这里帮助您解答有关Snapbyte的任何问题。今天我能为您做些什么？',
    chatbotPlaceholder: '输入您的消息...',
    chatbotConnecting: '连接中...',
    chatbotOnline: '在线',
    chatbotOffline: '离线',
    chatbotError: '抱歉，我遇到了一个错误。请再试一次。',
    chatbotSendButton: '发送',
    chatbotQuickQuestionsTitle: '常见问题：',
    chatbotQuickQuestion1: '有存储限制吗？',
    chatbotQuickQuestion2: '内容/带宽比例有要求吗？',
    chatbotQuickQuestion3: '最佳缓存使用指南？',
    chatbotQuickQuestion4: '你们的系统有多快？',
    chatbotQuickQuestion5: '我能降低成本吗？',
  },
  vi: {
    // Navigation
    home: 'Trang chủ',
    features: 'Tính năng',
    pricing: 'Bảng giá',
    docs: 'Tài liệu',
    about: 'Về chúng tôi',
    blog: 'Blog',
    contact: 'Liên hệ',
    
    // Hero Section
    heroTitle: 'Snapbyte.',
    heroSubtitle: 'Hệ thống Lưu trữ đệm Tệp & Đối tượng.',
    heroDescription: 'Tối ưu hóa, chuyển đổi và phân phối tệp ở quy mô lớn với CDN thông minh của chúng tôi. Dành cho các nhà phát triển yêu cầu hiệu suất cao.',
    getStarted: 'Bắt đầu',
    learnMore: 'Tìm hiểu thêm',
    seeHowItWorks: 'Xem cách hoạt động',
    talkToSales: 'Liên hệ với bộ phận bán hàng',
    
    // Features Section
    featuresTitle: 'Mọi thứ bạn cần để phân phối nhanh chóng',
    featuresSubtitle: 'Các tính năng mạnh mẽ được thiết kế để giúp việc phân phối tệp trở nên dễ dàng, nhanh chóng và đáng tin cậy cho các nhà phát triển và người dùng của họ.',
    intelligentOptimization: 'Tối ưu hóa thông minh',
    intelligentOptimizationDesc: 'Tự động nén, chuyển đổi định dạng và thay đổi kích thước. Các biến thể WebP, AVIF và responsive được tạo ra tức thì.',
    globalEdgeNetwork: 'Mạng lưới biên toàn cầu',
    globalEdgeNetworkDesc: 'Hơn 150 vị trí biên trên toàn thế giới đảm bảo các tệp của bạn được phân phối từ điểm gần nhất đến người dùng để đạt tốc độ tối đa.',
    developerFriendlyAPI: 'API thân thiện với nhà phát triển',
    developerFriendlyAPIDesc: 'API đơn giản, trực quan với các SDK toàn diện. Bắt đầu trong vài phút, không mất hàng giờ cấu hình.',
    lowBandwidthCosts: 'Chi phí băng thông thấp, không tốn phí lưu trữ',
    lowBandwidthCostsDesc: 'Không có phí ẩn, không giới hạn dung lượng lưu trữ — chỉ có phân phối nhanh chóng, hiệu quả với mức giá băng thông tốt nhất trên thị trường.',
    twentyFourSevenSupport: 'Hỗ trợ 24/7',
    twentyFourSevenSupportDesc: 'Và bất cứ khi nào bạn cần giúp đỡ, đội ngũ hỗ trợ 24/7 của chúng tôi luôn sẵn sàng hỗ trợ bạn — mọi lúc, mọi nơi.',
    easyIntegration: 'Tích hợp dễ dàng',
    easyIntegrationDesc: 'Hoạt động với mọi framework hoặc nền tảng. Thay thế thả vào cho bộ nhớ tệp hiện có mà không cần cấu hình.',

    //Demo Section
    demoTitle: 'API đơn giản, Kết quả mạnh mẽ, Tích hợp dễ dàng',
    demoDescription: 'Trải nghiệm sức mạnh của Snapbyte với API thân thiện với người dùng. Chuyển đổi và phân phối tệp một cách dễ dàng.',
    seeDocumentation: 'Xem tài liệu',
    // Team Section
    meetOurTeam: 'Gặp gỡ đội ngũ của chúng tôi',
    viewProfile: 'Xem hồ sơ',
    // Customers Section
    customersTitle: 'Khách hàng tiêu biểu',
    customersSubtitle: 'Xem cách khách hàng của chúng tôi sử dụng Snapbyte để tối ưu hóa việc phân phối tệp.',
    customersBandwidthPerMonth: 'băng thông/tháng',
    customersDataServed: 'dữ liệu đã phục vụ',

    // CTA
    ctaTitle: 'Sẵn sàng để bắt đầu?',
    ctaDescription: 'Hãy dùng thử Snapbyte ngay hôm nay và trải nghiệm sự khác biệt mà việc tối ưu hóa tệp thông minh có thể mang lại cho ứng dụng của bạn.',
    startFreeTrial: 'Bắt đầu dùng thử miễn phí',
    
    // Theme
    lightMode: 'Chế độ Sáng',
    darkMode: 'Chế độ Tối',
    
    // Auth
    signin: 'Đăng nhập',
    
    // Pricing Page
    pricingTitle: 'Bảng giá đơn giản, minh bạch',
    pricingSubtitle: 'Bắt đầu miễn phí và mở rộng quy mô khi bạn phát triển. Không có phí ẩn, không có bất ngờ.',
    pricingDescription: 'Bảng giá đơn giản, minh bạch cho các nhà phát triển và đội nhóm. Bắt đầu miễn phí và mở rộng quy mô khi bạn phát triển.',
    mostPopular: 'Phổ biến nhất',
    perMonth: '/tháng',
    perYear: '/năm',
    save: 'tiết kiệm',
    
    // About Page
    aboutTitle: 'Về Snapbyte',
    aboutDescription: 'Tìm hiểu thêm về sứ mệnh của chúng tôi là giúp việc phân phối tệp nhanh chóng và đơn giản cho các nhà phát triển.',
    
    // Contact Page
    contactTitle: 'Liên hệ với chúng tôi',
    contactDescription: 'Hãy liên hệ với đội ngũ của chúng tôi. Chúng tôi ở đây để giúp bạn thành công.',
    contactInformation: 'Thông tin liên hệ',
    generalInquiries: 'Yêu cầu chung',
    generalInquiriesDesc: 'Các câu hỏi về Snapbyte hoặc thông tin chung',
    technicalSupport: 'Hỗ trợ kỹ thuật',
    technicalSupportDesc: 'Cần trợ giúp về tích hợp hoặc khắc phục sự cố?',
    salesEnterprise: 'Kinh doanh & Doanh nghiệp',
    salesEnterpriseDesc: 'Quan tâm đến các giải pháp cho doanh nghiệp hoặc có câu hỏi về giá cả?',
    phoneSupport: 'Hỗ trợ qua điện thoại',
    phoneSupportDesc: 'Thích trò chuyện? Hãy gọi cho chúng tôi',
    ourOffice: 'Văn phòng của chúng tôi',
    sendMessage: 'Gửi tin nhắn cho chúng tôi',
    nameLabel: 'Họ và tên',
    emailLabel: 'Email',
    companyLabel: 'Công ty',
    subjectLabel: 'Chủ đề',
    messageLabel: 'Nội dung',
    selectSubject: 'Chọn một chủ đề',
    generalInquiry: 'Yêu cầu chung',
    technicalSupportOption: 'Hỗ trợ kỹ thuật',
    salesPricing: 'Kinh doanh & Bảng giá',
    enterpriseSolutions: 'Giải pháp doanh nghiệp',
    partnershipOpportunities: 'Cơ hội hợp tác',
    namePlaceholder: 'Họ và tên đầy đủ của bạn',
    emailPlaceholder: 'email@cuaban.com',
    companyPlaceholder: 'Tên công ty của bạn',
    messagePlaceholder: 'Hãy cho chúng tôi biết chúng tôi có thể giúp bạn như thế nào...',
    sendMessageButton: 'Gửi tin nhắn',
    messageSuccess: 'Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.',
    messageError: 'Xin lỗi, đã có lỗi xảy ra khi gửi tin nhắn của bạn. Vui lòng thử lại.',
    sending: 'Đang gửi...',
    
    // FAQ
    faqTitle: 'Các câu hỏi thường gặp',
    faqQuestion1: 'Tôi có thể thay đổi gói bất cứ lúc nào không?',
    faqAnswer1: 'Có, bạn có thể nâng cấp hoặc hạ cấp gói của mình bất cứ lúc nào. Các thay đổi có hiệu lực ngay lập tức và chúng tôi sẽ tính toán lại mọi điều chỉnh thanh toán theo tỷ lệ.',
    faqQuestion2: 'Điều gì xảy ra nếu tôi vượt quá giới hạn của mình?',
    faqAnswer2: 'Chúng tôi sẽ thông báo cho bạn trước khi bạn đạt đến giới hạn. Đối với dung lượng lưu trữ và băng thông, bạn có thể nâng cấp gói của mình hoặc mua thêm tài nguyên khi cần.',
    faqQuestion3: 'Bạn có cung cấp các giải pháp doanh nghiệp tùy chỉnh không?',
    faqAnswer3: 'Chắc chắn rồi! Gói Doanh nghiệp của chúng tôi bao gồm các cấu hình tùy chỉnh, hỗ trợ chuyên biệt và có thể được điều chỉnh để đáp ứng các yêu cầu cụ thể về tuân thủ và hiệu suất.',
    faqQuestion4: 'Có giới hạn lưu trữ hoặc hạn ngạch nào được bao gồm trong gói không?',
    faqAnswer4: 'Với Gói Pro của chúng tôi, không có giới hạn lưu trữ hoặc hạn ngạch. Bạn có thể cache bao nhiêu dữ liệu tùy ý. Lưu ý: các tệp không được tải xuống trong 30 ngày qua sẽ tự động bị xóa để tối ưu hóa tài nguyên. Tuy nhiên, lưu trữ là miễn phí và bạn có thể cache lại bất kỳ tệp nào bất cứ lúc nào mà không có giới hạn.',
    faqQuestion5: 'Có yêu cầu hoặc hạn chế nào về tỷ lệ giữa nội dung được lưu trữ và việc sử dụng băng thông không?',
    faqAnswer5: 'Không, không có các hạn chế như vậy. Snapbyte là một hệ thống cache dữ liệu, và chúng tôi chỉ tính phí dựa trên việc sử dụng băng thông thực tế. Thực tế, chúng tôi khuyến khích hoạt động tải xuống cao. Đối với các tệp ít được truy cập, chúng tôi áp dụng chính sách tự động xóa 30 ngày được đề cập ở trên, nhưng bạn luôn có thể yêu cầu các tệp đó được cache lại bất cứ lúc nào.',
    faqQuestion6: 'Bạn có hướng dẫn sử dụng hoặc thực hành tốt nhất nào để đạt hiệu quả cache tối ưu không?',
    faqAnswer6: 'Snapbyte vẫn đang trong giai đoạn đầu, và mặc dù tài liệu của chúng tôi đang phát triển, bạn có thể tìm thấy thông tin hữu ích tại: https://docs.snapbyte.io. Chúng tôi cũng cung cấp hỗ trợ miễn phí và thử nghiệm để giúp bạn bắt đầu. Hãy liên hệ trực tiếp qua Telegram với đồng sáng lập của chúng tôi: @neokrypt',
    
    // Footer & Legal
    navigation: 'Điều hướng',
    privacyPolicy: 'Chính sách bảo mật',
    termsOfService: 'Điều khoản dịch vụ',
    allRightsReserved: 'Bảo lưu mọi quyền',
    
    // Pricing Plans
    trialPlan: 'Gói Dùng thử',
    trialDescription: 'Hoàn hảo để thử nghiệm khả năng lưu trữ đệm của Snapbyte',
    trialCacheLifetime: 'Tệp được lưu vào bộ nhớ đệm lên đến 7 ngày',
    trialAutoExtension: 'Không tự động gia hạn',
    trialBandwidthLimit: 'Giới hạn băng thông: 10 TB',
    
    proPlan: 'Gói Pro',
    proDescription: 'Lý tưởng cho nội dung có lưu lượng truy cập cao hoặc nhạy cảm về thời gian',
    proCacheLifetime: 'Tệp được lưu vào bộ nhớ đệm lên đến 30 ngày',
    proAutoExtension: 'Tự động gia hạn: Nếu một tệp được truy cập thường xuyên, thời gian tồn tại trong bộ đệm của nó sẽ được tự động gia hạn',
    proBandwidthPrice: 'Băng thông: $2990 mỗi PB/tháng',

    enterprisePlan: 'Gói Doanh nghiệp',
    enterpriseDescription: 'Tốt nhất cho các tài sản quan trọng yêu cầu tính sẵn sàng dài hạn',
    enterpriseCacheLifetime: 'Tệp được lưu vào bộ nhớ đệm vô thời hạn',
    enterpriseAutoExtension: 'Đảm bảo lưu trữ đệm liên tục',
    enterpriseStorageFees: 'Phí lưu trữ đã bao gồm',
    enterpriseBandwidthPrice: 'Băng thông: $2990 mỗi PB/tháng',
    enterpriseStoragePrice: 'Lưu trữ: $7 mỗi TB/tháng',
    enterpriseNote: '⚠️ Lưu ý: Mặc dù các tệp được lưu vào bộ nhớ đệm vĩnh viễn, Snapbyte là một hệ thống lưu trữ đệm dữ liệu — không nên sử dụng nó làm nơi lưu trữ chính hoặc lâu dài.',
    
    noStorageFees: 'Không có phí lưu trữ',
    contactSales: 'Liên hệ bộ phận kinh doanh',
    getStartedFree: 'Bắt đầu miễn phí',
    
    // Pricing Features
    trialFeature1: 'Thời gian lưu trữ đệm 7 ngày',
    trialFeature2: 'Bao gồm 10 TB băng thông',
    trialFeature3: 'Phân tích cơ bản',
    trialFeature4: 'Hỗ trợ cộng đồng',
    
    proFeature1: 'Thời gian lưu trữ đệm 30 ngày',
    proFeature2: 'Tự động gia hạn thông minh',
    proFeature3: 'Phân tích nâng cao',
    proFeature4: 'Hỗ trợ ưu tiên',
    
    enterpriseFeature1: 'Thời gian lưu trữ đệm vô thời hạn',
    enterpriseFeature2: 'Đảm bảo lưu trữ đệm liên tục',
    enterpriseFeature3: 'Phân tích cao cấp',
    enterpriseFeature4: 'Hỗ trợ chuyên biệt 24/7',
    
    // Calculator
    calculator: 'Máy tính giá',
    calculatorDescription: 'Tính toán chi phí hàng tháng dựa trên việc sử dụng băng thông của bạn',
    selectUnit: 'Chọn đơn vị',
    gb: 'GB',
    tb: 'TB',
    pb: 'PB',
    dataStograge: 'Lưu trữ',
    dataBandwidth: 'Băng thông',
    dataAmount: 'Lượng dữ liệu',
    dataTransfer: 'Chuyển dữ liệu',
    monthlyBandwidthCost: 'Chi phí băng thông hàng tháng',
    monthlyStorageCost: 'Chi phí lưu trữ hàng tháng',
    totalMonthlyCost: 'Tổng chi phí',
    pbPerMonthDataTransfer: '1 PB chuyển dữ liệu/tháng',
    tbPerMonthStorage: '1 TB lưu trữ/tháng',
    // Chatbot
    chatbotTitle: 'Trợ lý Snapbyte',
    chatbotWelcome: 'Xin chào! Tôi ở đây để giúp bạn với bất kỳ câu hỏi nào về Snapbyte. Hôm nay tôi có thể giúp gì cho bạn?',
    chatbotPlaceholder: 'Nhập tin nhắn của bạn...',
    chatbotConnecting: 'Đang kết nối...',
    chatbotOnline: 'Trực tuyến',
    chatbotOffline: 'Ngoại tuyến',
    chatbotError: 'Xin lỗi, tôi đã gặp lỗi. Vui lòng thử lại.',
    chatbotSendButton: 'Gửi',
    chatbotQuickQuestionsTitle: 'Câu hỏi nhanh:',
    chatbotQuickQuestion1: 'Có giới hạn lưu trữ không?',
    chatbotQuickQuestion2: 'Yêu cầu về tỷ lệ nội dung/băng thông?',
    chatbotQuickQuestion3: 'Hướng dẫn cache tối ưu?',
    chatbotQuickQuestion4: 'Hệ thống nhanh như thế nào?',
    chatbotQuickQuestion5: 'Tôi có thể giảm chi phí không?',
  }
};

export function getTranslation(language: string): Translation {
  return translations[language] || translations.en;
}
