<template>
  <li class="pricing__cards-item">
    <a class="pricing__cards-item-link">
      <h3
        class="pricing__cards-item-link-title pricing__cards-item-link-title_blue"
      >
        {{ props.link.title }}
      </h3>
      <p class="pricing__cards-item-link-price">{{ props.link.price }}</p>
      <p class="pricing__cards-item-link-text">{{ props.link.text }}</p>
      <p class="pricing__cards-item-link-trial">Start your free trial</p>
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
