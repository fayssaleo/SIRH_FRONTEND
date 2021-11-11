<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Ajouter evènement :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-row>
                <b-col cols="12">
                  <div class="photo">
                    <file-upload
                      ref="upload"
                      :maximum="1"
                      v-model="files"
                      extensions="jpg,gif,png,webp"
                      accept="image/png,image/gif,image/jpeg,image/webp"
                      :drop="true"
                      post-action="/post.method"
                      put-action="/put.method"
                      @input-file="inputFile"
                      @input-filter="inputFilter"
                      style="z-index: 222"
                    >
                      <div v-show="$refs.upload && $refs.upload.dropActive">
                        <h3>Drop it here</h3>
                      </div>
                      <span class="photoIcon" v-show="photoIsEmpty">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 68.366 55.936"
                        >
                          <path
                            class="a"
                            d="M63.651,4.5H7.715A6.684,6.684,0,0,0,1.5,10.715V54.221a6.233,6.233,0,0,0,6.215,6.215H63.651a6.684,6.684,0,0,0,6.215-6.215V10.715A6.684,6.684,0,0,0,63.651,4.5ZM13.93,48.006,24.807,34.022l7.769,9.354L43.452,29.36,57.436,48.006Z"
                            transform="translate(-1.5 -4.5)"
                          />
                        </svg>
                      </span>
                      <span class="photoAdd" v-show="photoIsEmpty">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 29.25 29.25"
                        >
                          <path
                            class="a"
                            d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm7.523,16.1H19.477v6.047H16.523V19.477H10.477V16.523h6.047V10.477h2.953v6.047h6.047Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </span>
                      <span
                        class="photoAdd2"
                        v-show="!photoIsEmpty"
                        @click="clearPhotoSection"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 0 24 24"
                          width="40px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </span>
                    </file-upload>
                    <img
                      v-show="!photoIsEmpty"
                      class="photoImgHolder"
                      ref="imgPhoto"
                      :src="
                        files.length
                          ? files[0].url
                          : modeEditImage
                          ? getEventImagesFolder + '/' + evenement.image
                          : ''
                      "
                      alt=""
                    />
                  </div>
                </b-col>
                <b-col cols="5">
                  <span
                    ><v-text-field
                      label="Titre"
                      v-model="evenement.titre"
                    ></v-text-field
                  ></span>
                </b-col>
                <b-col cols="5">
                  <span
                    ><v-select
                      :items="getEvenements_categories"
                      item-text="nom"
                      item-value="id"
                      label="Categorie"
                      v-model="evenement.evenements_categorie_id"
                    ></v-select
                  ></span>
                </b-col>
                <b-col cols="2">
                  <span class="invites" @click="openInviteDialog">
                    <span class="invitesIcon"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        /></svg
                    ></span>
                    <span class="val">({{ invitedNUmber }})</span>
                  </span>
                </b-col>
                <b-col cols="12" class="placeAndDateContainer">
                  <v-row>
                    <b-col
                      ><span class="mb-3">
                        <span class="icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.24"
                            height="20.091"
                            viewBox="0 0 16.24 20.091"
                          >
                            <g transform="translate(-46.848)">
                              <g transform="translate(46.848)">
                                <path
                                  class="a"
                                  d="M146.253,97.4a4.2,4.2,0,1,0,4.2,4.2A4.206,4.206,0,0,0,146.253,97.4Zm0,7.4a3.194,3.194,0,1,1,3.194-3.194A3.2,3.2,0,0,1,146.253,104.8Z"
                                  transform="translate(-138.139 -93.397)"
                                />
                                <path
                                  class="a"
                                  d="M54.962,0c-.095,0-.193,0-.288,0a8.112,8.112,0,0,0-7.682,9.634,2.571,2.571,0,0,0,.058.271,7.759,7.759,0,0,0,.543,1.595,22.469,22.469,0,0,0,6.634,8.319,1.169,1.169,0,0,0,1.488,0,22.5,22.5,0,0,0,6.626-8.3,7.969,7.969,0,0,0,.547-1.607c.025-.1.041-.181.053-.259A8.113,8.113,0,0,0,54.962,0Zm6.979,9.482c0,.008-.012.078-.041.206a7.393,7.393,0,0,1-.485,1.426,21.473,21.473,0,0,1-6.346,7.933.166.166,0,0,1-.1.037.174.174,0,0,1-.1-.037A21.518,21.518,0,0,1,48.509,11.1a7.08,7.08,0,0,1-.481-1.414c-.025-.107-.037-.173-.041-.193s0-.016,0-.025a7.239,7.239,0,0,1-.095-2.043,7.109,7.109,0,0,1,14.184.695A7.375,7.375,0,0,1,61.941,9.482Z"
                                  transform="translate(-46.848)"
                                />
                              </g>
                            </g></svg
                        ></span>
                        <span class="text">Lieu :</span>
                        <span class="textfield"
                          ><v-text-field v-model="evenement.lieu"></v-text-field
                        ></span> </span
                    ></b-col>
                    <b-col
                      ><span>
                        <span class="icon" style="margin-right: 15px"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.479"
                            height="16.467"
                            viewBox="0 0 18.479 16.467"
                          >
                            <g transform="translate(0 -20.9)">
                              <g transform="translate(0 20.9)">
                                <g transform="translate(0 0)">
                                  <path
                                    class="a"
                                    d="M16.564,22.3H15.4v-.919a.481.481,0,1,0-.963,0V22.3H9.723v-.919a.481.481,0,1,0-.963,0V22.3H4v-.919a.481.481,0,1,0-.963,0V22.3H1.921A1.948,1.948,0,0,0,0,24.25V35.442a1.921,1.921,0,0,0,1.921,1.925H16.559a1.92,1.92,0,0,0,1.921-1.921V24.25A1.941,1.941,0,0,0,16.564,22.3Zm.958,13.141a.96.96,0,0,1-.953.963H1.921a.957.957,0,0,1-.958-.958V24.25a.979.979,0,0,1,.958-.987H3.033v.7a.481.481,0,1,0,.963,0v-.7H8.761v.7a.481.481,0,1,0,.963,0v-.7h4.717v.7a.481.481,0,1,0,.963,0v-.7h1.16a.979.979,0,0,1,.958.987Z"
                                    transform="translate(0 -20.9)"
                                  />
                                </g>
                              </g>
                              <g transform="translate(6.652 26.392)">
                                <path
                                  class="a"
                                  d="M139.524,135h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                                  transform="translate(-138.2 -135)"
                                />
                              </g>
                              <g transform="translate(10.003 26.392)">
                                <path
                                  class="a"
                                  d="M209.124,135h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                                  transform="translate(-207.8 -135)"
                                />
                              </g>
                              <g transform="translate(13.382 26.392)">
                                <path
                                  class="a"
                                  d="M279.324,135h-.842a.481.481,0,0,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                                  transform="translate(-278 -135)"
                                />
                              </g>
                              <g transform="translate(6.652 29.714)">
                                <g transform="translate(0 0)">
                                  <path
                                    class="a"
                                    d="M139.524,204h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                                    transform="translate(-138.2 -204)"
                                  />
                                </g>
                              </g>
                              <g transform="translate(3.273 29.714)">
                                <g transform="translate(0 0)">
                                  <path
                                    class="a"
                                    d="M69.329,204h-.847a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                                    transform="translate(-68 -204)"
                                  />
                                </g>
                              </g>
                              <g transform="translate(10.003 29.714)">
                                <g transform="translate(0 0)">
                                  <path
                                    class="a"
                                    d="M209.124,204h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                                    transform="translate(-207.8 -204)"
                                  />
                                </g>
                              </g>
                              <g transform="translate(13.382 29.714)">
                                <g transform="translate(0 0)">
                                  <path
                                    class="a"
                                    d="M279.324,204h-.842a.481.481,0,0,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                                    transform="translate(-278 -204)"
                                  />
                                </g>
                              </g>
                              <g transform="translate(6.652 32.987)">
                                <path
                                  class="a"
                                  d="M139.524,272h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                                  transform="translate(-138.2 -272)"
                                />
                              </g>
                              <g transform="translate(3.273 32.987)">
                                <path
                                  class="a"
                                  d="M69.329,272h-.847a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                                  transform="translate(-68 -272)"
                                />
                              </g>
                              <g transform="translate(10.003 32.987)">
                                <path
                                  class="a"
                                  d="M209.124,272h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                                  transform="translate(-207.8 -272)"
                                />
                              </g>
                            </g></svg
                        ></span>
                        <span class="text" style="margin-right: 12px"
                          >Date :</span
                        >
                        <span class="textfield">
                          <v-menu
                            v-model="dateMenu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                label="Picker without buttons"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                hint="DD/MM/YYYY format"
                                :value="computedDateFormattedMomentjs"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              @input="dateMenu = false"
                              v-model="evenement.date"
                            ></v-date-picker>
                          </v-menu>
                        </span> </span
                    ></b-col>
                    <b-col
                      ><span>
                        <span class="icon" style="margin-right: 15px"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                            />
                            <path
                              d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                            /></svg
                        ></span>
                        <span class="text" style="margin-right: 12px"
                          >Heure :</span
                        >
                        <span class="textfield">
                          <v-menu
                            ref="menu"
                            v-model="dateMenu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="evenement.time"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                label="Picker in menu"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                v-model="evenement.time"
                              ></v-text-field>
                            </template>
                            <v-time-picker
                              v-if="dateMenu2"
                              full-width
                              v-model="evenement.time"
                              format="24hr"
                              @click:minute="$refs.menu.save(evenement.time)"
                            ></v-time-picker>
                          </v-menu>
                        </span> </span
                    ></b-col>
                  </v-row>
                </b-col>
                <b-col cols="12">
                  <v-textarea
                    class="textArea"
                    solo
                    name="input-7-4"
                    label="Text"
                    style="height: 180px; max-height: 180px; min-height: 180px"
                    v-model="evenement.text"
                  ></v-textarea>
                </b-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0"
                  ><small class="d-none">*indicates required field</small>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span class="annuler" @click="closeDialog"> ANNULER </span>
                  <span class="envoyer" v-if="modeEdit" @click="editMethode">
                    MODIFIER
                  </span>
                  <span class="envoyer" v-else @click="save">
                    SAUVEGARDER
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <InviteCollaborateur
        v-model="dialog2"
        v-if="dialog2"
        :invites="getIdsFromInvites"
        @setEvenetsInvites="setEvenetsInvites"
      />
    </v-row>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import VueUploadComponent from "vue-upload-component";
import toFormData from "@/plugins/objectToFormData";
import { FormatDateStringToISOSimpleDate } from "../../helpers/helpers.js";
import moment from "moment";
import { format, parseISO } from "date-fns";
import InviteCollaborateur from "./InviteCollaborateur.vue";
export default {
  data() {
    return {
      dateMenu: false,
      dateMenu2: false,
      files: [],
      edit: false,
      cropper: false,
      modeEditImage: false,
      evenement: {
        id: "",
        titre: "",
        text: "",
        date: "",
        time: "",
        lieu: "",
        image: "",
        evenements_categorie_id: "",
        invites: [],
      },
      dialog2: false,
    };
  },
  props: [
    "value",
    "selectedDay",
    "eventList",
    "modalEventid",
    "modalEventTitle",
    "modalEventImage",
    "modalEventDate",
    "modalEventPlace",
    "modalEventText",
    "modalEventTime",
    "actif",
    "categorie_name",
    "evenements_categorie_id",
    "couleur",
    "invites",
    "modeEdit",
  ],
  components: {
    FileUpload: VueUploadComponent,
    InviteCollaborateur: InviteCollaborateur,
  },
  methods: {
    ...mapActions([
      "addEvenementAction",
      "editEvenementAction",
    ]),
    closeDialog() {
      if (this.modeEdit) this.$emit("openDetailsModal");
      this.dialog = false;
    },
    addDemandeConge() {
      this.closeDialog();
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        this.$nextTick(function () {
          this.edit = true;
        });
      }
      if (!newFile && oldFile) {
        this.edit = false;
      }
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert("Your choice is not a picture");
          return prevent();
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.url = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.url = URL.createObjectURL(newFile.file);
        }
      }
    },
    clearPhotoSection() {
      if (this.modeEdit) {
        if (this.files.length) {
          this.$refs.upload.clear();
          this.modeEditImage = true;
          return;
        } else {
          this.modeEditImage = false;
          return;
        }
      } else {
        this.$refs.upload.clear();
      }
    },
    save() {
      let formData = {};
      if (this.files.length) {
        formData = toFormData({
          ...this.evenement,
          file: this.files[0].file,
        });
      } else {
        formData = toFormData({
          ...this.evenement,
        });
      }
      this.addEvenementAction(formData).then(() => {
        this.closeDialog();
      });
    },
    editMethode() {
      if (this.photoIsEmpty) {
        this.evenement.image = null;
        console.log("içi image est null", this.files);
      }
      let formData = {};
      if (this.files.length) {
        formData = toFormData({
          ...this.evenement,
          file: this.files[0].file,
        });
      } else {
        formData = toFormData({
          ...this.evenement,
        });
      }
      this.editEvenementAction(formData).then(() => {
        this.closeDialog();
      });
    },
    openEvenentDetails() {
      this.dialog2 = true;
    },
    openInviteDialog() {
      this.dialog2 = true;
    },
    setEvenetsInvites(invites) {
      this.evenement.invites = [...invites];
    },
  },
  computed: {
    ...mapGetters(["getEvenements_categories", "getEventImagesFolder"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    computedDateFormattedMomentjs() {
      return this.evenement.date
        ? moment(this.evenement.date).format("DD/MM/YYYY")
        : "";
    },
    invitedNUmber() {
      let inviteds = this.evenement.invites.length;
      if (inviteds == 0) return "Tous";
      else return inviteds;
    },
    getIdsFromInvites() {
      return this.evenement.invites.map((e) => e.collaborateur_id);
    },
    photoIsEmpty() {
      return (
        !(this.modeEditImage && this.evenement.image != null) &&
        !this.files.length
      );
    },
  },
  mounted: function () {
    if (this.modeEdit) {
      this.evenement.id = this.modalEventid;
      this.evenement.titre = this.modalEventTitle;
      this.evenement.image = this.modalEventImage;
      this.evenement.date = this.modalEventDate;
      this.evenement.lieu = this.modalEventPlace;
      this.evenement.text = this.modalEventText;
      this.evenement.time = this.modalEventTime;
      this.evenement.evenements_categorie_id = parseInt(
        this.evenements_categorie_id
      );
      this.evenement.invites = [...this.invites];
      this.modeEditImage = true;
    }
    let selectedDayIsoFormat = FormatDateStringToISOSimpleDate(
      this.selectedDay
    );
    this.evenement.date = new Date(selectedDayIsoFormat);
    this.evenement.date = format(
      parseISO(this.evenement.date.toISOString()),
      "yyyy-MM-dd"
    );
  },
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
.placeAndDateContainer {
  span {
    display: inline-block;
  }
}
.icon {
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  fill: #4762f1;
  margin-right: 17px;
  flex: 1;
  svg {
    fill: #4762f1;
  }
}
.text {
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
  margin-right: 21px;
  flex: 1;
}
.photo {
  height: 294px;
  border: 2px dashed #bfbfbf;
  border-radius: 17px;
  position: relative;
  .photoAdd {
    position: absolute;
    bottom: 30px;
    left: 350px;
    .a {
      fill: #4762f1;
    }
  }
  .photoAdd2 {
    position: absolute;
    bottom: 47px;
    left: 340px;
    height: 46px;
    width: 48px;
    border-radius: 25px;
    background-color: rgb(255, 71, 71);
    padding-top: 3px;
    opacity: 0.5 !important;
    z-index: 225;
    display: none;
    svg {
      fill: white;
    }
    * {
      opacity: 0.8 !important;
    }
  }
  .photoAdd2:hover {
    opacity: 1 !important;
    * {
      opacity: 1 !important;
    }
  }
}
.photo:hover {
  .photoAdd2 {
    display: inline-block;
  }
}
.photoIcon {
  position: absolute;
  left: 275px;
  top: 17px;
  .a {
    fill: #bfbfbf;
  }
}
.photoImgHolder {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 17px;
  z-index: 0;
}
.invites {
  display: inline-block;
  padding-top: 13px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  .invitesIcon {
    svg {
      fill: #4762f1;
    }
  }
  .val {
    font-size: 17px;
    display: inline-block;
    height: 26px;
  }
}
.invites:hover {
  .invitesIcon {
    svg {
      fill: #4763f1b1;
    }
  }
}
.invites:active {
  .invitesIcon {
    svg {
      fill: #4762f1;
    }
  }
}
</style>
