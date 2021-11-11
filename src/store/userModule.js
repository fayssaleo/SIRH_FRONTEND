import axios from "../plugins/axios.js";
const userModule = {
  state: { currentUser: null },
  mutations: {
    LOGIN(state, user) {
      state.currentUser = user;
    },
    LOGOUT(state) {
      state.currentUser = null;
    },
  },
  actions: {
    loginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/utilisateur/login", payload)
          .then(async (response) => {
            commit("LOGIN", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logoutAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/utilisateur/logout", payload)
          .then(async (response) => {
            commit("LOGOUT");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getCurrentUser: (state) => {
      return state.currentUser;
    },
  },
};
export default userModule;
