<template>
  <main-layout :classes="classes">
    <!-- <div
      class="lg:w-7/12 md:w-9/12 sm:w-12/12 flex justify-center my-0 mx-auto bg-white border border-gray-200 rounded-lg shadow-md py-8"
    >
      <div class="form-wrap h-auto w-full px-14"><slot /></div>
    </div> -->
    <div class="flex gap-4 justify-center">
      <div class="lg:w-7/12 md:w-9/12 sm:w-12/12" :class="formclass">
        <div class="form-wrap w-full px-14">
          <slot name="left" />
        </div>
      </div>
      <div class="lg:w-3/12 md:w-2/12 sm:w-12/12 flex justify-center">
        <div class="w-[22rem] fixed" :class="formclass">
          <div class="form-wrap w-full px-8"><slot name="right" /></div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import { ref, defineProps } from "vue";
import MainLayout from "./MainLayout.vue";

defineProps({
  classes: { type: String },
});

const formclass = ref(
  "h-max flex justify-center bg-white border border-gray-200 rounded-lg shadow-md py-8"
);
</script>

<style lang="scss" scoped>
// .form-wrap {
//   height: auto;
// }
</style>
