import axios from "axios";
const departementsModule = {
  state: { fonctions: [] },
  mutations: {
    ADD_FONCTION(state, fonction) {
      state.fonctions.push(fonction);
    },
    DELETE_FONCTION(state, fonction) {
      state.fonctions = state.fonctions.filter((c) => c.id != fonction.id);
    },
    EDIT_FONCTION(state, fonction) {
      state.fonctions = state.fonctions.map((c) => {
        if (c.id == fonction.id) {
          c = fonction;
        }
        return c;
      });
    },
    SET_FONCTIONS(state, fonctions) {
      state.fonctions = fonctions;
    },
  },
  actions: {
    async getFonctionsAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/departements")
          .then(async (response) => {
            console.log("response", response);
            commit("SET_FONCTIONS", response.data.payload);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async getFonctionPostsAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "api/departements/" +
              payload +
              "/fonctions"
          )
          .then(async (response) => {
            commit("GET_POSTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addFonctionAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/departements/create", payload)
          .then((response) => {
            commit("ADD_FONCTION", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editFonctionAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/departements/update", payload)
          .then((response) => {
            commit("EDIT_FONCTION", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteFonctionAction({ commit }, payload) {
      console.log("reach here1");
      return new Promise((resolve, reject) => {
        console.log("reach here2");
        axios
          .post("api/departements/delete", payload)
          .then(() => {
            console.log("reach here3");
            commit("DELETE_FONCTION", payload);
            console.log("reach here4");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getFonctions: (state) => {
      return state.fonctions;
    },
  },
};
export default departementsModule;
