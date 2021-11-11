import axios from "axios";
import { DateToFrenchFormat } from "../helpers/helpers.js";

const rolesModule = {
  state: {
    roles: [],
    priviliges: [],
  },
  mutations: {
    SET_ROLES(state, roles) {
      roles = roles.map((role) => {
        role.created_at = DateToFrenchFormat(role.created_at);
        role.updated_at = DateToFrenchFormat(role.updated_at);
        return role;
      });
      state.roles = roles;
    },
    ADD_ROLES(state, role) {
      role.created_at = DateToFrenchFormat(role.created_at);
      role.updated_at = DateToFrenchFormat(role.updated_at);
      state.roles.push(role);
    },
    EDIT_ROLES(state, role) {
      role.created_at = DateToFrenchFormat(role.created_at);
      role.updated_at = DateToFrenchFormat(role.updated_at);
      state.roles = state.roles.map((r) => {
        if (r.id == role.id) return role;
        return r;
      });
    },
    DELETE_ROLES(state, role) {
      state.roles = state.roles.filter((r) => r.id != role.id);
    },
    SET_PRIVILEGES(state,role) {
      role.created_at = DateToFrenchFormat(role.created_at);
      role.updated_at = DateToFrenchFormat(role.updated_at);
      state.roles = state.roles.map((r) => {
        if (r.id == role.id) return role;
        return r;
      });
      console.log("end of Mutation")
    },
  },
  actions: {
    setRolesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/roles")
          .then((response) => {
            commit("SET_ROLES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addRolesAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/roles/create", payload)
          .then((response) => {
            commit("ADD_ROLES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editRolesAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/roles/update", payload)
          .then((response) => {
            commit("EDIT_ROLES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteRolesAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/roles/delete", payload)
          .then((response) => {
            commit("DELETE_ROLES", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setPrivilegesAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/roles/setPrivileges", payload)
          .then((response) => {
            commit("SET_PRIVILEGES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getRoles: (state) => {
      return state.roles;
    },
  },
};
export default rolesModule;
