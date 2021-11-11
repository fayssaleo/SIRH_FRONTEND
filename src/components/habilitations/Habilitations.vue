<template>
  <b-row class="habilitations-container">
    <v-row>
      <v-col cols="12" class="habilitationPageHeader p-2 px-2">
        <span class="title pl-4 pt-2"> Roles : </span>
        <span class="addDocs float-right pr-2 pt-1" @click="openAddRoleModal">
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
      </v-col>
      <b-col cols="12" class="congesTableContainer p-0">
        <div class="tableHeader-Container p-0">
          <v-row class="tableHeader">
            <v-col
              cols="3"
              class="thCase"
              style="cursor: pointer; user-select: none"
            >
              <span
                class="thTitle"
                @click="fillterByThisColumn('name')"
                :class="{ isFilteredWith: nameSearchContent == '' }"
              >
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: nameSearchContent == '' }"
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
                Role
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'name' }"
                @click="fillterByThisColumn('name')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('name')"
                :class="{
                  'd-none': columnToFillterWith != 'name',
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
                  @click="setSearchedColumnName('name')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="par nom.."
                    v-model="nameSearchContent"
                  />
                  <span
                    :class="nameSearched ? 'd-none' : '  search-icon2 '"
                    @click="nameClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span :class="nameSearched ? 'search-icon2' : ' d-none'">
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
              <span
                class="thTitle"
                @click="fillterByThisColumn('utilisateurs')"
                :class="{ isFilteredWith: utilisateursSearchContent == '' }"
              >
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: utilisateursSearchContent == '' }"
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
                Utilisateurs
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'utilisateurs' }"
                @click="fillterByThisColumn('utilisateurs')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('utilisateurs')"
                :class="{
                  'd-none': columnToFillterWith != 'utilisateurs',
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
                  @click="setSearchedColumnName('utilisateurs')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    placeholder="par nom.."
                    v-model="utilisateursSearchContent"
                  />
                  <span
                    :class="utilisateursSearched ? 'd-none' : '  search-icon2 '"
                    @click="utilisateursClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span
                    :class="utilisateursSearched ? 'search-icon2' : ' d-none'"
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
              <span class="thTitle" @click="fillterByThisColumn('created_at')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: created_atSearchContent == '' }"
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
                Date création
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'created_at' }"
                @click="fillterByThisColumn('created_at')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('created_at')"
                :class="{
                  'd-none': columnToFillterWith != 'created_at',
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
                  @click="setSearchedColumnName('created_at')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    v-mask="'##/##/####'"
                    placeholder="DD/MM/YYYY"
                    v-model="created_atSearchContent"
                  />
                  <span
                    :class="created_atSearched ? 'd-none' : '  search-icon2 '"
                    @click="created_atClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span
                    :class="created_atSearched ? 'search-icon2' : ' d-none'"
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
              <span class="thTitle" @click="fillterByThisColumn('updated_at')">
                <span
                  class="isFilteredWith"
                  :class="{ displayNone: updated_atSearchContent == '' }"
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
                Date création
              </span>
              <span
                :class="{ 'd-none': columnToFillterWith == 'updated_at' }"
                @click="fillterByThisColumn('updated_at')"
                ><i class="fas fa-sort"></i
              ></span>
              <span
                @click="fillterByThisColumn('updated_at')"
                :class="{
                  'd-none': columnToFillterWith != 'updated_at',
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
                  @click="setSearchedColumnName('updated_at')"
                >
                  <input
                    type="text"
                    class="form-control input2"
                    v-mask="'##/##/####'"
                    placeholder="DD/MM/YYYY"
                    v-model="updated_atSearchContent"
                  />
                  <span
                    :class="updated_atSearched ? 'd-none' : '  search-icon2 '"
                    @click="updated_atClearSearch()"
                  >
                    <i class="fa fa-times"></i>
                  </span>
                  <span
                    :class="updated_atSearched ? 'search-icon2' : ' d-none'"
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
              cols="3"
              class="thCase"
              style="cursor: pointer; user-select: none"
            >
              <span class="thTitle"> Ations </span>
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
            v-for="role in itemsPerPage()"
            :key="role.id"
            ref="tableBodyTd"
          >
            <v-col cols="3" class="column">
              <span class="columnSpan" style="line-height: 19px"
                >{{ role.name }}
              </span>
            </v-col>
            <v-col cols="2" class="column">
              <span class="columnSpan" style="color: #87b0e6">{{
                role.utilisateurs
              }}</span>
            </v-col>
            <v-col cols="2" class="column">
              <span class="columnSpan">{{ role.created_at }} </span>
            </v-col>
            <v-col cols="2" class="column">
              <span class="columnSpan">{{ role.updated_at }} </span>
            </v-col>
            <v-col cols="3" class="column">
              <span class="columnSpan">
                <span
                  class="statusButton setting"
                  @click="openSettingRoleModal(role)"
                >
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
                <span
                  class="statusButton edit"
                  @click="openEditRoleModal(role)"
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
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    />
                  </svg>
                </span>
                <span class="statusButton delete" @click="openDeleteRoleModal(role)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                </span>
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
                  :class="{
                    paginationActiveEelement: currentPage == index + 1,
                  }"
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
    </v-row>
    <AddRoleModal v-model="dialog" v-if="dialog" :roleToEdit="thisRole" />
    <AddPrivilegesModal
      class="habilitation"
      v-model="dialog2"
      v-if="dialog2"
      :role="thisRole"
    />
    <ConfirmalModal
      v-model="dialog3"
      @action="handle_function_call"
      :actionMessage="'Voulez-vous vraiment supprimer ce role ?'"
      class="d-none"
    />
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import OutClick from "vue-click-outside";
import AddRoleModal from "./AddRoleModal.vue";
import AddPrivilegesModal from "./AddPrivilegesModal.vue";
import ConfirmalModal from "../shared/modal/ConfirmalModal.vue";
export default {
  components: { AddRoleModal, AddPrivilegesModal, ConfirmalModal },
  data: function () {
    return {
      typeSearchContent: "Tous",
      demandeLeSearchContent: "",
      dateDeDebutSearchContent: "",
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
      nameSearchContent: "",
      utilisateursSearchContent: "",
      created_atSearchContent: "",
      updated_atSearchContent: "",
      dialog: false,
      dialog2: false,
      dialog3: false,
      thisRole: {},
    };
  },
  methods: {
    ...mapActions(["setRolesAction", "deleteRolesAction"]),
    demandeurClearSearch() {
      this.demandeurSearchContent = "";
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
    stopProp: function (event) {
      event.stopPropagation();
    },
    openAddRoleModal() {
      this.thisRole = null;
      this.dialog = true;
    },
    openSettingRoleModal(role) {
      this.thisRole = role;
      this.dialog2 = true;
    },
    openEditRoleModal(role) {
      this.thisRole = role;
      this.dialog = true;
    },
    openDeleteRoleModal(role) {
      this.thisRole = { id: role.id };
      this.dialog3 = true;
    },
    handle_function_call() {
      this.deleteRolesAction(this.thisRole);
    },
  },
  computed: {
    ...mapGetters(["getRoles"]),
    rows: function () {
      return this.getRoles.length;
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
      let list = [...this.getRoles];
      var columnToFillterWith = this.columnToFillterWith;
      var ascendant = this.ascendant;
      if (columnToFillterWith != "") {
        list.sort(function (a, b) {
          if (ascendant) {
            if (
              columnToFillterWith == "created_at" ||
              columnToFillterWith == "updated_at"
            ) {
              return (
                new Date(
                  a[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(b[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else if (columnToFillterWith == "utilisateurs") {
              return a[columnToFillterWith] - b[columnToFillterWith];
            } else {
              return a[columnToFillterWith].localeCompare(
                b[columnToFillterWith]
              );
            }
          } else {
            if (
              columnToFillterWith == "created_at" ||
              columnToFillterWith == "updated_at"
            ) {
              return (
                new Date(
                  b[columnToFillterWith].split("/").reverse().join("-")
                ) -
                new Date(a[columnToFillterWith].split("/").reverse().join("-"))
              );
            } else if (columnToFillterWith == "utilisateurs") {
              return b[columnToFillterWith] - a[columnToFillterWith];
            } else {
              return b[columnToFillterWith].localeCompare(
                a[columnToFillterWith]
              );
            }
          }
        });
      }
      if (this.nameSearchContent != "") {
        list = list.filter((element) =>
          element["name"]
            .toLowerCase()
            .includes(this.nameSearchContent.toLowerCase())
        );
      }
      if (this.nameSearchContent != "") {
        list = list.filter((element) =>
          element["name"]
            .toLowerCase()
            .includes(this.nameSearchContent.toLowerCase())
        );
      }
      return list;
    },
    nameSearched: function () {
      return this.nameSearchContent.length === 0;
    },
    utilisateursSearched: function () {
      return this.utilisateursSearchContent.length === 0;
    },
    created_atSearched: function () {
      return this.created_atSearchContent.length === 0;
    },
    updated_atSearched: function () {
      return this.updated_atSearchContent.length === 0;
    },
    yearsList: function () {
      let years = this.fillteredList.map((e) => e.created_at.split("-")[2]);
      years = years.sort(function (a, b) {
        return b - a;
      });

      return Array.from(new Set(years));
    },
    filteredListAfterfilterByYear: function () {
      let list = this.fillteredList;
      if (this.byYear != "Tous") {
        list = list.filter(
          (element) => element["created_at"].split("-")[2] == this.byYear
        );
      }
      return list;
    },
  },
  mounted: function () {
    this.setRolesAction();
  },
  updated: function () {},
  directives: {
    OutClick,
  },
};
</script>
<style lang="scss" scoped>
.habilitationPageHeader {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 23px #00000029;
  height: 67px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.habilitations-container {
  align-content: baseline;
  width: 100%;
  margin-left: 10px;
  padding-right: 26px;
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
.addDocs {
  cursor: pointer;
}
.title {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  display: inline-block;
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
  max-height: 637px;
  height: 637px;
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
.columnArrowIsDescendant {
  transform: rotate(180deg);
  display: inline-block;
}
.statusButton {
  margin-top: 0 !important;
  display: inline-block;
  border-radius: 16px;
  width: 32px;
  cursor: pointer;
  height: 32px;
  svg {
    fill: white;
  }
}
.setting {
  background-color: #546e7a;
  border: 1px solid rgba(255, 71, 71, 0.201);
  margin-right: 10px;
}
.setting:hover {
  background-color: #546e7a82;
}
.edit {
  background-color: #1e88e5;
  border: 1px solid rgba(255, 71, 71, 0.201);
  margin-right: 10px;
}
.edit:hover {
  background-color: #1e88e585;
}
.delete {
  background-color: rgb(255, 71, 71);
  border: 1px solid rgba(196, 0, 0, 0.585);
}
.delete:hover {
  background-color: rgb(194, 16, 16);
}
</style>
