<template>
  <div id="pricing" class="pricing">
    <div class="container pricing__wrap">
      <div class="pricing__desc">
        <p class="pricing__desc-tag">Our pricing</p>
        <h2 class="pricing__desc-title">
          Choose the plan that's right for your financial needs
        </h2>
        <p class="pricing__desc-text">
          Here are some options for the crypto portfolio app pricing structure:
        </p>
      </div>
      <div class="pricing__bill">
        <div class="pricing__bill-content">
          <p class="pricing__bill-content-text">Billed monthly</p>
          <a class="pricing__bill-content-toggle">
            <div class="pricing__bill-content-toggle-switcher"></div>
          </a>
        </div>
        <div class="pricing__bill-desc">
          <p class="pricing__bill-desc-text">Billed annually</p>
          <p class="pricing__bill-desc-discount">Save 20%</p>
        </div>
      </div>
      <ul class="pricing__cards">
        <PricingCardsItem
          v-for="link in pricingStore.cardsLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import PricingCardsItem from "./PricingCardsItem.vue";
import { usePricing } from "../store/pricing.js";

const pricingStore = usePricing();
</script>
