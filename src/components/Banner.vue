<template>
  <div id="banner" class="banner">
    <div class="full-container banner__wrap" data-aos="fade-left">
      <div class="banner__main">
        <h1 class="banner__main-title">
          The crypto portfolio app that makes you smile. Every day.
        </h1>
        <p class="banner__main-text">
          The world of cryptocurrency is exciting, but managing your investments
          across multiple exchanges and wallets can be a hassle. Introducing the
          ultimate crypto portfolio app - your one-stop shop for tracking,
          analyzing, and making informed decisions about your digital assets.
        </p>
        <ul class="banner__main-apps">
          <BannerAppsItem
            v-for="link in bannerStore.appsLinks"
            :key="link.id"
            :link="link"
          />
        </ul>
      </div>
      <img :src="images.banner" alt="" class="banner__img" />
    </div>
  </div>
</template>

<script setup>
import BannerAppsItem from "./BannerAppsItem.vue";
import { useBanner } from "../store/banner.js";
import { images } from "../utils/images.js";

let bannerStore = useBanner();
</script>
