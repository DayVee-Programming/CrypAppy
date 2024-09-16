<template>
  <header id="header" class="header">
    <div class="full-container header__wrap">
      <a href="#" class="header__logo">
        <img :src="images.logo" alt="" class="header__logo-img" />
      </a>
      <div class="header__main">
        <ul class="header__main-menu">
          <HeaderMenuItem
            v-for="link in headerStore.menuLinks"
            :key="link.id"
            :link="link"
          />
        </ul>
        <a href="#footer" class="header__main-link">Buy CrypAppy</a>
      </div>
      <div class="header__bars" @click="handleClick">
        <span class="header__bars-span">
          <ul
            v-show="headerStore.isDropdownOpen"
            class="header__bars-span-dropdown"
          >
            <HeaderDropdownItem
              v-for="link in headerStore.menuLinks"
              :key="link.id"
              :link="link"
            />
            <li class="header__bars-span-dropdown-item">
              <a class="header__bars-span-dropdown-item-link">Buy CrypAppy</a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useHeader } from "../store/header.js";
import HeaderMenuItem from "./HeaderMenuItem.vue";
import HeaderDropdownItem from "./HeaderDropdownItem.vue";
import { images } from "../utils/images.js";

let headerStore = useHeader();
const handleClick = () => {
  headerStore.isDropdownOpen = headerStore.isDropdownOpen ? false : true;
};
</script>
