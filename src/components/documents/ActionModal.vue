<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Demande de documents :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-row>
                <v-col cols="12" class="pt-0 pb-0">
                  <span class="textforRefuser mt-5" v-if="actionIsRefuser">
                    Voulez-vous vraiment refuser cette demmande?
                  </span>
                  <span v-if="actionIsRefuser" class="dateTitle"
                    >Ajouter un message :</span
                  >
                  <span v-if="actionIsConsulterMotif" class="dateTitle"
                    >Motif :</span
                  >
                  <span
                    class="textForDecisionText"
                    v-if="actionIsConsulterMotif"
                  >
                    {{ demandeDocAdminToEdit.msg }}
                  </span>

                  <span
                    v-if="consulterFeedback_msg || actionIsModify"
                    class="dateTitle"
                    >Feedback :</span
                  >
                  <span
                    class="textForDecisionText"
                    v-if="consulterFeedback_msg"
                  >
                    {{ demandeDocAdminToEdit.feedback_msg }}
                  </span>

                  <textarea
                    v-if="actionIsModify || actionIsRefuser"
                    class="form-control motif"
                    id="exampleFormControlTextarea1"
                    v-model="demandeDocAdminToEdit.feedback_msg"
                    rows="3"
                  ></textarea>

                  <span class="textforValider" v-if="actionIsValider">
                    Vouler vraiment valider cette demmande?
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0"
                  ><small class="d-none">*indicates required field</small>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span
                    class="annuler"
                    @click="closeDialog"
                    v-if="actionIsModify || actionIsValider || actionIsRefuser"
                  >
                    ANNULER
                  </span>
                  <span
                    class="envoyer"
                    @click="addDemandeConge"
                    v-if="actionIsModify"
                  >
                    ENREGISTRER
                  </span>
                  <span
                    class="envoyer"
                    @click="addDemandeConge"
                    v-if="actionIsValider"
                  >
                    Valider
                  </span>

                  <span
                    class="envoyer"
                    @click="addDemandeConge"
                    v-if="actionIsRefuser"
                  >
                    Refuser
                  </span>
                  <span
                    class="envoyer fermer"
                    @click="closeDialog"
                    v-if="consulterFeedback_msg || actionIsConsulterMotif"
                  >
                    Fermer
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";

export default {
  //"2021-05-05"

  data() {
    const start = new Date();
    const end = new Date();
    return {
      startDate: new Date(),
      endDate: new Date(),
      range: {
        start,
        end,
      },
      attrs: [],
      congeTypeSelected: "",
      demandeDocAdminToEdit: {
        id: "",
        feedback_msg: "",
      },
    };
  },
  props: ["value", "statutRefusAction", "demandeDocAdmin"],
  methods: {
    ...mapActions([
      "accepteDemandesDocumentsAction",
      "refuserDemandesDocumentsAction",
      "feedMsgDemandesDocumentsAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    addDemandeConge() {
      if (this.actionIsValider) {
        this.accepteDemandesDocumentsAction({
          id: this.demandeDocAdminToEdit.id,
        }).then(() => {
          this.closeDialog();
        });
      }
      if (this.actionIsRefuser) {
        let payload = {
          id: this.demandeDocAdminToEdit.id,
          feedback_msg: this.demandeDocAdminToEdit.feedback_msg,
        };
        console.log(payload);
        this.refuserDemandesDocumentsAction(payload).then(() => {
          this.closeDialog();
        });
      }
      if (this.actionIsModify) {
        let payload = {
          id: this.demandeDocAdminToEdit.id,
          feedback_msg: this.demandeDocAdminToEdit.feedback_msg,
        };
        console.log(payload);
        this.feedMsgDemandesDocumentsAction(payload).then(() => {
          this.closeDialog();
        });
      }
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    consulterFeedback_msg: function () {
      return this.statutRefusAction == "consulterFeedback_msg";
    },
    actionIsModify: function () {
      return this.statutRefusAction == "modifier";
    },
    actionIsValider: function () {
      return this.statutRefusAction == "valider";
    },
    actionIsRefuser: function () {
      return this.statutRefusAction == "refuser";
    },
    actionIsConsulterMotif: function () {
      return this.statutRefusAction == "consulterMotif";
    },
  },
  updated: function () {
    console.log("this.dialog", this.dialog);
  },
  mounted: function () {
    this.demandeDocAdminToEdit = { ...this.demandeDocAdmin };
  },
};
</script>
<style lang="scss" scoped>
.addActualiteModel {
  border-radius: 20px;
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
.dateTitle {
  display: inline-block;
  font: normal normal normal 29px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  font-size: 23px;
  margin-top: 21px;
}

.motif {
  word-break: break-word;
  height: 140px;
  max-height: 140px;
  min-height: 110px;
  margin-bottom: 40px;
  border: 1px solid #87b0e6;
  border-radius: 13px;
  margin-top: 24px;
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.container {
  overflow-y: auto;
}
.textForDecisionText {
  display: block;
  width: 768px;
  height: 332px;
  max-height: 332px;
  overflow-y: auto;
  font: normal normal normal 20px/19px Roboto;
  letter-spacing: 0px;
  color: #0101018c;
  text-align: justify;
  padding: 0 27px;
  line-height: 24px;
  margin-bottom: 49px;
  margin-top: 30px;
}
.textforValider {
  display: block;
  width: 768px;
  height: 80px;
  font: normal normal normal 33px/19px Roboto;
  letter-spacing: 0px;
  color: #0101018c;
  text-align: justify;
  margin-top: 32px;
}
.textforRefuser {
  display: block;
  width: 768px;
  height: 60px;
  font: normal normal normal 23px/19px Roboto;
  letter-spacing: 0px;
  color: rgb(249, 89, 89);
  text-align: justify;
}

.fermer {
  background-color: grey;
}
</style>
