<template>
  <div class="w-full">
    <Listbox>
      <ListboxLabel class="block text-sm font-medium flex items-center">
        <span>{{ placeholder }}</span>
        <div v-if="info" class="group px-1 relative">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </span>
          <span
            class="absolute top-[-1rem] left-[2rem] z-[1] w-[250px] hidden group-hover:flex p-2 text-xs text-white whitespace-no-wrap rounded-md bg-black shadow-md"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur magni obcaecati quia nulla rem dolorum, quae odio saepe quo
            magnam fugiat, dolores inventore ad reiciendis itaque ipsam, neque
            officia.</span
          >
        </div>
      </ListboxLabel>
    </Listbox>
    <div class="p-2">
      <RadioGroup v-model="selected" @update:modelValue="check">
        <RadioGroupOption
          as="div"
          v-for="o in props.options"
          :key="o.title"
          :value="o"
          v-slot="{ active, checked }"
          class="inline-block py-1"
        >
          <!-- <div> -->
          <div
            :class="[
              active
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400'
                : '',
              checked ? 'bg-purple-900 text-white' : 'bg-white',
            ]"
            class="relative inline-flex items-center mx-2 cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none"
          >
            <div class="flex w-full items-center justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                    as="p"
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium rg-lbl"
                  >
                    <!-- <span v-if="o.link"
                      ><a :href="o.link" target="_blank">{{ o.title }}</a></span
                    >
                    <span v-else>{{ o.title }}</span> -->
                    {{ o.title }}
                  </RadioGroupLabel>
                </div>
              </div>
              <div v-show="checked" class="shrink-0 text-white ml-1">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#fff"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </RadioGroupOption>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
// import { useRoute } from "vue-router";

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Listbox,
  ListboxLabel,
} from "@headlessui/vue";

const props = defineProps({
  id: { type: Number },
  options: { type: Object },
  disabled: { type: Boolean },
  placeholder: { type: String },
  info: { type: Boolean, default: false },
});

const emit = defineEmits(["checked", "checkedtitle"]);

const selected = ref(props.options[props.id]);

// const selected = ref(
//   computed({
//     get: () => props.options[props.id],
//     set: (newval) => {
//       emit("checked", newval);
//       emit("checkedtitle", newval.title);
//       console.log(newval.title);
//     },
//   })
// );

// let selected = ref(props.options[props.id]);
// if (useRoute().name === "profile") {
//   console.log("profile " + true);
//   console.log(useRoute().name);
//   selected = ref(
//     computed({
//       get: () => props.options[props.id],
//       set: (newval) => {
//         emit("selected", newval.id);
//         emit("selectedtitle", newval.title);
//       },
//     })
//   );
// }

// console.log("/");
// console.log(props.options[props.id]);
// console.log(selected);
// console.log("/");

const check = () => {
  // console.log(selected.value.percentage)
  emit("checked", selected.value);
};
</script>

<style></style>
<!-- http://localhost:8081/task/IEADVMHZKQ7TQSOX -->
<!-- http://localhost:8081/task/IEADVMHZKQ7QKHFV -->
