import { defineStore } from "pinia";
import { v4 } from "uuid";
import { images } from "../utils/images";

export const useRatings = defineStore({
  id: "ratings",
  state: () => ({
    sponsorsLinks: [
      {
        id: v4(),
        imgSrc: images.lightAI,
      },
      {
        id: v4(),
        imgSrc: images.foxHub,
      },
      {
        id: v4(),
        imgSrc: images.hexLab,
      },
      {
        id: v4(),
        imgSrc: images.codeLab,
      },
      {
        id: v4(),
        imgSrc: images.zooTV,
      },
    ],
    cardsLinks: [
      {
        id: v4(),
        starsItemsAmount: 5,
        text: `"This app is a game-changer! I used to struggle keeping track of my
        crypto holdings across different wallets and exchanges. This app solves
        that problem perfectly. It's easy to use, visually appealing, and the
        live data and analytics are incredibly helpful. Highly recommend for
        anyone serious about crypto!"`,
        profile: {
          imgSrc: images.ratings1,
          title: `Jason Renolds`,
          text: `Verified Customer`,
        },
      },
      {
        id: v4(),
        starsItemsAmount: 5,
        text: `"Finally, a crypto portfolio app that's user-friendly and
        feature-rich! I love the clean interface and the ability to set
        price alerts. Never miss a trading opportunity again! The news
        section is also a great resource for staying informed about the
        latest crypto trends. 5 stars!"`,
        profile: {
          imgSrc: images.ratings2,
          title: `Sarah Genning`,
          text: `Verified Customer`,
        },
      },
      {
        id: v4(),
        starsItemsAmount: 5,
        text: `"This app has been a lifesaver for my long-term crypto investments.
        I can easily track my portfolio performance over time and see how my
        different coins are doing. The historical data and charts are super
        helpful for making informed investment decisions. Plus, the security
        features give me peace of mind."`,
        profile: {
          imgSrc: images.ratings3,
          title: `Lori Basic`,
          text: `Verified Customer`,
        },
      },
      {
        id: v4(),
        starsItemsAmount: 5,
        text: `"Obsessed with this new crypto portfolio app! It's the perfect tool
        for crypto newbies like me. The app provides clear explanations and
        educational resources that are helping me learn the ropes. Feeling
        much more confident about my crypto investments now!"`,
        profile: {
          imgSrc: images.ratings4,
          title: `James Razz`,
          text: `Verified Customer`,
        },
      },
    ],
  }),
});
