<template>
  <li class="footer__info-item">
    <a class="footer__info-item-link">{{ props.link.text }}</a>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
