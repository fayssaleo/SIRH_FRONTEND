<template>
  <b-row class="conges-container"
    ><b-col cols="12" class="congesHeader pr-4 pl-4">
      <b-row>
        <b-col class="headerSection" cols="3">
          <span class=""> Mon Solde congé : 22 </span>
          <span class="monSoldeIcon mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.224"
              height="12.529"
              viewBox="0 0 18.224 12.529"
            >
              <g transform="translate(0 -60.152)">
                <g transform="translate(0 60.152)">
                  <path
                    class="a"
                    d="M.569,61.291H17.655a.569.569,0,0,0,0-1.139H.569a.569.569,0,0,0,0,1.139Z"
                    transform="translate(0 -60.152)"
                  />
                  <path
                    class="a"
                    d="M17.655,180.455H.569a.569.569,0,0,0,0,1.139H17.655a.569.569,0,1,0,0-1.139Z"
                    transform="translate(0 -174.76)"
                  />
                  <path
                    class="a"
                    d="M17.655,300.758H.569a.569.569,0,0,0,0,1.139H17.655a.569.569,0,1,0,0-1.139Z"
                    transform="translate(0 -289.368)"
                  />
                </g>
              </g>
            </svg>
          </span>
          <span class="separator"></span>
        </b-col>
        <b-col class="headerSection" cols="3">
          <span class="headerSectionTitle"> Solde année actuelle : 4.5 </span>
          <span class="separator" style="margin-right: 20px"></span>
        </b-col>
        <b-col class="headerSection" cols="3" style="padding-left: 0">
          <span class="headerSectionTitle">
            Solde années précédentes : 11
          </span>
          <span class="separator"></span>
        </b-col>
        <b-col class="headerSection" cols="3">
          <span class="headerSectionTitle"> Congés consumés : 14 </span>
          <span class="congesConsumeInfos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              height="40"
              viewBox="0 -3 42.492 42.492"
            >
              <defs>
                <svg:style>
                  .aa {
                    fill: #fff;
                  }
                  .bb {
                    filter: url(#c);
                  }
                  .cc {
                    filter: url(#a);
                  }
                </svg:style>
                <filter
                  id="a"
                  x="0"
                  y="0"
                  width="42.492"
                  height="42.492"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feFlood flood-opacity="0.4" />
                  <feComposite operator="in" in2="b" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter
                  id="c"
                  x="11.01"
                  y="6.123"
                  width="20.473"
                  height="30.246"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="d" />
                  <feFlood flood-opacity="0.4" />
                  <feComposite operator="in" in2="d" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="translate(5.625 2.625)">
                <g class="cc" transform="matrix(1, 0, 0, 1, -5.63, -2.63)">
                  <path
                    class="aa"
                    d="M15.621,5.848A9.769,9.769,0,1,1,8.709,8.709a9.733,9.733,0,0,1,6.912-2.861m0-2.473A12.246,12.246,0,1,0,27.867,15.621,12.244,12.244,0,0,0,15.621,3.375Z"
                    transform="translate(5.63 2.63)"
                  />
                </g>
                <g class="bb" transform="matrix(1, 0, 0, 1, -5.63, -2.63)">
                  <path
                    class="aa"
                    d="M19,22.934H16.523V15.574H19Zm0-9.773H16.523V10.688H19Z"
                    transform="translate(3.49 1.44)"
                  />
                </g>
              </g>
            </svg>
          </span>
          <span class="addConges" @click="dialog = !dialog">
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
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="congesTableContainer p-0">
      <div class="tableHeader-Container p-0">
        <v-row class="tableHeader">
          <v-col
            cols="1"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle" @click="fillterByThisColumn('type')">
              <span
                class="isFilteredWith"
                :class="{ displayNone: typeSearchContent == 'Tous' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Type
            </span>
            <span
              :class="{ 'd-none': columnToFillterWith == 'type' }"
              @click="fillterByThisColumn('type')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              :class="{
                'd-none': columnToFillterWith != 'type',
                columnArrowIsDescendant: !ascendant,
              }"
              @click="fillterByThisColumn('type')"
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
            <span class="pteteSearchContainer" style="right: 6px; top: 48px">
              <span
                class="input-group navbarPerpageIcon2"
                style="width: 192px"
                v-out-click="() => (showtypeDropDown = false)"
                @click="showtypeDropDown = !showtypeDropDown"
              >
                <ul
                  id="perPageList"
                  style="width: 192px; overflow: auto"
                  :class="{ 'd-none': !showtypeDropDown }"
                >
                  <li @click="settypeSearchedColumn('Tous')">
                    <span>Tous</span>
                  </li>
                  <li
                    v-for="congeType in getCongesType"
                    :key="congeType.id"
                    @click="settypeSearchedColumn(congeType.name)"
                  >
                    <span style=" font-size: 11px; ">{{ congeType.name }}</span>
                  </li>
                </ul>
                <input
                  type="text"
                  class="form-control"
                  v-model="typeSearchContent"
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
          </v-col>
          <v-col
            cols="2"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span
              class="thTitle"
              @click="fillterByThisColumn('demandeur')"
              :class="{ isFilteredWith: demandeurSearchContent == '' }"
            >
              <span
                class="isFilteredWith"
                :class="{ displayNone: demandeurSearchContent == '' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Demandeur</span
            >
            <span
              :class="{ 'd-none': columnToFillterWith == 'demandeur' }"
              @click="fillterByThisColumn('demandeur')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              @click="fillterByThisColumn('demandeur')"
              :class="{
                'd-none': columnToFillterWith != 'demandeur',
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
            <span class="pteteSearchContainer" style="right: 23px; top: 48px">
              <span
                class="input-group2"
                @click="setSearchedColumnName('demandeur')"
              >
                <input
                  type="text"
                  class="form-control input2"
                  placeholder="par nom.."
                  v-model="demandeurSearchContent"
                />
                <span
                  :class="demandeurSearched ? 'd-none' : '  search-icon2 '"
                  @click="demandeurClearSearch()"
                >
                  <i class="fa fa-times"></i>
                </span>
                <span :class="demandeurSearched ? 'search-icon2' : ' d-none'">
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
          </v-col>
          <v-col
            cols="1"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle" @click="fillterByThisColumn('dateDemande')">
              <span
                class="isFilteredWith"
                :class="{ displayNone: demandeLeSearchContent == '' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Demandé le
            </span>
            <span
              :class="{ 'd-none': columnToFillterWith == 'dateDemande' }"
              @click="fillterByThisColumn('dateDemande')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              @click="fillterByThisColumn('dateDemande')"
              :class="{
                'd-none': columnToFillterWith != 'dateDemande',
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
            <span class="pteteSearchContainer" style="right: 28px; top: 48px">
              <span
                class="input-group2"
                @click="setSearchedColumnName('dateDemande')"
              >
                <input
                  type="text"
                  class="form-control input2"
                  v-mask="'##/##/####'"
                  placeholder="DD/MM/YYYY"
                  v-model="demandeLeSearchContent"
                />
                <span
                  :class="demandeLeSearched ? 'd-none' : '  search-icon2 '"
                  @click="demandeLeClearSearch()"
                >
                  <i class="fa fa-times"></i>
                </span>
                <span :class="demandeLeSearched ? 'search-icon2' : ' d-none'">
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
          </v-col>
          <v-col
            cols="2"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle" @click="fillterByThisColumn('dateDebut')">
              <span
                class="isFilteredWith"
                :class="{ displayNone: dateDeDebutSearchContent == '' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Date de début
            </span>
            <span
              :class="{ 'd-none': columnToFillterWith == 'dateDebut' }"
              @click="fillterByThisColumn('dateDebut')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              @click="fillterByThisColumn('dateDebut')"
              :class="{
                'd-none': columnToFillterWith != 'dateDebut',
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
            <span class="pteteSearchContainer" style="right: 32px; top: 48px">
              <span
                class="input-group2"
                @click="setSearchedColumnName('dateDebut')"
              >
                <input
                  type="text"
                  class="form-control input2"
                  v-mask="'##/##/####'"
                  placeholder="DD/MM/YYYY"
                  v-model="dateDeDebutSearchContent"
                />
                <span
                  :class="dateDeDebutSearched ? 'd-none' : '  search-icon2 '"
                  @click="dateDeDebutClearSearch()"
                >
                  <i class="fa fa-times"></i>
                </span>
                <span :class="dateDeDebutSearched ? 'search-icon2' : ' d-none'">
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
          </v-col>
          <v-col
            cols="2"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle" @click="fillterByThisColumn('dateFin')">
              <span
                class="isFilteredWith"
                :class="{ displayNone: dateDefinSearchContent == '' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Date de fin
            </span>
            <span
              :class="{ 'd-none': columnToFillterWith == 'dateFin' }"
              @click="fillterByThisColumn('dateFin')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              @click="fillterByThisColumn('dateFin')"
              :class="{
                'd-none': columnToFillterWith != 'dateFin',
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
            <span class="pteteSearchContainer" style="right: 22px; top: 48px">
              <span
                class="input-group2"
                @click="setSearchedColumnName('dateFin')"
              >
                <input
                  type="text"
                  class="form-control input2"
                  v-mask="'##/##/####'"
                  placeholder="DD/MM/YYYY"
                  v-model="dateDefinSearchContent"
                />
                <span
                  :class="dateDefinSearched ? 'd-none' : '  search-icon2 '"
                  @click="dateDefinClearSearch()"
                >
                  <i class="fa fa-times"></i>
                </span>
                <span :class="dateDefinSearched ? 'search-icon2' : ' d-none'">
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
          </v-col>
          <v-col
            cols="1"
            class="thCase"
            style="cursor: pointer; user-select: none; width: 230.5px"
          >
            <span
              class="thTitle"
              @click="fillterByThisColumn('nombreDeJours')"
              :class="{ isFilteredWith: nombreDeJoursSearchContent == '' }"
            >
              <span
                class="isFilteredWith"
                :class="{ displayNone: nombreDeJoursSearchContent == '' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Jours</span
            >
            <span
              :class="{ 'd-none': columnToFillterWith == 'nombreDeJours' }"
              @click="fillterByThisColumn('nombreDeJours')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              @click="fillterByThisColumn('nombreDeJours')"
              :class="{
                'd-none': columnToFillterWith != 'nombreDeJours',
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
            <span class="pteteSearchContainer" style="right: 32px; top: 48px">
              <span
                class="input-group2"
                @click="setSearchedColumnName('nombreDeJours')"
                style="width: 112px"
              >
                <input
                  type="number"
                  class="form-control input2"
                  placeholder="jours.."
                  v-model="nombreDeJoursSearchContent"
                />
                <span
                  :class="nombreDeJoursSearched ? 'd-none' : '  search-icon2 '"
                  @click="nombreDeJoursClearSearch()"
                >
                  <i class="fa fa-times"></i>
                </span>
                <span
                  :class="nombreDeJoursSearched ? 'search-icon2' : ' d-none'"
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
          </v-col>
          <v-col
            cols="2"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle" @click="fillterByThisColumn('statut')">
              <span
                class="isFilteredWith"
                :class="{ displayNone: statusSearchContent == 'Tous' }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg
              ></span>
              Status
            </span>
            <span
              :class="{ 'd-none': columnToFillterWith == 'statut' }"
              @click="fillterByThisColumn('statut')"
              ><i class="fas fa-sort"></i
            ></span>
            <span
              :class="{
                'd-none': columnToFillterWith != 'statut',
                columnArrowIsDescendant: !ascendant,
              }"
              @click="fillterByThisColumn('statut')"
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
            <span class="pteteSearchContainer" style="right: 15px; top: 48px">
              <span
                class="input-group navbarPerpageIcon2"
                style="width: 150px"
                v-out-click="() => (showstatusDropDown = false)"
                @click="showstatusDropDown = !showstatusDropDown"
              >
                <ul
                  id="perPageList"
                  style="width: 148px; overflow: auto"
                  :class="{ 'd-none': !showstatusDropDown }"
                >
                  <li @click="setstatusSearchedColumn('Tous')">
                    <span>Tous</span>
                  </li>
                  <li @click="setstatusSearchedColumn('valide')">
                    <span>Validé</span>
                  </li>
                  <li @click="setstatusSearchedColumn('refuse')">
                    <span>Refusé</span>
                  </li>
                  <li @click="setstatusSearchedColumn('En attente')">
                    <span>En Attente</span>
                  </li>
                </ul>
                <input
                  type="text"
                  class="form-control"
                  v-model="statusSearchContent"
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
          </v-col>
          <v-col
            cols="1"
            class="thCase"
            style="cursor: pointer; user-select: none"
          >
            <span class="thTitle">Pièce jointe</span>
          </v-col>

          <span
            style="
              width: 100%;
              height: 1px;
              display: block;
              margin-bottom: 10px;
            "
          ></span>
        </v-row>
      </div>
      <b-col
        cols="12"
        class="conges-table p-0"
        style="
          margin-bottom: 0;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        "
      >
        <v-row
          class="congeRow"
          v-for="conge in itemsPerPage()"
          :key="conge.id"
          ref="tableBodyTd"
          @click="
            openStatusModal('consulterMotif', conge.motif);
            setSelectedDemandeConge(conge);
          "
        >
          <v-col cols="1" class="column">
            <span class="columnSpan" style="line-height: 19px"
              >{{ conge.type }}
            </span>
          </v-col>
          <v-col cols="2" class="column">
            <span class="columnSpan" style="color: #87b0e6"
              >{{ conge.demandeur }}
            </span>
          </v-col>
          <v-col cols="1" class="column">
            <span class="columnSpan">{{ conge.dateDemande }} </span>
          </v-col>
          <v-col cols="2" class="column" style="position: relative">
            <span class="columnSpan">{{ conge.dateDebut }} </span>
            <span v-if="conge.demiJourAuDebut == 1" class="demiJournee"
              >demi-journée</span
            >
          </v-col>
          <v-col cols="2" class="column" style="position: relative">
            <span class="columnSpan">{{ conge.dateFin }} </span>
            <span v-if="conge.demiJourAuFin == 1" class="demiJournee"
              >demi-journée</span
            >
          </v-col>
          <v-col cols="1" class="column" style="width: 230.5px">
            <span class="columnSpan">{{ conge.nombreDeJours }} </span>
          </v-col>
          <v-col cols="2" class="column">
            <span>
              <span
                v-if="conge.statut == 'En attente'"
                class="statusButton valider"
                @click="
                  openStatusModal('valider');
                  setSelectedDemandeConge(conge);
                  stopProp($event);
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
              <span
                v-if="conge.statut == 'En attente'"
                class="statusButton refuser"
                @click="
                  openStatusModal('refuser');
                  setSelectedDemandeConge(conge);
                  stopProp($event);
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </span>
              <span class="statusIsValid" v-if="conge.statut == 'valide'"
                >Validé</span
              >
              <span class="statusIsRefuse" v-if="conge.statut == 'refuse'">
                <span
                  class="pencil"
                  @click="
                    openStatusModal('modifier', 'lorem lorem lorem');
                    stopProp($event);
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.058"
                    height="14.058"
                    viewBox="0 0 14.058 14.058"
                  >
                    <defs>
                      <svg:style>
                        .apencil {
                          fill: #bfbfbf;
                        }
                      </svg:style>
                    </defs>
                    <path
                      class="apencil"
                      d="M14.432,1.928a2.2,2.2,0,0,1,1.757,3.514l-.879.879L12.236,3.246l.879-.879a2.187,2.187,0,0,1,1.318-.439ZM3.449,12.032l-.879,3.954,3.954-.879L14.652,6.98,11.577,3.9Zm8.945-5.113-6.15,6.15-.757-.757,6.15-6.15.757.757Z"
                      transform="translate(-2.571 -1.928)"
                    />
                  </svg>
                </span>
                <span>Refusé</span>
                <span
                  class="infos"
                  @click="
                    openStatusModal('consulter', 'lorem lorem lorem');
                    stopProp($event);
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.148"
                    height="20.148"
                    viewBox="0 0 20.148 20.148"
                  >
                    <defs>
                      <svg:style>
                        .aInfos {
                          fill: #bfbfbf;
                        }
                      </svg:style>
                    </defs>
                    <g transform="translate(-3.375 -3.375)">
                      <path
                        class="aInfos"
                        d="M13.449,5.409A8.037,8.037,0,1,1,7.763,7.763a8.007,8.007,0,0,1,5.686-2.354m0-2.034A10.074,10.074,0,1,0,23.523,13.449,10.073,10.073,0,0,0,13.449,3.375Z"
                      />
                      <path
                        class="aInfos"
                        d="M18.558,20.762H16.523V14.708h2.034Zm0-8.04H16.523V10.688h2.034Z"
                        transform="translate(-4.091 -2.275)"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </span>
          </v-col>
          <v-col cols="1" class="column">
            <span>
              <span class="docPieceJointe"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.227"
                  height="18.049"
                  viewBox="0 0 18.227 18.049"
                >
                  <defs>
                    <svg:style>
                      .adocPieceJointe {
                        fill: #4762f1;
                      }
                    </svg:style>
                  </defs>
                  <g transform="translate(0 -2.493)">
                    <path
                      class="adocPieceJointe"
                      d="M18.076,4.7,15.925,2.653a.437.437,0,0,0-.325-.16H6.981a.457.457,0,0,0-.457.457v1.4l-3.038.521a.45.45,0,0,0-.365.519l.154.9c-.987.332-2,.675-2.98,1.026a.452.452,0,0,0-.27.574L1.972,13.3a.267.267,0,0,0,.5-.181L.557,7.79c.922-.33,1.877-.653,2.81-.967l.917,5.349,1.056,6.16a.452.452,0,0,0,.519.366l2.859-.491,2.234-.383-3.36,1.208-2.65.953L2.884,14.26a.267.267,0,1,0-.5.181l2.087,5.805a.451.451,0,0,0,.422.3.442.442,0,0,0,.152-.027l2.729-.981,6.2-2.228,1.184-.2H17.77a.458.458,0,0,0,.457-.458V5.006a.384.384,0,0,0-.15-.3Zm-.707.063H16c-.064,0-.214,0-.252-.036a.15.15,0,0,1-.019-.092l0-1.439Zm.323,11.8H7.058v-5.2a.267.267,0,1,0-.534,0v5.28a.458.458,0,0,0,.457.458h5.013l-3.366.577-2.776.476L4.811,12.081l-1.149-6.7,2.862-.491v5.234a.267.267,0,1,0,.534,0v-7.1h8.133l0,1.614a.636.636,0,0,0,.177.47.816.816,0,0,0,.593.191h1.727Z"
                      transform="translate(0 0)"
                    />
                    <path
                      class="adocPieceJointe"
                      d="M234.43,111.716a.267.267,0,0,0,.267.267h7.634a.267.267,0,0,0,0-.534H234.7A.267.267,0,0,0,234.43,111.716Z"
                      transform="translate(-226.085 -105.077)"
                    />
                    <path
                      class="adocPieceJointe"
                      d="M242.331,164.731H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                      transform="translate(-226.085 -156.462)"
                    />
                    <path
                      class="adocPieceJointe"
                      d="M242.331,218.013H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                      transform="translate(-226.085 -207.848)"
                    />
                    <path
                      class="adocPieceJointe"
                      d="M242.331,271.3H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                      transform="translate(-226.085 -259.233)"
                    />
                    <path
                      class="adocPieceJointe"
                      d="M242.331,324.578H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                      transform="translate(-226.085 -310.619)"
                    />
                  </g></svg
              ></span>
              (0)
            </span>
          </v-col>
        </v-row>
      </b-col>
      <b-col
        cols="12"
        class="conges-table"
        style="max-height: 20px; min-height: 20px"
      >
      </b-col>
    </b-col>
    <b-col cols="12" class="CongesFooter pr-0 pl-0">
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

        <span class="afficher">Année</span>
        <span
          class="input-group navbarPerpageIcon"
          v-out-click="() => (showByYearDropDown = false)"
          @click="showByYearDropDown = !showByYearDropDown"
        >
          <ul
            id="perPageList"
            :class="{ 'd-none': !showByYearDropDown }"
            style="overflow: auto"
          >
            <li @click="setByYearValue('Tous')">Tous</li>
            <li
              v-for="year in yearsList"
              :key="year"
              @click="setByYearValue(year)"
            >
              {{ year }}
            </li>
          </ul>
          <input
            type="text"
            class="form-control"
            v-model="byYear"
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
      </b-row>
    </b-col>
    <AddCongesModal
      v-model="dialog"
      v-if="dialog"
      :getCongesType="getCongesType"
    />
    <StatusMotifModal
      v-model="statusDialog"
      v-if="statusDialog"
      :statusRefusAction="statusRefusAction"
      :statusRefusText="statusRefusText"
      :selectedDemandeConge="selectedDemandeConge"
    />
  </b-row>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import OutClick from "vue-click-outside";
import AddCongesModal from "./AddCongesModal";
import StatusMotifModal from "./StatusMotifModal";
export default {
  components: { AddCongesModal, StatusMotifModal },
  data: function () {
    return {
      columnWidth: [],
      typeSearchContent: "Tous",
      demandeurSearchContent: "",
      demandeLeSearchContent: "",
      dateDeDebutSearchContent: "",
      dateDefinSearchContent: "",
      statusSearchContent: "Tous",
      nombreDeJoursSearchContent: "",
      items: [6, 8, 10, 12],
      currentPage: 1,
      perPage: 10,
      paginationState: "inFirstPage",
      showPerPageList: false,
      columnToFillterWith: "",
      ascendant: true,
      searchedColumName: "",
      showtypeDropDown: false,
      showstatusDropDown: false,
      showByYearDropDown: false,
      byYear: "Tous",
      dialog: false,
      statusDialog: false,
      statusRefusAction: "",
      statusRefusText: "",
      selectedDemandeConge: "",
    };
  },
  methods: {
    ...mapActions([
      "getCongesTypesAction",
      "getDemmandeCongesAction",
      "getCollaborateursAction",
      "acceDemmandeCongeAction",
      "refuserDemmandeCongeAction",
      "setCongeCategoriesAction"
    ]),
    demandeurClearSearch() {
      this.demandeurSearchContent = "";
    },
    demandeLeClearSearch: function () {
      this.demandeLeSearchContent = "";
    },
    dateDeDebutClearSearch: function () {
      this.dateDeDebutSearchContent = "";
    },
    dateDefinClearSearch: function () {
      this.dateDefinSearchContent = "";
    },
    nombreDeJoursClearSearch: function () {
      this.nombreDeJoursSearchContent = "";
    },
    itemsPerPage: function () {
      if (this.perPage == "Tous") {
        return this.filteredListAfterfilterByYear;
      } else {
        return this.filteredListAfterfilterByYear.slice(
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
    settypeSearchedColumn: function (type) {
      if (type != "Tous") {
        this.searchedColumName = "type";
        this.typeSearchContent = type;
      } else {
        this.searchedColumName = "";
        this.typeSearchContent = "Tous";
      }
    },
    setstatusSearchedColumn: function (statut) {
      if (statut != "Tous") {
        this.searchedColumName = "statut";
        this.statusSearchContent = statut;
      } else {
        this.searchedColumName = "";
        this.statusSearchContent = "Tous";
      }
    },
    setByYearValue: function (year) {
      this.byYear = year;
    },
    openStatusModal: function (action, text) {
      this.statusRefusAction = action;
      this.statusRefusText = text;
      this.statusDialog = true;
    },
    stopProp: function (event) {
      event.stopPropagation();
    },
    accepterDemande(id) {
      if (id && id != "") {
        this.acceDemmandeCongeAction({
          id,
        });
      }
    },
    refuserDemande(id) {
      if (id && id != "") {
        this.refuserDemmandeCongeAction({
          id,
        });
      }
    },
    setSelectedDemandeConge(demandeConge) {
      console.log("conge in conges",demandeConge)
      this.selectedDemandeConge = demandeConge;
    },
  },
  computed: {
    ...mapGetters(["getDemmandeConges", "getCongesType"]),
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
      let list = [...this.getDemmandeConges];
      var columnToFillterWith = this.columnToFillterWith;
      var ascendant = this.ascendant;
      if (columnToFillterWith != "") {
        list.sort(function (a, b) {
          if (ascendant) {
            if (
              columnToFillterWith == "dateDemande" ||
              columnToFillterWith == "dateDebut" ||
              columnToFillterWith == "dateFin"
            ) {
              return (
                new Date(
                  a[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(b[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else if (columnToFillterWith == "nombreDeJours") {
              return a[columnToFillterWith] - b[columnToFillterWith];
            } else {
              return a[columnToFillterWith].localeCompare(
                b[columnToFillterWith]
              );
            }
          } else {
            if (
              columnToFillterWith == "dateDemande" ||
              columnToFillterWith == "dateDebut" ||
              columnToFillterWith == "dateFin"
            ) {
              return (
                new Date(
                  b[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(a[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else if (columnToFillterWith == "nombreDeJours") {
              return b[columnToFillterWith] - a[columnToFillterWith];
            } else {
              return b[columnToFillterWith].localeCompare(
                a[columnToFillterWith]
              );
            }
          }
        });
      }
      if (this.typeSearchContent != "Tous") {
        list = list.filter((element) =>
          element["type"]
            .toLowerCase()
            .includes(this.typeSearchContent.toLowerCase())
        );
      }
      if (this.demandeurSearchContent != "") {
        list = list.filter((element) =>
          element["demandeur"]
            .toLowerCase()
            .includes(this.demandeurSearchContent.toLowerCase())
        );
      }
      if (this.demandeLeSearchContent != "") {
        list = list.filter((element) =>
          element["dateDemande"]
            .toLowerCase()
            .includes(this.demandeLeSearchContent.toLowerCase())
        );
      }
      if (this.dateDeDebutSearchContent != "") {
        list = list.filter((element) =>
          element["dateDebut"]
            .toLowerCase()
            .includes(this.dateDeDebutSearchContent.toLowerCase())
        );
      }
      if (this.dateDefinSearchContent != "") {
        list = list.filter((element) =>
          element["dateFin"]
            .toLowerCase()
            .includes(this.dateDefinSearchContent.toLowerCase())
        );
      }
      if (this.nombreDeJoursSearchContent != "") {
        list = list.filter(
          (element) =>
            element["nombreDeJours"] == this.nombreDeJoursSearchContent
        );
      }
      if (this.statusSearchContent != "Tous") {
        list = list.filter(
          (element) => element["statut"] == this.statusSearchContent
        );
      }

      return list;
    },
    demandeurSearched: function () {
      return this.demandeurSearchContent.length === 0;
    },
    demandeLeSearched: function () {
      return this.demandeLeSearchContent.length === 0;
    },
    dateDeDebutSearched: function () {
      return this.dateDeDebutSearchContent.length === 0;
    },
    dateDefinSearched: function () {
      return this.dateDefinSearchContent.length === 0;
    },
    nombreDeJoursSearched: function () {
      return this.nombreDeJoursSearchContent.length === 0;
    },
    yearsList: function () {
      let years = this.fillteredList.map((e) => e.dateDemande.split("/")[2]);
      years = years.sort(function (a, b) {
        return b - a;
      });

      return Array.from(new Set(years));
    },
    filteredListAfterfilterByYear: function () {
      let list = this.fillteredList;
      if (this.byYear != "Tous") {
        list = list.filter(
          (element) => element["dateDemande"].split("/")[2] == this.byYear
        );
      }
      return list;
    },
  },
  mounted: function () {
    this.getCongesTypesAction();
    this.getDemmandeCongesAction();
    this.getCollaborateursAction();
    this.setCongeCategoriesAction();
  },
  updated: function () {
    /* for (
      let index = 0;
      index < this.$refs.tableHeaderTh.childNodes.length;
      index++
    ) {
      if (index != 5) {
        this.$refs.tableHeaderTh.childNodes[index].style["width"] =
          this.columnWidth[index] + "px";

        this.$refs.tableBodyTd[0].childNodes[index].style["width"] =
          this.columnWidth[index] + "px";
      }
    } */
  },
  directives: {
    OutClick,
  },
};
</script>
<style lang="scss" scoped>
.conges-container {
  align-content: baseline;
  width: 100%;
  margin-left: 0;
}
.congesHeader {
  height: 139px;
  background: #87b0e696 0% 0% no-repeat padding-box;
  border-radius: 26px 26px 0px 0px;
  .headerSection {
    text-align: left;
    font: normal normal 600 24px/35px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    text-shadow: 0px 3px 6px #00000066;
    opacity: 1;

    .headerSectionTitle {
      font: normal normal normal 20px/30px Poppins;
    }
    .congesConsumeInfos {
    }
    .monSoldeIcon {
      fill: #ffffff;
      margin-left: 10px;
    }
  }
  .addConges {
    width: 40px;
    display: inline-block;
    height: 41px;
    cursor: pointer;
    .addConges:hover {
      .aaa {
        fill: #4762f18c !important;
      }
    }
  }
}
.separator {
  height: 30px;
  width: 1px;
  background-color: #ffffff;
  float: right;
  display: inline-block;
  box-shadow: 0px 2px 11px 1px #00000038;
}

.congesTableContainer {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  margin-top: -71px;
  .tableHeader {
    border-radius: 27px;
    margin-left: 0;
    margin-right: 8px;
    margin-bottom: 0;
    border-radius: 27px;

    color: #848484;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
  }
  .tableHeader-Container {
    border-radius: 27px;
    opacity: 1;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 1px 3px 10px #00000029;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 0;
    padding-bottom: 0;
    padding-top: 12px;
    height: 88px;
    z-index: 1;
  }
  .isFilteredWith {
    svg {
      fill: #87b0e6 !important;
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
  .input-group2 {
    position: relative;
    display: inline-flex;
    width: 170px;
    border-radius: 23px;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #bfbfbf;
    .input2 {
      background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 23px !important;
      text-align: left !important;
      height: 32px;
    }
    .search-icon2 {
      fill: #bfbfbf;
      z-index: 20;
      margin-top: 7px;
      position: absolute;
      right: 2px;
      cursor: pointer;
      background-color: #ffffff;
      height: 23px;
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
    text-align: center;
  }
  .thCase {
    border: none;
    font: normal normal 600 16px/30px Poppins;
    letter-spacing: 0px;
    color: #848484;
    vertical-align: inherit;
    position: relative;
    text-align: center;
    span {
      color: #87b0e6;
    }
    input {
      text-align: left !important;
    }
  }
  .thCase:hover {
    .pteteSearchContainer {
      display: block;
    }
    .thTitle {
      color: #87b0e6 !important;
    }
  }
  .pteteSearchContainer {
    display: none;
  }
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
    height: 101px;
    background: white;
    border-radius: 10px;
    /* text-align: center; */
    border: 1px solid #bfbfbf;
    position: absolute;
    top: -102px;
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
.conges-table {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  margin-left: 0;
  padding-bottom: 0;
  max-height: 1000px;
  height: 605px;
  overflow-y: auto;
  margin-top: 0;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  overflow-x: clip;

  .columnSpan {
    display: inline-block;
    color: #848484;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    text-align: center;
    width: 100%;
  }
  .congeRow {
    height: 57px;
    border-bottom: 1px solid #87b0e64f;
    cursor: pointer;
    margin: 0;
    margin-top: -4px;
    margin-bottom: 6px;
  }
  .congeRow:hover {
    background-color: rgba(128, 128, 128, 0.111);
  }
  .demiJournee {
    font: normal normal normal 12px/30px Poppins;
    color: #0000ff85;
    font-weight: 800;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0;
    display: block;
    margin-top: -12px;
  }
  .column {
    text-align: center;
  }
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.CongesFooter {
  width: 100%;
  .piginationNavBar {
    height: 50px;
  }
  .piginationNavBar {
    min-height: 59px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 23px #00000029;
    border-radius: 30px;
    opacity: 1;
    max-width: 100%;
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
.columnArrowIsDescendant {
  transform: rotate(180deg);
  display: inline-block;
}
.statusButton {
  margin-top: 0 !important;
  display: inline-block;

  border-radius: 16px;
  width: 30px;
  cursor: pointer;
  svg {
    fill: white;
  }
}
.valider {
  background-color: #95ca19;
  border: 1px solid rgba(255, 71, 71, 0.201);
  margin-right: 10px;
}
.valider:hover {
  background-color: #4d680e;
}
.refuser {
  background-color: rgb(255, 71, 71);
  border: 1px solid rgba(196, 0, 0, 0.585);
}
.refuser:hover {
  background-color: rgb(194, 16, 16);
}
.statusIsValid {
  color: #95ca19;
  margin-top: 0 !important;
}
.statusIsRefuse {
  margin-top: 0 !important;
  * {
    margin-top: 0 !important;
  }
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ff4747;
}
.pencil {
  margin-right: 5px;
}
.pencil:hover,
.infos:hover {
  * {
    fill: #4762f1;
  }
}
.infos {
  margin-left: 5px;
}
.docPieceJointe {
  cursor: pointer;
}
</style>
