import { defineStore } from "pinia";
import { v4 } from "uuid";

export const usePricing = defineStore({
  id: "pricing",
  state: () => ({
    cardsLinks: [
      {
        id: v4(),
        title: `Essentail`,
        price: `$12/mo`,
        text: ` Portfolio tracking up to 5 coins, live market data up to 30 coins,
        basic historical data & charts.`,
      },
      {
        id: v4(),
        title: `Pro`,
        price: `$56/mo`,
        text: `Portfolio tracking up to 10 coins, live market data up to 100 coins,
        historical data & charts with extra features.`,
      },
      {
        id: v4(),
        title: `Premium`,
        price: `$79/mo`,
        text: `Unlimited portfolio tracking, unlimited live market data, historical
        data & charts with advanced features.`,
      },
    ],
  }),
});
