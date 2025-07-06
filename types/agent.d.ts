export interface Agent {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Beta" | "Archived";
  category: string;
  pricingModel: "Free Tier" | "Subscription" | "Per-Use";
}
