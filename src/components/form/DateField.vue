<template>
  <div class="form-group">
    <label for="" class="text-sm font-medium flex">
      <span>{{ props.label }}</span>
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
    </label>
    <Datepicker
      v-model="datepicker"
      autoApply
      weekStart="0"
      class="dp__theme_light"
      :format="format"
      :disabledWeekDays="[6, 0]"
      :readonly="false"
      :enableTimePicker="false"
      :minDate="calcDate"
      :maxDate="comDate"
      @update:modelValue="checkDate"
    />
  </div>
</template>
<script setup>
import { ref, defineProps, computed, defineEmits } from "vue";
import moment from "moment";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps({
  calcDate: { type: Date },
  label: { type: String },
  info: { type: Boolean, default: false },
});

// const date = ref(props.calcDate);
const datepicker = ref(new Date(props.calcDate));

const format = (datepicker) => {
  const date = moment(datepicker).format("ddd, MMMM Do YYYY");
  return date;
};

const datepick = computed(() => {
  return new Date(props.calcDate);
});
const comDate = computed(() => {
  return new Date(datepick.value.setDate(datepick.value.getDate() + 14));
});

const emit = defineEmits(["checkDate"]);
const checkDate = (datepicker) => {
  console.log(datepicker);
  emit("checkDate", datepicker);
};

// const getDate = () => {
//   return props.calcDate;
// };
</script>
<style scoped lang="scss">
.dp__theme_light {
  --dp-background-color: #ffff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
}

.dp__input {
  opacity: 0.75;
  border-radius: 10px;
}
</style>
