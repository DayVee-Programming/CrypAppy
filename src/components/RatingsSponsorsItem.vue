<template>
  <li class="ratings__sponsors-item">
    <a class="ratings__sponsors-item-link">
      <img :src="link.imgSrc" alt="" class="ratings__sponsors-link-img" />
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
