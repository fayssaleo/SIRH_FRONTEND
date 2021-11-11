<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" temprory max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white">Details : </span>
          </v-card-title>
          <v-card-text class="pl-0 pr-0">
            <v-container class="container pb-0">
              <v-row class="pl-0 pr-0">
                <div class="theBody pr-0 pl-0">
                  <img
                    class="modalImage"
                    :src="
                      require('../../assets/eventsPictures/evenement_defaut.png')
                    "
                    alt=""
                    v-if="modalEventImage == null"
                  />
                  <img
                    class="modalImage"
                    :src="getEventImagesFolder + '/' + modalEventImage"
                    alt=""
                    v-else
                  />

                  <p class="modalDate mb-0">
                    <v-row>
                      <v-col cols="6"
                        ><span class="pr-2"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            style="fill: #87b0e6"
                          >
                            <g transform="translate(-3.375 -3.375)">
                              <path
                                d="M14.864,3.375a11.5,11.5,0,1,0,11.511,11.5A11.5,11.5,0,0,0,14.864,3.375Zm.011,20.7a9.2,9.2,0,1,1,9.2-9.2A9.2,9.2,0,0,1,14.875,24.075Z"
                              />
                              <path
                                d="M18.263,10.688H16.538v6.9l6.038,3.621.862-1.415-5.175-3.069Z"
                                transform="translate(-2.813 -1.563)"
                              />
                            </g></svg></span
                        ><span class="eventDate">{{ modalEventDate }}</span>
                        <span class="eventDate">
                          à {{ modalEventTime }}</span
                        ></v-col
                      >

                      <v-col cols="6">
                        <span class="modalCategorie"
                          >Categorie :
                          <span :style="{ color: couleur + ' !important' }">{{
                            categorie_name
                          }}</span></span
                        ></v-col
                      >
                    </v-row>
                  </p>
                  <v-row>
                    <v-col cols="8"
                      ><p class="modalTitle">
                        {{ modalEventTitle.toUpperCase() }}
                      </p></v-col
                    >
                    <v-col cols="4" class="invites">
                      <span class="spansHolder" @click="openInvitesModal">
                        <span class="invitesIcon enAttente"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <g><rect fill="none" height="24" width="24" /></g>
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z"
                                  />
                                </g>
                              </g>
                            </g></svg
                        ></span>
                        <span class="val">({{ invitedCollsEnAttente }})</span>
                      </span>
                      <span class="spansHolder" @click="openAcceptesModal">
                        <span class="invitesIcon presents">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            />
                          </svg>
                        </span>
                        <span class="val">({{ invitedCollsAccepted }})</span>
                      </span>
                      <span class="spansHolder" @click="openRefusesModal">
                        <span class="invitesIcon absents"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                            /></svg
                        ></span>
                        <span class="val">({{ invitedCollsRefused }})</span>
                      </span>
                    </v-col>
                  </v-row>

                  <p class="modalText">
                    {{ modalEventText }}
                  </p>
                </div>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span
                    class="archive modalBtn"
                    v-if="actif == 1"
                    @click="openDisableEvenement"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36px"
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"
                      />
                    </svg>
                  </span>
                  <span
                    class="archive modalBtn"
                    v-else
                    @click="openEnableEvenement"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="36px"
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="#000000"
                    >
                      <g><rect fill="none" height="24" width="24" x="0" /></g>
                      <g>
                        <g>
                          <g>
                            <path
                              d="M20.55,5.22l-1.39-1.68C18.88,3.21,18.47,3,18,3H6C5.53,3,5.12,3.21,4.85,3.55L3.46,5.22C3.17,5.57,3,6.01,3,6.5V19 c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6.01,20.83,5.57,20.55,5.22z M12,9.5l5.5,5.5H14v2h-4v-2H6.5L12,9.5z M5.12,5 l0.82-1h12l0.93,1H5.12z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span class="edit modalBtn" @click="openEditEvenement">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36px"
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </span>
                  <span class="delete modalBtn" @click="openDeleteEvenement">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36px"
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                    </svg>
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <ConfirmalModal
        v-if="dialog2"
        v-model="dialog2"
        :actionMessage="'voulez-vous vraiment supprimer cet evenement?'"
        @action="deleteEvenement"
      />
      <ConfirmalModal
        v-if="dialog3"
        v-model="dialog3"
        :actionMessage="'voulez-vous vraiment archiver cet evenement?'"
        @action="disableEvenement"
      />
      <ConfirmalModal
        v-if="dialog4"
        v-model="dialog4"
        :actionMessage="'voulez-vous vraiment désarchiver cet evenement?'"
        @action="enableEvenement"
      />
      <AddEventModal
        v-model="dialog5"
        v-if="dialog5"
        :selectedDay="modalEventDate"
        :modalEventid="modalEventid"
        :modalEventTitle="modalEventTitle"
        :modalEventImage="modalEventImage"
        :modalEventDate="modalEventDate"
        :modalEventPlace="modalEventPlace"
        :modalEventText="modalEventText"
        :modalEventTime="modalEventTime"
        :actif="actif"
        :couleur="couleur"
        :categorie_name="categorie_name"
        :evenements_categorie_id="evenements_categorie_id"
        :modeEdit="true"
        :invites="invites"
        @openDetailsModal="openDetailsModal"
      />
      <ListInvites
        v-model="dialog6"
        v-if="dialog6"
        :invites="listForInvitesModal"
        :statut="statut"
      />
    </v-row>
  </v-app>
</template>
<script>
import ConfirmalModal from "../shared/modal/ConfirmalModal.vue";
import { mapGetters, mapActions } from "vuex";
import AddEventModal from "./AddEventModal";
import ListInvites from "./ListInvites.vue";

export default {
  components: { ConfirmalModal, AddEventModal, ListInvites },
  data() {
    return {
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      listForInvitesModal: [],
      statut:""
    };
  },
  props: [
    "value",
    "modalEventid",
    "modalEventTitle",
    "modalEventImage",
    "modalEventDate",
    "modalEventPlace",
    "modalEventText",
    "modalEventTime",
    "actif",
    "categorie_name",
    "evenements_categorie_id",
    "couleur",
    "invites",
  ],
  methods: {
    ...mapActions([
      "deleteEvenementAction",
      "disableEvenementAction",
      "enableEvenementAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    addDemandeConge() {
      this.closeDialog();
    },
    openDeleteEvenement() {
      this.dialog2 = true;
    },
    deleteEvenement() {
      this.deleteEvenementAction({ id: this.modalEventid }).then(() => {
        this.closeDialog();
      });
    },
    openDisableEvenement() {
      this.dialog3 = true;
    },
    disableEvenement() {
      this.disableEvenementAction({ id: this.modalEventid }).then(() => {
        this.closeDialog();
      });
    },
    openEnableEvenement() {
      this.dialog4 = true;
    },
    openEditEvenement() {
      this.closeDialog();
      this.dialog5 = true;
    },
    enableEvenement() {
      this.enableEvenementAction({ id: this.modalEventid }).then(() => {
        this.closeDialog();
      });
    },
    openDetailsModal() {
      this.$emit("openDetailsModal");
    },
    openInvitesModal() {
      this.listForInvitesModal = this.invites
        .filter((e) => e.statut == "En attente")
        .map((c) => c.collaborateur_id);
        this.statut="En attente";
      this.dialog6 = true;
    },
    openAcceptesModal() {
      this.listForInvitesModal = this.invites
        .filter((e) => e.statut == "presents")
        .map((c) => c.collaborateur_id);
        this.statut="Presents";
      this.dialog6 = true;
    },
    openRefusesModal() {
      this.listForInvitesModal = this.invites
        .filter((e) => e.statut == "absentes")
        .map((c) => c.collaborateur_id);
        this.statut="Absentes";
      this.dialog6 = true;
    },
  },
  computed: {
    ...mapGetters(["getEventImagesFolder", "getCollaborateurs"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    invitedCollsAccepted() {
      return this.invites.filter((e) => e.statut == "accepted").length;
    },
    invitedCollsRefused() {
      return this.invites.filter((e) => e.statut == "refused").length;
    },
    invitedCollsEnAttente() {
      return this.invites.filter((e) => e.statut == "En attente").length;
    },
  },
};
</script>
<style lang="scss" scoped>
#modal-1 {
  width: 840px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  border-radius: 19px;
  opacity: 1;
}
.modalDate {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #010101b0;
  opacity: 1;
  margin: 20px;
  svg {
    fill: black;
  }
}
.modalImage {
  width: 100%;
  max-height: 344px;
}

.modalText {
  height: 251px;
  text-align: left;
  font: normal normal normal 16px/19px Roboto;
  letter-spacing: 0px;
  color: #010101;
  margin-bottom: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  display: block;
  overflow-wrap: break-word;
  margin: 10px 50px;
  margin-bottom: 20px;
}
.modalButton {
  margin-left: 36%;
  width: 203px;
  height: 56px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  text-align: center;
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #4762f1;
  margin-bottom: 14px;
  opacity: 1;
}
.modalTitle {
  margin: 20px;
  text-align: left;
  overflow-wrap: break-word;
  font: normal normal 600 20px/30px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
}
@media screen and (max-width: 992px) {
  .modalButton {
    margin-left: 29%;
  }
}
::-webkit-scrollbar {
  width: 8px !important;
}
.modalCategorie {
  float: right;
  margin-right: 50px;
}
.modalBtn {
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  border: black solid 1px;
  border-radius: 25px;
  padding-top: 5px;
  margin-left: 10px;
  float: right;
  cursor: pointer;
}
.delete {
  background-color: rgb(255, 71, 71);
  border: 1px solid rgba(196, 0, 0, 0.585);
  svg {
    fill: white;
  }
}
.delete:hover {
  background-color: rgb(194, 16, 16);
}
.delete:active {
  background-color: rgb(255, 71, 71);
}
.edit,
.archive {
  background-color: white;
  border-color: #1e88e5;
  svg {
    fill: #1e88e5;
  }
}
.edit:hover,
.archive:hover {
  svg {
    fill: #1e88e585;
  }
}
.edit:active,
.archive:active {
  svg {
    fill: #1e88e5;
  }
}
.theBody {
  width: 100%;
}

.invites {
  padding-top: 35px;
  span {
    display: inline-block;
    svg {
      fill: #4762f1;
    }
  }
  .val {
    margin-right: 5px;
  }
  .invitesIcon {
    margin-right: 3px;
  }
}
.spansHolder:hover {
  cursor: pointer;
}
.spansHolder:hover {
  .invitesIcon {
    svg {
      fill: #4763f19f;
    }
  }
}
.presents {
  svg {
    fill: green !important;
  }
}
.absents {
  svg {
    fill: red !important;
  }
}
</style>
