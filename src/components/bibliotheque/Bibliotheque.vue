<template>
  <b-row class="bibliothèque-container p-4">
    <b-col cols="3" class="leftHindSide">
      <b-row>
        <b-col cols="12">
          <span class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Recherche"
              v-model="serachContent"
              @input="setCurrentPage(1)"
            />
            <span
              :class="searched ? 'd-none' : '  search-icon '"
              @click="clearSearch"
            >
              <i class="fa fa-times"></i>
            </span>
            <span :class="searched ? 'search-icon' : ' d-none'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.627"
                height="22.632"
                viewBox="0 0 22.627 22.632"
              >
                <path
                  d="M26.861,25.487l-6.293-6.352a8.968,8.968,0,1,0-1.361,1.379l6.252,6.311a.968.968,0,0,0,1.367.035A.975.975,0,0,0,26.861,25.487Zm-13.34-4.9a7.081,7.081,0,1,1,5.008-2.074A7.038,7.038,0,0,1,13.521,20.591Z"
                  transform="translate(-4.5 -4.493)"
                />
              </svg>
            </span>
          </span>
        </b-col>
        <b-col cols="12" class="categoriesList">
          <span
            id="tousTag"
            ref="tousTag"
            class="tag activeTag"
            style="width: 244px"
            >Tous</span
          >
          <span class="addTag float-right" @click="openCategorieModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path
                  d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                />
              </g>
            </svg>
          </span>
          <br />
          <span
            class="CategoriesNavigat float-left"
            :class="{ CategoriesNavigatActive: categoriestoShowStartFrom != 0 }"
            @click="setMoinsCategoriestoShowStartFrom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
          </span>
          <span
            class="tag px-3"
            ref="tag"
            v-for="categorie in getCategoriesToShow"
            :key="categorie.id"
            >{{ categorie.libelle }}</span
          >
          <span
            class="CategoriesNavigat float-right"
            :class="{
              CategoriesNavigatActive:
                categoriestoShowStartFrom !=
                getDocuments_categories.length - categorieNumberToShow,
            }"
            @click="setPlusCategoriestoShowStartFrom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
              <g>
                <polygon
                  points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
                />
              </g>
            </svg>
          </span>
        </b-col>
        <b-col cols="12" class="documentList">
          <ul>
            <li
              v-for="document in FilteredDocumentList"
              :key="document.id"
              @click="
                openThisDocument(document.libelle);
                setSelectedFileId(document.id);
              "
              :class="{ selectedFile: selectedFileId == document.id }"
            >
              <span>
                <svg
                  v-if="getExtention(document.libelle) == 'pdf'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.442"
                  height="30.849"
                  viewBox="0 0 26.442 30.849"
                  style="fill: red !important"
                >
                  <path
                    class="a"
                    style="stroke: red"
                    d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
                    transform="translate(-2.571 -2.203)"
                  />
                </svg>

                <svg
                  v-if="
                    getExtention(document.libelle) == 'doc' ||
                    getExtention(document.libelle) == 'docx'
                  "
                  data-v-1301b462=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
                  style="margin-left: -4px"
                >
                  <linearGradient
                    id="Q7XamDf1hnh~bz~vAO7C6a"
                    x1="28"
                    x2="28"
                    y1="14.966"
                    y2="6.45"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#42a3f2" />
                    <stop offset="1" stop-color="#42a4eb" />
                  </linearGradient>
                  <path
                    fill="url(#Q7XamDf1hnh~bz~vAO7C6a)"
                    d="M42,6H14c-1.105,0-2,0.895-2,2v7.003h32V8C44,6.895,43.105,6,42,6z"
                  />
                  <linearGradient
                    id="Q7XamDf1hnh~bz~vAO7C6b"
                    x1="28"
                    x2="28"
                    y1="42"
                    y2="33.054"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#11408a" />
                    <stop offset="1" stop-color="#103f8f" />
                  </linearGradient>
                  <path
                    fill="url(#Q7XamDf1hnh~bz~vAO7C6b)"
                    d="M12,33.054V40c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2v-6.946H12z"
                  />
                  <linearGradient
                    id="Q7XamDf1hnh~bz~vAO7C6c"
                    x1="28"
                    x2="28"
                    y1="-15.46"
                    y2="-15.521"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#3079d6" />
                    <stop offset="1" stop-color="#297cd2" />
                  </linearGradient>
                  <path
                    fill="url(#Q7XamDf1hnh~bz~vAO7C6c)"
                    d="M12,15.003h32v9.002H12V15.003z"
                  />
                  <linearGradient
                    id="Q7XamDf1hnh~bz~vAO7C6d"
                    x1="12"
                    x2="44"
                    y1="28.53"
                    y2="28.53"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#1d59b3" />
                    <stop offset="1" stop-color="#195bbc" />
                  </linearGradient>
                  <path
                    fill="url(#Q7XamDf1hnh~bz~vAO7C6d)"
                    d="M12,24.005h32v9.05H12V24.005z"
                  />
                  <path
                    d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
                    opacity=".05"
                  />
                  <path
                    d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425 C25.333,34.603,23.936,36,22.213,36z"
                    opacity=".07"
                  />
                  <path
                    d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
                    opacity=".09"
                  />
                  <linearGradient
                    id="Q7XamDf1hnh~bz~vAO7C6e"
                    x1="4.744"
                    x2="23.494"
                    y1="14.744"
                    y2="33.493"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#256ac2" />
                    <stop offset="1" stop-color="#1247ad" />
                  </linearGradient>
                  <path
                    fill="url(#Q7XamDf1hnh~bz~vAO7C6e)"
                    d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16 C24,33.105,23.105,34,22,34z"
                  />
                  <path
                    fill="#fff"
                    d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689 L15.764,29h2.251l2.344-10H18.403z"
                  />
                </svg>
              </span>
              {{ document.libelle }}
              <span class="arrow">
                <svg
                  class="arrowSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="9">
      <b-row>
        <b-col cols="12" class="headerButton">
          <span class="title">{{ selectedDoc }}</span>
          <span class="buttonTools">
            <span class="downloadButton">
              <a :href="'/pdfsFile/' + selectedDoc" :download="selectedDoc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </a>
            </span>
            <span
              class="fullPage"
              @click="dialog = !dialog"
              style="height: 44px; width: 41px; padding-top: 2px"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                /></svg
            ></span>
            <span class="addDocs">
              <svg
                data-v-24d9b362=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40"
                height="40"
                viewBox="11 12 50 40"
              >
                <defs>
                  <svg:style>
                    .aaa {
                      fill: #4762f1;
                    }
                    .bbb {
                      fill: #fff;
                    }
                    .ccc {
                      filter: url(#a);
                    }
                  </svg:style>
                  <filter
                    id="a"
                    x="0"
                    y="0"
                    width="73"
                    height="73"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="5" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="4.5" result="b" />
                    <feFlood flood-color="#4762f1" flood-opacity="0.478" />
                    <feComposite operator="in" in2="b" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g transform="translate(-1087.5 -19.5)">
                  <g class="ccc" transform="matrix(1, 0, 0, 1, 1087.5, 19.5)">
                    <rect
                      class="aaa"
                      width="46"
                      height="46"
                      rx="23"
                      transform="translate(13.5 8.5)"
                    />
                  </g>
                  <path
                    class="bbb"
                    d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z"
                    transform="translate(1106 33)"
                  />
                </g>
              </svg>
            </span>
          </span>
        </b-col>
        <b-col cols="12">
          <PdfViewer
            v-if="selectedDoc && getExtention(selectedDoc) == 'pdf'"
            :selectedDoc="selectedDoc"
          />
          <DocViewer
            v-if="
              selectedDoc &&
              (getExtention(selectedDoc) == 'doc' ||
                getExtention(selectedDoc) == 'docx')
            "
            :selectedDoc="selectedDoc"
          />
        </b-col>
      </b-row>
    </b-col>
    <FullScreenModal v-model="dialog" :selectedDoc="selectedDoc" />
    <CategorieModal v-model="dialog2" :v-if="dialog2" class="d-none" />
  </b-row>
</template>
<script>
import FullScreenModal from "./FullScreenModal";
import PdfViewer from "./PdfViewer";
import DocViewer from "./DocViewer";
import { mapGetters, mapActions } from "vuex";
import CategorieModal from "./CategorieModal.vue";

export default {
  data: function () {
    return {
      serachContent: "",
      cleared: false,
      dialog: false,
      dialog2: false,
      selectedDoc: "basics.pdf",
      selectedFileId: "",
      categoriestoShowStartFrom: 0,
      categorieNumberToShow: 2,
    };
  },
  methods: {
    ...mapActions(["setDocuments_categoriesAction"]),
    clearSearch: function () {
      this.serachContent = "";
      this.cleared = true;
    },
    openFullScreenModal: function () {
      this.dialog = true;
    },
    openThisDocument: function (libelle) {
      this.selectedDoc = null;
      setTimeout(() => {
        this.selectedDoc = libelle;
      }, 500);
    },
    getExtention: function (libelle) {
      var re = /(?:\.([^.]+))?$/;
      return re.exec(libelle)[1];
    },
    setSelectedFileId: function (id) {
      this.selectedFileId = id;
    },
    openCategorieModal() {
      this.dialog2 = true;
    },
    setMoinsCategoriestoShowStartFrom() {
      if (this.categoriestoShowStartFrom != 0) this.categoriestoShowStartFrom--;
    },
    setPlusCategoriestoShowStartFrom() {
      if (
        this.categoriestoShowStartFrom !=
        this.getDocuments_categories.length - this.categorieNumberToShow
      )
        this.categoriestoShowStartFrom++;
    },
  },
  components: {
    PdfViewer,
    DocViewer,
    FullScreenModal,
    CategorieModal,
  },
  computed: {
    ...mapGetters(["getDocuments_categories"]),
    searched: function () {
      return this.serachContent.length === 0;
    },
    FilteredDocumentList: function () {
      let list = [...this.getDocuments_categories];
      if (this.serachContent != "")
        list = list.filter((element) =>
          element.libelle.includes(this.serachContent)
        );
      return list;
    },
    getCategoriesToShow() {
      return this.getDocuments_categories.slice(
        0 + this.categoriestoShowStartFrom,
        this.categorieNumberToShow + this.categoriestoShowStartFrom
      );
    },
  },
  mounted: function () {
    this.setDocuments_categoriesAction();
  },
  updated: function () {},
};
</script>
<style lang="scss" scoped>
.bibliothèque-container {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  max-height: 837px;
  margin: 0;
}
.leftHindSide {
  max-height: 801px;
}
.input-group {
  position: relative;
  display: inline-flex;
  width: 365px;
  height: 46px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  margin-right: 69px;

  input {
    background: #e7f5ff 0% 0% no-repeat padding-box;
    border-radius: 23px !important;
    border: none !important;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #87b0e6;
    overflow-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
  }
  .search-icon {
    fill: #87b0e6;
    z-index: 20;
    /* margin-top: 6px; */
    position: absolute;
    right: 6px;
    cursor: pointer;
    background-color: #e7f5ff;
    height: 38px;
    padding-top: 4px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    padding-right: 10px;
    width: 38px;
    svg {
      width: 27px;
      height: 27px;
    }
  }
}
.tag {
  min-width: 77px;
  height: 32px;
  display: inline-block;
  background: #bfbfbf 0% 0% no-repeat padding-box;
  border-radius: 23px;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  padding-top: 6px;
  cursor: pointer;
  margin-right: 10px;
}
.tag:hover {
  background-color: #87b0e6;
}
.activeTag {
  background-color: #3976c7;
}
.addTag {
  width: 46px;
  height: 46px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  svg {
    fill: #87b0e6;
    cursor: pointer;
  }
}

.a {
  fill: #fff;
  stroke: #87b0e6;
}
.b {
  fill: #87b0e6;
  font-size: 21px;
  font-family: Poppins-Regular, Poppins;
}
.c {
  stroke: none;
}
.d {
  fill: none;
}
.addTag:hover {
  .a {
    fill: #87b0e6;
    stroke: #fff;
  }
  .b {
    fill: #fff;
  }
}
.addTag svg:active {
  .a {
    fill: #fff;
    stroke: #87b0e6;
  }
  .b {
    fill: #87b0e6;
    font-size: 21px;
    font-family: Poppins-Regular, Poppins;
  }
}
.documentList {
  ul {
    text-indent: 0;
    list-style-type: none;
    max-height: 579px;
    min-height: 579px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 26px;

    height: calc(100% - 102px);
  }
  li {
    height: 35px;
    text-align: left;
    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0px;
    color: #848484;
    border-bottom: 1px solid #00000026;
    margin-bottom: 10px;
    cursor: pointer;
    span {
      margin-right: 8px;
    }
  }
  li:hover {
    background-color: #8080801a;
  }
}
.categoriesList {
  max-height: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  span {
    margin-bottom: 10px;
  }
}

::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.headerButton {
  height: 75px;
}
.title {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  display: inline-block;
}
.buttonTools {
  float: right;
  span {
    display: inline-block;
    height: 38px;
    width: 41px;
    text-align: center;
    padding-top: 4px;
    cursor: pointer;
  }
  .downloadButton {
    svg {
      fill: #87b0e6;
    }
    margin-right: 10px;
  }
  .fullPage {
    svg {
      fill: #87b0e6;
    }
    margin-right: 10px;
  }
  .addDocs {
    cursor: pointer;
  }
}
.pdfViewContainer {
  max-height: 678px;
  min-height: 678px;
  overflow: auto;
  background-color: #707070;
  position: relative;
  text-align: center;
  .pdfView {
    height: 100%;
    display: inline-block !important;
    width: 100%;
    background-color: transparent;
  }
}
.navigationTools {
  display: none;
  position: absolute;
  z-index: 1;
  bottom: 30px;
  right: 467px;
  width: 245px;
  background-color: #212529e6;
  text-align: center;
  border-radius: 4px;
  height: 39px;
  padding-top: 5px;
  color: white;
  user-select: none;
  span {
    display: inline-block;
    margin: 0 3px;
  }
  svg {
    fill: white;
  }
  .pageZoomButton {
    cursor: pointer;
  }
  .pageZoomButton:hover {
    background-color: rgba(255, 255, 255, 0.27);
    border-radius: 20px;
  }
  .pageZoomButton:active {
    background-color: rgba(255, 255, 255, 0.619);
    border-radius: 20px;
  }
  .pageSeparator {
    display: inline-block;
    height: 20px;
    border: 1px solid white;
    width: 2px;
  }
  .pageTotal::after {
    content: "";
    height: 20px;
    background-color: white;
  }
}
.pdfContainer:hover {
  .navigationTools {
    display: inline-block;
  }
}
.pageTotal {
  border-right: 1px solid #ffffff38;
  padding-right: 12px;
  height: 29px;
}

.downloadButton:hover {
  background-color: rgba(128, 128, 128, 0.365);
  border-radius: 20px;
}
.downloadButton:active {
  background-color: rgba(211, 202, 202, 0.365);
  border-radius: 20px;
}
.fullPage:hover {
  background-color: rgba(128, 128, 128, 0.365);
  border-radius: 20px;
}
.fullPage:active {
  background-color: rgba(211, 202, 202, 0.365);
  border-radius: 20px;
}
.addDocs {
  background-color: rgba(255, 255, 255, 0.365);
  border-radius: 0;
}
.addDocs:hover {
  .aaa {
    fill: #4763f1cb;
  }
}
.addDocs:active {
  .aaa {
    fill: #5670f2b1;
  }
}
.arrow {
  float: right;
  display: none;
  .arrowSvg {
    fill: #87b0e6;
  }
}
.selectedFile {
  color: #87b0e6 !important;
  .arrow {
    display: inline-block;
  }
}
.CategoriesNavigat {
  display: inline-block;
  margin: 0 8px;
  svg {
    fill: rgba(0, 0, 0, 0.316);
  }
}
.CategoriesNavigatActive {
  cursor: pointer;
  svg {
    fill: #87b0e6 !important;
  }
}
.CategoriesNavigatActive:hover {
  svg {
    fill: #87b0e675 !important;
  }
}
.CategoriesNavigatActive:active {
  svg {
    fill: #87b0e6 !important;
  }
}
</style>
