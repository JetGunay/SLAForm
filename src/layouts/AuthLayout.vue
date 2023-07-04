<template>
  <div class="container auth">
    <div class="form-wrap">
      <h2>{{ header }}</h2>
      <div class="inputs w-full max-w-[350px]">
        <slot name="inputs" />
      </div>
      <slot name="button" />
      <p class="relative py-10">
        <span class="hr-line">
          <span
            class="bg-white relative z-10 px-5 text-sm font-medium text-gray-500"
            >OR</span
          >
        </span>
      </p>
      <slot name="others" />
      <div class="angle"></div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  header: { type: String },
});
</script>

<style lang="scss">
.container.auth {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  max-width: inherit;
  overflow: hidden;
  @media (min-width: 900px) {
    width: 100%;
  }

  .form-wrap {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .input {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;

      input,
      select,
      .listbtn {
        width: 100%;
        border: none;
        padding: 4px 4px 4px 40px;
        height: 50px;

        &:focus {
          outline: none;
        }
      }

      .icon {
        width: 12px;
        position: absolute;
        left: 10px;
      }
    }
  }
  .angle {
    display: none;
    position: absolute;
    background-color: #fff;
    z-index: 1;
    transform: rotateZ(4deg);
    width: 75px;
    right: -40px;
    height: 101%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
  .hr-line::after {
    content: " ";
    display: block;
    height: 2px;
    width: 310px;
    position: absolute;
    top: 50%;
    left: -125px;
    background: #f3f3f3;
  }
}
</style>
