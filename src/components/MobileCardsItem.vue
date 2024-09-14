<template>
  <li class="mobile__main-cards-item">
    <a class="mobile__main-cards-item-link">
      <div class="mobile__main-cards-item-link-pic">
        <img
          :src="images.benefit"
          alt=""
          class="mobile__main-cards-item-link-pic-img"
        />
      </div>
      <h4 class="mobile__main-cards-item-link-title">{{ link.title }}</h4>
      <p class="mobile__main-cards-item-link-text">{{ link.text }}</p>
    </a>
  </li>
</template>

<script setup>
import { images } from "../utils/images.js";

const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
