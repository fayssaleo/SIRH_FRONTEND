<template>
  <b-row class="events-container p-4">
    <b-col cols="12">
      <span
        id="tousTag"
        ref="tousTag"
        class="tag"
        :class="{
          activeTag:
            categoriesSelectionne.length == getActualites_categories.length,
        }"
        @click="setTousCategories"
        >Tous</span
      >
      <span
        class="CategoriesNavigat left"
        :class="{ CategoriesNavigatActive: categoriestoShowStartFrom != 0 }"
        @click="setMoinsCategoriestoShowStartFrom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
        </svg>
      </span>
      <span
        class="tag"
        ref="tag"
        :class="{ activeTag: categoriesSelectionne.includes(categorie.id) }"
        v-for="categorie in getCategoriesToShow"
        @click="activeTag(categorie.id)"
        :key="categorie.id"
        >{{ categorie.libelle }}</span
      >
      <span
        class="CategoriesNavigat right"
        :class="{
          CategoriesNavigatActive:
            categoriestoShowStartFrom !=
            getActualites_categories.length - categorieNumberToShow,
        }"
        @click="setPlusCategoriestoShowStartFrom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 20 20"
          height="36px"
          viewBox="0 0 20 20"
          width="36px"
          fill="#000000"
        >
          <g>
            <g><rect fill="none" height="20" width="20" /></g>
          </g>
          <g>
            <polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10" />
          </g>
        </svg>
      </span>
      <span class="addTag" @click="modalDialogClick">
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
      <span class="addAct" @click="openAddModal">
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
      <span
        class="archiveTag"
        :class="{ archiveActiveTag: showArchive }"
        style="float: right"
        @click="showArchiveMethod"
        >Archive</span
      >
    </b-col>
    <b-col cols="12">
      <b-row
        :style="{
          'max-height': '646px',
          'min-height': '646px',
          'overflow-y': perPageOverflowAdapter_y,
          'overflow-x': 'hidden',
          'border-bottom': '1px solid #70707038',
        }"
      >
        <ul id="itemList" :class="{ 'd-none': this.fillteredList.length == 0 }">
          <li
            v-for="n in itemsForList()"
            :key="n.id"
            @click="
              showModal(
                n.id,
                n.titre,
                n.image,
                n.date,
                n.time,
                n.contenu,
                n.actif,
                n.actualite_categorie_ids
              )
            "
          >
            <Actualite
              :titre="n.titre"
              :image="n.image"
              :created_at="n.date + ' à ' + n.time"
              :height="'220px'"
              :font="'normal normal 600 20px/30px Poppins'"
              :color="'#BFBFBF !important'"
            />
          </li>
        </ul>
        <v-row
          id="notFound"
          :class="{ 'd-none': this.fillteredList.length != 0 }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="_x33_0"
            enable-background="new 0 0 62 62"
            height="400"
            viewBox="0 0 62 62"
            width="512"
          >
            <g>
              <path
                d="m59 8h-17.517c-3.568-5.015-9.317-8-15.483-8-10.477 0-19 8.523-19 19 0 9.104 6.439 16.725 15 18.568v2.432h-2.169c-3.449 0-6.719 1.606-8.844 4.271-.293-.168-.627-.271-.987-.271h-10v14h10c.474 0 .904-.172 1.247-.449 1.982 1.584 4.421 2.449 6.996 2.449h3.942c.414 1.161 1.514 2 2.816 2h2c1.654 0 3-1.346 3-3v-1h1c1.654 0 3-1.346 3-3 0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2s-.301-1.468-.78-2c.48-.532.78-1.229.78-2 0-1.51-1.125-2.751-2.579-2.958.358-.599.578-1.293.578-2.042 0-1.103-.897-2-2-2v-2.426c3.677-.785 7.034-2.647 9.674-5.39l.061.184c.326.977 1.236 1.632 2.265 1.632s1.939-.655 2.265-1.632l1.456-4.368h13.279c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3zm-49 48h-8v-10h8zm2-.441v-9.25c1.697-2.659 4.668-4.309 7.831-4.309h10.169c0 1.103-.897 2-2 2h-3.618l-.276.553c-.525 1.051-1.428 1.834-2.543 2.206l-.879.293.633 1.896.683-.228v4.51c-1.057-.971-2.314-1.722-3.684-2.179l-.633 1.896c1.725.576 3.23 1.726 4.238 3.237l.079.119v1.697h-3.757c-2.336 0-4.534-.87-6.243-2.441zm20-4.559c0 .552-.449 1-1 1h-2c-.551 0-1-.448-1-1s.449-1 1-1h2c.551 0 1 .448 1 1zm-5 9h-2c-.551 0-1-.448-1-1v-11.298c.623-.465 1.164-1.033 1.583-1.702h.601c-.112.314-.184.648-.184 1 0 .771.301 1.468.78 2-.48.532-.78 1.229-.78 2s.301 1.468.78 2c-.48.532-.78 1.229-.78 2 0 1.302.839 2.402 2 2.816v1.184c0 .552-.449 1-1 1zm4-4h-2c-.551 0-1-.448-1-1s.449-1 1-1h2c.551 0 1 .448 1 1s-.449 1-1 1zm1-9c0 .552-.449 1-1 1h-2c-.551 0-1-.448-1-1s.449-1 1-1h2c.551 0 1 .448 1 1zm-4-7h-4v-2.107c.658.069 1.324.107 2 .107.673 0 1.34-.039 2-.108zm-2-4c-9.374 0-17-7.626-17-17s7.626-17 17-17c5.025 0 9.741 2.215 12.956 6h-2.779c-2.781-2.575-6.372-4-10.177-4-8.271 0-15 6.729-15 15s6.729 15 15 15c4.717 0 9.142-2.243 11.972-6h.307l.663 1.99c-3.24 3.816-7.918 6.01-12.942 6.01zm-2-8h11.353c-2.433 2.524-5.796 4-9.353 4-7.168 0-13-5.832-13-13s5.832-13 13-13c2.484 0 4.864.703 6.919 2h-8.919c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3zm36-3c0 .552-.449 1-1 1h-14.721l-1.912 5.735c-.105.316-.63.316-.735 0l-1.911-5.735h-15.721c-.551 0-1-.448-1-1v-14c0-.552.449-1 1-1h35c.551 0 1 .448 1 1z"
              />
              <path
                d="m43 12h-4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-4 10v-8h4l.001 8z"
              />
              <path
                d="m33 14h-2v5h-3.557l2.494-6.648-1.874-.704-3.506 9.352h6.443v3h2v-3h2v-2h-2z"
              />
              <path
                d="m56 14h-2v5h-3.557l2.494-6.648-1.874-.704-3.506 9.352h6.443v3h2v-3h2v-2h-2z"
              />
              <path
                d="m41 52c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
              />
              <path
                d="m42 38h-2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-2 10v-8h2l.001 8z"
              />
              <path
                d="m49 52c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
              />
              <path
                d="m50 38h-2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-2 10v-8h2l.001 8z"
              />
              <path
                d="m57 52c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
              />
              <path
                d="m58 38h-2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-2 10v-8h2l.001 8z"
              />
            </g>
          </svg>
        </v-row>
      </b-row>
    </b-col>
    <b-row class="piginationNavBar">
      <span class="afficher">Afficher</span>
      <span
        class="input-group navbarPerpageIcon"
        v-out-click="() => (showPerPageList = false)"
        @click="showPerPageList = !showPerPageList"
      >
        <ul id="perPageList" :class="{ 'd-none': !showPerPageList }">
          <li
            @click="
              perPage = 4;
              currentPage = 1;
            "
          >
            <span>4</span>
          </li>
          <li
            @click="
              perPage = 6;
              currentPage = 1;
            "
          >
            <span>6</span>
          </li>
          <li
            @click="
              perPage = 8;
              currentPage = 1;
            "
          >
            <span>8</span>
          </li>
          <li
            @click="
              perPage = 10;
              currentPage = 1;
            "
          >
            <span>10</span>
          </li>
        </ul>
        <input
          type="text"
          class="form-control"
          placeholder="Recherche"
          v-model="perPage"
          :disabled="true"
        />
        <span class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.882"
            height="20.782"
            viewBox="0 0 11.882 20.782"
          >
            <path
              d="M10.395,3.582l7.858,7.864a1.479,1.479,0,0,0,2.1,0,1.5,1.5,0,0,0,0-2.1l-8.9-8.91A1.482,1.482,0,0,0,9.4.389L.433,9.336a1.485,1.485,0,0,0,2.1,2.1Z"
              transform="translate(11.882) rotate(90)"
            />
          </svg>
        </span>
      </span>

      <nav class="pageNavigation">
        <ul class="pagination">
          <li class="page-item" @click="setCurrentPage(1)">
            <a
              :ref="paginationArrows['first']"
              class="page-link arrows"
              :class="{
                arrowEnable: paginationState != 'inFirstPage' && pages > 1,
              }"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.882"
                height="20.782"
                viewBox="0 0 20.882 20.782"
              >
                <g transform="translate(-567.115 -1013.609)">
                  <path
                    d="M16.582,19.547l7.858-7.864a1.479,1.479,0,0,1,2.1,0,1.5,1.5,0,0,1,0,2.1l-8.9,8.91a1.482,1.482,0,0,1-2.048.043L6.621,13.793a1.485,1.485,0,1,1,2.1-2.1Z"
                    transform="translate(590.244 1007.422) rotate(90)"
                  />
                  <path
                    d="M16.582,19.547l7.858-7.864a1.479,1.479,0,0,1,2.1,0,1.5,1.5,0,0,1,0,2.1l-8.9,8.91a1.482,1.482,0,0,1-2.048.043L6.621,13.793a1.485,1.485,0,1,1,2.1-2.1Z"
                    transform="translate(599.244 1007.422) rotate(90)"
                  />
                </g></svg
            ></a>
          </li>
          <li class="page-item" @click="setCurrentPage(currentPage - 1)">
            <a
              :ref="paginationArrows['precedent']"
              :class="{
                arrowEnable: paginationState != 'inFirstPage' && pages > 1,
              }"
              class="page-link arrows"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.882"
                height="20.782"
                viewBox="0 0 11.882 20.782"
              >
                <path
                  d="M16.582,19.547l7.858-7.864a1.479,1.479,0,0,1,2.1,0,1.5,1.5,0,0,1,0,2.1l-8.9,8.91a1.482,1.482,0,0,1-2.048.043L6.621,13.793a1.485,1.485,0,1,1,2.1-2.1Z"
                  transform="translate(23.129 -6.188) rotate(90)"
                /></svg
            ></a>
          </li>
          <li
            class="page-item"
            v-for="(item, index) in Array(pages).fill(0)"
            :key="index"
            @click="setCurrentPage(index + 1)"
          >
            <a
              class="page-link paginationEelemnt"
              :class="{ paginationActiveEelement: currentPage == index + 1 }"
              href="#"
              >{{ index + 1 }}</a
            >
          </li>
          <li class="page-item" @click="setCurrentPage(currentPage + 1)">
            <a
              :ref="paginationArrows['next']"
              class="page-link arrows"
              :class="{
                arrowEnable: paginationState != 'inLastPage' && pages > 1,
              }"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.882"
                height="20.782"
                viewBox="0 0 11.882 20.782"
              >
                <path
                  d="M10.395,3.582l7.858,7.864a1.479,1.479,0,0,0,2.1,0,1.5,1.5,0,0,0,0-2.1l-8.9-8.91A1.482,1.482,0,0,0,9.4.389L.433,9.336a1.485,1.485,0,0,0,2.1,2.1Z"
                  transform="translate(11.882) rotate(90)"
                /></svg
            ></a>
          </li>
          <li class="page-item" @click="setCurrentPage(pages)">
            <a
              :ref="paginationArrows['last']"
              class="page-link arrows"
              :class="{
                arrowEnable: paginationState != 'inLastPage' && pages > 1,
              }"
              href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.882"
                height="20.782"
                viewBox="0 0 20.882 20.782"
              >
                <g transform="translate(0)">
                  <path
                    d="M10.395,3.582l7.858,7.864a1.479,1.479,0,0,0,2.1,0,1.5,1.5,0,0,0,0-2.1l-8.9-8.91A1.482,1.482,0,0,0,9.4.389L.433,9.336a1.485,1.485,0,0,0,2.1,2.1Z"
                    transform="translate(20.883 0) rotate(90)"
                  />
                  <path
                    d="M10.395,3.582l7.858,7.864a1.479,1.479,0,0,0,2.1,0,1.5,1.5,0,0,0,0-2.1l-8.9-8.91A1.482,1.482,0,0,0,9.4.389L.433,9.336a1.485,1.485,0,0,0,2.1,2.1Z"
                    transform="translate(11.883 0) rotate(90)"
                  />
                </g></svg
            ></a>
          </li>
        </ul>
      </nav>
      <span class="sauterLaPage">Sauter vers la page</span>
      <input
        id="sauterVersPage"
        class="form-control sauterVersPageTextfield"
        @change="sauterPageChange($event)"
        :value="currentPage"
        :disabled="pages < 2"
        type="text"
      />
    </b-row>
    <ActualiteModal
      v-model="ActualiteModalDialog"
      v-if="ActualiteModalDialog"
      :modalNewid="modalNewId"
      :modalNewTitle="modalNewTitle"
      :modalNewImage="modalNewImage"
      :modalNewDate="modalNewDate"
      :modalNewTime="modalNewTime"
      :modalNewText="modalNewText"
      :modalNewActif="modalNewActif"
      :modalNewCategorie_ids="modalNewCategorie_ids"
      :modeEdit="false"
      @showEditModal="showEditModal"
      class="d-none"
    />
    <CategorieModal
      v-model="modalDialog"
      :v-if="modalDialog"
      :modalDialogClick="modalDialogClick"
      :addCategorie="addCategorie"
      class="d-none"
    />
    <AddNewsModal
      v-model="dialog"
      v-if="dialog"
      class="d-none"
      :modalNewid="modalNewId"
      :modalNewTitle="modalNewTitle"
      :modalNewImage="modalNewImage"
      :modalNewDate="modalNewDate"
      :modalNewTime="modalNewTime"
      :modalNewText="modalNewText"
      :modalNewActif="modalNewActif"
      :modalNewCategorie_ids="modalNewCategorie_ids"
      :modeEdit="modeEdit"
    />
  </b-row>
</template>
<script>
import Actualite from "./Actualite.vue";
import ActualiteModal from "./ActualiteModal.vue";
import CategorieModal from "./CategorieModal.vue";
import AddNewsModal from "./AddNewsModal.vue";
import OutClick from "vue-click-outside";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Actualites",
  components: { Actualite, ActualiteModal, CategorieModal, AddNewsModal },
  data() {
    return {
      items: [4, 6, 8, 10],
      modalDialog: false,
      isSearching: true,
      serachContent: "",
      currentPage: 1,
      perPage: 4,
      categories: ["Interne", "Digital", "E-Learning"],
      categoriesSelectionne: [],
      modalNewId: "",
      modalNewActif: "",
      modalNewTitle: "",
      modalNewImage: "",
      modalNewText: "",
      modalNewDate: "",
      modalNewTime: "",
      modalNewCategorie_ids: [],
      cleared: false,
      paginationArrows: ["first", "precedent", "next", "last"],
      paginationState: "inFirstPage",
      showPerPageList: false,
      dialog: false,
      dialog2: false,
      showArchive: false,
      ActualiteModalDialog: false,
      modeEdit: false,
      categoriestoShowStartFrom: 0,
      categorieNumberToShow: 4,
    };
  },
  methods: {
    ...mapActions([
      "setActualites_categoriesAction",
      "setActualitesAction",
      "getActualiteImagesFolderAction",
    ]),
    clearSearch: function () {
      this.serachContent = "";
      this.cleared = true;
    },
    activeTag: function (id) {
      if (
        this.categoriesSelectionne.length ==
        this.getActualites_categories.length
      ) {
        this.categoriesSelectionne = [];
        this.categoriesSelectionne.push(id);
      } else {
        if (this.categoriesSelectionne.includes(id)) {
          this.categoriesSelectionne = this.categoriesSelectionne.filter(
            (e) => e != id
          );
        } else {
          this.categoriesSelectionne.push(id);
        }
      }
      if (this.categoriesSelectionne.length == 0) {
        this.setTousCategories();
      }
    },
    itemsForList: function () {
      return this.fillteredList.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    setCurrentPage: function (page) {
      if (0 < page && page <= this.pages) {
        this.currentPage = page;

        if (page == this.pages) {
          this.paginationState = "inLastPage";
        } else if (page == 1) {
          this.paginationState = "inFirstPage";
        } else {
          this.paginationState = "inBeetwen";
        }
      }
    },
    log: function (msg) {
      console.log(msg);
    },
    showModal: function (
      id,
      titre,
      image,
      date,
      time,
      contenu,
      actif,
      actualite_categorie_ids
    ) {
      this.modalNewId = id;
      this.modalNewTitle = titre;
      this.modalNewImage = image;
      this.modalNewDate = date;
      this.modalNewTime = time;
      this.modalNewText = contenu;
      this.modalNewActif = actif;
      this.modalNewCategorie_ids = actualite_categorie_ids;
      this.ActualiteModalDialog = true;
      this.modeEdit = false;
    },
    showEditModal: function (
      id,
      titre,
      image,
      date,
      time,
      contenu,
      actif,
      actualite_categorie_ids
    ) {
      this.modalNewId = id;
      this.modalNewTitle = titre;
      this.modalNewImage = image;
      this.modalNewDate = date;
      this.modalNewTime = time;
      this.modalNewText = contenu;
      this.modalNewActif = actif;
      this.modalNewCategorie_ids = actualite_categorie_ids;
      this.ActualiteModalDialog = true;
      this.modeEdit = true;
      this.dialog = true;
    },
    modalDialogClick: function () {
      this.modalDialog = !this.modalDialog;
    },
    isNumberKey: function (evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        false;
      return true;
    },
    sauterPageChange: function (evt) {
      if (this.isNumberKey(evt)) {
        if (evt.target.value < 1 || evt.target.value > this.pages) {
          evt.target.value = this.currentPage;
        } else {
          this.setCurrentPage(evt.target.value);
        }
      } else {
        evt.target.value = this.currentPage;
      }
    },
    addCategorie: function (categorie) {
      this.categories.push(categorie);
    },
    openAddModal: function () {
      this.modeEdit = false;
      this.dialog = true;
    },
    setTousCategories() {
      this.categoriesSelectionne = this.getActualites_categories.map(
        (e) => e.id
      );
    },
    showArchiveMethod() {
      this.showArchive = !this.showArchive;
    },
    setMoinsCategoriestoShowStartFrom() {
      if (this.categoriestoShowStartFrom != 0) this.categoriestoShowStartFrom--;
    },
    setPlusCategoriestoShowStartFrom() {
      if (
        this.categoriestoShowStartFrom !=
        this.getActualites_categories.length - this.categorieNumberToShow
      )
        this.categoriestoShowStartFrom++;
    },
  },
  updated: function () {
    if (this.cleared) {
      this.setCurrentPage(1);
      this.cleared = false;
    }
  },
  computed: {
    ...mapGetters([
      "getActualites",
      "getActualites_categories",
      "getActualiteImagesFolder",
    ]),
    searched: function () {
      return this.serachContent.length === 0;
    },
    rows: function () {
      return this.getActualites.length;
    },
    pages: function () {
      let withParseValue = parseInt(this.fillteredList.length / this.perPage);
      return this.fillteredList.length / this.perPage - withParseValue > 0
        ? withParseValue + 1
        : withParseValue;
    },
    perPageOverflowAdapter_y: function () {
      return this.perPage > 4 ? "auto" : "hidden";
    },
    fillteredList: function () {
      let list = [
        ...this.getActualites.filter((e) =>
          e.actif == this.showArchive ? 0 : 1
        ),
      ];

      if (this.categoriesSelectionne.length != 0) {
        list = list.filter((element) => {
          for (
            let index = 0;
            index < element.actualite_categorie_ids.length;
            index++
          ) {
            if (
              this.categoriesSelectionne.includes(
                element.actualite_categorie_ids[index]
              )
            )
              return true;
          }
        });
      }
      if (this.serachContent != "")
        list = list.filter((element) =>
          element.titre.includes(this.serachContent)
        );

      return list;
    },
    getCategoriesToShow() {
      return this.getActualites_categories.slice(
        0 + this.categoriestoShowStartFrom,
        this.categorieNumberToShow + this.categoriestoShowStartFrom
      );
    },
  },
  directives: {
    OutClick,
  },
  mounted: function () {
    this.setActualites_categoriesAction().then(() => {
      this.setActualitesAction().then(() => {
        this.getActualiteImagesFolderAction();
        this.setCurrentPage(1);
        this.categoriesSelectionne = this.getActualites_categories.map(
          (e) => e.id
        );
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.events-container {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 10px;
  box-shadow: 0px 3px 23px #00000029;
  min-height: calc(100% - 89px);
  max-height: calc(100% - 340px);
  position: relative;
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
  margin-right: 28px;
  float: right;

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
  width: 110px;
  height: 40px;
  display: inline-block;
  background: #bfbfbf 0% 0% no-repeat padding-box;
  border-radius: 23px;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  padding-top: 11px;
  cursor: pointer;
  margin-right: 10px;
  user-select: none;
}
.tag:hover {
  background-color: #87b0e6;
}
.activeTag {
  background-color: #3976c7;
}
.archiveTag {
  width: 77px;
  height: 40px;
  display: inline-block;
  background: #bfbfbf 0% 0% no-repeat padding-box;
  border-radius: 23px;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  padding-top: 11px;
  cursor: pointer;
  margin-right: 10px;
  user-select: none;
}
.archiveTag:hover {
  background-color: #7e35d1;
}
.archiveActiveTag {
  background-color: #7e35d1;
}
.archiveActiveTag:hover {
  background-color: #7e35d198;
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
#itemList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 31px;
  li {
    flex: 40%;
    margin: 10px;
    margin-bottom: 24px;
    min-height: 294px;
    cursor: pointer;
    user-select: none;
    height: 150px;
  }
  li:hover {
    background-color: #3976c726;
    box-shadow: -2px 0px 12px 11px #4762f11f;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  li:nth-child(odd) {
    margin-right: 5%;
  }
  li:nth-child(odd):last-child {
    max-width: 46.5%;
  }
}
.pagination {
  * {
    color: #848484 !important;
    border: none;
    margin: 3px;
    user-select: none;
  }
}
.pageNavigation {
  display: inline-block;
  max-height: 50px;
}

@media screen and (max-width: 1350px) {
  ul {
    li {
      margin-right: 5% !important;
    }
    li:last-child {
      max-width: 100%;
    }
  }
  .pageNavigation {
    * {
      margin-right: 0 !important;
    }
  }
}

@media screen and (max-width: 1620px) {
  .tag {
    margin-right: 2px;
  }
  .input-group {
    margin-right: 8px;
    width: 260px;
  }
  .piginationNavBar {
    margin-left: 10px !important;
  }
}
::-webkit-scrollbar {
  width: 8px !important;
}
.navbarPerpageIcon {
  user-select: none !important;
  margin-top: 6px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 76px;
    height: 102px;
    background: white;
    border-radius: 10px;
    /* text-align: center; */
    border: 1px solid #bfbfbf;
    position: absolute;
    top: -101px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: #848484 !important;
    font: normal normal normal 16px/25px Poppins;
    span {
      padding-left: 11px;
    }
    li:hover {
      background-color: rgba(0, 0, 255, 0.494);
      color: white;
    }
  }
  input {
    border-radius: none !important;
    background: none !important;
    user-select: none;
    color: #848484 !important;
  }
  input:focus {
    border-radius: none !important;
    border: none !important;
    box-shadow: none;
  }
  width: 78px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bfbfbf;
  border-radius: 6px;
  opacity: 1;
  svg {
    transform: rotate(90deg);
    width: 26px !important;
    height: 14px !important;
  }
  .search-icon {
    right: 8px !important;
    padding-top: 7px !important;
    width: 17px !important;
    border-radius: none !important;
    background: none !important;
  }
}
.afficher {
  width: 61px;
  height: 21px;
  text-align: left;
  font: normal normal normal 15px/23px Poppins;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
  margin-top: 14px;
  margin-right: 21px;
}
.sauterLaPage {
  text-align: left;
  font: normal normal normal 15px/23px Poppins;
  letter-spacing: 0px;
  color: #848484;
  margin-top: 14px;
  margin-left: 15px;
}
.sauterVersPageTextfield {
  width: 78px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bfbfbf;
  border-radius: 6px;
  margin-left: 19px;
  margin-top: 8px;
}
.paginationActiveEelement {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  color: #87b0e6 !important;
  border-radius: 6px;
}
.arrows {
  cursor: not-allowed;
  svg {
    fill: #bfbfbf;
  }
}
.arrows:focus {
  box-shadow: none !important;
}
.arrowEnable {
  cursor: pointer;
  svg {
    fill: #87b0e6 !important;
  }
}
.piginationNavBar {
  height: 50px;
  margin-left: 18%;
}
#notFound {
  justify-content: center;
  padding-top: 90px;
  fill: #80808070;
  padding-right: 68px;
}
.addAct {
  float: right;
  cursor: pointer;
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
