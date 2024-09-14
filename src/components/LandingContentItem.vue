<template>
  <li class="landing__features-content-item">
    <a class="landing__features-content-item-link" :class="type">
      <img
        :src="images.square"
        alt=""
        class="landing__features-content-item-link-img"
      />
      <h3 class="landing__features-content-item-link-title">
        {{ link.title }}
      </h3>
      <p class="landing__features-content-item-link-text">
        {{ link.text }}
      </p>
    </a>
  </li>
</template>

<script setup>
import { images } from "../utils/images.js";

const props = defineProps({
  link: {
    typeof: Object,
  },
  type: {
    typeof: String,
  },
});
</script>
