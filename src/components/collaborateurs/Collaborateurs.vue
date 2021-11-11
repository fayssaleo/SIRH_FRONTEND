<template>
  <b-row
    class="collaborateurs-container"
    style="padding: 0px !important; flex-direction: column; margin-left: 0"
    ref="theCollaborateurContainer"
  >
    <b-col cols="12" class="collaborateurs-navbar">
      <b-col cols="8" class="fonctions">
        <span
          :id="'fonctionElement'"
          class="fonctionElement"
          :class="SelectedFonctions.length == 0 ? 'tag' : 'fonction'"
          @click="tousFonctionsSelected"
          style="padding-right: 13px; margin-left: 0px"
          >Tous</span
        >
        <div class="fonctionList">
          <span
            :id="'fonctionElement' + fonction"
            class="fonctionElement fonctionElementList"
            :class="
              SelectedFonctions.includes(fonction.id) ? 'tag' : 'fonction'
            "
            v-for="(fonction, index) in checkFonctionItemVisibility"
            :key="fonction.id"
            @click="fonctionsClick(fonction.id)"
          >
            <span
              class="switchLeft"
              @click="
                moveFonction(index, -1);
                stopProp($event);
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 7 24"
                width="7px"
                fill="#000000"
              >
                <path d="M14 7l-5 5 5 5V7z" />
                <path d="M24 0v24H0V0h24z" fill="none" />
              </svg>
            </span>
            <span
              class="switchRight"
              @click="
                moveFonction(index, 1);
                stopProp($event);
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="10 0 24 24"
                width="7px"
                fill="#000000"
              >
                <path d="M10 17l5-5-5-5v10z" />
                <path d="M0 24V0h24v24H0z" fill="none" />
              </svg>
            </span>
            <span class="functionTitle"> {{ fonction.libelle }}</span>
          </span>
        </div>
        <div class="tools">
          <span
            class="leftArrow"
            :style="{
              visibility: fonctionShiftArrowLeftHidden ? 'hidden' : 'visible',
            }"
            @click="fonctionsShift(-1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg
          ></span>
          <span
            class="rightArrow"
            @click="fonctionsShift(1)"
            :style="{
              visibility: fonctionShiftArrowRightHidden ? 'hidden' : 'visible',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg
          ></span>
          <span class="add" @click="openAddFonctionModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
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
        </div>
      </b-col>
      <b-col cols="1" class="p-0"
        ><span
          class="Archive"
          :class="{ ArchiveActive: archivedList }"
          @click="showDisabledCollaborateurs"
          >Archive</span
        ></b-col
      >
      <b-col cols="2" class="organigram"><span>Organigramme</span></b-col>
      <span class="addAct">
        <!-- <svg
          data-v-24d9b362=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="55"
          height="55"
          viewBox="11 14 53 40"
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
        </svg> -->
        <add-act @click="openAddModal" />
      </span>
    </b-col>
    <b-col cols="12" class="tableHeader-Container">
      <table class="table tableHeader">
        <thead>
          <tr ref="tableHeaderTh">
            <th scope="col" style="cursor: pointer; user-select: none">
              <span
                class="thTitle"
                @click="fillterByThisColumn('prenom')"
                :class="{ isFilteredWith: firstnameSearchContent == '' }"
              >
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: firstnameSearchContent == '' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Prénom</span
              >
              <span
                :class="{ 'd-none': columnToFillterWith == 'prenom' }"
                @click="fillterByThisColumn('prenom')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('prenom')"
                :class="{
                  'd-none': columnToFillterWith != 'prenom',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span class="pteteSearchContainer" style="right: -62px">
                <span
                  class="input-group2"
                  @click="setSearchedColumnName('prenom')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="Recherche"
                    v-model="firstnameSearchContent"
                  />
                  <span
                    :class="firstnameSearched ? 'd-none' : '  search-icon2 '"
                    @click="firstnameClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span :class="firstnameSearched ? 'search-icon2' : ' d-none'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27.007"
                      viewBox="0 0 27 27.007"
                    >
                      <path
                        class="a"
                        d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
                        transform="translate(-4.5 -4.493)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </th>
            <th
              scope="col"
              style="cursor: pointer; user-select: none; padding-right: 0"
            >
              <span class="thTitle" @click="fillterByThisColumn('nom')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: lastnameSearchContent == '' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Nom
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'nom' }"
                @click="fillterByThisColumn('nom')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('nom')"
                :class="{
                  'd-none': columnToFillterWith != 'nom',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span
                class="pteteSearchContainer"
                style="right: -95px; top: 38px"
              >
                <span
                  class="input-group2"
                  @click="setSearchedColumnName('nom')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="Recherche"
                    v-model="lastnameSearchContent"
                  />
                  <span
                    :class="lastnameSearched ? 'd-none' : '  search-icon2 '"
                    @click="lastnameClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span :class="lastnameSearched ? 'search-icon2' : ' d-none'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27.007"
                      viewBox="0 0 27 27.007"
                    >
                      <path
                        class="a"
                        d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
                        transform="translate(-4.5 -4.493)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </th>
            <th
              scope="col"
              style="cursor: pointer; user-select: none; padding-right: 0"
            >
              <span class="thTitle" @click="fillterByThisColumn('sexe')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: sexeSearchContent == 'Tous' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Sexe
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'sexe' }"
                @click="fillterByThisColumn('sexe')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                :class="{
                  'd-none': columnToFillterWith != 'sexe',
                  columnArrowIsDescendant: !ascendant,
                }"
                @click="fillterByThisColumn('sexe')"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span
                class="pteteSearchContainer"
                style="right: -88px; top: 38px"
              >
                <span
                  class="input-group navbarPerpageIcon2"
                  style="width: 114px"
                  v-out-click="() => (showSexeDropDown = false)"
                  @click="showSexeDropDown = !showSexeDropDown"
                >
                  <ul
                    id="perPageList"
                    style="width: 113px"
                    :class="{ 'd-none': !showSexeDropDown }"
                  >
                    <li @click="setSexeSearchedColumn('M')">
                      <span>Male</span>
                    </li>
                    <li @click="setSexeSearchedColumn('F')">
                      <span>Female</span>
                    </li>
                    <li @click="setSexeSearchedColumn('Tous')">
                      <span>Tous</span>
                    </li>
                  </ul>
                  <input
                    type="text"
                    class="form-control"
                    v-model="sexeSearchContent"
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
              </span>
            </th>
            <th scope="col" style="cursor: pointer; user-select: none">
              <span class="thTitle" @click="fillterByThisColumn('email')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: emailProSearchContent == '' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Email
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'email' }"
                @click="fillterByThisColumn('email')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('email')"
                :class="{
                  'd-none': columnToFillterWith != 'email',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span class="pteteSearchContainer" style="right: 0; top: 38px">
                <span
                  class="input-group2"
                  @click="setSearchedColumnName('email')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="Recherche"
                    v-model="emailProSearchContent"
                  />
                  <span
                    :class="emailProSearched ? 'd-none' : '  search-icon2 '"
                    @click="emailProClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span :class="emailProSearched ? 'search-icon2' : ' d-none'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27.007"
                      viewBox="0 0 27 27.007"
                    >
                      <path
                        class="a"
                        d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
                        transform="translate(-4.5 -4.493)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </th>
            <th
              scope="col"
              style="cursor: pointer; user-select: none; padding-left: 100px"
            >
              <span class="thTitle" @click="fillterByThisColumn('fonction')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: fonctionSearchContent == '' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Fonction
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'fonction' }"
                @click="fillterByThisColumn('fonction')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('fonction')"
                :class="{
                  'd-none': columnToFillterWith != 'fonction',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span class="pteteSearchContainer" style="right: -9px; top: 38px">
                <span
                  class="input-group2"
                  @click="setSearchedColumnName('fonction')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="Recherche"
                    v-model="fonctionSearchContent"
                  />
                  <span
                    :class="fonctionSearched ? 'd-none' : '  search-icon2 '"
                    @click="fonctionClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span :class="fonctionSearched ? 'search-icon2' : ' d-none'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27.007"
                      viewBox="0 0 27 27.007"
                    >
                      <path
                        class="a"
                        d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
                        transform="translate(-4.5 -4.493)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </th>
            <th scope="col" style="cursor: pointer; user-select: none">
              <span class="thTitle" @click="fillterByThisColumn('typeContrat')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: typeContratSearchContent == 'Tous' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Type de Contrat
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'typeContrat' }"
                @click="fillterByThisColumn('typeContrat')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('typeContrat')"
                :class="{
                  'd-none': columnToFillterWith != 'typeContrat',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span class="pteteSearchContainer" style="right: -4px; top: 38px">
                <span
                  class="input-group navbarPerpageIcon2"
                  style="width: 129px"
                  v-out-click="() => (showTypeContratDropDown = false)"
                  @click="showTypeContratDropDown = !showTypeContratDropDown"
                >
                  <ul
                    id="perPageList"
                    style="width: 126px; overflow: auto"
                    :class="{ 'd-none': !showTypeContratDropDown }"
                  >
                    <li @click="setTypeContratSearchedColumn('STAGIAIRE')">
                      <span>STAGIAIRE</span>
                    </li>
                    <li @click="setTypeContratSearchedColumn('CDD')">
                      <span>CDD</span>
                    </li>
                    <li @click="setTypeContratSearchedColumn('CDI')">
                      <span>CDI</span>
                    </li>
                    <li @click="setTypeContratSearchedColumn('Tous')">
                      <span>Tous</span>
                    </li>
                  </ul>
                  <input
                    type="text"
                    class="form-control"
                    v-model="typeContratSearchContent"
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
              </span>
            </th>
            <th scope="col" style="cursor: pointer; user-select: none">
              <span
                class="thTitle"
                @click="fillterByThisColumn('dateEmbauche')"
              >
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: dateEmbaucheSearchContent == '' }"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                    /></svg
                ></span>
                Date d'embauche
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'dateEmbauche' }"
                @click="fillterByThisColumn('dateEmbauche')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('dateEmbauche')"
                :class="{
                  'd-none': columnToFillterWith != 'dateEmbauche',
                  columnArrowIsDescendant: !ascendant,
                }"
                ><svg
                  data-v-49d4f02f=""
                  class="svg-inline--fa fa-sort fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="sort"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6  0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                  ></path></svg
              ></span>
              <span class="pteteSearchContainer" style="right: 4px; top: 38px">
                <span
                  class="input-group2"
                  @click="setSearchedColumnName('dateEmbauche')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    v-mask="'##/##/####'"
                    placeholder="Recherche"
                    v-model="dateEmbaucheSearchContent"
                  />
                  <span
                    :class="dateEmbaucheSearched ? 'd-none' : '  search-icon2 '"
                    @click="dateEmbaucheClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span
                    :class="dateEmbaucheSearched ? 'search-icon2' : ' d-none'"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27.007"
                      viewBox="0 0 27 27.007"
                    >
                      <path
                        class="a"
                        d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z"
                        transform="translate(-4.5 -4.493)"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <span
          style="width: 100%; height: 1px; display: block; margin-bottom: 10px"
        ></span>
      </table>
    </b-col>
    <b-col
      cols="12"
      class="collaborateurs-table"
      style="
        margin-bottom: 0;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      "
    >
      <table class="table">
        <tbody>
          <slot v-for="collaborateur in itemsPerPage()">
            <tr
              v-bind:key="collaborateur.id"
              @click="rowExpand(collaborateur.id)"
              class="collaborateurRow"
              ref="tableBodyTd"
            >
              <td>
                <span
                  class="showMore"
                  :class="{ rotate: rowExpandedId == collaborateur.id }"
                  style="float: left"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 0 24 24"
                    width="38px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    /></svg
                ></span>
                <span>{{ collaborateur.prenom }}</span>
              </td>
              <td>
                <span>{{ collaborateur.nom }}</span>
              </td>
              <td>
                <span>{{ collaborateur.sexe }}</span>
              </td>
              <td>
                <span>{{ collaborateur.email }}</span>
              </td>
              <td>
                <span>{{ collaborateur.fonction }}</span>
              </td>
              <td>
                <span>{{ collaborateur.typeContrat }}</span>
              </td>
              <td>
                <span>{{
                  dateToFrenchFormat(collaborateur.dateEmbauche)
                }}</span>
              </td>
            </tr>
            <tr
              class="seeAll"
              :class="{ 'd-none': rowExpandedId != collaborateur.id }"
              v-bind:key="collaborateur.id + 'quickView'"
            >
              <div class="seeAllContainer">
                <div class="photo section">
                  <img
                    v-if="collaborateur.photo == null"
                    src="@/assets/quickProfilePictures/user.png"
                    alt=""
                  /><img
                    v-else
                    :src="getPhotosFolder + '/' + collaborateur.photo"
                    alt=""
                  />
                </div>
                <div class="section" style="max-width: 154px">
                  <span>
                    <p class="titre">Né le :</p>
                    <p class="text topTextForShowMore">
                      {{ dateToFrenchFormat(collaborateur.birthday) }}
                    </p>
                  </span>
                  <span>
                    <p class="titre">Salaire net :</p>
                    <p class="text">{{ collaborateur.salaire }} Dhs</p>
                  </span>
                </div>
                <div class="section" style="max-width: 197px">
                  <span>
                    <p class="titre">Situation matrimoniale :</p>
                    <p class="text topTextForShowMore">
                      {{ collaborateur.situationMatrimoniale }}
                    </p>
                  </span>
                  <span>
                    <p class="titre">Promotion :</p>
                    <p class="text">link</p>
                  </span>
                </div>
                <div class="section" style="max-width: 188px">
                  <span>
                    <p class="titre">Enfants :</p>
                    <p class="text topTextForShowMore">
                      {{ collaborateur.enfants }}
                    </p>
                  </span>
                  <span>
                    <p class="titre">Ancienneté :</p>
                    <p class="text">
                      {{ getAnciennete(collaborateur.dateEmbauche) }}
                    </p>
                  </span>
                </div>
                <div class="section" style="max-width: 180px">
                  <span>
                    <p class="titre">Tél :</p>
                    <p class="text topTextForShowMore">
                      {{ collaborateur.telephone }}
                    </p>
                  </span>
                  <span>
                    <p class="titre">Documents :</p>
                    <p class="text">{{ dateToFrenchFormat("2012-09-09") }}</p>
                  </span>
                </div>
                <div class="section" style="max-width: 180px">
                  <span>
                    <p class="titre">Tél en cas d'urgence :</p>
                    <p class="text topTextForShowMore">
                      {{ collaborateur.telephoneUrgent }}
                    </p>
                  </span>
                  <span>
                    <p class="titre">CIN :</p>
                    <p class="text">{{ collaborateur.cin }}</p>
                  </span>
                </div>
                <div class="section">
                  <span>
                    <p class="titre">Adresse postale :</p>
                    <p class="text topTextForShowMore" style="width: 95%">
                      {{ collaborateur.adresse }}
                    </p>
                  </span>

                  <span>
                    <span
                      class="action"
                      @click="openAddModalForEdit(collaborateur)"
                    >
                      <span class="icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                          /></svg
                      ></span>
                      <span class="text">Editer</span>
                    </span>
                    <span
                      class="action"
                      @click="disableCollaborateur(collaborateur.id)"
                      v-if="collaborateur.actif == 1"
                    >
                      <span class="icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <g><rect fill="none" height="24" width="24" /></g>
                          <g>
                            <path
                              d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M15,14H9v-2h6V14z M20,7H4V4h16V7z"
                            />
                          </g></svg
                      ></span>
                      <span class="text">Archiver</span>
                    </span>
                    <span
                      class="action"
                      @click="enableCollaborateur(collaborateur.id)"
                      v-else
                    >
                      <span class="icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <g><rect fill="none" height="24" width="24" /></g>
                          <g>
                            <path
                              d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M15,14H9v-2h6V14z M20,7H4V4h16V7z"
                            />
                          </g></svg
                      ></span>
                      <span class="text">Désarchiver</span>
                    </span>
                    <span class="action">
                      <span class="icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
                          /></svg
                      ></span>
                      <span class="text">Consulter</span>
                    </span>
                  </span>
                </div>
              </div>
            </tr>
          </slot>
        </tbody>
      </table>
    </b-col>
    <b-col
      cols="12"
      class="collaborateurs-table"
      style="max-height: 20px; min-height: 20px"
    >
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
              perPage = 10;
              currentPage = 1;
            "
          >
            <span>10</span>
          </li>
          <li
            @click="
              perPage = 20;
              currentPage = 1;
            "
          >
            <span>20</span>
          </li>
          <li
            @click="
              perPage = 30;
              currentPage = 1;
            "
          >
            <span>30</span>
          </li>
          <li
            @click="
              perPage = 'Tous';
              currentPage = 1;
            "
          >
            <span>Tous</span>
          </li>
        </ul>
        <input
          type="text"
          class="form-control"
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
        type="number"
      />
    </b-row>
    <AddCollaborateurModal
      v-model="dialog"
      :collaborateur="collaborateurToAddOrEdit"
      :collaborateurToEditCopied="false"
      class="d-none"
    />
    <AddFonctionModal
      v-model="dialog2"
      class="d-none"
      @changeinFonction="changeinFonction"
    />
  </b-row>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import OutClick from "vue-click-outside";
import AddCollaborateurModal from "./AddCollaborateurModal.vue";
import AddFonctionModal from "./AddFonctionModal.vue";
import addAct from "@/components/icons/addAct";
export default {
  components: { AddCollaborateurModal, AddFonctionModal, addAct },
  data: function () {
    return {
      fonctions: [],
      visibleFonctionsFrom: 0,
      visibleFonctionsnumber: 5,
      items: [6, 8, 10, 12],
      currentPage: 1,
      perPage: 10,
      fonctionsOrderChange: false,
      fillterByFonctionIndex: -1,
      SelectedFonctions: [],
      paginationState: "inFirstPage",
      showPerPageList: false,
      rowExpandedId: "none",
      columnToFillterWith: "",
      ascendant: true,
      columnWidth: [],
      isSearching: true,
      searchedColumName: "",
      showSexeDropDown: false,
      showTypeContratDropDown: false,
      firstnameSearchContent: "",
      lastnameSearchContent: "",
      sexeSearchContent: "Tous",
      emailProSearchContent: "",
      fonctionSearchContent: "",
      typeContratSearchContent: "Tous",
      dateEmbaucheSearchContent: "",
      fonctionShiftArrowRightHidden: false,
      fonctionShiftArrowLeftHidden: true,
      dialog: false,
      dialog2: false,
      archivedList: false,
      collaborateurToAddOrEdit: {
        id: "",
        prenom: "",
        nom: "",
        telephone: "",
        telephoneUrgent: "",
        email: "",
        adresse: "",
        birthday: "",
        lieuDeNaissance: "",
        sexe: "",
        nationalite: "",
        situationMatrimoniale: "",
        enfants: "",
        cin: "",
        salaire: "",
        cnss: "",
        rib: "",
        fonction: "",
        typeContrat: "",
        dateEmbauche: "",
        departement: "",
        fonction_id: "",
        actif: 1,
      },
    };
  },
  methods: {
    ...mapActions([
      "getCollaborateursAction",
      "disableCollaborateurAction",
      "enableCollaborateurAction",
      "getFonctionsAction",
      "getPhotosFolderAction",
    ]),
    console: function (testname, test) {
      console.log(testname, test);
    },
    firstnameClearSearch: function () {
      this.firstnameSearchContent = "";
    },
    lastnameClearSearch: function () {
      this.lastnameSearchContent = "";
    },
    emailProClearSearch: function () {
      this.emailProSearchContent = "";
    },
    fonctionClearSearch: function () {
      this.fonctionSearchContent = "";
    },
    dateEmbaucheClearSearch: function () {
      this.dateEmbaucheSearchContent = "";
    },
    fonctionsClick: function (id) {
      if (this.SelectedFonctions.includes(id)) {
        this.SelectedFonctions = this.SelectedFonctions.filter((e) => e != id);
      } else {
        this.SelectedFonctions.push(id);
      }
    },
    fonctionsShift: function (n) {
      if (
        this.visibleFonctionsFrom + n >= 0 &&
        this.visibleFonctionsFrom + this.visibleFonctionsnumber + n <=
          this.fonctions.length
      ) {
        this.visibleFonctionsFrom = this.visibleFonctionsFrom + n;
      }

      if (this.visibleFonctionsFrom == 0) {
        this.fonctionShiftArrowLeftHidden = true;
      } else {
        this.fonctionShiftArrowLeftHidden = false;
      }
      if (
        this.visibleFonctionsFrom + this.visibleFonctionsnumber ==
        this.fonctions.length
      ) {
        this.fonctionShiftArrowRightHidden = true;
      } else {
        this.fonctionShiftArrowRightHidden = false;
      }
    },
    itemsPerPage: function () {
      if (this.perPage == "Tous") {
        return this.fillteredList;
      } else {
        return this.fillteredList.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        );
      }
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
    rowExpand: function (id) {
      this.rowExpandedId = this.rowExpandedId == id ? "none" : id;
    },
    moveFonction: function (index, n) {
      index = index + this.visibleFonctionsFrom;
      if (
        !(
          (index == 0 && n == -1) ||
          (index == this.fonctions.length - 1 && n == 1)
        )
      ) {
        let x = this.fonctions[index];
        this.fonctions[index] = this.fonctions[index + n];
        this.fonctions[index + n] = x;
        this.fonctionsOrderChange = true;
      } else {
        if (index == 0 && n == -1) {
          this.fonctions = [...this.fonctions.slice(1), this.fonctions[0]];
        }
        if (index == this.fonctions.length - 1 && n == 1) {
          this.fonctions = [
            this.fonctions[this.fonctions.length - 1],
            ...this.fonctions.slice(0, this.fonctions.length - 1),
          ];
        }
      }
    },
    tousFonctionsSelected: function () {
      this.SelectedFonctions = [];
    },
    fillterByThisColumn: function (columnName) {
      if (this.columnToFillterWith == columnName) {
        if (this.ascendant) {
          this.ascendant = false;
        } else {
          this.columnToFillterWith = "";
        }
      } else {
        this.ascendant = true;
        this.columnToFillterWith = columnName;
      }
    },
    setSearchedColumnName: function (columnName) {
      this.searchedColumName = columnName;
    },
    setSexeSearchedColumn: function (sexe) {
      if (sexe != "Tous") {
        this.selectedSexe = sexe;
        this.searchedColumName = "sexe";
        this.sexeSearchContent = sexe == "M" ? "Male" : "Female";
      } else {
        this.searchedColumName = "";
        this.sexeSearchContent = "Tous";
      }
    },
    setTypeContratSearchedColumn: function (typeContrat) {
      this.typeContratSearchContent = typeContrat;
    },
    compareCollaborateurByFonction: function (a, b) {
      let aIndex = this.fonctions.findIndex((e) => e.id == a.departement_id);
      let bIndex = this.fonctions.findIndex((e) => e.id == b.departement_id);
      return aIndex - bIndex;
    },
    openAddModal: function () {
      this.collaborateurToAddOrEdit = {
        id: "",
        prenom: "",
        nom: "",
        telephone: "",
        telephoneUrgent: "",
        email: "",
        adresse: "",
        birthday: "",
        lieuDeNaissance: "",
        sexe: "",
        nationalite: "",
        situationMatrimoniale: "",
        enfants: "",
        cin: "",
        salaire: "",
        cnss: "",
        rib: "",
        fonction: "",
        typeContrat: "",
        dateEmbauche: "",
        departement: "",
        fonction_id: "",
        actif: 1,
      };
      this.dialog = true;
    },
    openAddModalForEdit: function (collaborateurToEdit) {
      this.collaborateurToAddOrEdit = { ...collaborateurToEdit };
      this.dialog = true;
    },
    openAddFonctionModal: function () {
      this.dialog2 = true;
    },
    showDisabledCollaborateurs: function () {
      this.archivedList = !this.archivedList;
    },
    disableCollaborateur(id) {
      this.disableCollaborateurAction({
        id: id,
      });
    },
    enableCollaborateur(id) {
      this.enableCollaborateurAction({
        id: id,
      });
    },
    dateToFrenchFormat(isoDateFormat) {
      let d = new Date(isoDateFormat);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      return `${da}/${mo}/${ye}`;
    },
    getAnciennete(dateEmbauche) {
      let date = new Date(dateEmbauche);
      let date2 = new Date();
      var Difference_In_Time = date2.getTime() - date.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      let years = parseInt(Difference_In_Days / 365 + "", 10);
      Difference_In_Days -= years * 365 * Difference_In_Days;
      let months = parseInt(Difference_In_Days / 30 + "", 10);
      Difference_In_Days -= months * 30 * Difference_In_Days;
      let days = parseInt(Difference_In_Days + "", 10);
      return (
        (years > 0 ? years + " ans " : "") +
        (months > 0 ? months + " mois " : "") +
        (days > 0 ? days + " jours" : "")
      );
    },
    changeinFonction() {
      this.getFonctionsAction().then(() => {
        this.fonctions = [...this.getFonctions];
      });
      this.fonctionsOrderChange = !this.fonctionsOrderChange;
      this.fonctionsOrderChange = !this.fonctionsOrderChange;
    },
    stopProp: function (event) {
      event.stopPropagation();
    },
  },

  computed: {
    ...mapGetters(["getCollaborateurs", "getFonctions", "getPhotosFolder"]),
    checkFonctionItemVisibility: function () {
      let visibleFonctionsListItem = [];
      let f = this.fonctions;
      f.forEach((element, index) => {
        if (
          index >= this.visibleFonctionsFrom &&
          index < this.visibleFonctionsFrom + this.visibleFonctionsnumber
        )
          visibleFonctionsListItem.push(element);
      });
      if (this.fonctionsOrderChange) return visibleFonctionsListItem;
      else return visibleFonctionsListItem;
    },
    rows: function () {
      return this.getCollaborateurs.length;
    },
    pages: function () {
      if (this.perPage == "Tous") {
        return 1;
      } else {
        let withParseValue = parseInt(this.fillteredList.length / this.perPage);
        return this.fillteredList.length / this.perPage - withParseValue > 0
          ? withParseValue + 1
          : withParseValue;
      }
    },
    perPageOverflowAdapter_y: function () {
      if (this.perPage == "Tous") {
        return "auto";
      } else {
        return this.perPage > 4 ? "auto" : "hidden";
      }
    },
    fillteredList: function () {
      let list = [...this.getCollaborateurs];
      if (this.SelectedFonctions.length != 0) {
        list = list.filter((element) =>
          this.SelectedFonctions.includes(element.departement_id)
        );
      }
      var columnToFillterWith = this.columnToFillterWith;
      var ascendant = this.ascendant;
      if (columnToFillterWith != "") {
        list.sort(function (a, b) {
          if (ascendant) {
            if (columnToFillterWith == "dateEmbauche") {
              return (
                new Date(
                  a[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(b[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else {
              return a[columnToFillterWith].localeCompare(
                b[columnToFillterWith]
              );
            }
          } else {
            if (columnToFillterWith == "dateEmbauche") {
              return (
                new Date(
                  b[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(a[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else {
              return b[columnToFillterWith].localeCompare(
                a[columnToFillterWith]
              );
            }
          }
        });
      }

      if (this.firstnameSearchContent != "") {
        list = list.filter((element) =>
          element["prenom"]
            .toLowerCase()
            .includes(this.firstnameSearchContent.toLowerCase())
        );
      }

      if (this.lastnameSearchContent != "") {
        list = list.filter((element) =>
          element["nom"]
            .toLowerCase()
            .includes(this.lastnameSearchContent.toLowerCase())
        );
      }

      if (this.sexeSearchContent != "Tous") {
        list = list.filter((element) =>
          element["sexe"]
            .toLowerCase()
            .includes(this.selectedSexe.toLowerCase())
        );
      }
      if (this.emailProSearchContent != "") {
        list = list.filter((element) =>
          element["email"]
            .toLowerCase()
            .includes(this.emailProSearchContent.toLowerCase())
        );
      }
      if (this.fonctionSearchContent != "") {
        list = list.filter((element) =>
          element["fonction"]
            .toLowerCase()
            .includes(this.fonctionSearchContent.toLowerCase())
        );
      }
      if (this.typeContratSearchContent != "Tous") {
        list = list.filter((element) =>
          element["typeContrat"]
            .toLowerCase()
            .includes(this.typeContratSearchContent.toLowerCase())
        );
      }
      if (this.dateEmbaucheSearchContent != "") {
        list = list.filter((element) =>
          this.dateToFrenchFormat(element["dateEmbauche"])
            .toLowerCase()
            .includes(this.dateEmbaucheSearchContent.toLowerCase())
        );
      }

      if (this.fonctionsOrderChange)
        list.sort((a, b) => this.compareCollaborateurByFonction(a, b));
      else list.sort((a, b) => this.compareCollaborateurByFonction(a, b));

      if (this.archivedList) list = list.filter((e) => e.actif == "0");
      else list = list.filter((e) => e.actif == "1");
      return list;
    },
    firstnameSearched: function () {
      return this.firstnameSearchContent.length === 0;
    },
    lastnameSearched: function () {
      return this.lastnameSearchContent.length === 0;
    },
    emailProSearched: function () {
      return this.emailProSearchContent.length === 0;
    },
    fonctionSearched: function () {
      return this.fonctionSearchContent.length === 0;
    },
    dateEmbaucheSearched: function () {
      return this.dateEmbaucheSearchContent.length === 0;
    },
  },
  directives: {
    OutClick,
  },
  mounted: function () {
    this.getCollaborateursAction();
    this.getFonctionsAction().then(() => {
      this.fonctions = [...this.getFonctions];
    });
    this.setCurrentPage(1);
    this.columnWidth = [];
    if (this.fillteredList.length != 0)
      for (
        let index = 0;
        index < this.$refs.tableHeaderTh.childNodes.length;
        index++
      ) {
        let width =
          this.$refs.tableHeaderTh.childNodes[index].offsetWidth +
          this.$refs.tableBodyTd[0].childNodes[index].offsetWidth;
        this.$refs.tableHeaderTh.childNodes[index].style["width"] =
          width / 2 + "px";
        this.$refs.tableBodyTd[0].childNodes[index].style["width"] =
          width / 2 + "px";
        this.columnWidth.push(width / 2);
      }
    console.log("sss");
    this.getPhotosFolderAction();
  },
  updated: function () {
    this.fonctionsOrderChange = false;

    if (this.itemsPerPage().length != 0)
      for (
        let index = 0;
        index < this.$refs.tableHeaderTh.childNodes.length;
        index++
      ) {
        this.$refs.tableHeaderTh.childNodes[index].style["width"] =
          this.columnWidth[index] + "px";

        this.$refs.tableBodyTd[0].childNodes[index].style["width"] =
          this.columnWidth[index] + "px";
      }
  },
};
</script>
<style lang="scss" scoped>
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
.collaborateurs-table {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  margin: 10px;
  margin-left: 0;
  max-width: 98%;
  padding-bottom: 0;
  min-height: 55%;
  max-height: 60%;

  overflow-y: auto;
  margin-top: 0;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.collaborateurs-navbar {
  justify-content: start;
  align-content: center;
  display: flex;
  user-select: none;
  max-height: 94px;

  .fonctions {
    height: 68px;
    display: inline-flex;
    min-width: 74%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 23px #00000029;
    border-radius: 18px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    margin-left: -15px;
    .tag {
      position: relative;
      background: #4762f1 0% 0% no-repeat padding-box;
      box-shadow: 0px 5px 9px #8a8ea37a;
      border-radius: 13px;
      min-width: 91px;
      height: 48px;
      color: #ffffff;
      font: normal normal bold 16px/25px Poppins;
      font-size: 13px;
      text-align: center;
      padding-top: 11px;
      padding-left: 13px;
      cursor: pointer;
      flex-grow: 1;
      margin: inherit;
      span {
        position: absolute;
        margin-left: 12px;
        margin-right: 18px;
        svg {
          fill: #bfbfbf;
          width: 21px;
          z-index: 200;
          path:first-child {
            width: 7px;
            float: left;
          }
        }
        svg:hover {
          fill: white;
        }
      }
      .switchLeft {
        left: -21px;
        z-index: 200;
      }
      .switchRight {
        left: 3px;
        z-index: 200;
      }
      .edit {
        right: -16px;
        top: 7px;
      }
    }
    .fonctionList {
      width: 85%;
      height: 100%;
      display: inline-flex;
      flex-direction: row;
      margin-left: 21px;
      height: 48px;
      align-content: space-between;
      margin-right: 9px;
      justify-content: space-between;
    }
    .fonction {
      font: normal normal normal 16px/25px Poppins;
      letter-spacing: 0px;
      color: #87b0e6;
      padding: 10px;
      cursor: pointer;
      position: relative;
      z-index: 0;
      flex-grow: 1;
      span {
        position: absolute;
        display: none;
        svg {
          fill: #bfbfbf;
          width: 21px;
          z-index: 200;
          path:first-child {
            width: 7px;
            float: left;
          }
        }
      }
      .switchLeft {
        left: -21px;
        z-index: 200;
      }
      .switchRight {
        left: 3px;
        z-index: 200;
      }
      .edit {
        right: -16px;
        top: 7px;
      }
    }

    .fonction:hover {
      color: #4762f1c2;
      span {
        display: inline;
      }
    }
    .switchLeft:hover,
    .switchRight:hover,
    .edit:hover {
      display: inline;
      svg {
        fill: #4762f1;
      }
    }

    .tools {
      min-width: 95px;
      margin-left: 6px;
      padding-top: 9px;
      span {
        margin: 3px;
        cursor: pointer;
        svg {
          fill: #87b0e6;

          .bb {
            fill: #fff;
          }
        }
      }
    }
  }
  .organigram {
    padding: 0;
    user-select: none;
    display: inline-flex;
    width: 200px;
    height: 68px;
    flex-basis: 0;
    span {
      width: 202px;
      height: 68px;
      display: block;
      padding-top: 0;
      background: #87b0e6 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 23px #00000029;
      border-radius: 18px;
      text-align: center;
      font: normal normal normal 16px/25px Poppins;
      font-size: 16px;
      letter-spacing: 0px;
      color: #ffffff;
      padding-top: 17px;
      margin: 0;
    }
  }
}
.hideFonctionListSVg {
  span {
    span {
      display: none !important;
    }
  }
}
.leftArrow:hover,
.rightArrow:hover {
  svg {
    fill: #4763f1ab !important;
  }
}
.leftArrow:active,
.rightArrow:active {
  background-color: #80808029;
  /* min-height: 52px; */
  padding-bottom: 4px;
  border-radius: 14px;
  box-shadow: 0px 3px 23px 7px #00000029;
}
.collaborateurs-table {
  .table {
    margin-bottom: 0 !important;
    .collaborateurRow {
      cursor: pointer;
    }
    .collaborateurRow:hover {
      background-color: rgba(128, 128, 128, 0.111);
    }
    th {
      border-top: none;
      font: normal normal 600 20px/30px Poppins;
      letter-spacing: 0px;
      color: #848484;
      vertical-align: inherit;
      span {
        color: #87b0e6;
      }
    }
    * {
      text-align: center;
    }
    thead {
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0 4px 20px -11px grey;
    }
    tbody {
      margin-top: 50px;
    }
    td {
      border-top: none;
      border-bottom: 1px solid #87b0e64f;
      color: #848484;
      font: normal normal normal 16px/25px Poppins;
      letter-spacing: 0px;
      color: #848484;
      opacity: 1;
      span {
        display: inline-block;
        margin-top: 13px;
      }
    }
    tr {
      height: 50px;
    }
  }
  .showMore {
    margin-top: 0 !important;
    svg {
      fill: #87b0e6;
    }
  }
  .details {
    svg {
      fill: #848484;
    }
  }
}
.piginationNavBar {
  height: 50px;
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
  margin-left: 39px;
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
.navbarPerpageIcon2 {
  user-select: none !important;
  margin-top: 6px;
  width: 169px;
  height: 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bfbfbf;
  border-radius: 6px;
  opacity: 1;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 167px;
    height: 78px;
    background: white;
    border-radius: 10px;
    /* text-align: center; */
    border: 1px solid #bfbfbf;
    position: absolute;
    top: -79px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: #848484 !important;
    font: normal normal normal 16px/25px Poppins;
    li {
      text-align: left !important;
    }
    span {
      padding-left: 11px;
    }
    li:hover {
      background-color: rgba(0, 0, 255, 0.494);
      span {
        color: white !important;
      }
    }
  }
  input {
    background: none !important;
    -webkit-user-select: none;
    height: 27px;
    margin: 0;
    padding-top: 0;
    color: #848484 !important;
  }
  input:focus {
    border-radius: none !important;
    border: none !important;
    box-shadow: none;
  }

  svg {
    transform: rotate(90deg);
    width: 26px !important;
    height: 14px !important;
  }
  .search-icon {
    right: 8px !important;
    padding-top: 0px !important;
    width: 17px !important;
    border-radius: none !important;
    background: none !important;
  }
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
  max-height: 59px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  border-radius: 30px;
  opacity: 1;
  max-width: 98%;
  margin-left: 0;
  margin-top: 0;
  padding-top: 4px;
}
.pagination {
  * {
    color: #848484 !important;
    border: none;
    margin: 3px;
    user-select: none;
  }
}
.seeAll {
  position: relative;
  height: 176px !important;

  .seeAllContainer {
    position: absolute;
    display: flex;
    width: 100%;
    background-color: #87b0e62c;
  }
  td {
    text-align: left !important;
  }
  .photo {
    max-width: 139px;
    img {
      width: 68px;
      height: 68px;
      background: transparent 0% 0% no-repeat padding-box;
      border: 2px solid #4762f1;
      border-radius: 37px;
      margin-top: 39px;
    }
  }
  .titre {
    text-align: left;
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
    color: #87b0e6;
    opacity: 1;
  }
  span {
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #848484;
    opacity: 1;
  }
  .section {
    display: inline-block;
    flex: 1;
    margin-top: 15px;
    .text {
      text-align: left;
      height: 30px;
      width: 95%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .topTextForShowMore {
      border-bottom: 1px solid #80808036;
    }
  }
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px green;
  border: solid 3px transparent;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px red;
  border: solid 3px transparent;
}
.rotate {
  transform: rotate(-90deg);
  svg {
    fill: #3d72b7 !important;
  }
}
.columnArrowIsDescendant {
  transform: rotate(180deg);
  display: inline-block;
}
.tableHeader {
  border-radius: 27px;
  margin-left: 0;

  margin-bottom: 8px;
  border-radius: 27px;

  color: #848484;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #848484;

  opacity: 1;
  th {
    border: none;
    font: normal normal 600 20px/30px Poppins;
    letter-spacing: 0px;
    color: #848484;
    vertical-align: inherit;
    position: relative;
    span {
      color: #87b0e6;
    }
  }
  th:hover {
    .pteteSearchContainer {
      display: block;
    }
    .thTitle {
      color: #87b0e6 !important;
    }
  }
  * {
    text-align: center;
  }

  tr {
    height: 40px;
  }
}
.tableHeader-Container {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 1px 3px 10px #00000029;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-left: 0;
  max-width: 98%;
  padding-bottom: 0;
  padding-top: 12px;
  height: 83px;
  z-index: 1;
  flex: none;
}
.pteteSearchContainer {
  position: absolute;
  right: -53px;
  top: 38px;
  display: none;
}
.input-group2 {
  position: relative;
  display: inline-flex;
  width: 170px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  margin-right: 69px;
  .input2 {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 23px !important;
    text-align: left !important;
    height: 22px;
  }
  .search-icon2 {
    fill: #bfbfbf;
    z-index: 20;
    margin-top: 2px;
    position: absolute;
    right: 2px;
    cursor: pointer;
    background-color: #ffffff;
    height: 19px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    padding-right: 10px;
    width: 27px;

    svg {
      width: 27px;
      height: 15px;
      margin-bottom: 7px;
    }
  }
}
.thTitle {
  color: #848484 !important;
  height: 40px;
  white-space: nowrap;
}
.functionTitle {
  display: inline-block !important;
  position: relative !important;
}
.isFilteredWith {
  svg {
    fill: #87b0e6;
  }
  span {
    color: #87b0e6 !important;
  }
  span:hover {
    color: #87b0e6 !important;
  }
}
.displayNone {
  display: none;
}
.Archive {
  color: white;
  display: inline-block;
  width: 115px;
  height: 68px;
  background: #bfbfbf 0% 0% no-repeat padding-box;
  border-radius: 0px 18px 18px 0px;
  text-align: center;
  padding-top: 21px;
  font: normal normal normal 16px/25px Poppins;
  cursor: pointer;
}
.Archive:hover {
  background-color: #bfbfbfba;
}
.addAct {
  float: right;
  cursor: pointer;
  padding-top: 6px;
  margin-left: 18px;
}
.ArchiveActive {
  background-color: #4762f1;
}
.ArchiveActive:hover {
  background-color: #4763f19e;
}
.action {
  display: inline-block;
  cursor: pointer;
  span {
    display: inline-block;
    margin: 0 auto;
  }

  .text {
    color: #87b0e6;
    text-align: center !important;
  }
  svg {
    fill: #87b0e6;
  }
}
.action:hover {
  .text {
    color: #007bffe3;
  }
  svg {
    fill: #007bffe3;
  }
}
</style>
