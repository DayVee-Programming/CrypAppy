<template>
  <li class="banner__main-apps-item">
    <a class="banner__main-apps-item-link">
      <img :src="props.link.imgSrc" alt="" class="banner__main-apps-link-img" />
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
