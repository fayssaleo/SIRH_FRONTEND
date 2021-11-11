<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >{{
                "Modifier " +
                (typeContact.toLowerCase() == "email"
                  ? "l'"
                  : "le numéro de ") +
                typeContact
              }}
              :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-col cols="12" class="pb-5">
                <v-col cols="12">
                  <v-text-field
                    :label="typeContact + ' :'"
                    required
                    :value="textValue"
                  ></v-text-field>
                </v-col>
              </v-col>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0"
                  ><small class="d-none">*indicates required field</small>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span class="annuler" @click="addDemandeConge">
                    ANNULER
                  </span>
                  <span class="envoyer" @click="addDemandeConge">
                    SAUVEGARDER
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
export default {
  props: ["value", "typeContact", "textValue"],
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    addDemandeConge() {
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
  mounted: function () {
    console.log("typeContact", this.typeContact);
    console.log("textValue", this.textValue);
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.container {
  overflow-y: auto;
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
</style>
