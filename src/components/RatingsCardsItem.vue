<template>
  <li class="ratings__cards-item">
    <a class="ratings__cards-item-link">
      <ul class="ratings__cards-item-link-stars">
        <RatingsImgsItem
          v-for="img in props.link.starsItemsAmount"
          :key="Math.random()"
        />
      </ul>
      <p class="ratings__cards-item-link-text">
        {{ props.link.text }}
      </p>
      <div class="ratings__cards-item-link-profile">
        <img
          :src="props.link.profile.imgSrc"
          alt=""
          class="ratings__cards-item-link-profile-img"
        />
        <div class="ratings__cards-item-link-profile-desc">
          <h4 class="ratings__cards-item-link-profile-desc-title">
            {{ props.link.profile.title }}
          </h4>
          <p class="ratings__cards-item-link-profile-desc-text">
            {{ props.link.profile.text }}
          </p>
        </div>
      </div>
    </a>
  </li>
</template>

<script setup>
import RatingsImgsItem from "./RatingsImgsItem.vue";

const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
