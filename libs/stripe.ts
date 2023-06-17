import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KET ?? "",
  {
    apiVersion: "2022-11-15",
    appInfo: {
      name: "Nextjs Spotify Clone",
      version: "0.1.0"
    }
  }
);