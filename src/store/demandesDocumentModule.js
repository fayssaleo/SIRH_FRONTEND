import axios from "axios";
import { DateToFrenchFormat } from "../helpers/helpers.js";

const demandesDocumentModule = {
  state: {
    demandesDocuments: [
      /* {
        id: 1,
        fullName: "Lyric Wells",
        documentType: "Attestation de travail",
        dateDemande: "10/04/2021",
        dateValidation: "",
        status: "En Attente",
      }, */
    ],
    demandeDocumentCategories: [],
  },
  mutations: {
    SET_DEMANDES_DOCUMENTS_CATEGORIES(state, demandeDocumentCategories) {
      state.demandeDocumentCategories = demandeDocumentCategories;
    },
    ADD_DEMANDES_DOCUMENTS(state, demandeDocument) {
      demandeDocument.created_at = DateToFrenchFormat(
        demandeDocument.created_at
      );
      demandeDocument.updated_at = DateToFrenchFormat(
        demandeDocument.updated_at
      );
      if (demandeDocument.dateValidation != null)
        demandeDocument.dateValidation = DateToFrenchFormat(
          demandeDocument.dateValidation
        );
      demandeDocument.dateDemande = DateToFrenchFormat(
        demandeDocument.dateDemande
      );
      state.demandesDocuments.push(demandeDocument);
    },
    SET_DEMANDES_DOCUMENTS(state, demandesDocuments) {
      state.demandesDocuments = demandesDocuments.map((d) => {
        d.created_at = DateToFrenchFormat(d.created_at);
        d.updated_at = DateToFrenchFormat(d.updated_at);
        if (d.dateValidation != null)
          d.dateValidation = DateToFrenchFormat(d.dateValidation);
        d.dateDemande = DateToFrenchFormat(d.dateDemande);
        return d;
      });
    },
    ACCEPTER_DEMANDES_DOCUMENTS(state, demandeDocument) {
      state.demandesDocuments = state.demandesDocuments.map((doc) => {
        if (doc.id == demandeDocument.id) {
          demandeDocument.created_at = DateToFrenchFormat(
            demandeDocument.created_at
          );
          demandeDocument.updated_at = DateToFrenchFormat(
            demandeDocument.updated_at
          );
          if (demandeDocument.dateValidation != null)
            demandeDocument.dateValidation = DateToFrenchFormat(
              demandeDocument.dateValidation
            );
          demandeDocument.dateDemande = DateToFrenchFormat(
            demandeDocument.dateDemande
          );
          return demandeDocument;
        }
        return doc;
      });
    },
    REFUSER_DEMANDES_DOCUMENTS(state, demandeDocument) {
      state.demandesDocuments = state.demandesDocuments.map((doc) => {
        if (doc.id == demandeDocument.id) {
          demandeDocument.created_at = DateToFrenchFormat(
            demandeDocument.created_at
          );
          demandeDocument.updated_at = DateToFrenchFormat(
            demandeDocument.updated_at
          );
          if (demandeDocument.dateValidation != null)
            demandeDocument.dateValidation = DateToFrenchFormat(
              demandeDocument.dateValidation
            );
          demandeDocument.dateDemande = DateToFrenchFormat(
            demandeDocument.dateDemande
          );
          return demandeDocument;
        }
        return doc;
      });
    },
    FEED_MSG_DEMANDES_DOCUMENTS(state, demandeDocument) {
      state.demandesDocuments = state.demandesDocuments.map((doc) => {
        if (doc.id == demandeDocument.id) {
          demandeDocument.created_at = DateToFrenchFormat(
            demandeDocument.created_at
          );
          demandeDocument.updated_at = DateToFrenchFormat(
            demandeDocument.updated_at
          );
          if (demandeDocument.dateValidation != null)
            demandeDocument.dateValidation = DateToFrenchFormat(
              demandeDocument.dateValidation
            );
          demandeDocument.dateDemande = DateToFrenchFormat(
            demandeDocument.dateDemande
          );
          return demandeDocument;
        }
        return doc;
      });
    },
    DOWNLOAD_DOCUMENT_FILE(state, response) {
      let fullname = JSON.parse(response.config.data).fullName;
      let filename =
        JSON.parse(response.config.data).documentType +
        " - " +
        fullname +
        ".pdf";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
  },
  actions: {
    setDemandesDocumentsCategoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/demandeDocAdmin/categories")
          .then((response) => {
            commit("SET_DEMANDES_DOCUMENTS_CATEGORIES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDemandesDocumentsAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/demandeDocAdmin/create", payload)
          .then((response) => {
            commit("ADD_DEMANDES_DOCUMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setDemandesDocumentsAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/demandeDocAdmin/index")
          .then((response) => {
            commit("SET_DEMANDES_DOCUMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    accepteDemandesDocumentsAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/demandeDocAdmin/accepter", payload)
          .then((response) => {
            commit("ACCEPTER_DEMANDES_DOCUMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refuserDemandesDocumentsAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/demandeDocAdmin/refuser", payload)
          .then((response) => {
            commit("REFUSER_DEMANDES_DOCUMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    feedMsgDemandesDocumentsAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/demandeDocAdmin/refuser", payload)
          .then((response) => {
            commit("FEED_MSG_DEMANDES_DOCUMENTS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    downloadDocuemntFileAction({ commit }, payload) {
      console.log("payload", payload);
      return new Promise((resolve, reject) => {
        axios
          .post("/api/demandeDocAdmin/downloadDocumentFile", payload, {
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/pdf",
            },
          })
          .then((response) => {
            commit("DOWNLOAD_DOCUMENT_FILE", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getDemandesDeDocuments: (state) => {
      return state.demandesDocuments;
    },
    getDemandeDocumentCategories: (state) => {
      return state.demandeDocumentCategories;
    },
  },
};
export default demandesDocumentModule;
