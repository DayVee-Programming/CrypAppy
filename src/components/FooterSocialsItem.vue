<template>
  <li class="footer__socials-item">
    <a class="footer__socials-item-link">
      <img :src="link.imgSrc" alt="" class="footer__socials-item-link-img" />
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
