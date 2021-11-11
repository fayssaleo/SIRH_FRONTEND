<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="840px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Demande de Congé :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-row>
                <v-col cols="12" class="pb-0">
                  <v-row style="margin-bottom: 0">
                    <v-col cols="12">
                      <v-select
                        style="margin-bottom: -40px"
                        :items="collaborateurList"
                        item-text="collaborateur"
                        item-value="collaborateur_id"
                        label="Collaborateurs"
                        name="collaborateurs"
                        clearable
                        v-model="demandeConge.collaborateur_id"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" class="mb-0 pb-0"
                      ><span class="dateTitle">Congé de :</span></v-col
                    >
                  </v-row>
                  <v-row class="my-0 pb-2">
                    <v-col cols="11">
                      <v-row>
                        <v-col
                          class="col"
                          v-for="categorie in getCongeCategorie"
                          :key="categorie.id"
                        >
                          <div class="text-center">
                            <v-menu transition="scale-transition">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  dark
                                  class="congeTypeButton"
                                  :class="{
                                    congeTypeButtonSelected:
                                      congeTypeSelected.categorie_id ==
                                      categorie.id,
                                  }"
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="setCongeTypeButton(categorie.id)"
                                >
                                  {{ categorie.libelle }}
                                  <svg
                                    v-if="
                                      categorieIdChaged(categorie.id).length > 1
                                    "
                                    class="congeTypeSvg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#000000"
                                  >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10l5 5 5-5z" />
                                  </svg>
                                </v-btn>
                              </template>
                              <v-list
                                v-if="
                                  categorieIdChaged(categorie.id).length > 1
                                "
                              >
                                <v-list-item
                                  v-for="type in categorieIdChaged(
                                    categorie.id
                                  )"
                                  :key="type.id"
                                  class="congeTypeMenu"
                                  :class="{
                                    congeTypeMenuItemsSelected:
                                      congeTypeSelected.id == type.id,
                                  }"
                                  @click="setCongeType(type)"
                                >
                                  <v-list-item-title
                                    class="congeTypeMenuItems"
                                    v-text="type.name"
                                  ></v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="1" class="selectField inputField">
                      <span class="congeTypeConfig">
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
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="congesCalenders" cols="7">
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <vc-date-picker
                        :attributes="attributes"
                        title-position="left"
                        @input="onStartDateRangeChange"
                        is-expanded
                        is-range
                        v-model="range"
                        ref="picker"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="5">
                  <v-row>
                    <v-col
                      class="congesCalenders"
                      style="margin-top: 8px"
                      cols="12"
                    >
                      <v-row>
                        <v-col cols="12" class="py-0 pb-1"
                          ><span
                            class="dateTitle"
                            style="
                              font-size: 30px;
                              color: rgb(50 130 236 / 74%);
                            "
                            >Du : {{ dateFormatter(range.start) }}</span
                          ></v-col
                        >
                        <v-col cols="12" class="py-0 demiJour pb-1">
                          <v-checkbox
                            label="Demi-journée"
                            v-model="demandeConge.demiJourAuDebut"
                            class="py-0 m-0 demiJour"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" class="py-0 pb-1"
                          ><span
                            class="dateTitle"
                            style="
                              font-size: 30px;
                              color: rgb(50 130 236 / 74%);
                            "
                            >Au : {{ dateFormatter(range.end) }}</span
                          ></v-col
                        >

                        <v-col cols="12" class="py-0 demiJour pb-1">
                          <v-checkbox
                            label="Demi-journée"
                            class="py-0 m-0 demiJour"
                            v-model="demandeConge.demiJourAuFin"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col
                          class="daysOff"
                          :class="{
                            daysOffOutOffTheDisponible:
                              congeTypeSelected.nombreDeJours != '' &&
                              calculDays > congeTypeSelected.nombreDeJours,
                          }"
                          cols="6"
                        >
                          <span class="daysOffNumber"
                            >{{ calculDays }} jrs</span
                          >
                          <span class="jours">Selectionnés</span>
                        </v-col>
                        <v-col class="daysOff" cols="6">
                          <span class="daysOffNumber">{{
                            congeTypeSelected == ""
                              ? "-"
                              : congeTypeSelected.nombreDeJours + " jrs"
                          }}</span>
                          <span class="jours">Disponibles</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="pb-0 pt-0">
                  <span class="nb1"
                    >**Les dates mentionnées sont incluses dans le congé</span
                  >
                </v-col>
                <v-col cols="12" class="pt-0 pb-2">
                  <span class="nb2"
                    >Vous devez soumettre votre demande de congé annuel 2
                    semaines avant la date effective</span
                  >
                </v-col>
                <v-col cols="7" class="pt-0 pb-0">
                  <span class="dateTitle">Motif</span>
                  <textarea
                    class="form-control motif"
                    id="exampleFormControlTextarea1"
                    v-model="demandeConge.motif"
                    rows="3"
                  ></textarea>
                </v-col>
                <v-col cols="5" class="pt-0 pb-0">
                  <span class="dateTitle">Pièce jointe</span>
                  <span class="addDoc"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g transform="translate(-829 -729)">
                        <circle
                          class="a"
                          cx="11.5"
                          cy="11.5"
                          r="11.5"
                          transform="translate(829 729)"
                        />
                        <path
                          class="b"
                          d="M21.079,14.62H16.228V9.769a.8.8,0,1,0-1.608,0V14.62H9.769a.8.8,0,0,0,0,1.608H14.62v4.851a.8.8,0,1,0,1.608,0V16.228h4.851a.8.8,0,1,0,0-1.608Z"
                          transform="translate(825.076 725.076)"
                        />
                      </g></svg
                  ></span>
                  <div
                    class="docsListCadre"
                    style="border-bottom: none; margin-bottom: -9px"
                  ></div>
                  <div class="docsList">
                    <ul>
                      <li>
                        <span class="docsName">Document 1.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 2.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 3.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 4.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 5.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 6.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 7.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 8.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                      <li>
                        <span class="docsName">Document 9.pdf</span>
                        <span class="docsDelete"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.197"
                            height="12.797"
                            viewBox="0 0 11.197 12.797"
                          >
                            <path
                              class="a"
                              d="M.8,11.6A1.2,1.2,0,0,0,2,12.8H9.2a1.2,1.2,0,0,0,1.2-1.2V3.2H.8ZM7.6,5.2a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm-2.4,0a.4.4,0,1,1,.8,0v5.6a.4.4,0,0,1-.8,0Zm8-4.4h-3L7.563.332A.6.6,0,0,0,7.026,0H4.169a.593.593,0,0,0-.535.332L3.4.8H.4a.4.4,0,0,0-.4.4V2a.4.4,0,0,0,.4.4H10.8a.4.4,0,0,0,.4-.4V1.2A.4.4,0,0,0,10.8.8Z"
                              transform="translate(0 0)"
                            /></svg
                        ></span>
                        <span class="docsView"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.668"
                            height="12"
                            viewBox="0 0 18.668 12"
                          >
                            <g transform="translate(-2.252 -7.875)">
                              <path
                                class="a"
                                d="M11.576,7.875c-3.35,0-5.992,2.108-9.15,5.554a.659.659,0,0,0,0,.887c2.7,2.988,5.088,5.558,9.154,5.558,4.017,0,7.029-3.237,9.171-5.583a.654.654,0,0,0,.021-.863C18.584,10.783,15.563,7.875,11.576,7.875Zm.183,9.746A3.75,3.75,0,1,1,15.33,14.05,3.752,3.752,0,0,1,11.759,17.621Z"
                              />
                              <path
                                class="a"
                                d="M16.167,14.208a1.958,1.958,0,0,1,.129-.7c-.042,0-.083,0-.129,0a2.666,2.666,0,1,0,2.667,2.667c0-.054,0-.108,0-.163a1.848,1.848,0,0,1-.758.163A1.934,1.934,0,0,1,16.167,14.208Z"
                                transform="translate(-4.583 -2.292)"
                              />
                            </g></svg
                        ></span>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="docsListCadre"
                    style="border-top: none; margin-top: -9px"
                  ></div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0"
                  ><small class="d-none">*indicates required field</small>
                </v-col>
                <v-col cols="12" class="pt-0 pb-0 mb-2">
                  <span class="annuler" @click="closeDialog"> ANNULER </span>
                  <span class="envoyer" @click="addDemandeConge">
                    ENVOYER
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import moment from "moment-business-days";
import { FormatDateToISOSimpleDate } from "../../helpers/helpers.js";
export default {
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
      attrs: [],
      congeCategorieSelectedId: "",
      congeTypeSelected: "",
      demandeConge: {
        collaborateur_id: "",
        dateDebut: "",
        dateFin: "",
        motif: "",
        demiJourAuDebut: false,
        demiJourAuFin: false,
        traiteePar: "",
        type_conge_id: "",
      },
    };
  },
  props: ["value", "getCongesType"],
  methods: {
    ...mapActions([
      "addDemmandeCongeAction",
      "getCongesTypesByCategorieAction",
    ]),
    closeDialog() {
      this.dialog = false;
    },
    addDemandeConge() {
      this.demandeConge.dateDebut = FormatDateToISOSimpleDate(this.range.start);
      this.demandeConge.dateFin = FormatDateToISOSimpleDate(this.range.end);
      this.demandeConge.traiteePar = "Fayssal ourezzouq";
      this.demandeConge.type_conge_id=this.congeTypeSelected.id;
      this.addDemmandeCongeAction(this.demandeConge);
      this.closeDialog();
    },
    onStartDateRangeChange() {},
    onEndDateRangeChange() {
      this.attrs.push({
        highlight: true,
        dates: { start: "2020-10-05T10:00:00Z", end: "2020-10-09T09:00:00Z" },
      });
    },
    dateFormatter: function (date) {
      var dd = String(date.getDate()).padStart(2, "0");
      var yyyy = date.getFullYear();
      const formatter = new Intl.DateTimeFormat("fr", { month: "short" });

      date = dd + " " + formatter.format(date) + " " + yyyy;
      return date;
    },

    setCongeType: function (type) {
      let parsed = moment(this.range.start);
      this.range.end = parsed.businessAdd(type.nombreDeJours - 1).toDate();
      this.$refs.picker.value_.end = this.range.end;
      console.log("this.$refs.picker");
      this.congeTypeSelected = type;
    },
    setCongeTypeButton: function (id) {
      let categories = this.categorieIdChaged(id);
      if (categories.length == 1) this.setCongeType(categories[0]);
    },
    categorieIdChaged(id) {
      let types = this.getCongesType.filter((type) => type.categorie_id == id);
      return types;
    },
  },
  computed: {
    ...mapGetters([
      "getCollaborateurs",
      "getCongeCategorie",
      "getCongesTypesByCategorie",
    ]),
    collaborateurList() {
      return this.getCollaborateurs.map((c) => {
        return {
          collaborateur: c.prenom + " " + c.nom,
          collaborateur_id: c.id,
        };
      });
    },
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    attributes() {
      return [
        {
          highlight: true,
          range: { start: this.range.start, end: this.range.end },
        },
      ];
    },
    calculDays: function () {
      let startDay = parseInt(this.range.start.getDate() + "");
      let endDay = parseInt(this.range.end.getDate() + "");
      let startMonth = parseInt(this.range.start.getMonth() + "");
      let endMonth = parseInt(this.range.end.getMonth() + "");
      let startYear = parseInt(this.range.start.getYear() + "");
      let endYear = parseInt(this.range.end.getYear() + "");
      let daysNum = 1;
      let thisDate = new Date(
        1900 + startYear + "-" + (startMonth + 1) + "-" + startDay
      );
      if (thisDate.getDay() == 0 || thisDate.getDay() == 6) {
        daysNum--;
      }
      while (
        startDay != endDay ||
        startMonth != endMonth ||
        startYear != endYear
      ) {
        daysNum++;

        if (
          startDay == new Date(1900 + startYear, startMonth + 1, 0).getDate()
        ) {
          if (startMonth == 11) {
            startYear++;
            startMonth = 0;
          } else {
            startMonth++;
          }
          startDay = 1;
        } else {
          startDay++;
        }
        let thisDate = new Date(
          1900 + startYear + "-" + (startMonth + 1) + "-" + startDay
        );
        if (thisDate.getDay() == 0 || thisDate.getDay() == 6) {
          daysNum--;
        }
      }

      return daysNum;
    },
  },
  updated: function () {},
  mounted: function () {},
};
</script>
<style lang="scss" scoped>
.addActualiteModel {
  border-radius: 20px;
}
.documents {
  .a {
    fill: #87b0e6;
    font-size: 24px;
    font-family: Poppins-Regular, Poppins;
  }
}
.addDoc {
  float: right;

  .a {
    fill: #87b0e6;
  }
  .b {
    fill: #fff;
  }
}
.docsList {
  max-height: 94px;
  min-height: 94px;
  overflow-y: auto;
  border: 1px solid #87b0e6;
  background: transparent 0% 0% no-repeat padding-box;
  border: 1px solid #87b0e6;
  border-top: none;
  border-bottom: none;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 6px;
  background-color: white;
}
.docsListCadre {
  border-radius: 13px;
  border: 1px solid #87b0e6;
  height: 17px;
}
.docsName {
  text-align: left;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
}
.docsView {
  float: right;
  cursor: pointer;
  .a {
    fill: #bfbfbf;
  }
}
.docsDelete {
  float: right;
  margin-left: 15px;
  cursor: pointer;
  .a {
    fill: #eea5a5;
  }
}
.docsDelete:hover,
.docsView:hover {
  background-color: #80808029;
  /* min-height: 52px; */
  border-radius: 14px;
  box-shadow: 0px 3px 23px 7px #00000029;
}
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
.dateTitle {
  display: inline-block;
  font: normal normal normal 29px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  font-size: 23px;
}

.daysOff {
  span {
    display: block;
  }
  .daysOffNumber {
    font-size: 20px;
    height: 46px;
    text-align: center;
    color: white;
    background-color: #80808091;
    border-radius: 29px;
    font-family: system-ui;
    font-weight: 400;
    padding-top: 8px;
    margin: 0 auto;
  }
  .jours {
    font-size: 16px;
    text-align: center;
    color: #80808091;
    font-family: system-ui;
    font-weight: 400;
  }
}
.nb1 {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ff9f0b;
  opacity: 1;
}
.nb2 {
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  opacity: 1;
}
.congeType {
  background-color: #87b0e6;
  color: white;
  display: inline-block;
  height: 28px;
  padding-top: 4px;
  /* min-width: 162px; */
  text-align: center;
  border-radius: 17px;
  margin: 0 3px 19px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-right: 6px;
  padding-left: 7px;
}
.congeType:hover {
  background-color: #87b0e6d4;
}
.motif {
  word-break: break-word;
  height: 110px;
  max-height: 110px;
  min-height: 110px;
  margin-bottom: 10px;
  border: 1px solid #87b0e6;
  border-radius: 13px;
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.container {
  overflow-y: auto;
}
.selectedType {
  background-color: #4762f1 !important;
}
.demiJour {
  max-height: 20px;
  margin-bottom: 49px;
  * {
    margin: 0;
  }
}
.daysOffOutOffTheDisponible {
  .daysOffNumber {
    background-color: #e4020291;
  }
  .jours {
    color: #e4020291;
  }
}
.congeTypeConfig {
  cursor: pointer;
  display: inline-block;
  padding-top: 7px;
  svg {
    fill: #87b0e6;
  }
}
.congeTypeMenu:hover {
  background-color: rgb(128 128 128 / 29%);
}
.congeTypeMenu:active {
  background-color: rgb(128 128 128 / 29%);
}
.congeTypeMenu {
  cursor: pointer;
}
.congeTypeButton {
  background-color: #888585 !important;
}
.congeTypeButtonSelected {
  background-color: #87b0e6 !important;
}
.congeTypeSvg {
  fill: white;
}
.congeTypeMenuItemsSelected {
  font-weight: 900;
  background-color: #87b0e6b3;
}
</style>
