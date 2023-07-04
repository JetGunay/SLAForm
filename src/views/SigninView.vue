<template>
  <auth-layout :header="`Sign In`">
    <template #inputs>
      <div class="input">
        <ComboBoxInput
          :value="email"
          v-model:modelInput="email"
          :type="`email`"
          :placeholder="`Email`"
          class="w-full"
        >
          <template #icon>
            <IconLayout
              :classes="`top-[15px] pointer-events-none`"
              :svgclass="`w-5 h-5`"
              :svgd="`M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25`"
            />
          </template>
        </ComboBoxInput>
      </div>
      <div class="input">
        <ComboBoxInput
          :value="password"
          v-model:modelInput="password"
          :type="`password`"
          :placeholder="`Password`"
          class="w-full"
        >
          <template #icon>
            <IconLayout
              :classes="`top-[15px] pointer-events-none`"
              :svgclass="`w-5 h-5`"
              :svgd="`M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z`"
            />
          </template>
        </ComboBoxInput>
      </div>
      <div
        v-show="error"
        class="error p-2 text-sm text-red-800 font-medium text-center"
      >
        {{ errMsg }}
      </div>
    </template>
    <template #button>
      <router-link
        class="forgot-password auth-link text-xs"
        :to="{ name: 'forgotpassword' }"
        >Forgot your password?</router-link
      >
      <button @click.prevent="signIn" class="rounded-blk">
        {{ !loading ? "Sign In" : "Signing In..." }}
      </button>
    </template>
    <template #others>
      <p class="py-5 login-signup">
        Create an account.
        <router-link
          class="router-link px-1 font-medium"
          :to="{ name: 'signup' }"
          >SIGN UP</router-link
        >
      </p>
    </template>
  </auth-layout>
</template>

<script setup>
import { auth } from "@/firebase/init";
import { ref } from "vue";
import { useRouter } from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import IconLayout from "@/layouts/IconLayout.vue";

import ComboBoxInput from "@/components/form/ComboBoxInput.vue";

const email = ref("");
const password = ref("");
const error = ref(null);
const errMsg = ref("");
const loading = ref(false);
const router = useRouter();

const signIn = () => {
  if (email.value != "" && password.value != "") {
    loading.value = true;
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        error.value = false;
        errMsg.value = "";
        router.push({ name: "dashboard" });
        console.log(auth.currentUser.uid);
      })
      .catch((err) => {
        error.value = true;
        errMsg.value = err.message
          .replace("Firebase: ", "")
          .replace(/\(auth.*\)\.?/, "");
      })
      .finally(() => {
        loading.value = false;
      });
  }
  loading.value = false;
  error.value = true;
  errMsg.value = "Please fill out all the fields.";
};
</script>

<style></style>
