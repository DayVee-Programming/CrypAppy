<template>
  <li class="header__bars-span-dropdown-item">
    <a :href="link.href" class="header__bars-span-dropdown-item-link">{{ link.text }}</a>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
