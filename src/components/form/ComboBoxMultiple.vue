<template>
  <div>
    <Combobox v-model="selected" @update:modelValue="check" multiple>
      <ComboboxLabel class="font-medium text-sm flex items-center flex-wrap">
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
            class="absolute top-[-1rem] left-[2rem] z-[3] w-[250px] hidden group-hover:flex p-2 text-xs text-white whitespace-no-wrap rounded-md bg-black shadow-md"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur magni obcaecati quia nulla rem dolorum, quae odio saepe quo
            magnam fugiat, dolores inventore ad reiciendis itaque ipsam, neque
            officia.</span
          >
        </div>
      </ComboboxLabel>
      <div>
        <ul v-if="selected.length > 0" class="flex flex-wrap font-medium">
          <li
            v-for="(person, i) in selected"
            :key="person.id"
            class="py-1 px-2 border mx-2 m-1 rounded-lg text-xs relative"
          >
            {{ person.firstName }} {{ person.lastName }}
            <span
              @click.prevent="remove(i)"
              class="icon absolute top-[-0.4rem]"
            >
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
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
      <div class="relative mt-1" :class="zindex">
        <div
          class="relative w-full cursor-default overflow-hidden text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-md bg-grey leading-5 text-gray-500 focus:ring-0"
            :displayValue="(o) => o.firstName && o.firstName + ' ' + o.lastName"
            @change="query = $event.target.value"
            :placeholder="
              selected.length > 0
                ? `Selected contact(s): ${selected.length}`
                : props.placeholder
            "
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto bg-grey py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            :class="zindex"
          >
            <div
              v-if="filteredGroup.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="o in filteredGroup"
              as="template"
              :key="o.id"
              :value="o"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-purple-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ o.firstName }} {{ o.lastName }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-purple-600': !active }"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, watch, defineEmits } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  options: { type: Object },
  placeholder: { type: String },
  zindex: { type: String },
  label: { type: String },
  info: { type: Boolean, default: false },
});

let selected = ref([]);
let query = ref("");

watch(
  () => props.options,
  () => {}
);

const filteredGroup = computed(() =>
  query.value === ""
    ? props.options
    : props.options.filter((o) =>
        (o.firstName + " " + o.lastName)
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

const remove = (index) => {
  // console.log(selected.value.indexOf(val));
  // const index = selected.value.indexOf(val);
  selected.value.splice(index, 1);
  console.log(selected.value);
};

const emit = defineEmits(["selectedid", "selectedtitle"]);
const check = () => {
  console.log(selected.value.map((i) => i.id));
  emit(
    "selectedid",
    selected.value.map((i) => i.id)
  );
  emit("selectedtitle", selected.value.title);
};
</script>
