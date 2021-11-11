import axios from "axios";
const documentsCategoriesModule = {
  state: {
    documents_categories: [],
  },
  mutations: {
    SET_DOCUMENTS_CATEGORIES(state, documents_categories) {
      state.documents_categories = documents_categories;
    },
    ADD_DOCUMENTS_CATEGORIE(state, documents_categorie) {
      state.documents_categories.push(documents_categorie);
    },
    EDIT_DOCUMENTS_CATEGORIES(state, documents_categorie) {
      state.documents_categories = state.documents_categories.map((e) => {
        if (e.id == documents_categorie.id) return documents_categorie;
        return e;
      });
    },
    DELETE_DOCUMENTS_CATEGORIE(state, documents_categorie) {
      state.documents_categories = state.documents_categories.filter(
        (e) => e.id != documents_categorie.id
      );
    },
  },
  actions: {
    setDocuments_categoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/documents_categories/")
          .then((response) => {
            commit("SET_DOCUMENTS_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDocuments_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/documents_categories/create", payload)
          .then((response) => {
            commit("ADD_DOCUMENTS_CATEGORIE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editDocuments_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/documents_categories/update", payload)
          .then((response) => {
            commit("EDIT_DOCUMENTS_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteDocuments_categorieAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/documents_categories/delete", payload)
          .then((response) => {
            commit("DELETE_DOCUMENTS_CATEGORIE", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getDocuments_categories: (state) => {
      return state.documents_categories;
    },
  },
};
export default documentsCategoriesModule;
