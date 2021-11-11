<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        v-if="dialog"
        persistent
        max-width="900px"
        height="1200px"
      >
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white">Fonctions : </span>
          </v-card-title>
          <v-card-actions>
            <v-container class="w-100">
              <v-form
                ref="myForm"
                v-model="isValid"
                @submit.prevent="save_submit"
              >
                <v-row>
                  <v-col class="inputField mb-2" cols="12" v-if="data.post">
                    <v-select
                      :items="getFonctions"
                      item-text="libelle"
                      item-value="id"
                      v-model="departement_id"
                      label="Selectionner un Departement"
                      dense
                      hide-details
                      :disabled="
                        this.data.post.libelle == '' &&
                        this.data.post.fichePoste == '' &&
                        this.data.post.id == null
                      "
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="inputField mb-2" cols="12">
                    <v-text-field
                      label="Fonction "
                      :rules="isRequired"
                      v-model="libelle"
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <template v-if="data.post">
                  <v-row>
                    <v-col class="inputField mb-2" cols="12">
                      <textarea
                        class="form-control motif"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        label="Detail de fonction"
                        v-model="fichePoste"
                        :rules="isRequired"
                        hide-details
                      ></textarea>
                    </v-col>
                  </v-row>
                </template>
                <v-row>
                  <v-col cols="12"
                    ><small class="d-none">*indicates required field</small>
                  </v-col>
                  <v-col cols="12">
                    <span class="annuler" @click="closeDialog"> ANNULER </span>
                    <v-btn type="submit" class="envoyer"> SAUVEGARDER </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import rules from "../../mixins/rules";

export default {
  mixins: [rules],
  data() {
    return {
      isValid: false,
      libelle: null,
      fichePoste: null,
      departement_id: null,
      selectDisabled: false,
    };
  },
  props: ["value", "data"],

  methods: {
    ...mapActions([
      "addFonctionAction",
      "editFonctionAction",
      "getFonctionsAction",
      "editPostAction",
      "addPostAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    save_submit() {
      if (this.data.post == null) {
        if (this.data.departement.id == null) {
          this.addFonctionAction({
            libelle: this.libelle,
          }).then(async (response) => {
            this.$emit(
              "departementIdChangedAfterAdding",
              response.data.payload.id
            );
            this.$emit("changeinFonction");
            this.closeDialog();
          });
        } else {
          this.data.departement.libelle = this.libelle;
          this.editFonctionAction(this.data.departement).then(() => {
            this.getFonctionsAction();
            this.$emit("departementIdChanged");
            this.$emit("changeinFonction");
            this.closeDialog();
          });
        }
      } else {
        if (
          this.data.post.libelle != "" &&
          this.data.post.fichePoste != "" &&
          this.data.post.id != null
        ) {
          this.data.post.libelle = this.libelle;
          this.data.post.departement_id = this.departement_id;
          this.data.post.fichePoste = this.fichePoste;
          console.log("update", this.data.post);
          this.editPostAction(this.data.post).then(() => {
            this.$emit("departementIdChanged");
            this.closeDialog();
          });
        } else {
          this.data.post.libelle = this.libelle;
          this.data.post.departement_id = this.departement_id;
          this.data.post.fichePoste = this.fichePoste;
          this.addPostAction(this.data.post).then(() => {
            this.$emit("departementIdChanged");
            this.closeDialog();
          });
        }
      }
    },
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler(val) {
        console.log("this.data", this.data.departement.id == null);
        this.libelle = val.departement.libelle;
        if (val.post !== null) {
          this.libelle = val.post.libelle;
          this.fichePoste = val.post.fichePoste;
          this.departement_id = val.post.departement_id;
        }
      },
    },
    dialog: {
      handler(val) {
        if (!val) {
          this.$emit("resetPost");
        }
      },
    },
  },
  computed: {
    ...mapGetters(["getFonctions"]),

    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  mounted() {},
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
.selectField {
  margin-top: 15px !important;
  margin-bottom: 0 !important;
}
.motif {
  word-break: break-word;
  height: 140px;
  max-height: 140px;
  min-height: 110px;
  margin-bottom: 40px;
  border: 1px solid #0000006e;
  border-radius: 13px;
  margin-top: 24px;
}
.motif:focus {
  color: #495057;
  background-color: #fff;
  border-color: black !important;
  outline: 0;
  box-shadow: none !important;
}
</style>
