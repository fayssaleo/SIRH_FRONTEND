<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="400px">
        <v-card>
          <v-card-title>Invités : ({{ invitedNUmber }})</v-card-title>

          <v-card-text style="height: 300px">
            <v-row
              class="collaborateurRow my-0"
              v-for="collaborateur in thisInvites"
              :key="collaborateur.id"
              @click="collaborateur.invited = !collaborateur.invited"
            >
              <v-col cols="2" class="collaborateurColumn p-0 pt-1 pl-2">
                <span class="photo">
                  <img
                    v-if="collaborateur.photo != null"
                    :src="getPhotosFolder + '/' + collaborateur.photo"
                  />
                  <img
                    v-else
                    :src="require('../../assets/quickProfilePictures/user.png')"
                  />
                </span>
              </v-col>
              <v-col cols="8" class="collaborateurColumn"
                ><span class="collaborateurName">{{
                  capitalizeFirstLetter(collaborateur.prenom) +
                  " " +
                  capitalizeFirstLetter(collaborateur.nom)
                }}</span></v-col
              >
              <v-col cols="2" class="collaborateurColumn"
                ><span class="collaborateurStatus" @click="stopProp($event)"
                  ><v-checkbox
                    v-model="collaborateur.invited"
                    class="m-0 p-0 pl-3 pt-1"
                  ></v-checkbox></span
              ></v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-row>
              <v-col cols="12" class="pt-0 pb-0"
                ><small class="d-none">*indicates required field</small>
              </v-col>
              <v-col cols="12" class="pt-0 pb-0 mb-2">
                <span class="annuler" @click="closeDialog"> ANNULER </span>
                <span class="envoyer" v-if="modeEdit" @click="closeDialog">
                  MODIFIER
                </span>
                <span class="envoyer" v-else @click="saveInvites">
                  SAUVEGARDER
                </span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  //"2021-05-05"

  data() {
    return {
      modeEdit: false,
      thisInvites: [],
      thisInvitesHolderBeforeSendit: [],
    };
  },
  props: ["value", "invites"],
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    stopProp: function (event) {
      event.stopPropagation();
    },
    saveInvites() {
      //this.$emit("setEvenetsInvites", [...this.thisInvitesHolderBeforeSendit]);
      this.thisInvites.forEach((element) => {
        if (element.invited)
          this.thisInvitesHolderBeforeSendit.push(element.id);
      });
      this.$emit("setEvenetsInvites", [...this.thisInvitesHolderBeforeSendit]);
      this.closeDialog();
    },
  },
  computed: {
    ...mapGetters(["getCollaborateurs", "getPhotosFolder"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    invitedNUmber() {
      let inviteds= this.thisInvites.filter((e) => e.invited).length;
      if(inviteds==0)
      return "Tous";
      else
      return inviteds;
    },
  },
  updated: function () {},
  mounted: function () {
    if (!this.invites.length) {
      this.getCollaborateurs.forEach((element) => {
        this.thisInvites.push({
          id: element.id,
          nom: element.nom,
          prenom: element.prenom,
          photo: element.photo,
          invited: false,
        });
      });
    } else {
      this.getCollaborateurs.forEach((element) => {
        let invited = this.invites.includes(element.id);
        this.thisInvites.push({
          id: element.id,
          nom: element.nom,
          prenom: element.prenom,
          photo: element.photo,
          invited: invited,
        });
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.photo {
  display: inline-block;
  max-width: 139px;
  img {
    width: 40px;
    height: 40px;
    background: transparent 0% 0% no-repeat padding-box;
    border: 2px solid #4762f1;
    border-radius: 37px;
  }
}

::-webkit-scrollbar {
  width: 5px !important;
}
.annuler {
  display: inline-block;
  text-align: center;
  padding-top: 18px;
  width: 118px;
  height: 45px;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  color: #4762f1;
  font-size: 11px;
  font-family: Poppins-Bold, Poppins;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 6px;
  user-select: none;
  float: left;
}
.envoyer {
  display: inline-block;
  text-align: center;
  padding-top: 18px;
  width: 118px;
  height: 45px;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  background-color: #4762f1;
  color: white;
  font-size: 10px;
  font-family: Poppins-Bold, Poppins;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 6px;
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
.collaborateurRow {
  cursor: pointer;
  user-select: none;
  .collaborateurColumn {
    max-height: 50px;
    span {
      display: inline-block;
    }
    .collaborateurName {
      font: normal normal normal 16px/25px Poppins;
      max-width: 250px;
      max-height: 31px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .collaborateurStatus {
      padding-bottom: 10px;
    }
  }
}
.collaborateurRow:hover {
  background-color: rgba(128, 128, 128, 0.111);
}
.collaborateurRow:active {
  background-color: white;
}
</style>
