<template>
  <SideNav />
  <div class="container" :class="classes">
    <slot />
  </div>
  <div class="background fixed"></div>
</template>

<script setup>
import { defineProps } from "vue";
import { auth } from "@/firebase/init";
import store from "@/store";

import SideNav from "./SideNav.vue";

defineProps({
  classes: { type: String },
});

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch("getCurrentUser");
    console.log(auth.currentUser.uid);
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  padding: 40px;
  z-index: 10;
  left: 0;
  right: 0;
}
</style>
