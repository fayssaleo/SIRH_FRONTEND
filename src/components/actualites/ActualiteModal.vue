<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" temprory max-width="840px" height="1200px">
        <v-card class="">
          <v-card-text class="pl-0 pr-0">
            <div class="theBody">
              <img
                v-if="modalNewImage != null"
                class="modalImage"
                :src="getActualiteImagesFolder + '/' + modalNewImage"
                alt=""
                :style="{
                  height: height,
                }"
              />
              <img
                v-else
                class="modalImage"
                :src="require('../../assets/actualitesPics/actualites.jpg')"
                alt=""
                :style="{
                  height: height,
                }"
              />
              <v-row class="modalDate m-0">
                <v-col cols="6">
                  <span class="pr-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      style="fill: #87b0e6"
                    >
                      <g transform="translate(-3.375 -3.375)">
                        <path
                          d="M14.864,3.375a11.5,11.5,0,1,0,11.511,11.5A11.5,11.5,0,0,0,14.864,3.375Zm.011,20.7a9.2,9.2,0,1,1,9.2-9.2A9.2,9.2,0,0,1,14.875,24.075Z"
                        />
                        <path
                          d="M18.263,10.688H16.538v6.9l6.038,3.621.862-1.415-5.175-3.069Z"
                          transform="translate(-2.813 -1.563)"
                        />
                      </g></svg></span
                  ><span class="newDate"
                    >{{ modalNewDate }} à {{ modalNewTime }}</span
                  >
                </v-col>
              </v-row>
              <p class="modalTitle">{{ modalNewTitle.toUpperCase() }}</p>
              <p class="modalText">{{ modalNewText }}</p>
              <v-row style="max-height: 76px">
                <v-col
                  ><b-button class="modalButton" @click="closeDialog"
                    >Fermer</b-button
                  >
                </v-col>
                <v-col cols="6" class="mr-3">
                  <span
                    class="archive modalBtn"
                    v-if="modalNewActif == 1"
                    @click="openDisableActualite"
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
                        d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"
                      />
                    </svg>
                  </span>
                  <span
                    class="archive modalBtn"
                    v-else
                    @click="openEnableActualite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="36px"
                      viewBox="0 0 24 24"
                      width="36px"
                      fill="#000000"
                    >
                      <g><rect fill="none" height="24" width="24" x="0" /></g>
                      <g>
                        <g>
                          <g>
                            <path
                              d="M20.55,5.22l-1.39-1.68C18.88,3.21,18.47,3,18,3H6C5.53,3,5.12,3.21,4.85,3.55L3.46,5.22C3.17,5.57,3,6.01,3,6.5V19 c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6.01,20.83,5.57,20.55,5.22z M12,9.5l5.5,5.5H14v2h-4v-2H6.5L12,9.5z M5.12,5 l0.82-1h12l0.93,1H5.12z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span class="edit modalBtn" @click="openEditActualite">
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
                  <span class="delete modalBtn" @click="openDeleteActualite">
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
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
      <ConfirmalModal
        v-if="dialog3"
        v-model="dialog3"
        :actionMessage="'voulez-vous vraiment supprimer cet actualité ?'"
        @action="deleteActualite"
      />
      <ConfirmalModal
        v-if="dialog4"
        v-model="dialog4"
        :actionMessage="'voulez-vous vraiment archiver cet actualite?'"
        @action="disableActualite"
      />
      <ConfirmalModal
        v-if="dialog5"
        v-model="dialog5"
        :actionMessage="'voulez-vous vraiment désarchiver cet actualite?'"
        @action="enableActualite"
      />
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ConfirmalModal from "../shared/modal/ConfirmalModal.vue";

export default {
  components: { ConfirmalModal },
  data() {
    return {
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
    };
  },
  props: [
    "value",
    "modalNewTitle",
    "modalNewImage",
    "modalNewDate",
    "modalNewTime",
    "modalNewText",
    "modalNewid",
    "modalNewActif",
    "modalNewCategorie_ids",
    "height",
  ],
  methods: {
    ...mapActions([
      "deleteActualiteAction",
      "disableActualiteAction",
      "enableActualiteAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    openEditActualite() {
      this.$emit(
        "showEditModal",
        this.modalNewid,
        this.modalNewTitle,
        this.modalNewImage,
        this.modalNewDate,
        this.modalNewTime,
        this.modalNewText,
        this.modalNewActif,
        this.modalNewCategorie_ids
      );
      this.closeDialog();
    },
    deleteActualite() {
      this.deleteActualiteAction({ id: this.modalNewid }).then(() => {
        this.closeDialog();
      });
    },
    openDeleteActualite() {
      this.dialog3 = true;
    },
    openDisableActualite() {
      this.dialog4 = true;
    },
    disableActualite() {
      this.disableActualiteAction({ id: this.modalNewid }).then(() => {
        this.closeDialog();
      });
    },
    openEnableActualite() {
      this.dialog5 = true;
    },
    enableActualite() {
      this.enableActualiteAction({ id: this.modalNewid }).then(() => {
        this.closeDialog();
      });
    },
  },
  computed: {
    ...mapGetters(["getActualiteImagesFolder"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  mounted() {
    console.log("sdsds");
  },
};
</script>
<style lang="scss" scoped>
#modal-1 {
  width: 840px;
  height: 953px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  border-radius: 19px;
  opacity: 1;
}
.modalDate {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 16px/25px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  margin: 20px;
  svg {
    fill: black;
  }
}
.modalImage {
  width: 100%;
  max-height: 256px;
  border-radius: 19px 19px 0 0;
}

.modalText {
  height: 350px;
  text-align: left;
  font: normal normal normal 16px/19px Roboto;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
  margin: 10px;
  margin-bottom: 10px;
  overflow-y: auto;
  display: block;
  margin-left: 30px;
  padding-right: 34px;
  text-align: justify;
}
.modalButton {
  margin-left: 5%;
  width: 203px;
  height: 56px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  text-align: center;
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #4762f1;
  margin-bottom: 14px;
  opacity: 1;
}
.modalTitle {
  margin: 20px;
  text-align: left;
  overflow-wrap: break-word;
  font: normal normal 600 20px/30px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
}
@media screen and (max-width: 992px) {
  .modalButton {
    margin-left: 29%;
  }
}
::-webkit-scrollbar {
  width: 8px !important;
}

.modalBtn {
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  border: black solid 1px;
  border-radius: 25px;
  padding-top: 5px;
  margin-left: 10px;
  float: right;
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
.edit,
.archive {
  background-color: white;
  border-color: #1e88e5;
  svg {
    fill: #1e88e5;
  }
}
.edit:hover,
.archive:hover {
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
