import { defineStore } from "pinia";
import { v4 } from "uuid";
import { images } from "../utils/images";

export const useBanner = defineStore({
  id: "banner",
  state: () => ({
    appsLinks: [
      {
        id: v4(),
        imgSrc: images.appStore,
      },
      {
        id: v4(),
        imgSrc: images.googlePlay,
      },
    ],
  }),
});
