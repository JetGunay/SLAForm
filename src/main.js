import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "../node_modules/quill-task-list/task_list.sass";
import "../node_modules/quill-task-list/task_list_node";
// import "../node_modules/quill-task-list/task_list";

const globalOptions = {
  modules: {
    toolbar: [
      "bold",
      "italic",
      "underline",
      "strike",
      "task-list",
      { list: "ordered" },
      { list: "bullet" },
      { align: [] },
      "link",
    ],
    "task-list": true,
    clipboard: {
      matchVisual: false,
    },
  },
  placeholder: "...",
};
QuillEditor.props.globalOptions.default = () => globalOptions;

createApp(App)
  .use(store)
  .use(router)
  .component("QuillEditor", QuillEditor)
  .mount("#app");

// { //customfields
//   {
//       "id": "IEADVMHZJUABZ77U",
//       "value": "0"
//   },
//   {
//       "id": "IEADVMHZJUABYMAX",
//       "value": "21021"
//   },
//   {
//       "id": "IEADVMHZJUABWTCW",
//       "value": "Jeff Oppong -Baah"
//   },
//   {
//       "id": "IEADVMHZJUACYSKI",
//       "value": "Yes"
//   },
//   {
//       "id": "IEADVMHZJUADR566",
//       "value": "[\"Retail\"]"
//   },
//   {
//       "id": "IEADVMHZJUACXMKG",
//       "value": ""
//   },
//   {
//       "id": "IEADVMHZJUADSFLG",
//       "value": "[\"Design Production\"]"
//   },
//   {
//       "id": "IEADVMHZJUACWBE3",
//       "value": "Good"
//   },
//   {
//       "id": "IEADVMHZJUABUJGM",
//       "value": "Coral Retail"
//   },
//   {
//       "id": "IEADVMHZJUAC5HSD",
//       "value": "3"
//   }
// }
