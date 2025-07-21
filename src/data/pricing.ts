export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for trying out Snapbyte and small projects",
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      "1GB storage",
      "10GB bandwidth per month",
      "Basic CDN caching",
      "Standard support",
      "API access"
    ],
    limitations: [
      "Limited to 1,000 requests per day",
      "Community support only"
    ],
    cta: "Get Started Free"
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing applications and development teams",
    price: {
      monthly: 29,
      yearly: 290
    },
    features: [
      "100GB storage",
      "1TB bandwidth per month",
      "Advanced CDN caching",
      "Priority support",
      "Full API access",
      "Custom domains",
      "Analytics dashboard",
      "Edge locations worldwide"
    ],
    popular: true,
    cta: "Start Pro Trial"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale applications with custom requirements",
    price: {
      monthly: 299,
      yearly: 2990
    },
    features: [
      "Unlimited storage",
      "Unlimited bandwidth",
      "Advanced CDN caching",
      "24/7 dedicated support",
      "Full API access",
      "Custom domains",
      "Advanced analytics",
      "Global edge locations",
      "Custom SLA",
      "Dedicated account manager",
      "On-premise options"
    ],
    cta: "Contact Sales"
  }
];
