<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Ajouter un role :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-form
                ref="myForm"
                v-model="isValid"
                @submit.prevent="save_submit"
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Role "
                      :rules="isRequired"
                      v-model="role.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="pt-0 pb-0"
                    ><small class="d-none">*indicates required field</small>
                  </v-col>
                  <v-col cols="12" class="pt-2 pb-0 mb-2">
                    <span class="annuler" @click="closeDialog"> ANNULER </span>
                    <v-btn type="submit" class="envoyer"> SAUVEGARDER </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
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
      role: {
        id: "",
        name: "",
      },
    };
  },
  props: ["value", "roleToEdit"],
  methods: {
    ...mapActions(["addRolesAction", "editRolesAction"]),
    closeDialog() {
      this.dialog = false;
    },
    save_submit() {
      if (this.isValid) {
        if(this.roleToEdit==null){
          this.addRolesAction(this.role);
        }
        else{
          this.editRolesAction(this.role);
        }
        this.closeDialog();
      }
    },
  },
  computed: {
    ...mapGetters([]),

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
  mounted: function () {
    if (this.roleToEdit != null) {
      this.role = { ...this.roleToEdit };
    }
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
.dateTitle {
  display: inline-block;
  font: normal normal normal 29px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  font-size: 23px;
}
.congeType:hover {
  background-color: #87b0e6d4;
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.container {
  overflow-y: auto;
}
</style>
