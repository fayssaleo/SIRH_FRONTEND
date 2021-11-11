const documentsModule = {
  state: {
    documentsList: [
      { id: 0, libelle: "basics.pdf" },
      { id: 1, libelle: "document 2.pdf" },
      { id: 2, libelle: "document 3.pdf" },
      { id: 3, libelle: "document 4.pdf" },
    ],
    documentTypeList: [
      {
        id: 0,
        libelle: "Documents administrtif",
      },
      {
        id: 0,
        libelle: "Photos",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getDocuments: (state) => {
      return state.documentsList;
    },
  },
};
export default documentsModule;
