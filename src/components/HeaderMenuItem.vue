<template>
  <li class="header__main-menu-item">
    <a :href="props.link.href" class="header__main-menu-item-link">{{
      props.link.text
    }}</a>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    typeof: Object,
  },
});
</script>
