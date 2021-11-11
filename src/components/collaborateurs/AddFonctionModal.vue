<template>
  <v-app>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="1000px">
        <v-card>
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white">Departements :</span>
          </v-card-title>
          <v-card-text class="p-0 py-5">
            <v-container>
              <v-row>
                <v-col cols="10">
                  <v-select
                    :items="fonctionsList"
                    item-text="libelle"
                    item-value="id"
                    v-model="departementId"
                    label="Selectionner un Departement"
                    @change="departementIdChanged"
                    dense
                    hide-details
                    ref="fonctionsSelect"
                  ></v-select>
                </v-col>
                <v-col cols="2" class="action">
                  <v-row>
                    <v-col
                      v-show="departement.createdBy != null"
                      cols="4"
                      class="edit"
                      ><span
                        class="actionButton"
                        @click="openDepartementModalForUpdate"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                          /></svg></span
                    ></v-col>
                    <v-col
                      v-show="departement.createdBy != null"
                      cols="4"
                      class="delete"
                      ><span
                        class="actionButton"
                        @click="openModalForConfirmDelete"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                          /></svg></span
                    ></v-col>
                    <v-col cols="4" class="add"
                      ><span
                        class="actionButton"
                        @click="openDepartementModalForAdd"
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
                              <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                            </g>
                          </g></svg></span
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="6" class="hightLights_title"
                  ><span>Créé par : {{ departement.createdBy }}</span></v-col
                >
                <v-col cols="6" class="hightLights_title"
                  ><span
                    >Modifié par :
                    {{
                      departement.createdBy != null
                        ? departement.updatedBy != null
                          ? departement.updatedBy
                          : "pas encore"
                        : ""
                    }}</span
                  ></v-col
                >
                <v-col
                  cols="12"
                  class="hightLights_title fonctionsHeader action"
                >
                  <span>{{
                    " Fonctions (" +
                    (departement.createdBy != null ? postsList.length : " - ") +
                    ") "
                  }}</span>
                  <span class="add" v-if="departement.createdBy != null"
                    ><span
                      @click="openPostModalForAdd"
                      style="padding-top: 2px !important"
                      class="actionButton"
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
                            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                          </g>
                        </g></svg></span
                  ></span>
                </v-col>
                <v-col class="table">
                  <v-row class="header">
                    <v-col class="3 columnHeader"><span>Fonction</span></v-col>
                    <v-col class="3 columnHeader"><span>Créé par</span></v-col>
                    <v-col class="3 columnHeader"
                      ><span>Modifié par</span></v-col
                    >
                    <v-col class="3 columnHeader"><span>Actions</span></v-col>
                  </v-row>
                  <v-row class="body" ref="postsRef">
                    <slot v-for="post in postsList">
                      <v-row
                        class="tableRow mx-0"
                        @click="
                          OpenFichePosteContentFunction(
                            departement.libelle,
                            post.libelle,
                            post.fichePoste
                          )
                        "
                      >
                        <v-col :key="post.id + 'a'" cols="3" class="column"
                          ><span>{{ post.libelle }}</span></v-col
                        >
                        <v-col :key="post.id + 'b'" cols="3" class="column"
                          ><span>{{ post.createdBy }}</span></v-col
                        >
                        <v-col :key="post.id + 'c'" cols="3" class="column"
                          ><span>{{
                            post.updatedBy ? post.updatedBy : "pas encore"
                          }}</span></v-col
                        >
                        <v-col
                          :key="post.id + 'd'"
                          cols="3"
                          class="column action"
                        >
                          <v-row>
                            <v-col cols="6" class="edit"
                              ><span
                                class="actionButton"
                                style="padding-top: 0"
                                @click="
                                  openPostModalForUpdate(post);
                                  stopProp($event);
                                "
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  fill="#000000"
                                >
                                  <path d="M0 0h24v24H0z" fill="none" />
                                  <path
                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                  /></svg></span
                            ></v-col>
                            <v-col cols="6" class="delete"
                              ><span
                                class="actionButton"
                                style="padding-top: 0"
                                @click="
                                  openModalForConfirmDeleteForPosts(post.id);
                                  stopProp($event);
                                "
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  fill="#000000"
                                >
                                  <path d="M0 0h24v24H0z" fill="none" />
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path
                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                                  /></svg></span
                            ></v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </slot>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <small
              id="ErrorMsg"
              :class="{ 'd-none': !showErrorMsg }"
              style="color: red; font-size: 16px"
              >{{ errorMsgContent }}</small
            >
          </v-card-text>
        </v-card>
      </v-dialog>
      <AddDepartementOrFonction
        v-model="dialog2"
        :data="formDialog"
        @resetPost="resetPost"
        @departementIdChangedAfterAdding="departementIdChangedAfterAdding"
        @resetThisPage="resetThisPage"
        @departementIdChanged="departementIdChanged"
        @changeinFonction="$emit('changeinFonction')"
        class="d-none"
      />
      <FichePoste
        v-model="dialog3"
        :posteContent="OpenPosteContent"
        class="d-none"
      />
      <ConfirmalModal
        v-model="dialog4"
        @action="handle_function_call"
        :actionValue="actionValue"
        :actionMessage="actionMessage"
        class="d-none"
      />
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import AddDepartementOrFonction from "./AddDepartementOrFonction.vue";
import FichePoste from "./FichePoste.vue";
import ConfirmalModal from "../shared/modal/ConfirmalModal.vue";

export default {
  components: { AddDepartementOrFonction, FichePoste, ConfirmalModal },
  props: ["value"],
  data: () => ({
    departement: {},
    errorMsgContent: "",
    showErrorMsg: false,
    departementId: "",
    dialog2: false,
    formDialog: {
      departement: {},
      post: null,
    },
    OpenPosteContent: {},
    dialog3: false,
    dialog4: false,
    actionName: "",
    actionValue: null,
    actionMessage: "",
  }),
  methods: {
    ...mapActions([
      "getFonctionPostsAction",
      "deleteFonctionAction",
      "deletePostAction",
      "clearPosts",
    ]),
    closeDialog() {
      this.resetThisPage();
      this.dialog = false;
    },
    departementIdChanged() {
      this.departement = this.fonctionsList.filter(
        (e) => e.id == this.departementId
      )[0];
      this.getFonctionPostsAction(this.departementId);
    },
    departementIdChangedAfterAdding(id) {
      this.departement = this.fonctionsList.filter((e) => e.id == id)[0];
      this.departementId = this.departement.id;
      this.getFonctionPostsAction(this.departementId);
    },
    openDepartementModalForAdd() {
      this.formDialog.departement = {
        libelle: "",
      };
      this.dialog2 = true;
    },
    openDepartementModalForUpdate() {
      this.formDialog.departement = { ...this.departement };
      this.dialog2 = true;
    },
    openPostModalForAdd() {
      this.formDialog.departement = { ...this.departement };
      this.formDialog.post = {
        id: null,
        libelle: "",
        fichePoste: "",
        departement_id: this.departementId,
      };
      this.dialog2 = true;
    },
    openPostModalForUpdate(post) {
      this.formDialog.departement = { ...this.departement };
      this.formDialog.post = { ...post };
      this.dialog2 = true;
    },
    resetPost() {
      this.formDialog.departement = {};
      this.formDialog.post = null;
    },
    resetThisPage() {
      this.departement = {};
      this.departementId = "";
      this.$refs.fonctionsSelect.reset();
      this.clearPosts();
    },
    deleteFonction() {
      this.deleteFonctionAction({
        id: this.departementId,
      }).then(async () => {
        this.$emit("changeinFonction");
        this.resetThisPage();
      });
    },
    deletePost(id) {
      this.deletePostAction({
        id: id,
      });
    },
    OpenFichePosteContentFunction(departementName, libelle, fichePoste) {
      this.OpenPosteContent = {
        fichePoste: fichePoste,
        departementName: departementName,
        libelle: libelle,
      };
      this.dialog3 = true;
    },
    stopProp: function (event) {
      event.stopPropagation();
    },
    openModalForConfirmDelete() {
      this.actionName = "deleteFonction";
      this.actionMessage = "Voulez-vous vraiment supprimer ce departement?";

      this.dialog4 = true;
    },
    openModalForConfirmDeleteForPosts(id) {
      this.actionName = "deletePost";
      this.actionValue = id;
      this.actionMessage = "Voulez-vous vraiment supprimer cette fonction?";
      this.dialog4 = true;
    },
    handle_function_call() {
      if (this.actionValue != null) {
        this[this.actionName](this.actionValue);
      } else {
        this[this.actionName]();
      }
    },
  },
  computed: {
    ...mapGetters(["getFonctions", "getPosts"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    fonctionsList() {
      if (!this.dialog) return [];
      return this.getFonctions;
    },
    postsList() {
      if (this.departementId == null) return [];
      return this.getPosts;
    },
  },
  watch: {
    dialog: {
      immediate: false,
      handler(val) {
        if (val == false) {
          this.resetThisPage();
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.departementField {
  width: 100%;
}
.annuler {
  display: inline-block;
  text-align: center;
  padding-top: 21px;
  width: 203px;
  height: 56px;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  color: #4762f1;
  font-size: 16px;
  font-family: Poppins-Bold, Poppins;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  float: left;
}
.envoyer {
  display: inline-block;
  text-align: center;
  padding-top: 18px;
  width: 203px;
  height: 56px;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  background-color: #4762f1;
  color: white;
  font-size: 16px;
  font-family: Poppins-Bold, Poppins;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  float: right;
}
.envoyer:hover {
  background-color: #4762f1ad;
}
.envoyer:active {
  background-color: #4762f1;
}
.annuler:hover {
  background-color: #6c757d2b;
}
.annuler:active {
  background-color: white;
}
.table {
  border-top: 1px solid #21252914;
  .header {
    border: none;
    font: normal normal 600 14px/30px Poppins;
    color: #848484;
    box-shadow: 1px 3px 10px #00000029;
    .columnHeader {
      border-bottom: 1px solid #87b0e64f;
    }
  }
  .body {
    min-height: 500px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    align-content: start;
    .tableRow {
      max-height: 82px;
      width: 100%;
      cursor: pointer;
      margin-top: 10px;
    }
    .tableRow:hover {
      background-color: rgba(128, 128, 128, 0.111);
    }
    .column {
      border-top: none;
      border-bottom: 1px solid #87b0e64f;
      color: #848484;
      font: normal normal normal 14px/30px Poppins;
      letter-spacing: 0px;
      color: #848484;
      min-height: 55px;
    }
  }

  * {
    text-align: center;
  }
}
.action .actionButton {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 22px;
  padding-top: 5px;
  cursor: pointer;
  svg {
    fill: white;
  }
}
.edit {
  .actionButton {
    background-color: #bfbfbf;
    text-align: center;
  }
  text-align: right !important;
  .actionButton:hover {
    background-color: #bfbfbfc6;
  }
}
.delete {
  .actionButton {
    background-color: rgb(255, 71, 71);
    text-align: center;
  }
  text-align: left !important;
  .actionButton:hover {
    background-color: rgba(255, 71, 71, 0.708);
  }
}
.add {
  .actionButton {
    background-color: #4762f1;
    text-align: center;
  }
  text-align: left !important;
  .actionButton:hover {
    background-color: #4763f1b8;
  }
}

.hightLights_title {
  border: none;
  font: normal normal 600 14px/30px Poppins;
  color: #848484;
  box-shadow: 1px 3px 10px #00000029;
  border-top: 1px solid #00000040;
  text-align: center;
}
.fonctionsHeader {
  text-align: left;
}
</style>
