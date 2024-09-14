import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useBenefits = defineStore({
  id: "benefits",
  state: () => ({
    cardsLinks: [
      {
        id: v4(),
        title: "Save Time & Effort",
        text: "Eliminate the need to manage multiple platforms and spreadsheets.",
      },
      {
        id: v4(),
        title: "Invest with Confidence",
        text: "Make informed decisions based on real-time data and insightful analytics.",
      },
      {
        id: v4(),
        title: "Maximize Returns",
        text: "Identify profitable opportunities and optimize your portfolio performance.",
      },
    ],
  }),
});
