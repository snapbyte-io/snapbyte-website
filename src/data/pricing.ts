export interface PricingPlan {
  id: string;
  nameKey: string;
  name: string;
  descriptionKey: string;
  description: string;
  icon: string;
  cacheLifetime: string;
  cacheLifetimeKey: string;
  autoExtension: string;
  autoExtensionKey: string;
  storageFees: string;
  storageFeesKey: string;
  bandwidth?: string;
  bandwidthKey?: string;
  specialNote?: string;
  specialNoteKey?: string;
  popular?: boolean;
  ctaKey: string;
  cta: string;
  features: string[];
  featuresKeys: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "trial",
    nameKey: "trialPlan",
    name: "Trial Plan",
    descriptionKey: "trialDescription", 
    description: "Perfect for testing Snapbyte's caching capabilities",
    icon: "🌱",
    cacheLifetimeKey: "trialCacheLifetime",
    cacheLifetime: "Files are cached for up to 7 days",
    autoExtensionKey: "trialAutoExtension",
    autoExtension: "No auto-extension",
    storageFeesKey: "noStorageFees",
    storageFees: "No storage fees",
    bandwidthKey: "trialBandwidth",
    bandwidth: "Bandwidth: 10 TB",
    ctaKey: "getStartedFree",
    cta: "Get Started Free",
    featuresKeys: ["trialFeature1", "trialFeature2", "trialFeature3", "trialFeature4"],
    features: [
      "7-day cache lifetime",
      "10 TB bandwidth included",
      "Basic analytics",
      "Community support"
    ]
  },
  {
    id: "pro",
    nameKey: "proPlan",
    name: "Pro Plan", 
    descriptionKey: "proDescription",
    description: "Ideal for high-volume or time-sensitive content",
    icon: "🔹",
    cacheLifetimeKey: "proCacheLifetime",
    cacheLifetime: "Files are cached for up to 30 days",
    autoExtensionKey: "proAutoExtension", 
    autoExtension: "Auto-extension: If a file is frequently accessed, its cache lifetime is automatically extended",
    storageFeesKey: "noStorageFees",
    storageFees: "No storage fees",
    popular: true,
    ctaKey: "contactSales",
    cta: "Contact Sales",
    featuresKeys: ["proFeature1", "proFeature2", "proFeature3", "proFeature4"],
    features: [
      "30-day cache lifetime",
      "Intelligent auto-extension",
      "Advanced analytics",
      "Priority support"
    ]
  },
  {
    id: "enterprise",
    nameKey: "enterprisePlan",
    name: "Enterprise Plan",
    descriptionKey: "enterpriseDescription", 
    description: "Best for critical assets requiring long-term availability",
    icon: "🔸",
    cacheLifetimeKey: "enterpriseCacheLifetime",
    cacheLifetime: "Files are cached indefinitely",
    autoExtensionKey: "enterpriseAutoExtension",
    autoExtension: "Guaranteed persistent caching",
    storageFeesKey: "enterpriseStorageFees", 
    storageFees: "Storage fee: $7 per TB per month",
    specialNoteKey: "enterpriseNote",
    specialNote: "⚠️ Note: Although files are cached permanently, Snapbyte is a data caching system — it should not be used as a primary or long-term storage location.",
    ctaKey: "contactSales",
    cta: "Contact Sales", 
    featuresKeys: ["enterpriseFeature1", "enterpriseFeature2", "enterpriseFeature3", "enterpriseFeature4"],
    features: [
      "Indefinite cache lifetime",
      "Guaranteed persistent caching", 
      "Premium analytics",
      "24/7 dedicated support"
    ]
  }
];

export interface BandwidthPricing {
  titleKey: string;
  title: string;
  descriptionKey: string;
  description: string;
  featuresKeys: string[];
  features: string[];
}

export const bandwidthPricing: BandwidthPricing = {
  titleKey: "bandwidthPricing",
  title: "🌐 Bandwidth Pricing",
  descriptionKey: "bandwidthDescription",
  description: "We charge based on the bandwidth delivered from Snapbyte's cache to your users.",
  featuresKeys: ["bandwidthFeature1", "bandwidthFeature2", "bandwidthFeature3"],
  features: [
    "Bandwidth pricing is customized per customer",
    "Depends on usage volume, region, and delivery model", 
    "Contact us for personalized pricing"
  ]
};
