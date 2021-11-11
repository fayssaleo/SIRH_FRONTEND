import axios from "axios";
const collaborateursModule = {
  state: {
    collaborateurs: [
      {
        id: 0,
        prenom: "-----",
        nom: "------",
        telephone: "---------",
        telephoneUrgent: "---------",
        email: "---------------------",
        adresse: "------------------------------",
        birthday: "----------",
        lieuDeNaissance: "-----",
        sexe: "--",
        nationalite: "-----------",
        situationMatrimoniale: "-----------------",
        enfants: 0,
        cin: "-------",
        salaire: "----", 
        fonction: "--------------------",
        typeContrat: "----",
        dateEmbauche: "----------",
        departement: "---------------",
        actif: true,
      },
    ],
    photosFolder: "",
  },
  mutations: {
    SET_COLLABORATEURS(state, collaborateurs) {
      state.collaborateurs = collaborateurs;
    },
    ADD_COLLABORATEUR(state, collaborateur) {
      state.collaborateurs.push(collaborateur);
    },
    EDIT_COLLABORATEUR(state, collaborateur) {
      state.collaborateurs = state.collaborateurs.map((c) => {
        if (c.id == collaborateur.id) {
          c = collaborateur;
        }
        return c;
      });
    },
    DISABLE_COLLABORATEUR(state, collaborateur) {
      state.collaborateurs = state.collaborateurs.map((c) => {
        if (c.id == collaborateur.id) {
          c.actif = 0;
        }
        return c;
      });
    },
    ENABLE_COLLABORATEUR(state, collaborateur) {
      state.collaborateurs = state.collaborateurs.map((c) => {
        if (c.id == collaborateur.id) {
          c.actif = 1;
        }
        return c;
      });
    },
    SET_PHOTOS_FOLDER(state, photosFolder) {
      console.log("photosFolder", photosFolder);
      console.log("state", state);

      state.photosFolder = photosFolder;
    },
  },
  actions: {
    getCollaborateursAction({ commit }) {
      axios.get("api/collaborateurs").then((response) => {
        commit("SET_COLLABORATEURS", response.data.payload);
      });
    },
    getPhotosFolderAction({ commit }) {
      axios.post("api/collaborateurs/photoFolderUrl").then((response) => {
        console.log("photosFolder1", response.data.payload);

        commit("SET_PHOTOS_FOLDER", response.data.payload);
      });
    },
    addCollaborateurAction({ commit }, payload) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios.post("api/collaborateurs/create", payload, config).then((response) => {
        commit("ADD_COLLABORATEUR", response.data.payload);
      });
    },
    editCollaborateurAction({ commit }, payload) {
      axios.post("api/collaborateurs/update", payload).then((response) => {
        commit("EDIT_COLLABORATEUR", response.data.payload);
      });
    },
    disableCollaborateurAction({ commit }, payload) {
      axios.post("api/collaborateurs/disable", payload).then((response) => {
        commit("DISABLE_COLLABORATEUR", response.data.payload);
      });
    },
    enableCollaborateurAction({ commit }, payload) {
      axios.post("api/collaborateurs/enable", payload).then((response) => {
        commit("ENABLE_COLLABORATEUR", response.data.payload);
      });
    },
  },
  getters: {
    getCollaborateurs: (state) => {
      return state.collaborateurs;
    },
    getPhotosFolder: (state) => {
      return state.photosFolder;
    },
  },
};
export default collaborateursModule;
