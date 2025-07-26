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
  trialBandwidth: string;
  
  proPlan: string;
  proDescription: string;
  proCacheLifetime: string;
  proAutoExtension: string;
  
  enterprisePlan: string;
  enterpriseDescription: string;
  enterpriseCacheLifetime: string;
  enterpriseAutoExtension: string;
  enterpriseStorageFees: string;
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
  
  // Bandwidth Pricing
  bandwidthPricing: string;
  bandwidthDescription: string;
  bandwidthFeature1: string;
  bandwidthFeature2: string;
  bandwidthFeature3: string;
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
    trialBandwidth: 'Bandwidth: 10 TB',
    
    proPlan: 'Pro Plan',
    proDescription: 'Ideal for high-volume or time-sensitive content',
    proCacheLifetime: 'Files are cached for up to 30 days',
    proAutoExtension: 'Auto-extension: If a file is frequently accessed, its cache lifetime is automatically extended',
    
    enterprisePlan: 'Enterprise Plan',
    enterpriseDescription: 'Best for critical assets requiring long-term availability',
    enterpriseCacheLifetime: 'Files are cached indefinitely',
    enterpriseAutoExtension: 'Guaranteed persistent caching',
    enterpriseStorageFees: 'Storage fee: $7 per TB per month',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 Bandwidth Pricing',
    bandwidthDescription: 'We charge based on the bandwidth delivered from Snapbyte\'s cache to your users.',
    bandwidthFeature1: 'Bandwidth pricing is customized per customer',
    bandwidthFeature2: 'Depends on usage volume, region, and delivery model',
    bandwidthFeature3: 'Contact us for personalized pricing',
  },
  es: {
    // Navigation
    home: 'Inicio',
    features: 'Características',
    pricing: 'Precios',
    about: 'Acerca de',
    blog: 'Blog',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Entrega de Archivos Ultra Rápida',
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
    trialBandwidth: 'Ancho de banda: 10 TB',
    
    proPlan: 'Plan Pro',
    proDescription: 'Ideal para contenido de alto volumen o crítico en el tiempo',
    proCacheLifetime: 'Los archivos se almacenan en caché hasta 30 días',
    proAutoExtension: 'Extensión automática: Si un archivo se accede frecuentemente, su tiempo de caché se extiende automáticamente',
    
    enterprisePlan: 'Plan Enterprise',
    enterpriseDescription: 'Mejor para recursos críticos que requieren disponibilidad a largo plazo',
    enterpriseCacheLifetime: 'Los archivos se almacenan en caché indefinidamente',
    enterpriseAutoExtension: 'Caché persistente garantizado',
    enterpriseStorageFees: 'Tarifa de almacenamiento: $7 por TB por mes',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 Precios de Ancho de Banda',
    bandwidthDescription: 'Cobramos basado en el ancho de banda entregado desde el caché de Snapbyte a tus usuarios.',
    bandwidthFeature1: 'Los precios de ancho de banda se personalizan por cliente',
    bandwidthFeature2: 'Depende del volumen de uso, región y modelo de entrega',
    bandwidthFeature3: 'Contáctanos para precios personalizados',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Livraison de Fichiers Ultra-Rapide',
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
    trialBandwidth: 'Bande passante : 10 TB',
    
    proPlan: 'Plan Pro',
    proDescription: 'Idéal pour du contenu à fort volume ou sensible au temps',
    proCacheLifetime: 'Les fichiers sont mis en cache jusqu\'à 30 jours',
    proAutoExtension: 'Extension automatique : Si un fichier est fréquemment accédé, sa durée de cache est automatiquement étendue',
    
    enterprisePlan: 'Plan Enterprise',
    enterpriseDescription: 'Meilleur pour les ressources critiques nécessitant une disponibilité à long terme',
    enterpriseCacheLifetime: 'Les fichiers sont mis en cache indéfiniment',
    enterpriseAutoExtension: 'Cache persistant garanti',
    enterpriseStorageFees: 'Frais de stockage : 7$ par TB par mois',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 Tarification de la Bande Passante',
    bandwidthDescription: 'Nous facturons selon la bande passante délivrée du cache de Snapbyte à vos utilisateurs.',
    bandwidthFeature1: 'La tarification de la bande passante est personnalisée par client',
    bandwidthFeature2: 'Dépend du volume d\'utilisation, de la région et du modèle de livraison',
    bandwidthFeature3: 'Contactez-nous pour une tarification personnalisée',
  },
  de: {
    // Navigation
    home: 'Startseite',
    features: 'Funktionen',
    pricing: 'Preise',
    about: 'Über uns',
    blog: 'Blog',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Blitzschnelle Datei-Übertragung',
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
    trialBandwidth: 'Bandbreite: 10 TB',
    
    proPlan: 'Pro Plan',
    proDescription: 'Ideal für hochvolumige oder zeitkritische Inhalte',
    proCacheLifetime: 'Dateien werden bis zu 30 Tage zwischengespeichert',
    proAutoExtension: 'Automatische Verlängerung: Wenn auf eine Datei häufig zugegriffen wird, wird ihre Cache-Lebensdauer automatisch verlängert',
    
    enterprisePlan: 'Enterprise Plan',
    enterpriseDescription: 'Am besten für kritische Assets, die langfristige Verfügbarkeit erfordern',
    enterpriseCacheLifetime: 'Dateien werden unbegrenzt zwischengespeichert',
    enterpriseAutoExtension: 'Garantierte persistente Zwischenspeicherung',
    enterpriseStorageFees: 'Speichergebühr: 7$ pro TB pro Monat',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 Bandbreiten-Preise',
    bandwidthDescription: 'Wir berechnen basierend auf der Bandbreite, die vom Snapbyte-Cache an Ihre Benutzer geliefert wird.',
    bandwidthFeature1: 'Bandbreiten-Preise werden pro Kunde angepasst',
    bandwidthFeature2: 'Abhängig von Nutzungsvolumen, Region und Bereitstellungsmodell',
    bandwidthFeature3: 'Kontaktieren Sie uns für personalisierte Preise',
  },
  ja: {
    // Navigation
    home: 'ホーム',
    features: '機能',
    pricing: '料金',
    about: '会社概要',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    
    // Hero Section
    heroTitle: '超高速ファイル配信',
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
    trialBandwidth: '帯域幅：10 TB',
    
    proPlan: 'プロプラン',
    proDescription: '大容量または時間が重要なコンテンツに最適',
    proCacheLifetime: 'ファイルは最大30日間キャッシュされます',
    proAutoExtension: '自動延長：ファイルが頻繁にアクセスされる場合、キャッシュの寿命が自動的に延長されます',
    
    enterprisePlan: 'エンタープライズプラン',
    enterpriseDescription: '長期的な可用性が必要な重要なアセットに最適',
    enterpriseCacheLifetime: 'ファイルは無期限にキャッシュされます',
    enterpriseAutoExtension: '永続的キャッシュ保証',
    enterpriseStorageFees: 'ストレージ料金：月額TB当たり$7',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 帯域幅料金',
    bandwidthDescription: 'Snapbyteのキャッシュからユーザーに配信される帯域幅に基づいて課金します。',
    bandwidthFeature1: '帯域幅料金は顧客ごとにカスタマイズされます',
    bandwidthFeature2: '使用量、地域、配信モデルに依存します',
    bandwidthFeature3: 'パーソナライズされた料金についてお問い合わせください',
  },
  zh: {
    // Navigation
    home: '首页',
    features: '功能',
    pricing: '定价',
    about: '关于我们',
    blog: '博客',
    contact: '联系我们',
    
    // Hero Section
    heroTitle: '闪电般的文件传输',
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
    trialBandwidth: '带宽：10 TB',
    
    proPlan: '专业计划',
    proDescription: '适合高容量或时间敏感的内容',
    proCacheLifetime: '文件缓存时间最长30天',
    proAutoExtension: '自动延期：如果文件被频繁访问，其缓存生命周期会自动延长',
    
    enterprisePlan: '企业计划',
    enterpriseDescription: '适合需要长期可用性的关键资产',
    enterpriseCacheLifetime: '文件无限期缓存',
    enterpriseAutoExtension: '保证持久缓存',
    enterpriseStorageFees: '存储费用：每TB每月$7',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 带宽定价',
    bandwidthDescription: '我们根据从Snapbyte缓存向您的用户传输的带宽收费。',
    bandwidthFeature1: '带宽定价按客户定制',
    bandwidthFeature2: '取决于使用量、地区和交付模式',
    bandwidthFeature3: '联系我们获取个性化定价',
  },
  vi: {
    // Navigation
    home: 'Trang chủ',
    features: 'Tính năng',
    pricing: 'Bảng giá',
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
    trialBandwidth: 'Băng thông: 10 TB',
    
    proPlan: 'Gói Pro',
    proDescription: 'Lý tưởng cho nội dung có lưu lượng truy cập cao hoặc nhạy cảm về thời gian',
    proCacheLifetime: 'Tệp được lưu vào bộ nhớ đệm lên đến 30 ngày',
    proAutoExtension: 'Tự động gia hạn: Nếu một tệp được truy cập thường xuyên, thời gian tồn tại trong bộ đệm của nó sẽ được tự động gia hạn',
    
    enterprisePlan: 'Gói Doanh nghiệp',
    enterpriseDescription: 'Tốt nhất cho các tài sản quan trọng yêu cầu tính sẵn sàng dài hạn',
    enterpriseCacheLifetime: 'Tệp được lưu vào bộ nhớ đệm vô thời hạn',
    enterpriseAutoExtension: 'Đảm bảo lưu trữ đệm liên tục',
    enterpriseStorageFees: 'Phí lưu trữ: $7 mỗi TB mỗi tháng',
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
    
    // Bandwidth Pricing
    bandwidthPricing: '🌐 Bảng giá băng thông',
    bandwidthDescription: 'Chúng tôi tính phí dựa trên băng thông được phân phối từ bộ nhớ đệm của Snapbyte đến người dùng của bạn.',
    bandwidthFeature1: 'Giá băng thông được tùy chỉnh cho mỗi khách hàng',
    bandwidthFeature2: 'Phụ thuộc vào khối lượng sử dụng, khu vực và mô hình phân phối',
    bandwidthFeature3: 'Liên hệ với chúng tôi để nhận báo giá cá nhân hóa'
  }
};

export function getTranslation(language: string): Translation {
  return translations[language] || translations.en;
}
