<template>
  <div class="mx-auto w-full max-w-2xl rounded-2xl bg-white p-1">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="flex w-full justify-between shadow-md bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      >
        <span>{{ label }}</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
        <label class="font-medium text-sm flex items-center"
          >Any additional instructions / restrictions</label
        >
        <QuillEditor
          :ref="`editor${editorkey}`"
          :class="`editor${editorkey}`"
          @editorChange="
            emit(
              'update:editor' + editorkey,
              this.$refs[`editor${editorkey}`].getHTML()
            )
          "
        />
        <div v-for="a in assets" :key="a.id" class="py-2">
          <label for="" class="text-sm font-bold">{{ a.title }}</label>
          <CheckboxField
            :options="a.asset.flat()"
            :placeholder="a.name"
            :cbclass="`grid grid-cols-3 gap-1`"
            @checked="emit('update:assets' + editorkey + a.id, $event)"
          />
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import CheckboxField from "@/components/form/CheckboxField.vue";

defineProps({
  label: { type: String },
  editorkey: { type: String },
  assetTtitle: { type: String },
  assets: { type: Object },
});

const emit = defineEmits([
  "update:editorCopy",
  "update:editorDesign",
  "update:editorMotion",
  "update:editorDev",
  "update:assetsCopy1",
  "update:assetsCopy2",
  "update:assetsDesign1",
  "update:assetsDesign2",
  "update:assetsDesign3",
  "update:assetsMotion1",
  "update:assetsDev1",
]);

// const checkedassets = (val) => {
//   console.log(val.value);
//   emit("checkedassets", val.value);
// };

// const textChange = (val) => {
//   emit("textChange", val);
// };
</script>
