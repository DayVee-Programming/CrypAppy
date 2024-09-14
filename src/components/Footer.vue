<template>
  <footer id="footer" class="footer">
    <div class="container footer__wrap">
      <div class="footer__desc">
        <a class="footer__desc-logo">
          <img :src="images.logo" alt="" class="footer__desc-logo-img" />
        </a>
        <p class="footer__desc-text">Subscribe to our newsletter</p>
      </div>
      <ul class="footer__socials">
        <FooterSocialsItem
          v-for="link in footerStore.socialsLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
      <div class="footer__email">
        <p class="footer__email-text">Enter your email...</p>
        <input type="email" class="footer__email-input" />
        <a class="footer__email-link">Subscribe</a>
      </div>
      <ul class="footer__info">
        <FooterInfoItem
          v-for="link in footerStore.infoLinks"
          :key="link.id"
          :link="link"
        />
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { images } from "../utils/images.js";
import FooterSocialsItem from "./FooterSocialsItem.vue";
import FooterInfoItem from "./FooterInfoItem.vue";
import { useFooter } from "../store/footer.js";

let footerStore = useFooter();
</script>
