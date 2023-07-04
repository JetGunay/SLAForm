<template>
  <form-layout>
    <template #left>
      <card-layout>
        <template #cheaderleft>
          <span class="text-base font-bold">Briefing Form</span>
        </template>
        <template #cheaderright>
          <!-- <button class="rounded-blk">Save</button> -->
        </template>
        <template #ccontent>
          <div class="form-content">
            <div class="grid grid-cols-2 gap-20">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="group"
                  :type="`text`"
                  :placeholder="`Team`"
                  class="w-full"
                  :disabled="true"
                  :label="`Requestor Team`"
                  :info="true"
                />
              </div>
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="userName"
                  :type="`text`"
                  :placeholder="`Name`"
                  class="w-full"
                  :disabled="true"
                  :label="`Requestor Name`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxMultiple
                  :options="contacts"
                  :placeholder="`Select multiple contacts`"
                  :zindex="`z-[4]`"
                  @selectedid="shared"
                  class="w-full"
                  :label="`Share with`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="projectTitle"
                  v-model:modelInput="projectTitle"
                  :type="`text`"
                  :placeholder="`Project Title`"
                  class="w-full"
                  :label="`Project Title`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-20">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBox
                  :options="brands"
                  :placeholder="`Brands`"
                  :zindex="`z-[3]`"
                  @selectedval="selectedBr"
                  class="w-full"
                  :label="`Brands`"
                  :info="true"
                />
              </div>
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBox
                  :options="cf_requestType"
                  :placeholder="`Request Type`"
                  :zindex="`z-[3]`"
                  @selectedtitle="selectedReqType"
                  class="w-full"
                  :label="`Request Type`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-20">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBox
                  :options="cf_automation"
                  :placeholder="`Automation`"
                  :zindex="`z-[2]`"
                  @selectedtitle="selectedAuto"
                  class="w-full"
                  :label="`Automation`"
                  :info="true"
                />
              </div>
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBox
                  :options="cf_tier"
                  :placeholder="`Tier`"
                  :zindex="`z-[2]`"
                  @selectedtitle="selectedTier"
                  class="w-full"
                  :label="`Tier`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-20">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBox
                  :options="cf_briefquality"
                  :placeholder="`Brief Quality`"
                  :zindex="`z-[1]`"
                  @selectedtitle="selectedBriefQuality"
                  class="w-full"
                  :label="`Brief Quality`"
                  :info="true"
                />
              </div>
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="bqnote"
                  v-model:modelInput="bqnote"
                  :type="`text`"
                  :placeholder="`Brief Quality Note`"
                  class="w-full"
                  :label="`Brief Quality Note`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="notes"
                  v-model:modelInput="notes"
                  :type="`text`"
                  :placeholder="`Notes`"
                  class="w-full"
                  :label="`Notes`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-2 pt-7">
              <div class="input">
                <RadioGroup
                  :options="store.state.jsonCampaigns"
                  :placeholder="`Request / Campaign / Promotion Overview`"
                  @checked="selectedCampaign"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div class="input">
                <RadioGroup
                  :options="store.state.jsonPlayers"
                  :placeholder="`Who are we talking to?`"
                  @checked="selectedPlayers"
                  :info="true"
                />
              </div>
            </div>
            <div class="py-3">
              <div class="input">
                <TextareaField
                  :value="adaptingEditor"
                  v-model:textChange="adaptingEditor"
                  :label="`What assets are we creating/adapting?`"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="references"
                  v-model:modelInput="references"
                  :type="`text`"
                  :placeholder="`Are there any design or copy references/previous examples?`"
                  class="w-full"
                  :label="`Are there any design or copy references/previous examples?`"
                  :info="true"
                />
              </div>
            </div>
            <div class="grid py-3">
              <div
                class="input relative mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm"
              >
                <ComboBoxInput
                  :value="keymsg"
                  v-model:modelInput="keymsg"
                  :type="`text`"
                  :placeholder="`What are our key messages?`"
                  class="w-full"
                  :label="`What are our key messages?`"
                  :info="true"
                />
              </div>
            </div>
            <div class="py-3">
              <div class="input">
                <TextareaField
                  :value="cdsEditor"
                  v-model:textChange="cdsEditor"
                  :label="`Which Consume (Delta) Segment are you targeting?`"
                />
              </div>
            </div>
            <div class="py-3">
              <div class="input">
                <TextareaField
                  :value="stateEditor"
                  v-model:textChange="stateEditor"
                  :label="`What 'need state' or Insight is this request delivering against?`"
                />
              </div>
            </div>
            <div class="py-3">
              <TextareaField
                :value="taskreqEditor"
                v-model:textChange="taskreqEditor"
                :label="`Task Requirements`"
                :info="true"
              />
              <div class="input">
                <CheckboxField
                  :options="store.state.jsonTasks"
                  @checked="checkedtasks"
                />
              </div>
            </div>
            <div class="py-1">
              <!-- {{ selectedtasks.map }} -->
              <div class="input" v-for="st in selectedtasks" :key="st.id">
                <DisclosureLayout
                  :label="`${st.title} Requirements`"
                  :taskparentId="st.id"
                  :editorkey="st.title"
                  :assets="st.assets"
                  v-model:editorCopy="editorCopy"
                  v-model:editorDesign="editorDesign"
                  v-model:editorMotion="editorMotion"
                  v-model:editorDev="editorDev"
                  v-model:assetsCopy1="assetsCopy1"
                  v-model:assetsCopy2="assetsCopy2"
                  v-model:assetsDesign1="assetsDesign1"
                  v-model:assetsDesign2="assetsDesign2"
                  v-model:assetsDesign3="assetsDesign3"
                  v-model:assetsMotion1="assetsMotion1"
                  v-model:assetsDev1="assetsDev1"
                />
              </div>
            </div>
          </div>
        </template>
      </card-layout>
    </template>
    <template #right>
      <card-layout :cheaderfull="true">
        <template #cheaderfull>
          <div class="mb-3">
            <DateField
              @checkDate="plannedDate"
              :calcDate="calcDate"
              :label="`Campaign Planned Date`"
              :info="true"
            />
          </div>
          <div class="">
            <label for="" class="flex text-sm font-medium">
              <span>Desired Delivery Date</span>
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
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem tenetur magni obcaecati quia nulla rem dolorum, quae
                  odio saepe quo magnam fugiat, dolores inventore ad reiciendis
                  itaque ipsam, neque officia.</span
                >
              </div>
            </label>
            <DatePicker
              v-model="calcDate"
              :disabledWeekDays="[6, 0]"
              :readonly="false"
              :format="format"
              disabled
              class="bg-disabled"
            />
          </div>
        </template>
        <template #ccontent>
          <div class="flex justify-center gap-4">
            <button class="rounded-red" @click.prevent="draft">
              save as draft
            </button>
            <button class="rounded-blk" @click.prevent="post">post</button>
          </div>
        </template>
      </card-layout>
    </template>
  </form-layout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "@/store";
import moment from "moment";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import db from "@/firebase/init";

import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import FormLayout from "@/layouts/FormLayout.vue";
import CardLayout from "@/layouts/CardLayout.vue";
import ComboBoxInput from "@/components/form/ComboBoxInput.vue";
import ComboBox from "@/components/form/ComboBox.vue";
import RadioGroup from "@/components/form/RadioGroup.vue";
import TextareaField from "@/components/form/TextareaField.vue";
import CheckboxField from "@/components/form/CheckboxField.vue";
import DisclosureLayout from "@/layouts/DisclosureLayout.vue";
import DateField from "@/components/form/DateField.vue";
import ComboBoxMultiple from "@/components/form/ComboBoxMultiple.vue";

const projectTitle = ref("");
const brand = ref("");
const campaign = ref("");
const players = ref("");
const keymsg = ref("");
const cpd = ref("");
const bqnote = ref("");
const notes = ref("");
const references = ref("");

const cf_requestType = ref([]);
const reqtype = ref("");

const cf_automation = ref([]);
const automation = ref("");

const cf_briefquality = ref([]);
const briefquality = ref("");

const cf_tier = ref([]);
const tier = ref("");

const cdsEditor = ref("");
const stateEditor = ref("");
const editorCopy = ref("");
const editorDesign = ref("");
const editorMotion = ref("");
const editorDev = ref("");
const taskreqEditor = ref("");
const adaptingEditor = ref("");

const assetsCopy1 = ref([]);
const assetsCopy2 = ref([]);
const assetsDesign1 = ref([]);
const assetsDesign2 = ref([]);
const assetsDesign3 = ref([]);
const assetsMotion1 = ref([]);
const assetsDev1 = ref([]);
const tasks = ref([]);
const contacts = ref([]);
const sharedIds = ref([]);

const info = ref(true);

onMounted(() => {
  store.dispatch("getWrikeAllContacts").then((r) => {
    contacts.value = r.data.data
      .filter(
        (l) =>
          l.lastName != "(Guest)" && l.lastName != "" && l.lastName != "Bot"
      )
      .flat();
    console.log(contacts.value);
  });

  store.dispatch("getWrikeCF", "IEADVMHZJUADR566").then((r) => {
    const x = r.data.data.map((s) => s.settings.values).flat();
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({
        id: i,
        title: x[i],
      });
    }
    console.log(arr);
    cf_requestType.value = arr;
  });

  store.dispatch("getWrikeCF", "IEADVMHZJUADSFLG").then((r) => {
    const x = r.data.data.map((s) => s.settings.values).flat();
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({
        id: i,
        title: x[i],
      });
    }
    console.log(arr);
    cf_automation.value = arr;
  });

  store.dispatch("getWrikeCF", "IEADVMHZJUACWBE3").then((r) => {
    const x = r.data.data.map((s) => s.settings.values).flat();
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({
        id: i,
        title: x[i],
      });
    }
    console.log(arr);
    cf_briefquality.value = arr;
  });

  store.dispatch("getWrikeCF", "IEADVMHZJUAC5HSD").then((r) => {
    const x = r.data.data.map((s) => s.settings.values).flat();
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({
        id: i,
        title: x[i],
      });
    }
    console.log(arr);
    cf_tier.value = arr;
  });
});

const format = (customdate) => {
  const date = moment(customdate).format("ddd, MMMM Do YYYY");
  return date;
};

const group = computed(() => {
  return store.state.jsonGroup
    .filter((i) => i.id == store.state.profileGroupId)
    .map((t) => t.title)[0];
});

const shared = (val) => {
  sharedIds.value = val;
  console.log(sharedIds.value);
};

const userName = computed(() => store.state.profileName);

const brands = computed(() => store.state.jsonBrands);

const selectedBr = (val) => {
  brand.value = val;
  console.log("brand ", val);
};

const selectedReqType = (val) => {
  reqtype.value = val;
  console.log("reqtype ", val);
};

const selectedAuto = (val) => {
  automation.value = val;
  console.log("automation", val);
};
const selectedTier = (val) => {
  tier.value = val;
  console.log("tier", val);
};
const selectedBriefQuality = (val) => {
  briefquality.value = val;
  console.log("briefquality", val);
};

const selectedCampaign = (val) => {
  campaign.value = val;
  console.log("rcp ", val);
};

const selectedPlayers = (val) => {
  players.value = val;
  console.log("customers ", val);
};

const checkedtasks = (val) => {
  tasks.value = val;
  console.log("tasks ", val);
};

const selectedtasks = computed(() => {
  const t = [];
  for (let i = 0; i < tasks.value.length; i++) {
    t.push(store.state.jsonTasks.filter((n) => n.title == tasks.value[i]));
  }
  console.log(t);
  return t.flat();
});

const selectedtaskcomms = computed(() => {
  const t = [];
  for (let i = 0; i < tasks.value.length; i++) {
    t.push(
      store.state.jsonTasks
        .filter((n) => n.title == tasks.value[i])
        .map((s) => s.scomms)
    );
  }
  console.log(t);
  return t.flat();
});

const calcDate = computed(() => {
  var today = new Date();
  var enddate = "";

  var days = selectedtasks.value.map((d) => d.days);
  var total = days.reduce((a, b) => a + b, 0);
  var count = 0;
  if (days == 0) {
    return (enddate = today);
  }
  while (count < total) {
    enddate = new Date(today.setDate(today.getDate() + 1));
    if (enddate.getDay() != 0 && enddate.getDay() != 6) {
      count++;
    }
  }
  console.log(days);
  console.log(enddate);
  return enddate;
});

const plannedDate = (val) => {
  cpd.value = moment(val).format("YYYY-MM-DD");
  return cpd.value;
};

const draft = async () => {
  await db.collection("projects").add({
    wrike_id: "",
    status: "draft",
    draftcreated: moment().format("YYYY-MM-DD"),
    authorId: store.state.profileUserId,
    sharedIds: sharedIds.value,
    projectTitle: projectTitle.value,
    brand: brand.value,
    reqtype: reqtype.value,
    automation: automation.value,
    tier: tier.value,
    briefquality: briefquality.value,
    bqnote: bqnote.value,
    notes: notes.value,
    adaptingEditor: adaptingEditor.value,
    references: references.value,
    campaign: campaign.value.title,
    players: players.value.title,
    keymsg: keymsg.value,
    cdsEditor: cdsEditor.value,
    stateEditor: stateEditor.value,
    taskreqEditor: taskreqEditor.value,
    // tasks: tasks.value,
    tasks: {
      editorCopy: editorCopy.value,
      editorDesign: editorDesign.value,
      editorMotion: editorMotion.value,
      editorDev: editorDev.value,
      assetsCopy1: assetsCopy1.value,
      assetsCopy2: assetsCopy2.value,
      assetsDesign1: assetsDesign1.value,
      assetsDesign2: assetsDesign2.value,
      assetsDesign3: assetsDesign3.value,
      assetsMotion1: assetsMotion1.value,
      assetsDev1: assetsDev1.value,
    },
    plannedDate: cpd.value,
    deliveryDate: moment(calcDate.value).format("YYYY-MM-DD"),
  });
};

const assetTemplate = (assets) => {
  var str = '<ul data-checked="false">';
  assets.forEach(function (asset) {
    str += "<li><input type='checkbox' />" + asset + "</li>";
  });
  return (str += "</ul>");
  // console.log(str);
};

const post = async () => {
  // await db.collection("projects").add({
  //   wrike_id: "",
  //   status: "posted",
  //   ticketcreated: moment().format("YYYY-MM-DD"),
  //   authorId: store.state.profileUserId,
  //   sharedIds: sharedIds.value,
  //   projectTitle: projectTitle.value,
  //   brand: brand.value,
  //   reqtype: reqtype.value,
  //   automation: automation.value,
  //   tier: tier.value,
  //   briefquality: briefquality.value,
  //   bqnote: bqnote.value,
  //   notes: notes.value,
  //   adaptingEditor: adaptingEditor.value,
  //   references: references.value,
  //   campaign: campaign.value.title,
  //   players: players.value.title,
  //   keymsg: keymsg.value,
  //   cdsEditor: cdsEditor.value,
  //   stateEditor: stateEditor.value,
  //   taskreqEditor: taskreqEditor.value,
  //   // tasks: tasks.value,
  //   tasks: {
  //     editorCopy: editorCopy.value,
  //     editorDesign: editorDesign.value,
  //     editorMotion: editorMotion.value,
  //     editorDev: editorDev.value,
  //     assetsCopy1: assetsCopy1.value,
  //     assetsCopy2: assetsCopy2.value,
  //     assetsDesign1: assetsDesign1.value,
  //     assetsDesign2: assetsDesign2.value,
  //     assetsDesign3: assetsDesign3.value,
  //     assetsMotion1: assetsMotion1.value,
  //     assetsDev1: assetsDev1.value,
  //   },
  //   plannedDate: cpd.value,
  //   deliveryDate: moment(calcDate.value).format("YYYY-MM-DD"),
  // });

  var separator = `<div style="border-top: 1px solid rgb(209 213 219)"></div>`;
  var projectBasics = `
    <h3>The basics</h3>
      <div><strong>Brand</strong></div>
        <div>${brand.value.title}</div><br>
      <div><strong>Your Name</strong></div>
        <div>${store.state.profileName}</div><br>
      <div><strong>Your Team</strong></div>
        <div>${group.value}</div><br>
    ${separator}
    <h3>Project Details</h3>
    <div><strong>Task Requirements</strong></div>
      ${taskreqEditor.value.replaceAll("<p><br></p>", "<div></div>")}<br>
    <div><strong>What assets are we creating/adapting?</strong></div>
      ${adaptingEditor.value.replaceAll("<p><br></p>", "<div></div>")}<br>
    <div><strong>Are there any design or copy references/previous examples?</strong></div>
      <div>${references.value}</div><br>`;
  var extraProjectDetails = `
  <div><strong>Request / Campaign / Promotion Overview</strong></div>
      <div>${campaign.value.title}</div><br>
    <div><strong>Who are we talking to?</strong></div>
      <div>${players.value.title}</div><br>
    <div><strong>What are our key messages?</strong></div>
      <div>${keymsg.value}</div><br>
    <div><strong>Which Consume (Delta) Segment are you targeting?</strong></div>
      <div>${cdsEditor.value}</div><br>
    <div><strong>What 'need state' or Insight is this request delivering against?</strong></div>
      <div>${stateEditor.value}</div><br>
    <div><strong>Campaign Planned Start Date/Live Date</strong></div>
      <div>${cpd.value}</div><br>`;
  console.log(projectBasics, extraProjectDetails);

  const copyassets = assetsCopy1.value.concat(assetsCopy2.value);
  const designassets = assetsDesign1.value.concat(
    assetsDesign2.value,
    assetsDesign3.value
  );
  console.log(copyassets);
  console.log(designassets);

  const copytask =
    selectedtasks.value.filter((i) => i.id === 1).length > 0
      ? `${separator}
        <div><strong>Copy Requirements</strong></div>
        ${
          editorCopy.value.replaceAll("<p><br></p>", "<div></div>") +
          (assetsCopy1.value.length != 0 && assetsCopy1.value != undefined
            ? `<div>Promo Pack: </div><div>${assetTemplate(
                assetsCopy1.value
              )}</div>`
            : "") +
          (assetsCopy2.value.length != 0 && assetsCopy2.value != undefined
            ? `<div>Treasure Chest: </div><div>${assetTemplate(
                assetsCopy2.value
              )}</div>`
            : "")
        }`
      : ``;
  const designtask =
    selectedtasks.value.filter((i) => i.id === 2).length > 0
      ? `${separator}
        <div><strong>Design Requirements</strong></div>
        ${
          editorDesign.value.replaceAll("<p><br></p>", "<div></div>") +
          (assetsDesign1.value.length != 0 && assetsDesign1.value != undefined
            ? `<div>Full Promo Pack: </div><div>${assetTemplate(
                assetsDesign1.value
              )}</div>`
            : "") +
          (assetsDesign2.value.length != 0 && assetsDesign2.value != undefined
            ? `<div>Gaming Static (Standard): </div><div>${assetTemplate(
                assetsDesign2.value
              )}</div>`
            : "") +
          (assetsDesign3.value.length != 0 && assetsDesign3.value != undefined
            ? `<div>Sports Static (Standard): </div><div>${assetTemplate(
                assetsDesign3.value
              )}</div>`
            : "")
        }`
      : ``;
  const motiontask =
    selectedtasks.value.filter((i) => i.id === 3).length > 0
      ? `${separator}
        <div><strong>Motion Requirements</strong></div>
        ${
          editorMotion.value.replaceAll("<p><br></p>", "<div></div>") +
          assetTemplate(assetsMotion1.value)
        }`
      : ``;
  const devtask =
    selectedtasks.value.filter((i) => i.id === 4).length > 0
      ? `${separator}
        <div><strong>Dev Requirements</strong></div>
        ${
          editorDev.value.replaceAll("<p><br></p>", "<div></div>") +
          assetTemplate(assetsDev1.value)
        }`
      : ``;
  var projectTasks =
    projectBasics +
    copytask +
    designtask +
    motiontask +
    devtask +
    extraProjectDetails;
  const cf = [
    {
      id: "IEADVMHZJUABYMAX",
      value: "20233",
    },
    {
      id: "IEADVMHZJUABUJGM",
      value: brand.value.title,
    },
    {
      id: "IEADVMHZJUACWBE3",
      value: briefquality.value,
    },
    {
      id: "IEADVMHZJUABWTCW",
      value: store.state.profileName,
    },
    {
      id: "IEADVMHZJUADR566",
      value: reqtype.value,
    },
    {
      id: "IEADVMHZJUADSFLG",
      value: automation.value,
    },
    {
      id: "IEADVMHZJUAC5HSD",
      value: tier.value,
    },
    {
      id: "IEADVMHZJUABWTCX",
      value: notes.value,
    },
    {
      id: "IEADVMHZJUACXMKG",
      value: briefquality.value,
    },
  ];
  var data = {
    title: projectTitle.value,
    // sharedIds: sharedIds.value,
    customFields: cf,
    project: {
      ownerIds: [store.state.profileUserId],
      endDate: moment(calcDate.value).format("YYYY-MM-DD"),
    },
  };
  console.log(projectTasks);
  console.log(data);
  console.log(selectedtasks);
  console.log(assetTemplate(copyassets));
  console.log(assetTemplate(designassets));

  store
    .dispatch("addProject", { projectId: brand.value.id, data: data })
    .then((r) => {
      var projId = r.map((i) => i.id);
      var selectedTaskId = selectedtasks.value.map((i) => i.id);
      console.log(projId);
      console.log(selectedTaskId);

      var updateDate = {
        // shareds: sharedIds.value,
        description: projectTasks,
      };

      store.dispatch("updateProject", {
        projectId: projId,
        data: updateDate,
      });

      for (let s = 0; s < selectedTaskId.length; s++) {
        var ticketName = selectedtasks.value.map((t) => t.title);
        var ticketId = selectedtasks.value.map((i) => i.id);

        const taskDesc = ref("");
        if (ticketId[s] === 1) {
          taskDesc.value =
            editorCopy.value.replaceAll("<p><br></p>", "<div></div>") +
            (assetsCopy1.value.length != 0 && assetsCopy1.value != undefined
              ? `<div>Promo Pack: </div><div>${assetTemplate(
                  assetsCopy1.value
                )}</div>`
              : "") +
            (assetsCopy2.value.length != 0 && assetsCopy2.value != undefined
              ? `<div>Treasure Chest: </div><div>${assetTemplate(
                  assetsCopy2.value
                )}</div>`
              : "");
        } else if (ticketId[s] === 2) {
          taskDesc.value =
            editorDesign.value.replaceAll("<p><br></p>", "<div></div>") +
            (assetsDesign1.value.length != 0 && assetsDesign1.value != undefined
              ? `<div>Full Promo Pack: </div><div>${assetTemplate(
                  assetsDesign1.value
                )}</div>`
              : "") +
            (assetsDesign2.value.length != 0 && assetsDesign2.value != undefined
              ? `<div>Gaming Static (Standard): </div><div>${assetTemplate(
                  assetsDesign2.value
                )}</div>`
              : "") +
            (assetsDesign3.value.length != 0 && assetsDesign3.value != undefined
              ? `<div>Sports Static (Standard): </div><div>${assetTemplate(
                  assetsDesign3.value
                )}</div>`
              : "");
        } else if (ticketId[s] === 3) {
          taskDesc.value =
            editorMotion.value.replaceAll("<p><br></p>", "<div></div>") +
            assetTemplate(assetsMotion1.value);
        } else if (ticketId[s] === 4) {
          taskDesc.value =
            editorDev.value.replaceAll("<p><br></p>", "<div></div>") +
            assetTemplate(assetsDev1.value);
        }

        //subtasks
        var taskData = {
          title: ticketName[s],
          description: `<p>${ticketName[s]} <br> ${taskDesc.value}</p>`,
        };

        store
          .dispatch("addTaskToProject", {
            projectId: projId,
            data: taskData,
          })
          .then((r) => {
            var taskIds = r.map((i) => i.id);
            var subtask = selectedtasks.value.map((s) => s.subtasks);
            for (let st = 0; st < subtask[s].length; st++) {
              var subtaskData = {
                title: subtask[s][st],
                superTasks: [taskIds],
              };
              store.dispatch("addTaskToProject", {
                projectId: projId,
                data: subtaskData,
              });
            }
          });
      }

      var scommsData = {
        title: "Stakeholder Comms",
        description: `<p>${projectTasks}</p>`,
        responsibles: [store.state.profileUserId],
        parents: [projId],
      };
      store
        .dispatch("addTaskToProject", {
          projectId: projId,
          data: scommsData,
        })
        .then((r) => {
          var commsId = r.map((i) => i.id);
          var commsTask = selectedtaskcomms.value.flat();
          for (let c = 0; c < commsTask.length; c++) {
            var commsData = {
              title: commsTask[c],
              description: ``,
              superTasks: [commsId],
            };
            store.dispatch("addTaskToProject", {
              projectId: projId,
              data: commsData,
            });
          }
        });
    });
};
</script>

<style></style>
