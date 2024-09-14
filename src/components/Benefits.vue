<template>
  <div id="benefits" class="benefits">
    <div class="container benefits__wrap">
      <div class="benefits__desc">
        <h2 class="benefits__desc-title">New crypto finance app</h2>
        <p class="benefits__desc-text">
          Connect all your crypto wallets and exchanges in one place for a
          consolidated view of your holdings.
        </p>
      </div>
      <ul class="benefits__cards">
        <BenefitsCardsItem
          v-for="link in benefitsStore.cardsLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import BenefitsCardsItem from "./BenefitsCardsItem.vue";
import { useBenefits } from "../store/benefits.js";

let benefitsStore = useBenefits();
</script>
