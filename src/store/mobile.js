import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useMobile = defineStore({
  id: "mobile",
  state: () => ({
    cardsLinks: [
      {
        id: v4(),
        title: "Experienced Traders",
        text: "Make data-driven decisions and optimize your trading strategies.",
      },
      {
        id: v4(),
        title: "Long-Term Investors",
        text: "Track your portfolio performance and make informed investment decisions for the future.",
      },
    ],
  }),
});
