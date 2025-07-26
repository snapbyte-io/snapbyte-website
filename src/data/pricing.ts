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
  bandwidthPrice?: number; // Price per GB per month
  bandwidthPriceKey?: string;
  storagePrice?: number; // Price per GB per month for storage
  storagePriceKey?: string;
  specialNote?: string;
  specialNoteKey?: string;
  popular?: boolean;
  ctaKey: string;
  cta: string;
  showCalculator?: boolean;
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
    bandwidthKey: "trialBandwidthLimit",
    bandwidth: "10 TB bandwidth limit",
    ctaKey: "getStartedFree",
    cta: "Get Started Free",
    showCalculator: false,
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
    bandwidthPriceKey: "proBandwidthPrice",
    bandwidthPrice: 0.003, // $0.003 per GB per month
    popular: true,
    ctaKey: "getStartedFree",
    cta: "Get Started Free",
    showCalculator: true,
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
    storageFees: "Storage fee included",
    bandwidthPriceKey: "enterpriseBandwidthPrice",
    bandwidthPrice: 0.003, // $0.003 per GB per month
    storagePriceKey: "enterpriseStoragePrice",
    storagePrice: 0.007, // $0.007 per GB per month
    specialNoteKey: "enterpriseNote",
    specialNote: "⚠️ Note: Although files are cached permanently, Snapbyte is a data caching system — it should not be used as a primary or long-term storage location.",
    ctaKey: "contactSales",
    cta: "Contact Sales", 
    showCalculator: true,
    featuresKeys: ["enterpriseFeature1", "enterpriseFeature2", "enterpriseFeature3", "enterpriseFeature4"],
    features: [
      "Indefinite cache lifetime",
      "Guaranteed persistent caching", 
      "Premium analytics",
      "24/7 dedicated support"
    ]
  }
];
