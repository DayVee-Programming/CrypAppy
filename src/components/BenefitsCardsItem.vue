<template>
  <li class="benefits__cards-item">
    <a class="benefits__cards-item-link">
      <div class="benefits__cards-item-link-pic">
        <img
          :src="images.benefit"
          alt=""
          class="benefits__cards-item-link-pic-img"
        />
      </div>
      <h3 class="benefits__cards-item-link-title">{{ link.title }}</h3>
      <p class="benefits__cards-item-link-text">
        {{ link.text }}
      </p>
      <div class="benefits__cards-item-link-more">
        <p class="benefits__cards-item-link-more-text">Learn more</p>
        <svg
          class="benefits__cards-item-link-more-icon"
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 7H21V10H1V7Z" fill="white" />
          <path d="M13 0H22V10H13V0Z" fill="white" />
          <path d="M13 6H22V16H13V6Z" fill="white" />
        </svg>
      </div>
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
