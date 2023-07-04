<template>
  <auth-layout :header="`Sign Up`">
    <template #inputs>
      <div class="input">
        <ComboBox
          :options="sortedGrps"
          :placeholder="`Group`"
          :zindex="`z-50`"
          @selectedid="selectedGrp"
          class="w-full"
        />
        <IconLayout
          :classes="`z-50 pointer-events-none`"
          :svgclass="`w-5 h-5`"
          :svgd="`M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z`"
        />
      </div>
      <div class="input">
        <ComboBoxUsers
          :options="users"
          :placeholder="`Members`"
          :zindex="`z-40`"
          @selected="selectedUser"
          class="w-full"
        />
        <IconLayout
          :classes="`z-40 pointer-events-none`"
          :svgclass="`w-5 h-5`"
          :svgd="`M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z`"
        />
      </div>
      <div class="input">
        <ComboBoxInput
          :value="email"
          v-model:modelInput="email"
          :type="`email`"
          :placeholder="`Email`"
          :zindex="`z-20`"
          class="pointer-events-none w-full"
        >
          <template #icon>
            <IconLayout
              :classes="`z-20 top-[15px] pointer-events-none`"
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
          :zindex="`z-10`"
          class="w-full"
        >
          <template #icon>
            <IconLayout
              :classes="`z-10 top-[15px] pointer-events-none`"
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
      <button class="rounded-blk mt-3" @click.prevent="signup">
        {{ !loading ? "Sign Up" : "Signing Up" }}
      </button>
    </template>
    <template #others>
      <p class="py-5 login-signup">
        Already have an account?
        <router-link
          class="router-link px-1 font-medium auth-link"
          :to="{ name: 'signin' }"
          >SIGN IN</router-link
        >
      </p>
    </template>
  </auth-layout>
</template>

<script setup>
import store from "@/store";
import { ref, computed } from "vue";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "@/firebase/init";

import AuthLayout from "@/layouts/AuthLayout.vue";
import IconLayout from "@/layouts/IconLayout.vue";
import ComboBox from "@/components/form/ComboBox.vue";
import ComboBoxUsers from "@/components/form/ComboBoxUsers.vue";
import ComboBoxInput from "@/components/form/ComboBoxInput.vue";
import { useRouter } from "vue-router";

const groupId = ref("");
const userId = ref("");
const users = ref([]);
const name = ref("");
const email = ref("");
const avatar = ref("");
const userTitle = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);
const errMsg = ref("");
const router = useRouter();

const sortedGrps = computed(() => {
  return [...store.state.jsonGroup].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
});

const selectedGrp = (id) => {
  groupId.value = id;
  store.dispatch("getWrikeGroup", groupId.value).then((r) => {
    const memberIds = r.data.data.map((m) => m.memberIds);

    store.dispatch("getWrikeUser", memberIds).then((r) => {
      users.value = r.data.data.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    });
  });
};

const selectedUser = (id) => {
  userId.value = id;

  store.dispatch("getWrikeUser", userId.value).then((r) => {
    const data = r.data.data[0];
    name.value = data.firstName + " " + data.lastName;
    email.value = data.profiles.map((e) => e.email)[0];
    avatar.value = data.avatarUrl;
    userTitle.value = data.title;
  });
};

const signup = async () => {
  if (
    groupId.value != "" &&
    userId.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    loading.value = true;
    error.value = false;
    errMsg.value = "";
    const firebaseAuth = await firebase.auth();
    const createUser = await firebaseAuth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    const result = await createUser;
    const dataBase = db.collection("users").doc(result.user.uid);
    await dataBase.set({
      userId: userId.value,
      name: name.value,
      email: email.value,
      groupId: groupId.value,
      userTitle: userTitle.value,
      avatar: avatar.value,
      role: 1,
    });
    loading.value = false;
    router.push({ name: "signin" });
    // return;
  }
  error.value = true;
  errMsg.value = "Please fill out all the fields.";
};
</script>
