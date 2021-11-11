<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="addActualiteModel">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Ajouter Actualité :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container>
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
                      <span
                        class="photoIcon"
                        v-show="
                          !(modeEditImage && actualite.image != null) &&
                          !files.length
                        "
                      >
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
                      <span
                        class="photoAdd"
                        v-show="
                          !(modeEditImage && actualite.image != null) &&
                          !files.length
                        "
                      >
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
                        v-show="
                          files.length ||
                          (modeEditImage && actualite.image != null)
                        "
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
                      v-show="
                        files.length ||
                        (modeEditImage && actualite.image != null)
                      "
                      class="photoImgHolder"
                      ref="imgPhoto"
                      :src="
                        files.length
                          ? files[0].url
                          : modeEditImage
                          ? getActualiteImagesFolder + '/' + actualite.image
                          : ''
                      "
                      alt=""
                    />
                  </div>
                </b-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Titre :"
                    v-model="actualite.titre"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="getActualites_categories"
                    item-text="libelle"
                    item-value="id"
                    label="Catgerories :"
                    v-model="actualite.actualite_categorie_ids"
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    class="textArea"
                    solo
                    name="input-7-4"
                    label="Text"
                    style="height: 180px; max-height: 180px; min-height: 180px"
                    v-model="actualite.contenu"
                  ></v-textarea>
                </v-col>
                <small class="d-none">*indicates required field</small>
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
    </v-row>
  </v-app>
</template>

<script>
import VueUploadComponent from "vue-upload-component";
import { mapGetters, mapActions } from "vuex";
import toFormData from "@/plugins/objectToFormData";

export default {
  components: {
    FileUpload: VueUploadComponent,
  },
  props: [
    "value",
    "modeEdit",
    "modalNewTitle",
    "modalNewImage",
    "modalNewDate",
    "modalNewTime",
    "modalNewText",
    "modalNewid",
    "modalNewActif",
    "modalNewCategorie_ids",
  ],
  data() {
    return {
      actualite: {
        id: "",
        titre: "",
        image: "",
        actualite_categorie_ids: [],
        contenu: "",
      },
      files: [],
      modeEditImage: false,
    };
  },
  computed: {
    ...mapGetters(["getActualites_categories", "getActualiteImagesFolder"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    ...mapActions(["addActualiteAction", "editActualiteAction"]),
    closeDialog() {
      this.dialog = false;
    },
    addNews() {
      this.$store.commit("addNews", this.actualite);
      this.closeDialog();
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        this.$nextTick(function () {
          this.Methode = true;
        });
      }
      if (!newFile && oldFile) {
        this.Methode = false;
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
          ...this.actualite,
          file: this.files[0].file,
        });
      } else {
        formData = toFormData({
          ...this.actualite,
        });
      }
      this.addActualiteAction(formData).then(() => {
        this.closeDialog();
      });
    },
    editMethode() {
      let formData = {};
      if (this.files.length) {
        formData = toFormData({
          ...this.actualite,
          file: this.files[0].file,
        });
      } else {
        formData = toFormData({
          ...this.actualite,
        });
      }
      this.editActualiteAction(formData).then(() => {
        this.closeDialog();
      });
    },
  },
  mounted() {
    if (this.modeEdit) {
      this.modeEditImage = true;
      this.actualite.id = this.modalNewid;
      this.actualite.titre = this.modalNewTitle;
      this.actualite.image = this.modalNewImage;
      this.actualite.actualite_categorie_ids = this.modalNewCategorie_ids;
      this.actualite.contenu = this.modalNewText;
    }
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
.addActualiteModel {
  border-radius: 20px;
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
</style>
