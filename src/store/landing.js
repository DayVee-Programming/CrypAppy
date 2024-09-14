import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useLanding = defineStore({
  id: "landing",
  state: () => ({
    contentLeftLinks: [
      {
        id: v4(),
        title: "Effortless Portfolio Tracking",
        text: "Connect all your crypto wallets and exchanges in one place for a consolidated view of your holdings.",
      },
      {
        id: v4(),
        title: "Real-Time Market Data",
        text: "Stay on top of the market with live prices, charts, and market capitalization data for thousands of cryptocurrencies.",
      },
      {
        id: v4(),
        title: "Advanced Analytics",
        text: "Gain valuable insights into your portfolio performance with detailed charts, historical price data, and comprehensive reports.",
      },
    ],
    contentRightLinks: [
      {
        id: v4(),
        title: "Price Alerts",
        text: "Never miss a trading opportunity with customizable price alerts that notify you when your favorite coins reach a specific price point.",
      },
      {
        id: v4(),
        title: "News and Research",
        text: "Stay informed with the latest crypto news, market analysis, and educational resources to make smarter investment decisions.",
      },
      {
        id: v4(),
        title: "Secure and Reliable",
        text: "Our app prioritizes your security with industry-leading encryption and data protection measures.",
      },
    ],
  }),
});
