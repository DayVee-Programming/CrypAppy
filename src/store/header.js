import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useHeader = defineStore({
  id: "header",
  state: () => ({
    menuLinks: [
      {
        id: v4(),
        href: "#benefits",
        text: "Benefits",
      },
      {
        id: v4(),
        href: "#landing",
        text: "Features",
      },
      {
        id: v4(),
        href: "#ratings",
        text: "Reviews",
      },
      {
        id: v4(),
        href: "#pricing",
        text: "Pricing",
      },
      {
        id: v4(),
        href: "#footer",
        text: "Contact",
      },
    ],
  }),
});
