import { defineStore } from "pinia";
import { v4 } from "uuid";
import { images } from "../utils/images";

export const useFooter = defineStore({
  id: "footer",
  state: () => ({
    socialsLinks: [
      {
        id: v4(),
        imgSrc: images.facebook,
      },
      {
        id: v4(),
        imgSrc: images.twitter,
      },
      {
        id: v4(),
        imgSrc: images.instagram,
      },
    ],
    infoLinks: [
      {
        id: v4(),
        text: `Crafted by Marion & Co.`,
      },
      {
        id: v4(),
        text: `Powered by Webflow`,
      },
      {
        id: v4(),
        text: `More templates`,
      },
      {
        id: v4(),
        text: `License`,
      },
      {
        id: v4(),
        text: `Style Guide`,
      },
    ],
  }),
});
