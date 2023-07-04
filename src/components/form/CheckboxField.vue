<template>
  <div>
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
    <div class="m-2" :class="props.cbclass">
      <div
        v-for="(task, i) in props.options"
        :key="i"
        class="inline-flex items-center px-4 gap-2"
      >
        <input
          type="checkbox"
          :value="`${task.title}${
            task.value != undefined ? ` - ${task.value}` : ''
          }`"
          name=""
          id=""
          :checked="
            props.options.includes(
              `${task.title}${
                task.value != undefined ? ` - ${task.value}` : ''
              }`
            )
              ? true
              : false
          "
          @change="checkbox"
          class="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
        />
        <label for="" class="text-gray-600 font-medium text-md rg-lbl">
          {{ task.title }}
          <span
            class="text-gray-400"
            v-if="task.value != undefined && task.value != ''"
            >({{ task.value }})</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch, computed } from "vue";
// import store from "@/store";

import { Listbox, ListboxLabel } from "@headlessui/vue";

// const brands = ref(store.state.jsonBr);
// const tasks = ref([
//   { id: 0, title: "Copy" },
//   { id: 1, title: "Design" },
//   { id: 2, title: "Motion" },
//   { id: 3, title: "Dev" },
// ]);

const props = defineProps({
  options: { type: Object },
  placeholder: { type: String },
  cbclass: { type: String },
  info: { type: Boolean, default: false },
});

// const br = reactive({
//   title: [],
// });

const newops = computed(() => props.options);
console.log("brands");
console.log(newops.value);
console.log(props.options);

// const tasklist = ref(props.options);
// const brlist = computed(() => brandlist);
// const brandlist = [...(propBr.value || []), ...(br.title || [])];
// const arr = [];

// const brandlist = arr.concat(br.title, props.options);
// console.log(br.title);
// console.log(brlist);
const tl = ref([]);
const emit = defineEmits(["checked"]);
const checkbox = (e) => {
  console.log(e.target.value);
  if (tl.value.includes(e.target.value)) {
    const index = tl.value.indexOf(e.target.value);
    tl.value.splice(index, 1);
  } else {
    tl.value.push(e.target.value);
  }
  console.log(tl.value);
  emit("checked", tl.value);
};
watch(
  () => tl,
  () => {
    console.log(tl);
  }
);
</script>

<style lang="scss" scoped>
.grid.grid-2 {
  display: grid;
  grid-template: auto / auto auto;
  @media (max-width: 600px) {
    grid-template: auto / auto;
  }
}
</style>
