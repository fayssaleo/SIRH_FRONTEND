<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="400px">
        <v-card>
          <v-card-title>{{statut}} : ({{ invitedNUmber }})</v-card-title>

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
              <v-col cols="10" class="collaborateurColumn"
                ><span class="collaborateurName">{{
                  capitalizeFirstLetter(collaborateur.prenom) +
                  " " +
                  capitalizeFirstLetter(collaborateur.nom)
                }}</span></v-col
              >
            </v-row>
          </v-card-text>
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
      thisInvites: [],
    };
  },
  props: ["value", "invites","statut"],
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
      if (!this.invites.length && this.statut == "En attente") return "Tous";
      let inviteds = this.invites.length;
      return inviteds;
    },
  },
  mounted: function () {
    this.getCollaborateurs
      .filter((e) => {
        console.log(this.invites.includes(e.id));
        return this.invites.includes(e.id);
      })
      .forEach((element) => {
        this.thisInvites.push({
          nom: element.nom,
          prenom: element.prenom,
          photo: element.photo,
        });
      });
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
