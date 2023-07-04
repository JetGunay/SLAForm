<template>
  <div class="form-group mt-2">
    <Listbox>
      <ListboxLabel class="block text-sm font-medium flex items-center mb-2">
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
            class="absolute top-[-1rem] left-[2rem] z-[1] w-[250px] hidden group-hover:flex p-2 text-xs text-white whitespace-no-wrap rounded-md bg-black shadow-md"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur magni obcaecati quia nulla rem dolorum, quae odio saepe quo
            magnam fugiat, dolores inventore ad reiciendis itaque ipsam, neque
            officia.</span
          >
        </div>
      </ListboxLabel>
    </Listbox>
    <QuillEditor
      :ref="value"
      @editorChange="$emit('update:textChange', this.$refs[value].getHTML())"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Listbox, ListboxLabel } from "@headlessui/vue";

defineProps({
  label: { type: String },
  value: { type: String },
  info: { type: Boolean },
});
</script>

<style>
.ql-container.ql-snow {
  max-height: 250px;
  overflow: auto;
  border: 1px solid #e3e3e3;
  border-radius: 0 0 5px 5px;
  color: #000;
  font-size: 14px;
}

.ql-toolbar.ql-snow {
  border: 1px solid #e3e3e3;
  border-radius: 5px 5px 0 0;
}
</style>
