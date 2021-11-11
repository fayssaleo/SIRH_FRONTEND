/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white">Decision : </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-row>
                <v-col cols="12" class="pt-0 pb-0">
                  <span class="textforRefuser mt-5" v-if="actionIsRefuser">
                    Voulez-vous vraiment refuser cette demande?
                  </span>
                  <span v-if="actionIsRefuser" class="dateTitle"
                    >Ajouter un message :</span
                  >
                  <span v-if="actionIsConsulterMotif" class="dateTitle"
                    >Motif :</span
                  >
                  <textarea
                    v-if="actionIsModify || actionIsRefuser"
                    class="form-control motif"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="selectedDemandeConge.feedback_msg"
                  ></textarea>
                  <span
                    class="textForDecisionText"
                    v-if="actionIsConsulting "
                  >
                    {{ selectedDemandeConge.feedback_msg }}
                  </span>
                  <span
                    class="textForDecisionText"
                    v-if=" actionIsConsulterMotif"
                  >
                    {{ selectedDemandeConge.motif }}
                  </span>

                  <span class="textforValider" v-if="actionIsValider">
                    Voulez-vous vraiment valider cette demande?
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
                    @click="addDemandeConge"
                    v-if="actionIsModify || actionIsValider || actionIsRefuser"
                  >
                    ANNULER
                  </span>
                  <span
                    class="envoyer"
                    @click="feedMsgEditDemande"
                    v-if="actionIsModify"
                  >
                    ENREGISTRER
                  </span>
                  <span
                    class="envoyer"
                    @click="accepterDemande"
                    v-if="actionIsValider"
                  >
                    Valider
                  </span>

                  <span
                    class="envoyer"
                    @click="refuserDemande"
                    v-if="actionIsRefuser"
                  >
                    Refuser
                  </span>
                  <span
                    class="envoyer fermer"
                    @click="addDemandeConge"
                    v-if="actionIsConsulting || actionIsConsulterMotif"
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
  data() {
    return {};
  },
  props: [
    "value",
    "statusRefusAction",
    "statusRefusText",
    "selectedDemandeConge",
  ],
  methods: {
    ...mapActions(["acceDemmandeCongeAction", "refuserDemmandeCongeAction","feedMsgEditDemandeAction"]),

    closeDialog() {
      this.dialog = false;
    },
    addDemandeConge() {
      this.closeDialog();
    },
    accepterDemande() {
      if (this.selectedDemandeConge.id && this.selectedDemandeConge.id != "") {
        this.acceDemmandeCongeAction({
          id: this.selectedDemandeConge.id,
        }).then(() => {
          this.closeDialog();
        });
      }
    },
    refuserDemande() {
      if (this.selectedDemandeConge.id != "") {
        this.refuserDemmandeCongeAction({
          id: this.selectedDemandeConge.id,
          feedback_msg: this.selectedDemandeConge.feedback_msg,
        }).then(() => {
          this.closeDialog();
        });
      }
    },
    feedMsgEditDemande(){
      if (this.selectedDemandeConge.id != "") {
        this.feedMsgEditDemandeAction({
          id: this.selectedDemandeConge.id,
          feedback_msg: this.selectedDemandeConge.feedback_msg,
        }).then(() => {
          this.closeDialog();
        });
      }
    }
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
    actionIsConsulting: function () {
      return this.statusRefusAction == "consulter";
    },
    actionIsModify: function () {
      return this.statusRefusAction == "modifier";
    },
    actionIsValider: function () {
      return this.statusRefusAction == "valider";
    },
    actionIsRefuser: function () {
      return this.statusRefusAction == "refuser";
    },
    actionIsConsulterMotif: function () {
      return this.statusRefusAction == "consulterMotif";
    },
  },
  updated: function () {},
  mounted: function () {},
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
  font: normal normal normal 33px/19px Roboto;
  letter-spacing: 0px;
  color: #0101018c;
  text-align: justify;
}

.fermer {
  background-color: grey;
}
</style>
