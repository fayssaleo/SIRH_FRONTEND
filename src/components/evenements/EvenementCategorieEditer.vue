<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Gérer les categories :
            </span>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="myForm"
              v-model="isValid"
              @submit.prevent="categorie_submit"
            >
              <v-container class="container">
                <v-row>
                  <v-col cols="9"
                    ><v-select
                      ref="categorieSelectController"
                      label="Categories"
                      :items="getEvenements_categories"
                      item-text="nom"
                      item-value="id"
                      v-model="categorie.id"
                      @change="categorieSelectChange"
                      :disabled="categorieSelectdisabled"
                    ></v-select
                  ></v-col>
                  <v-col cols="3" class="px-0">
                    <b-tooltip
                      target="edit-target"
                      triggers="hover"
                      v-show="categorie.id != null"
                    >
                      modifier cette categorie
                    </b-tooltip>
                    <span
                      class="edit modalBtn"
                      id="edit-target"
                      v-show="categorie.id != null"
                      @click="editCategorie"
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
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        />
                      </svg>
                    </span>
                    <b-tooltip
                      target="delete-target"
                      triggers="hover"
                      v-show="categorie.id != null"
                    >
                      supprimer cette categorie
                    </b-tooltip>
                    <span
                      class="delete modalBtn"
                      id="delete-target"
                      v-show="categorie.id != null"
                      @click="deleteCategorieModal"
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
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        />
                      </svg>
                    </span>
                    <b-tooltip target="add-target" triggers="hover">
                      Ajouter une nouvelle categorie
                    </b-tooltip>
                    <span
                      class="edit modalBtn"
                      id="add-target"
                      @click="addCategorie"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </span>
                  </v-col>
                  <v-col
                    cols="6"
                    v-show="modeAdd == true || categorie.id != null"
                  >
                    <v-text-field
                      ref="nom"
                      label="Nom"
                      v-model="categorie.nom"
                      :disabled="infoFieldsDisabled"
                      :rules="isRequired"
                      hide-details
                      name="nom"
                    ></v-text-field
                  ></v-col>
                  <v-col
                    cols="6"
                    v-show="modeAdd == true || categorie.id != null"
                    ><v-select
                      ref="couleur"
                      label="Couleur"
                      :items="colors"
                      v-model="categorie.couleur"
                      :disabled="infoFieldsDisabled"
                      :rules="isRequired"
                      hide-details
                      name="couleur"
                    ></v-select
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="pt-0 pb-0"
                    ><small class="text-danger" :hidden="showError">{{
                      errorMsg
                    }}</small>
                  </v-col>
                  <v-col cols="12" class="pt-0 pb-0 mb-2">
                    <span class="annuler" @click="closeDialog"> ANNULER </span>
                    <v-btn
                      type="submit"
                      class="envoyer"
                      :disabled="envoyerButtonDisabled"
                    >
                      SAUVEGARDER
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <ConfirmalModal
        v-if="dialog2"
        v-model="dialog2"
        :actionMessage="'voulez-vous vraiment supprimer cette categorie?'"
        @action="deleteCategorie"
      />
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ConfirmalModal from "../shared/modal/ConfirmalModal.vue";
import rules from "../../mixins/rules";
export default {
  components: { ConfirmalModal },
  mixins: [rules],
  data() {
    return {
      isValid: false,
      colors: [
        "gray",
        "red",
        "orange",
        "yellow",
        "teal",
        "indigo",
        "purple",
        "pink",
        "blue",
        "black",
        "green",
      ],
      categorie: {
        id: null,
        nom: "",
        couleur: "",
      },
      modeAdd: false,
      infoFieldsDisabled: true,
      envoyerButtonDisabled: true,
      categorieSelectdisabled: false,
      errorMsg: "",
      showError: true,
      dialog2: false,
    };
  },

  methods: {
    ...mapActions([
      "addEvenements_categorieAction",
      "editEvenements_categorieAction",
      "deleteEvenements_categorieAction",
      "changeEventsCouleurAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    addCategorie() {
      this.modeAdd = true;
      this.modeEdit = false;
      this.$refs.categorieSelectController.reset();
      this.infoFieldsDisabled = false;
      this.infoFieldsDisabled = false;
      this.categorie.id = null;
      this.$refs.nom.reset();
      this.$refs.couleur.reset();
      this.$refs.nom.focus();
      this.envoyerButtonDisabled = false;
    },
    editCategorie() {
      this.modeEdit = true;
      this.modeAdd = false;
      this.infoFieldsDisabled = false;
      this.$refs.nom.focus();
      this.envoyerButtonDisabled = false;
    },
    categorieSelectChange() {
      let categorieToEdit = this.getEvenements_categories.filter(
        (c) => c.id == this.categorie.id
      )[0];
      this.infoFieldsDisabled = true;
      this.infoFieldsDisabled = true;
      this.categorie.nom = categorieToEdit.nom;
      this.categorie.couleur = categorieToEdit.couleur;
      this.$refs.nom.focus();
      this.envoyerButtonDisabled = true;
    },
    categorie_submit() {
      this.$refs.myForm.validate();
      if (this.isValid) {
        if (this.modeAdd) {
          this.addEvenements_categorieAction(this.categorie).then(() => {
            this.infoFieldsDisabled = true;
            this.categorie = {
              id: null,
              nom: "",
              couleur: "",
            };
          });
        } else if (this.modeEdit) {
          this.editEvenements_categorieAction(this.categorie).then(() => {
            this.infoFieldsDisabled = true;
            this.changeEventsCouleurAction({
              id: this.categorie.id,
              couleur: this.categorie.couleur,
            });
            this.categorie = {
              id: null,
              nom: "",
              couleur: "",
            };
          });
        }
      }
    },
    deleteCategorieModal() {
      this.dialog2 = true;
    },
    deleteCategorie() {
      this.deleteEvenements_categorieAction({
        id: this.categorie.id,
      });
    },
  },
  props: ["value"],
  computed: {
    ...mapGetters(["getEvenements_categories"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
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
  display: inline-block !important;
  text-align: center !important;
  width: 203px !important;
  height: 56px !important;
  box-shadow: 0px 5px 9px #4762f17a !important;
  border-radius: 14px !important;
  background-color: #4762f1 !important;
  color: white !important;
  font-size: 16px !important;
  font-family: Poppins-Bold, Poppins !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  user-select: none !important;
  float: right !important;
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
.modalBtn {
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  border: black solid 1px;
  border-radius: 25px;
  padding-top: 5px;
  margin: 0 5px;
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
.edit {
  background-color: white;
  border-color: #1e88e5;
  svg {
    fill: #1e88e5;
  }
}
.edit:hover {
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
</style>
