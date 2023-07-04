<template>
  <div class="w-full">
    <Combobox>
      <ComboboxLabel class="font-medium flex items-center">
        <span>{{ label }}</span>
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
            class="absolute top-[-1rem] left-[2rem] z-[2] w-[250px] hidden group-hover:flex p-2 text-xs text-white whitespace-no-wrap rounded-md bg-black shadow-md"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur magni obcaecati quia nulla rem dolorum, quae odio saepe quo
            magnam fugiat, dolores inventore ad reiciendis itaque ipsam, neque
            officia.</span
          >
        </div>
      </ComboboxLabel>
      <div class="relative mt-1" :class="zindex">
        <div
          class="relative w-full cursor-default overflow-hidden text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
        >
          <input
            :value="value"
            @input="$emit('update:modelInput', $event.target.value)"
            class="w-full border-none py-2 pl-3 pr-10 text-md leading-5 text-gray-500 focus:ring-0"
            :type="type"
            :placeholder="placeholder"
            :class="disabled === true ? 'bg-disabled' : 'bg-grey'"
            :disabled="disabled"
          />
          <slot name="icon" />
        </div>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Combobox, ComboboxLabel } from "@headlessui/vue";

defineProps({
  type: { type: String },
  placeholder: { type: String },
  // classes: { type: String },
  value: { type: String },
  disabled: { type: Boolean },
  zindex: { type: String },
  label: { type: String },
  info: { type: Boolean, default: false },
});

// let text = ref(null);

// const emit = defineEmits(["text"]);
// const input = () => {
//   console.log(text);
//   emit("text", text);
// };
</script>
