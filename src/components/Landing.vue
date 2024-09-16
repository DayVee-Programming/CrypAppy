<template>
  <div id="landing" class="landing">
    <div class="container landing__wrap">
      <div class="landing__desc">
        <h2 class="landing__desc-title">
          A perfect landing page to help launch your app
        </h2>
        <p class="landing__desc-text">
          Gain the tools and knowledge you need to navigate the exciting world
          of crypto.
        </p>
      </div>
      <div class="landing__features">
        <ul class="landing__features-content left" data-aos="flip-up">
          <LandingContentItem
            v-for="link in landingStore.contentLeftLinks"
            :key="link.id"
            :link="link"
            type="left"
          />
        </ul>
        <a class="landing__features-pic" data-aos="zoom-in">
          <img
            src="../assets/images/landing.png"
            alt=""
            class="landing__features-pic-img"
          />
        </a>
        <ul class="landing__features-content right" data-aos="flip-down">
          <LandingContentItem
            v-for="link in landingStore.contentRightLinks"
            :key="link.id"
            :link="link"
            type="right"
          />
        </ul>
      </div>
      <div class="landing__pic"></div>
    </div>
  </div>
</template>

<script setup>
import LandingContentItem from "./LandingContentItem.vue";
import { useLanding } from "../store/landing.js";

let landingStore = useLanding();
</script>
