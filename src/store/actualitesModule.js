import axios from "axios";
import {
  extractFrenchDateFromLaravelISODateTime,
  extractTimeFromLaravelDateTime,
} from "../helpers/helpers.js";

const actualitesModule = {
  state: {
    actualites: [],
    imagesFolder: "",
  },
  mutations: {
    SET_ACTUALITES(state, actualites) {
      actualites = actualites.map((actualite) => {
        actualite = {
          id: actualite.id,
          titre: actualite.titre,
          image: actualite.image,
          actualite_categorie_ids: actualite.categories.map((e) => {
            return e.id;
          }),
          date: extractFrenchDateFromLaravelISODateTime(actualite.created_at),
          time: extractTimeFromLaravelDateTime(actualite.created_at),
          contenu: actualite.contenu,
          actif: actualite.actif,
        };
        return actualite;
      });
      state.actualites = actualites;
    },
    ADD_ACTUALITE(state, actualite) {
      actualite = {
        id: actualite.id,
        titre: actualite.titre,
        image: actualite.image,
        actualite_categorie_ids: actualite.categories.map((e) => {
          return e.id;
        }),
        date: extractFrenchDateFromLaravelISODateTime(actualite.created_at),
        time: extractTimeFromLaravelDateTime(actualite.created_at),
        contenu: actualite.contenu,
        actif: actualite.actif,
      };
      state.actualites.push(actualite);
    },
    EDIT_ACTUALITE(state, actualite) {
      actualite = {
        id: actualite.id,
        titre: actualite.titre,
        image: actualite.image,
        actualite_categorie_ids: actualite.categories.map((e) => {
          return e.id;
        }),
        date: extractFrenchDateFromLaravelISODateTime(actualite.created_at),
        time: extractTimeFromLaravelDateTime(actualite.created_at),
        contenu: actualite.contenu,
        actif: actualite.actif,
      };
      state.actualites = state.actualites.map((e) => {
        if (e.id == actualite.id) return actualite;
        return e;
      });
    },
    DELETE_ACTUALITE(state, actualite) {
      state.actualites = state.actualites.filter((e) => e.id != actualite.id);
    },
    DISABLE_ACTUALITE(state, actualite) {
      state.actualites = state.actualites.map((e) => {
        if (e.id == actualite.id) {
          e.actif = 0;
        }
        return e;
      });
    },
    ENABLE_ACTUALITE(state, actualite) {
      state.actualites = state.actualites.map((e) => {
        if (e.id == actualite.id) {
          e.actif = 1;
        }
        return e;
      });
    },
    SET_IMAGE_FOLDER(state, imagesFolder) {
      state.imagesFolder = imagesFolder;
    },
  },
  actions: {
    setActualitesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/actualites/")
          .then((response) => {
            commit("SET_ACTUALITES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addActualiteAction({ commit }, payload) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites/create", payload, config)
          .then((response) => {
            commit("ADD_ACTUALITE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editActualiteAction({ commit }, payload) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites/update", payload, config)
          .then((response) => {
            commit("EDIT_ACTUALITE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteActualiteAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites/delete", payload)
          .then((response) => {
            commit("DELETE_ACTUALITE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    disableActualiteAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites/disable", payload)
          .then((response) => {
            commit("DISABLE_ACTUALITE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    enableActualiteAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites/enable", payload)
          .then((response) => {
            commit("ENABLE_ACTUALITE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getActualiteImagesFolderAction({ commit }) {
      axios
        .post("api/actualites/sendActualiteImagesStoragePath")
        .then((response) => {
          commit("SET_IMAGE_FOLDER", response.data.payload);
        });
    },
  },
  getters: {
    getActualites: (state) => {
      return state.actualites;
    },
    getActualiteImagesFolder: (state) => {
      return state.imagesFolder;
    },
  },
};
export default actualitesModule;
