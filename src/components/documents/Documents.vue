<template>
  <b-row class="documents-container p-4">
    <b-col cols="3 " class="leftSide pt-0" v-if="!showAllDemande">
      <span class="title">Formulaire de demandes</span>
      <span class="caption">Choisissez la nature du doc à demander :</span>
      <span
        class="docAdemander"
        v-for="documentType in getDemandeDocumentCategories"
        :key="documentType.id"
        @click="setSelectedDocumentType(documentType)"
        :class="{
          selectedDocumentType: selectedDocumentType.id == documentType.id,
        }"
      >
        <span class="icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.005"
            height="14.889"
            viewBox="0 0 11.005 14.889"
          >
            <defs>
              <svg:style>
                .ademander {
                  fill: #87b0e6;
                }
              </svg:style>
            </defs>
            <path
              class="ademander"
              d="M69.788,0H62.294a.914.914,0,0,0-.913.913V13.976a.914.914,0,0,0,.913.913h9.179a.914.914,0,0,0,.913-.913V2.823ZM70,1.366,71.142,2.6H70Zm1.616,12.609a.147.147,0,0,1-.147.146H62.294a.147.147,0,0,1-.146-.146V.913a.146.146,0,0,1,.146-.146h6.942v2.22a.384.384,0,0,0,.384.383h2ZM63.5,4.078h6.511a.287.287,0,1,1,0,.575H63.5a.287.287,0,0,1,0-.575ZM70.3,6.3a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,6.3Zm0,1.867a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,8.163Zm0,1.9a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,10.062Z"
              transform="translate(-61.381)"
            />
          </svg>
        </span>
        <span class="docAdemanderName">{{ documentType.libelle }}</span>
      </span>

      <span
        class="caption caption2"
        v-if="selectedDocumentType.libelle == 'autre'"
        >Autre document :</span
      >
      <span class="siAutreDocu" v-if="selectedDocumentType.libelle == 'autre'">
        <span class="icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.005"
            height="14.889"
            viewBox="0 0 11.005 14.889"
          >
            <defs>
              <svg:style>
                .ademander {
                  fill: #87b0e6;
                }
              </svg:style>
            </defs>
            <path
              class="ademander"
              d="M69.788,0H62.294a.914.914,0,0,0-.913.913V13.976a.914.914,0,0,0,.913.913h9.179a.914.914,0,0,0,.913-.913V2.823ZM70,1.366,71.142,2.6H70Zm1.616,12.609a.147.147,0,0,1-.147.146H62.294a.147.147,0,0,1-.146-.146V.913a.146.146,0,0,1,.146-.146h6.942v2.22a.384.384,0,0,0,.384.383h2ZM63.5,4.078h6.511a.287.287,0,1,1,0,.575H63.5a.287.287,0,0,1,0-.575ZM70.3,6.3a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,6.3Zm0,1.867a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,8.163Zm0,1.9a.287.287,0,0,1-.287.287H63.5a.287.287,0,0,1,0-.575h6.511A.287.287,0,0,1,70.3,10.062Z"
              transform="translate(-61.381)"
            />
          </svg>
        </span>
        <span class="autreDocuemntText"
          ><v-text-field
            counter="25"
            label="Si autre, saisir le nom de document...."
            v-model="autre"
          ></v-text-field
        ></span>
      </span>
      <br />
      <span
        class="caption caption2"
        v-if="selectedDocumentType.libelle != 'autre'"
        >Message :</span
      >
      <span class="siAutreDocu">
        <span class="icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.889"
            height="14.889"
            viewBox="0 0 14.889 14.889"
          >
            <defs>
              <svg:style>
                .amsg {
                  fill: #87b0e6;
                }
              </svg:style>
            </defs>
            <path
              class="amsg"
              d="M16.4,3H4.489A1.487,1.487,0,0,0,3.007,4.489L3,17.889l2.978-2.978H16.4a1.493,1.493,0,0,0,1.489-1.489V4.489A1.493,1.493,0,0,0,16.4,3Zm-1.489,8.933H5.978V10.444h8.933Zm0-2.233H5.978V8.211h8.933Zm0-2.233H5.978V5.978h8.933Z"
              transform="translate(-3 -3)"
            />
          </svg>
        </span>
        <span class="autreDocuemntText"
          ><v-text-field
            v-model="message"
            counter="255"
            label="Message...."
          ></v-text-field
        ></span>
      </span>
      <br />
      <span class="valideCommandeButton" @click="addDemande">
        Valider ma demande
      </span>
    </b-col>

    <b-col>
      <b-row>
        <b-col cols="12" class="Documentheader p-0 pl-4">
          <span
            class="title"
            style="display: inline-block"
            v-if="!showAllDemande"
            >Historique des demandes</span
          >
          <span
            class="title"
            style="display: inline-block"
            v-if="showAllDemande"
            >Les demandes</span
          >
          <span
            class="switchButton"
            @click="toggleShowAllDemande"
            v-if="!showAllDemande"
          >
            <svg
              data-v-8ab9ccbe=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="60"
              height="46"
              viewBox="0 13 73 40"
            >
              <defs>
                <svg:style>
                  .aswitch {
                    fill: #4762f1;
                  }
                  .bswitch {
                    fill: #fff;
                  }
                  .cswitch {
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
                <g class="cswitch" transform="matrix(1, 0, 0, 1, 1087.5, 19.5)">
                  <rect
                    class="aswitch"
                    width="46"
                    height="46"
                    rx="23"
                    transform="translate(13.5 8.5)"
                  />
                </g>
                <path
                  class="bswitch"
                  d="M1.77,3.375a1.77,1.77,0,1,0,1.77,1.77,1.77,1.77,0,0,0-1.77-1.77Zm0,5.9a1.77,1.77,0,1,0,1.77,1.77,1.77,1.77,0,0,0-1.77-1.77Zm0,5.9a1.77,1.77,0,1,0,1.77,1.77,1.77,1.77,0,0,0-1.77-1.77Zm16.524.59H6.492a.59.59,0,0,0-.59.59v1.18a.59.59,0,0,0,.59.59h11.8a.59.59,0,0,0,.59-.59v-1.18A.59.59,0,0,0,18.295,15.768Zm0-11.8H6.492a.59.59,0,0,0-.59.59v1.18a.59.59,0,0,0,.59.59h11.8a.59.59,0,0,0,.59-.59V4.555A.59.59,0,0,0,18.295,3.965Zm0,5.9H6.492a.59.59,0,0,0-.59.59v1.18a.59.59,0,0,0,.59.59h11.8a.59.59,0,0,0,.59-.59v-1.18A.59.59,0,0,0,18.295,9.867Z"
                  transform="translate(1114.15 39.953)"
                />
              </g>
            </svg>
          </span>
          <span
            class="switchButton"
            @click="toggleShowAllDemande"
            v-if="showAllDemande"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="60"
              height="46"
              viewBox="0 13 73 40"
            >
              <defs>
                <svg:style>
                  .aaddDemande {
                    fill: #4762f1;
                  }
                  .baddDemande {
                    fill: #fff;
                  }
                  .caddDemande {
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
                <g
                  class="caddDemande"
                  transform="matrix(1, 0, 0, 1, 1087.5, 19.5)"
                >
                  <rect
                    class="aaddDemande"
                    width="46"
                    height="46"
                    rx="23"
                    transform="translate(13.5 8.5)"
                  />
                </g>
                <path
                  class="baddDemande"
                  d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z"
                  transform="translate(1106 33)"
                />
              </g>
            </svg>
          </span>
        </b-col>
        <b-col cols="12" class="demmandeTableContainer p-0">
          <div class="tableHeader-Container p-0">
            <v-row class="tableHeader">
              <v-col
                scope="col"
                style="cursor: pointer; user-select: none"
                v-if="showAllDemande"
                class="thCase"
              >
                <span
                  class="thTitle"
                  @click="fillterByThisColumn('fullName')"
                  :class="{ isFilteredWith: fullNameSearchContent == '' }"
                >
                  <span
                    class="isFilteredWith"
                    :class="{ displayNone: fullNameSearchContent == '' }"
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
                  Nom et Prenom
                </span>
                <span
                  :class="{ 'd-none': columnToFillterWith == 'fullName' }"
                  @click="fillterByThisColumn('fullName')"
                  ><i class="fas fa-sort"></i
                ></span>
                <span
                  @click="fillterByThisColumn('fullName')"
                  :class="{
                    'd-none': columnToFillterWith != 'fullName',
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
                  :style="{
                    right: showAllDemande ? '54px' : '83px',
                    top: '48px',
                  }"
                >
                  <span
                    class="input-group2"
                    @click="setSearchedColumnName('fullName')"
                  >
                    <input
                      type="text"
                      class="form-control input2"
                      placeholder="par nom.."
                      v-model="fullNameSearchContent"
                    />
                    <span
                      :class="fullNameSearched ? 'd-none' : '  search-icon2 '"
                      @click="fullNameClearSearch()"
                    >
                      <i class="fa fa-times"></i>
                    </span>
                    <span
                      :class="fullNameSearched ? 'search-icon2' : ' d-none'"
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
                scope="col"
                style="cursor: pointer; user-select: none"
                class="thCase"
              >
                <span
                  class="thTitle"
                  @click="fillterByThisColumn('documentType')"
                >
                  <span
                    class="isFilteredWith"
                    :class="{
                      displayNone: documentTypeSearchContent == 'Tous',
                    }"
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
                  Document
                </span>
                <span
                  :class="{
                    'd-none': columnToFillterWith == 'documentType',
                  }"
                  @click="fillterByThisColumn('documentType')"
                  ><i class="fas fa-sort"></i
                ></span>
                <span
                  :class="{
                    'd-none': columnToFillterWith != 'documentType',
                    columnArrowIsDescendant: !ascendant,
                  }"
                  @click="fillterByThisColumn('documentType')"
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
                  style="right: -43px; top: 48px"
                >
                  <span
                    class="input-group navbarPerpageIcon2"
                    style="196px;margin: 0;"
                    v-out-click="() => (showDocumentTypeDropDown = false)"
                    @click="
                      showDocumentTypeDropDown = !showDocumentTypeDropDown
                    "
                  >
                    <ul
                      id="perPageList"
                      style="
                            196px;
                            overflow-y: auto;
                            overflow-x: hidden;
                          "
                      :class="{ 'd-none': !showDocumentTypeDropDown }"
                    >
                      <li @click="setDocumentTypeSearchedColumn('Tous')">
                        <span>Tous</span>
                      </li>
                      <li
                        v-for="demandeType in getDemandeDocumentCategories"
                        :key="demandeType.id"
                        @click="
                          setDocumentTypeSearchedColumn(demandeType.libelle)
                        "
                      >
                        <span
                          style="
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            width: 240px;
                            display: inline-block;
                            text-align: left;
                          "
                          >{{ demandeType.libelle }}</span
                        >
                      </li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      v-model="documentTypeSearchContent"
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
                scope="col"
                style="cursor: pointer; user-select: none"
                class="thCase"
              >
                <span
                  class="thTitle"
                  @click="fillterByThisColumn('dateDemande')"
                >
                  <span
                    class="isFilteredWith"
                    :class="{
                      displayNone: dateDemandeSearchContent == '',
                    }"
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
                  Date de demande
                </span>
                <span
                  :class="{
                    'd-none': columnToFillterWith == 'dateDemande',
                  }"
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
                <span
                  class="pteteSearchContainer"
                  :style="{
                    right: showAllDemande ? '103px' : '42px',
                    top: '48px',
                  }"
                >
                  <span
                    class="input-group2"
                    @click="setSearchedColumnName('dateDemande')"
                  >
                    <input
                      type="text"
                      class="form-control input2"
                      v-mask="'##/##/####'"
                      placeholder="DD/MM/YYYY"
                      v-model="dateDemandeSearchContent"
                    />
                    <span
                      :class="
                        dateDemandeSearched ? 'd-none' : '  search-icon2 '
                      "
                      @click="dateDemandeClearSearch()"
                    >
                      <i class="fa fa-times"></i>
                    </span>
                    <span
                      :class="dateDemandeSearched ? 'search-icon2' : ' d-none'"
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
                scope="col"
                style="cursor: pointer; user-select: none"
                class="thCase"
              >
                <span
                  class="thTitle"
                  @click="fillterByThisColumn('dateValidation')"
                >
                  <span
                    class="isFilteredWith"
                    :class="{
                      displayNone: dateValidationSearchContent == '',
                    }"
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
                  Date de validation
                </span>
                <span
                  :class="{
                    'd-none': columnToFillterWith == 'dateValidation',
                  }"
                  @click="fillterByThisColumn('dateValidation')"
                  ><i class="fas fa-sort"></i
                ></span>
                <span
                  @click="fillterByThisColumn('dateValidation')"
                  :class="{
                    'd-none': columnToFillterWith != 'dateValidation',
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
                  :style="{
                    right: showAllDemande ? '30px' : '114px',
                    top: '48px',
                  }"
                >
                  <span
                    class="input-group2"
                    @click="setSearchedColumnName('dateValidation')"
                  >
                    <input
                      type="text"
                      class="form-control input2"
                      v-mask="'##/##/####'"
                      placeholder="DD/MM/YYYY"
                      v-model="dateValidationSearchContent"
                    />
                    <span
                      :class="
                        dateValidationSearched ? 'd-none' : '  search-icon2 '
                      "
                      @click="dateValidationClearSearch()"
                    >
                      <i class="fa fa-times"></i>
                    </span>
                    <span
                      :class="
                        dateValidationSearched ? 'search-icon2' : ' d-none'
                      "
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
                scope="col"
                style="cursor: pointer; user-select: none"
                class="thCase"
              >
                <span class="thTitle" @click="fillterByThisColumn('statut')">
                  <span
                    class="isFilteredWith"
                    :class="{ displayNone: statutSearchContent == 'Tous' }"
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
                  Statut
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
                <span
                  class="pteteSearchContainer"
                  :style="{
                    right: showAllDemande ? '-49px' : '-42px',
                    top: '48px',
                  }"
                >
                  <span
                    class="input-group navbarPerpageIcon2"
                    style="width: 163px; margin: 0"
                    v-out-click="() => (showStatutDropDown = false)"
                    @click="showStatutDropDown = !showStatutDropDown"
                  >
                    <ul
                      id="perPageList"
                      style="width: 163px; overflow: auto"
                      :class="{ 'd-none': !showStatutDropDown }"
                    >
                      <li @click="setStatutSearchedColumn('Tous')">
                        <span>Tous</span>
                      </li>
                      <li @click="setStatutSearchedColumn('En attente')">
                        <span>En attente</span>
                      </li>
                      <li @click="setStatutSearchedColumn('Refusée')">
                        <span>Refusée</span>
                      </li>
                      <li @click="setStatutSearchedColumn('Validée')">
                        <span>Validée</span>
                      </li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      v-model="statutSearchContent"
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
              <v-col v-if="showAllDemande" class="thCase">Action</v-col>
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
              ref="tableBodyTd"
              v-for="demande in itemsPerPage()"
              :key="demande.id"
              @click="
                openStatutModal('consulterMotif', demande);
                stopProp($event);
              "
            >
              <v-col class="column" v-if="showAllDemande">
                <span class="columnSpan">{{ demande.fullName }}</span>
              </v-col>
              <v-col class="column">
                <span class="columnSpan">{{
                  demande.documentType == "autre"
                    ? demande.autre
                    : demande.documentType
                }}</span>
              </v-col>
              <v-col class="column">
                <span class="columnSpan">{{ demande.dateDemande }}</span>
              </v-col>
              <v-col class="column">
                <span class="columnSpan">{{
                  demande.dateValidation == null
                    ? "Merci de me préparer..."
                    : demande.dateValidation
                }}</span>
              </v-col>
              <v-col class="column">
                <span
                  :style="{
                    color: getStatutColor(demande.statut),
                  }"
                  class="columnSpan"
                  >{{ demande.statut }}
                </span>
                <span
                  class="infos"
                  v-if="demande.statut == 'Refusée'"
                  @click="
                    openStatutModal('consulterFeedback_msg', demande);
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
              </v-col>
              <v-col v-if="showAllDemande" class="column">
                <span class="columnSpan">
                  <span
                    v-if="demande.statut == 'En attente'"
                    class="statutButton valider"
                    @click="
                      openStatutModal('valider', demande);
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
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                      />
                    </svg>
                  </span>
                  <span
                    v-if="demande.statut == 'En attente'"
                    class="statutButton refuser"
                    @click="
                      openStatutModal('refuser', demande);
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
                  <span
                    v-if="demande.statut == 'Validée'"
                    class="statutButton download"
                    @click="
                      downloadDocuemntFile(demande);
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
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </span>
                  <span
                    class="statutButton editFeedback_Msg"
                    v-if="demande.statut == 'Refusée'"
                    @click="
                      openStatutModal('modifier', demande);
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
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
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
          <b-col cols="12">
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
                        arrowEnable:
                          paginationState != 'inFirstPage' && pages > 1,
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
                  <li
                    class="page-item"
                    @click="setCurrentPage(currentPage - 1)"
                  >
                    <a
                      :class="{
                        arrowEnable:
                          paginationState != 'inFirstPage' && pages > 1,
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
                  <li
                    class="page-item"
                    @click="setCurrentPage(currentPage + 1)"
                  >
                    <a
                      class="page-link arrows"
                      :class="{
                        arrowEnable:
                          paginationState != 'inLastPage' && pages > 1,
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
                        arrowEnable:
                          paginationState != 'inLastPage' && pages > 1,
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
          </b-col>
        </b-col>
      </b-row>
    </b-col>
    <ActionModal
      v-if="statutDialog"
      v-model="statutDialog"
      :statutRefusAction="statutRefusAction"
      :statutRefusText="statutRefusText"
      :demandeDocAdmin="demandeDocAdmin"
    />
  </b-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import OutClick from "vue-click-outside";
import ActionModal from "./ActionModal";
export default {
  components: { ActionModal },
  data: function () {
    return {
      columnWidth: [],
      ascendant: true,
      items: [6, 8, 10, 12],
      currentPage: 1,
      perPage: 10,
      showPerPageList: false,
      paginationState: "inFirstPage",
      columnToFillterWith: "",
      showDocumentTypeDropDown: false,
      showStatutDropDown: false,
      documentTypeSearchContent: "Tous",
      statutSearchContent: "Tous",
      searchedColumName: "",
      dateDemandeSearchContent: "",
      dateValidationSearchContent: "",
      selectedDocumentType: "",
      fullNameSearchContent: "",
      statutRefusAction: "",
      statutRefusText: "",
      statutDialog: false,
      showAllDemande: true,
      autre: "",
      message: "",
      demandeDocAdmin: {},
    };
  },
  methods: {
    ...mapActions([
      "setDemandesDocumentsCategoriesAction",
      "setDemandesDocumentsAction",
      "addDemandesDocumentsAction",
      "downloadDocuemntFileAction",
    ]),
    dateDemandeClearSearch: function () {
      this.dateDemandeSearchContent = "";
    },
    dateValidationClearSearch: function () {
      this.dateValidationSearchContent = "";
    },
    fullNameClearSearch: function () {
      this.fullNameSearchContent = "";
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
    setSearchedColumnName: function (columnName) {
      this.searchedColumName = columnName;
    },
    setDocumentTypeSearchedColumn: function (type) {
      if (type != "Tous") {
        this.searchedColumName = "type";
        this.documentTypeSearchContent = type;
      } else {
        this.searchedColumName = "";
        this.documentTypeSearchContent = "Tous";
      }
    },
    setStatutSearchedColumn: function (type) {
      if (type != "Tous") {
        this.searchedColumName = "type";
        this.statutSearchContent = type;
      } else {
        this.searchedColumName = "";
        this.statutSearchContent = "Tous";
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
    setSelectedDocumentType: function (type) {
      if (this.selectedDocumentType == type) {
        this.selectedDocumentType = "";
      } else {
        this.selectedDocumentType = type;
      }
    },
    getStatutColor: function (statut) {
      switch (statut) {
        case "En attente":
          return "#EFBB12";

        case "Validée":
          return "#74BF32";

        case "Refusée":
          return "#F95959";

        default:
          break;
      }
    },
    openStatutModal: function (action, demandeDocAdmin) {
      this.statutRefusAction = action;
      this.demandeDocAdmin = demandeDocAdmin;
      this.statutDialog = true;
    },
    stopProp: function (event) {
      event.stopPropagation();
    },
    toggleShowAllDemande: function () {
      this.showAllDemande = !this.showAllDemande;
    },
    addDemande() {
      if (this.selectedDocumentType != "") {
        let demandeDoc = {
          autre: this.autre,
          msg: this.message,
          categorie_id: this.selectedDocumentType.id,
        };
        this.addDemandesDocumentsAction(demandeDoc);
      }
    },
    downloadDocuemntFile(demande) {
      this.downloadDocuemntFileAction(demande);
    },
  },
  mounted: function () {
    this.setDemandesDocumentsCategoriesAction();
    this.setDemandesDocumentsAction();
  },
  updated: function () {},
  computed: {
    ...mapGetters(["getDemandesDeDocuments", "getDemandeDocumentCategories"]),
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
      let list = [...this.getDemandesDeDocuments];
      var columnToFillterWith = this.columnToFillterWith;
      var ascendant = this.ascendant;
      if (columnToFillterWith != "") {
        list.sort(function (a, b) {
          if (ascendant) {
            if (
              columnToFillterWith == "dateDemande" ||
              columnToFillterWith == "dateValidation"
            ) {
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
            if (
              columnToFillterWith == "dateDemande" ||
              columnToFillterWith == "dateValidation"
            ) {
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
      if (this.fullNameSearchContent != "") {
        list = list.filter((element) =>
          element["fullName"]
            .toLowerCase()
            .includes(this.fullNameSearchContent.toLowerCase())
        );
      }
      if (this.documentTypeSearchContent != "Tous") {
        list = list.filter((element) =>
          element["documentType"]
            .toLowerCase()
            .includes(this.documentTypeSearchContent.toLowerCase())
        );
      }
      if (this.dateDemandeSearchContent != "") {
        list = list.filter((element) =>
          element["dateDemande"]
            .toLowerCase()
            .includes(this.dateDemandeSearchContent.toLowerCase())
        );
      }
      if (this.dateValidationSearchContent != "") {
        list = list.filter((element) =>
          element["dateValidation"]
            .toLowerCase()
            .includes(this.dateValidationSearchContent.toLowerCase())
        );
      }
      if (this.statutSearchContent != "Tous") {
        list = list.filter((element) =>
          element["statut"]
            .toLowerCase()
            .includes(this.statutSearchContent.toLowerCase())
        );
      }
      return list;
    },
    dateDemandeSearched: function () {
      return this.dateDemandeSearchContent.length === 0;
    },
    dateValidationSearched: function () {
      return this.dateValidationSearchContent.length === 0;
    },
    fullNameSearched: function () {
      return this.fullNameSearchContent.length === 0;
    },
  },
  directives: {
    OutClick,
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
.documents-container {
  border-radius: 27px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 10px;
  box-shadow: 0px 3px 23px #00000029;
  max-height: 90%;
}
.leftSide {
  border-right: 1px solid #0000001f;
  height: 100%;
}
.title {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  margin-bottom: 30px;
  display: block;
}
.caption {
  display: block;
  font-size: 14px;
  font-weight: 600;
}
.docAdemander {
  background: #ecf7ff 0% 0% no-repeat padding-box;
  border-radius: 23px;
  display: block;
  width: 345px;
  height: 46px;
  padding-top: 7px;
  margin: 10px 0 10px 4px;
  cursor: pointer;
  .icon {
    margin-left: 21px;
    margin-right: 17px;
  }
  .docAdemanderName {
    text-align: left;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #87b0e6;
    display: inline-block;
    width: 284px;
    height: 23px;
  }
}
.siAutreDocu {
  width: 345px;
  height: 46px;
  .icon {
    margin-left: 0px;
    margin-right: 17px;
  }
  .autreDocuemntText {
    display: inline-block;
    width: 309px;
  }
}
.valideCommandeButton {
  display: inline-block;
  width: 345px;
  height: 56px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #4762f17a;
  border-radius: 14px;
  margin-top: 53px;
  text-align: center;
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #4762f1;
  padding-top: 18px;
  cursor: pointer;
}
.valideCommandeButton:hover {
  background-color: rgba(128, 128, 128, 0.167);
}
.Documentheader {
  height: 46px;
}
.demmandeTableContainer {
  border-radius: 27px;
  opacity: 1;

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
    margin-left: 0;
    z-index: 1;
    min-height: 100px;
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
.conges-table {
  opacity: 1;
  margin-left: 0;
  max-height: 1000px;
  height: 568px;
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
  }
  .congeRow {
    height: 67px;
    border-bottom: 1px solid #87b0e64f;
    cursor: pointer;
    margin: 0;
    margin-top: -4px;
    margin-bottom: 6px;
    padding-top: 9px;
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
      padding-left: 1px;
      font-size: 10px;
      font-weight: 700;
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
.columnArrowIsDescendant {
  transform: rotate(180deg);
  display: inline-block;
}
.switchButton {
  float: right;
  cursor: pointer;
}
.selectedDocumentType {
  border: 1px solid #0000ff61;
}
.statutButton {
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
.editFeedback_Msg {
  background-color: #14a1e0;
  border: 1px solid #147dbf;
  height: 31px;
  width: 32px;
  margin-right: 7px;
}
.editFeedback_Msg:hover {
  background-color: #149fe0b9;
}
.download {
  background-color: #495057b4;
  border: 1px solid rgba(0, 0, 0, 0.652);
  height: 31px;
  width: 32px;
  margin-right: 7px;
}
.download:hover {
  background-color: #4950575d;
}
.statutIsValid {
  color: #95ca19;
  margin-top: 0 !important;
}
.statutIsRefuse {
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
  display: inline-block;
}
</style>
