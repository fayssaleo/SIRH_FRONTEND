import axios from "axios";
const actualitesCategoriesModule = {
  state: {
    actualites_categories: [
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
  },
  mutations: {
    SET_ACTUALITES_CATEGORIES(state, actualites_categories) {
      state.actualites_categories = actualites_categories;
    },
    ADD_ACTUALITES_CATEGORIE(state, actualites_categorie) {
      state.actualites_categories.push(actualites_categorie);
    },
    EDIT_ACTUALITES_CATEGORIES(state, actualites_categorie) {
      state.actualites_categories = state.actualites_categories.map((e) => {
        if (e.id == actualites_categorie.id) return actualites_categorie;
        return e;
      });
    },
    DELETE_ACTUALITES_CATEGORIE(state, actualites_categorie) {
      state.actualites_categories = state.actualites_categories.filter(
        (e) => e.id != actualites_categorie.id
      );
    },
  },
  actions: {
    setActualites_categoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/actualites_categories/")
          .then((response) => {
            commit("SET_ACTUALITES_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addActualites_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites_categories/create", payload)
          .then((response) => {
            commit("ADD_ACTUALITES_CATEGORIE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editActualites_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites_categories/update", payload)
          .then((response) => {
            commit("EDIT_ACTUALITES_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteActualites_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/actualites_categories/delete", payload)
          .then((response) => {
            commit("DELETE_ACTUALITES_CATEGORIE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getActualites_categories: (state) => {
      return state.actualites_categories;
    },
  },
};
export default actualitesCategoriesModule;
