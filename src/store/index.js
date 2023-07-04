import { createStore } from "vuex";
import json from "../../data.json";
import http from "../../http";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "@/firebase/init";

export default createStore({
  state: {
    jsonGroup: json.groups,
    jsonBrands: json.brands,
    jsonTasks: json.tasks,
    jsonPlayers: json.players,
    jsonCampaigns: json.campaigns,
    jsonPriority: json.priority,
    jsonScomms: json.scomms,
    user: null,
    wrikeGroup: [],
    wrikeUser: [],
    wrikeAllContacts: [],
    wrikeCF: [],
    profileId: null,
    profileUserId: null,
    profileEmail: null,
    profileName: null,
    profileGroupId: null,
    profileRole: null,
    profileAvatar: null,
    profileUserTitle: null,
  },
  mutations: {
    setWrikeGroup: (state, data) => {
      state.wrikeGroup = data;
    },
    setWrikeUser: (state, data) => {
      state.wrikeUser = data;
    },
    setWrikeAllContacts: (state, data) => {
      state.wrikeAllContacts = data;
    },
    setProfile: (state, data) => {
      state.profileId = data.id;
      state.profileUserId = data.data().userId;
      state.profileEmail = data.data().email;
      state.profileName = data.data().name;
      state.profileGroupId = data.data().groupId;
      state.profileRole = data.data().role;
      state.profileAvatar = data.data().avatar;
      state.profileUserTitle = data.data().userTitle;
    },
    setWrikeCF: (state, data) => {
      state.wrikeCF = data;
    },
    updateUser: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    async getWrikeGroup({ commit }, id) {
      return await http
        .get(`/groups/${id}`)
        .then((res) => {
          commit("setWrikeGroup", res.data.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    async getWrikeUser({ commit }, id) {
      return await http
        .get(`/contacts/${id}`)
        .then((res) => {
          commit("setWrikeUser", res.data.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    async getWrikeAllContacts({ commit }) {
      return await http
        .get(`/contacts?deleted=false`)
        .then((res) => {
          commit("setWrikeAllContacts", res.data.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    async getWrikeCF({ commit }, id) {
      return await http.get(`/customfields/${id}`).then((res) => {
        commit("setWrikeCF", res.data.data);
        return res;
      });
    },
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfile", dbResults);
    },
    //POST
    addProject: ({ commit }, { projectId, data }) => {
      // try {
      //   const res = await http.post(`/folders/${projectId}/folders`, data);
      //   return res.data.data;
      // } catch (e) {
      //   console.error(e);
      // }
      return http
        .post(`/folders/${projectId}/folders`, data)
        .then((res) => {
          commit("authenticate", projectId, data);
          return res.data.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    async addTaskToProject({ commit }, { projectId, data }) {
      // try {
      //   const res = await http.post(`/folders/${projectId}/tasks`, data);
      //   return res.data.data;
      // } catch (e) {
      //   console.error(e);
      // }
      return await http
        .post(`/folders/${projectId}/tasks`, data)
        .then((res) => {
          commit("authenticate", projectId, data);
          return res.data.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    async updateProject({ commit }, { projectId, data }) {
      // try {
      //   const res = await http.post(`/folders/${projectId}`, data);
      //   return res.data.data;
      // } catch (e) {
      //   console.log(e);
      // }
      return await http
        .put(`/folders/${projectId}`, data)
        .then((res) => {
          commit("authenticate", projectId, data);
          return res.data.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  modules: {},
  getters: {},
});
