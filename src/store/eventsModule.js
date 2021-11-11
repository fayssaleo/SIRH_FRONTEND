import axios from "axios";
import { DateToFrenchFormat } from "../helpers/helpers.js";
const eventsModule = {
  state: {
    evenements: [
      /*{
        id: 1,
        titre: "Match de Football",
        lieu: "Terrain CityFoot",
        date: "18/08/2021",
        time: "18:00",
        couleur: "red",
        text: "Ça commence à faire un petit moment que nous nous sommes pas réunis ! Que diriez-vous donc d'un bon repas entre collègues ...",
        image: "equipe.jpg",
        disable: false,
      },*/
    ],
    imagesFolder: "",
  },
  mutations: {
    SET_EVENEMENTS(state, evenements) {
      evenements = evenements.map((evenement) => {
        evenement.date = DateToFrenchFormat(evenement.date);
        return evenement;
      });
      state.evenements = evenements;
    },
    ADD_EVENEMENT(state, evenement) {
      evenement.date = DateToFrenchFormat(evenement.date);
      state.evenements.push(evenement);
    },
    EDIT_EVENEMENT(state, evenement) {
      evenement.date = DateToFrenchFormat(evenement.date);
      state.evenements = state.evenements.map((e) => {
        if (e.id == evenement.id) return evenement;
        return e;
      });
    },
    DELETE_EVENEMENT(state, evenement) {
      state.evenements = state.evenements.filter((e) => e.id != evenement.id);
    },
    DISABLE_EVENEMENT(state, evenement) {
      console.log("daz l success");
      state.evenements = state.evenements.map((e) => {
        if (e.id == evenement.id) {
          e.actif = 0;
        }
        return e;
      });
    },
    ENABLE_EVENEMENT(state, evenement) {
      console.log("daz l success");
      state.evenements = state.evenements.map((e) => {
        if (e.id == evenement.id) {
          e.actif = 1;
        }
        return e;
      });
    },
    SET_IMAGE_FOLDER(state, imagesFolder) {
      state.imagesFolder = imagesFolder;
    },
    CHANGE_COLOR(state, payload) {
      state.evenements = state.evenements.map((e) => {
        if (e.evenements_categorie_id == payload.id) {
          e.couleur = payload.couleur;
          return e;
        }
        return e;
      });
    },
  },
  actions: {
    setEventsAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/evenements/")
          .then((response) => {
            commit("SET_EVENEMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addEvenementAction({ commit }, payload) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements/create", payload, config)
          .then((response) => {
            console.log("event daz", payload);

            commit("ADD_EVENEMENT", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editEvenementAction({ commit }, payload) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements/update", payload, config)
          .then((response) => {
            commit("EDIT_EVENEMENT", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteEvenementAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements/delete", payload)
          .then((response) => {
            commit("DELETE_EVENEMENT", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    disableEvenementAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements/disable", payload)
          .then((response) => {
            commit("DISABLE_EVENEMENT", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    enableEvenementAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements/enable", payload)
          .then((response) => {
            commit("ENABLE_EVENEMENT", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getEventImagesFolderAction({ commit }) {
      axios
        .post("api/evenements/sendEvenementImagesStoragePath")
        .then((response) => {
          commit("SET_IMAGE_FOLDER", response.data.payload);
        });
    },
    changeEventsCouleurAction({ commit }, payload) {
      commit("CHANGE_COLOR", payload);
    },
  },
  getters: {
    getEvents: (state) => {
      return state.evenements.filter((e) => e.actif == 1);
    },
    getArchivedEvents: (state) => {
      return state.evenements.filter((e) => e.actif == 0);
    },
    getEventImagesFolder: (state) => {
      return state.imagesFolder;
    },
  },
};
export default eventsModule;
