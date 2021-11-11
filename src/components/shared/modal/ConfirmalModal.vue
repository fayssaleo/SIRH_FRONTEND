<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="840px"
        content-class="overflow-y-hidden"
      >
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white">Attention ! </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="pt-0 pb-10">
                  <span class="dateTitle">{{ actionMessage }}</span>
                  <span class=""> </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span class="annuler" @click="closeDialog"> ANNULER </span>
                  <span class="envoyer" @click="emitAction"> CONFIRMER </span>
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
export default {
  //"2021-05-05"

  data() {
    return {};
  },
  props: ["value", "actionMessage"],
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    emitAction() {
      this.$emit("action");
      this.closeDialog();
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
