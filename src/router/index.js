import Vue from "vue";
import VueRouter from "vue-router";
import TableauDeBoard from "@/components/dashboard/TableauDeBoard.vue";
import Evenements from "@/components/evenements/Evenements.vue";
import Actualites from "@/components/actualites/Actualites.vue";
import Collaborateurs from "@/components/collaborateurs/Collaborateurs.vue";
import Conges from "@/components/conges/Conges.vue";
import Bibliotheque from "@/components/bibliotheque/Bibliotheque.vue";
import Documents from "@/components/documents/Documents.vue";
import Profil from "@/components/profil/Profil.vue";
import Habilitations from "@/components/habilitations/Habilitations.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    alias: "/",
    name: "Dashboard",
    component: TableauDeBoard,
  },
  {
    path: "/evenements",
    name: "Evenements",
    component: Evenements,
  },
  {
    path: "/actualites",
    name: "Actualites",
    component: Actualites,
  },
  {
    path: "/collaborateurs",
    name: "Collaborateurs",
    component: Collaborateurs,
  },
  {
    path: "/conges",
    name: "Conges",
    component: Conges,
  },
  {
    path: "/bibliotheque",
    name: "Bibliotheque",
    component: Bibliotheque,
  },
  {
    path: "/documents",
    name: "Documents",
    component: Documents,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/habilitations",
    name: "Habilitations",
    component: Habilitations,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
