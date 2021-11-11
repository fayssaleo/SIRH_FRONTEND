import axios from "axios";
const eventsCategoriesModule = {
  state: {
    evenements_categories: [
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
    SET_EVENEMENTS_CATEGORIES(state, evenements_categories) {
      state.evenements_categories = evenements_categories;
    },
    ADD_EVENEMENTS_CATEGORIE(state, evenements_categorie) {
      state.evenements_categories.push(evenements_categorie);
    },
    EDIT_EVENEMENTS_CATEGORIES(state, evenements_categorie) {
      state.evenements_categories = state.evenements_categories.map((e) => {
        if (e.id == evenements_categorie.id) return evenements_categorie;
        return e;
      });
    },
    DELETE_EVENEMENTS_CATEGORIE(state, evenements_categorie) {
      state.evenements_categories = state.evenements_categories.filter(
        (e) => e.id != evenements_categorie.id
      );
    },
  },
  actions: {
    setEvenements_categoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/evenements_categories/")
          .then((response) => {
            commit("SET_EVENEMENTS_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addEvenements_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements_categories/create", payload)
          .then((response) => {
            commit("ADD_EVENEMENTS_CATEGORIE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editEvenements_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements_categories/update", payload)
          .then((response) => {
            commit("EDIT_EVENEMENTS_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteEvenements_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/evenements_categories/delete", payload)
          .then((response) => {
            commit("DELETE_EVENEMENTS_CATEGORIE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getEvenements_categories: (state) => {
      return state.evenements_categories;
    },
  },
};
export default eventsCategoriesModule;
