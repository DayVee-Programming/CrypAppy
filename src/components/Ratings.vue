<template>
  <div id="ratings" class="ratings">
    <div class="container ratings__wrap" data-aos="fade-up">
      <div class="ratings__desc">
        <p class="ratings__desc-text">the best crypto App</p>
        <h3 class="ratings__desc-title">
          Backed by the biggest names in the industry
        </h3>
      </div>
      <ul class="ratings__sponsors">
        <RatingsSponsorsItem
          v-for="link in ratingsStore.sponsorsLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
      <ul class="ratings__cards">
        <RatingsCardsItem
          v-for="link in ratingsStore.cardsLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRatings } from "../store/ratings.js";
import RatingsCardsItem from "./RatingsCardsItem.vue";
import RatingsSponsorsItem from "./RatingsSponsorsItem.vue";
import RatingsImgsItem from "./RatingsImgsItem.vue";
import { images } from "../utils/images.js";

let ratingsStore = useRatings();
</script>
