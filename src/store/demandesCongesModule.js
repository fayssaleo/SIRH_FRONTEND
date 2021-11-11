/* eslint-disable prettier/prettier */
import axios from "axios";
import { DateToFrenchFormat, CalculDays } from "../helpers/helpers.js";
const demandesCongesModule = {
  state: {
    demmandeConges: [
      {
        id: 1,
        type: "Annuel",
        demandeur: "afayssal",
        dateDemande: "01/01/2021",
        dateDebut: "15/01/2021",
        dateFin: "01/03/2021",
        nombreDeJours: 14,
        statut: "valide",
        motif: "",
        feedback_msg: "",
        demiJourAuDebut: 0,
        demiJourAuFin: 1,
      },
      {
        id: 2,
        type: "Naissance",
        demandeur: "bfayssal",
        dateDemande: "02/01/2020",
        dateDebut: "15/01/2021",
        dateFin: "01/03/2020",
        nombreDeJours: 7,
        statut: "refuse",
        motif: "",
        feedback_msg: "",
        demiJourAuDebut: 0,
        demiJourAuFin: 0,
      },
      {
        id: 3,
        type: "Maladie",
        demandeur: "cfayssal",
        dateDemande: "03/01/2019",
        dateDebut: "15/01/2021",
        dateFin: "01/03/2021",
        nombreDeJours: 8,
        statut: "En Attente",
        motif: "",
        feedback_msg: "",
        demiJourAuDebut: 1,
        demiJourAuFin: 1,
      },
    ],
    congeCategories: [],
    congesTypes: [],
    congesTypesByCategorie: [],
  },
  mutations: {
    SET_CONGESTYPES(state, congesTypes) {
      state.congesTypes = congesTypes;
    },
    SET_DEMANDES_CONGES(state, demmandeConges) {
      state.demmandeConges = demmandeConges.map((d) => {
        d.demandeur = `${d.prenom.slice(0, 1).toUpperCase()}.${d.nom.slice(0, 1).toUpperCase()+d.nom.slice(1).toUpperCase()}`;
        d.nombreDeJours = CalculDays(new Date(d.dateDebut), new Date(d.dateFin));
        d.dateDemande = DateToFrenchFormat(d.dateDemande);
        d.dateDebut = DateToFrenchFormat(d.dateDebut);
        d.dateFin = DateToFrenchFormat(d.dateFin);
        return d;
      });
    },
    ADD_DEMANDES_CONGES(state, demmandeConge) {
      let demande = {...demmandeConge};
      demande.demandeur =  `${demande.prenom.slice(0, 1).toUpperCase()}.${demande.nom.slice(0, 1).toUpperCase() + demande.nom.slice(1).toUpperCase()}`;
      demande.nombreDeJours = CalculDays(new Date(demande.dateDebut), new Date(demande.dateFin));
      demande.dateDemande = DateToFrenchFormat(demande.dateDemande);
      demande.dateDebut = DateToFrenchFormat(demande.dateDebut);
      demande.dateFin = DateToFrenchFormat(demande.dateFin);
      state.demmandeConges.push(demande);
    },
    ACC_DEMANDES_CONGES(state, demmandeConge){
      state.demmandeConges=state.demmandeConges.map(d=>{
        if(d.id==demmandeConge.id){
          let demande = {...demmandeConge};
          demande.demandeur =  `${demande.prenom.slice(0, 1).toUpperCase()}.${demande.nom.slice(0, 1).toUpperCase() + demande.nom.slice(1).toUpperCase()}`;
          demande.nombreDeJours = CalculDays(new Date(demande.dateDebut), new Date(demande.dateFin));
          demande.dateDemande = DateToFrenchFormat(demande.dateDemande);
          demande.dateDebut = DateToFrenchFormat(demande.dateDebut);
          demande.dateFin = DateToFrenchFormat(demande.dateFin);
          return demande;
        }
        return d;
      });
    },
    REF_DEMANDES_CONGES(state, demmandeConge){
      state.demmandeConges=state.demmandeConges.map(d=>{
        if(d.id==demmandeConge.id){
          let demande = {...demmandeConge};
          demande.demandeur =  `${demande.prenom.slice(0, 1).toUpperCase()}.${demande.nom.slice(0, 1).toUpperCase() + demande.nom.slice(1).toUpperCase()}`;
          demande.nombreDeJours = CalculDays(new Date(demande.dateDebut), new Date(demande.dateFin));
          demande.dateDemande = DateToFrenchFormat(demande.dateDemande);
          demande.dateDebut = DateToFrenchFormat(demande.dateDebut);
          demande.dateFin = DateToFrenchFormat(demande.dateFin);
          return demande;
        }
        return d;
      });
    },
    FEED_MSG_EDITER(state, demmandeConge){
      state.demmandeConges=state.demmandeConges.map(d=>{
        if(d.id==demmandeConge.id){
          let demande = {...demmandeConge};
          demande.demandeur =  `${demande.prenom.slice(0, 1).toUpperCase()}.${demande.nom.slice(0, 1).toUpperCase() + demande.nom.slice(1).toUpperCase()}`;
          demande.nombreDeJours = CalculDays(new Date(demande.dateDebut), new Date(demande.dateFin));
          demande.dateDemande = DateToFrenchFormat(demande.dateDemande);
          demande.dateDebut = DateToFrenchFormat(demande.dateDebut);
          demande.dateFin = DateToFrenchFormat(demande.dateFin);
          return demande;
        }
        return d;
      });
    },
    SET_CONGE_CATEGORIE(state, demmandeConge){
      state.congeCategories=demmandeConge;
    },
    SET_CONGESTYPES_BY_CATEGORIE(state,congesTypesByCategorie){
      state.congesTypesByCategorie=congesTypesByCategorie;
    }
  },
  actions: {
    setDemandeCongeStatus(state, payload) {
      let id = payload.id;
      let status = payload.status;
      let decisionText = payload.decisionText;
      state.demmandeConges.map((demande) => {
        if (demande.id == id) {
          demande.status = status;
          demande.decisionText = decisionText;
        }
        return demande;
      });
    },
    getCongesTypesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/typeConges/")
          .then((response) => {
            commit("SET_CONGESTYPES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getDemmandeCongesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/demandeConges/")
          .then((response) => {
            commit("SET_DEMANDES_CONGES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDemmandeCongeAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/demandeConges/create", payload)
          .then((response) => {
            commit("ADD_DEMANDES_CONGES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    acceDemmandeCongeAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/demandeConges/accepter", payload)
          .then((response) => {
            commit("ACC_DEMANDES_CONGES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refuserDemmandeCongeAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/demandeConges/refuser", payload)
          .then((response) => {
            commit("REF_DEMANDES_CONGES", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    feedMsgEditDemandeAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/demandeConges/feedMSgEdit", payload)
          .then((response) => {
            commit("FEED_MSG_EDITER", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setCongeCategoriesAction({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/typeConges/congeCategories/")
          .then((response) => {
            commit("SET_CONGE_CATEGORIE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getCongesTypesByCategorieAction({ commit },payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/typeConges/congeCategories/congesTypes",payload)
          .then((response) => {
            commit("SET_CONGESTYPES_BY_CATEGORIE", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  
  },
  getters: {
    getDemmandeConges: (state) => {
      return state.demmandeConges;
    },
    getCongeCategorie(state){
      return state.congeCategories;

    },
    getCongesType: (state) => {
      return state.congesTypes;
    },
    getValideDemmandeConges: (state) => {
      return state.demmandeConges.filter((e) => e.status == "valide");
    },
    getCongesTypesByCategorie(state){
      return state.congesTypesByCategorie;
    }
  },
};
export default demandesCongesModule;
