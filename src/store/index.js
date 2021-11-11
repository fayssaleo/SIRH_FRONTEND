import Vue from "vue";
import Vuex from "vuex";
import userModule from "./userModule.js";
import collaborateursModule from "./collaborateursModule.js";
import actualitesModule from "./actualitesModule.js";
import demandesCongesModule from "./demandesCongesModule.js";
import demandesDocumentModule from "./demandesDocumentModule.js";
import eventsModule from "./eventsModule.js";
import fonctionsModule from "./fonctionsModule.js";
import documentsModule from "./documentsModule.js";
import departementsModule from "./departementsModule.js";
import rolesModule from "./rolesModule.js";
import eventsCategoriesModule from "./eventsCategoriesModule.js";
import actualitesCategoriesModule from "./actualitesCategoriesModule.js";
import documentsCategoriesModule from "./documentsCategoriesModule.js";
import VuexPersist from "vuex-persist";
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "cache", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
  reducer: (state) => ({
    userModule: state.userModule,
    // getRidOfThisModule: state.getRidOfThisModule (No one likes it.)
  }),
});
let store = null;
export default function () {
  store = new Vuex.Store({
    modules: {
      userModule,
      collaborateursModule,
      actualitesModule,
      demandesCongesModule,
      demandesDocumentModule,
      eventsModule,
      fonctionsModule,
      documentsModule,
      departementsModule,
      rolesModule,
      eventsCategoriesModule,
      actualitesCategoriesModule,
      documentsCategoriesModule,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [vuexLocalStorage.plugin],
  });

  return store;
}
/* export default new Vuex.Store({
  modules: {
    userModule,
    collaborateursModule,
    newsModule,
    demandesCongesModule,
    demandesDocumentModule,
    eventsModule,
    fonctionsModule,
    documentsModule,
    departementsModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [vuexLocalStorage.plugin],
}); */
export { store };
