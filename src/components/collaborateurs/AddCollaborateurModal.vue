<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="900px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6">
            <span class="headline" style="color: white"
              >Ajouter Collaborateurs :
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="w-100">
              <v-form
                ref="myForm"
                v-model="isValid"
                @submit.prevent="collaborateur_submit"
              >
                <v-row>
                  <v-col cols="12" md="3">
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
                          v-show="!photoFromEdited && !files.length"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="68.366"
                            height="55.936"
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
                          v-show="!photoFromEdited && !files.length"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29.25"
                            height="29.25"
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
                          v-show="files.length || photoFromEdited"
                          @click="clearPhotoSection"
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
                      </file-upload>
                      <img
                        v-show="files.length || photoFromEdited"
                        class="photoImgHolder"
                        ref="imgPhoto"
                        :src="
                          files.length
                            ? files[0].url
                            : photoFromEdited
                            ? getPhotosFolder + '/' + collaborateur.photo
                            : 'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'
                        "
                        alt=""
                      />
                    </div>
                  </v-col>
                  <v-col cols="12" md="9">
                    <v-row>
                      <v-col class="inputField mb-2" cols="6"
                        ><v-text-field
                          label="Prénom "
                          name="Prénom"
                          v-model="collaborateur.prenom"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" class="inputField mb-2">
                        <v-text-field
                          label="Nom "
                          name="Nom"
                          v-model="collaborateur.nom"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field
                      ></v-col>
                      <v-col cols="6" class="inputField mb-2">
                        <v-text-field
                          label="Téléphone "
                          name="Téléphone"
                          v-model="collaborateur.telephone"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" class="inputField mb-2">
                        <v-text-field
                          label="Téléphone 2"
                          name="Téléphone2"
                          v-model="collaborateur.telephoneUrgent"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field
                      ></v-col>
                      <v-col cols="6" class="inputField mb-2"
                        ><v-text-field
                          label="Email"
                          name="Email"
                          v-model="collaborateur.email"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" class="inputField mb-2"
                        ><v-text-field
                          label="Adresse"
                          v-model="collaborateur.adresse"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field
                      ></v-col>

                      <v-col cols="5" class="inputField mb-2">
                        <v-menu
                          ref="menu1"
                          v-model="menu1"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="birthdayComputedDateFormat"
                              label="Date de naissance"
                              name="Date_de_naissance"
                              persistent-hint
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="isRequired"
                              hide-details
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="collaborateur.birthday"
                            no-title
                            @input="menu1 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="4" class="inputField mb-2"
                        ><v-text-field
                          label="Lieu de naissance"
                          name="Lieu_de_naissance"
                          v-model="collaborateur.lieuDeNaissance"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" class="inputField mb-2">
                        <v-select
                          style="padding-top: 19px"
                          :items="['male', 'female']"
                          v-model="collaborateur.sexe"
                          label="Sexe"
                          name="Sexe"
                          dense
                          :rules="isRequired"
                          hide-details
                        ></v-select>
                      </v-col>
                      <v-col cols="4" class="inputField mb-2"
                        ><v-text-field
                          label="Nationalité"
                          name="Nationalité"
                          v-model="collaborateur.nationalite"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="3" class="inputField mb-2">
                        <v-text-field
                          label="CIN / Carte Séjour"
                          name="CIN_Carte Séjour"
                          v-model="collaborateur.cin"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field
                      ></v-col>

                      <v-col cols="4" class="inputField mb-2"
                        ><v-text-field
                          label="Situation Familiale"
                          name="Situation_Familiale"
                          v-model="collaborateur.situationMatrimoniale"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="3" class="inputField mb-2">
                        <v-text-field
                          label="Nombre d'enfant(s)"
                          name="Nombre_enfant(s)"
                          v-model="collaborateur.enfants"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="3" class="inputField mb-2">
                        <v-text-field
                          label="Salaire"
                          name="Salaire"
                          v-model="collaborateur.salaire"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" class="inputField mb-2">
                        <v-text-field
                          label="RIB"
                          name="RIB"
                          v-model="collaborateur.rib"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" class="inputField mb-2">
                        <v-text-field
                          label="CNSS"
                          name="CNSS"
                          v-model="collaborateur.cnss"
                          :rules="isRequired"
                          hide-details
                        ></v-text-field>
                      </v-col>

                      <v-col cols="6" class="selectField inputField">
                        <v-select
                          :items="getFonctions"
                          item-text="libelle"
                          item-value="id"
                          v-model="departementId"
                          label="Departement"
                          name="Departement"
                          @change="departementIdChaged"
                          dense
                          :rules="isRequired"
                          hide-details
                        ></v-select>
                      </v-col>

                      <v-col cols="6" class="selectField inputField">
                        <v-select
                          :items="getPosts"
                          item-text="libelle"
                          item-value="id"
                          v-model="collaborateur.fonction_id"
                          label="Fonction"
                          name="Fonction"
                          dense
                          :rules="isRequired"
                          hide-details
                        ></v-select>
                      </v-col>

                      <v-col cols="6" class="inputField mb-2">
                        <v-select
                          style="padding-top: 19px"
                          :items="['CDI', 'CDD', 'STAGE']"
                          v-model="collaborateur.typeContrat"
                          label="Type de Contrat"
                          name="Type_de_Contrat"
                          dense
                          :rules="isRequired"
                          hide-details
                        ></v-select>
                      </v-col>
                      <v-col cols="6" class="inputField mb-2">
                        <v-menu
                          ref="menu2"
                          v-model="menu2"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateEmbaucheComputedDateFormat"
                              label="Date d'embauche"
                              name="Date_dembauche"
                              persistent-hint
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="isRequired"
                              hide-details
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="collaborateur.dateEmbauche"
                            no-title
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12">
                        <span class="documents"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="139"
                            height="33"
                            viewBox="0 0 139 33"
                          >
                            <defs></defs>
                            <text class="a" transform="translate(0 25)">
                              <tspan x="0" y="0">Documents</tspan>
                            </text>
                          </svg></span
                        >
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
                        <div class="docsList">
                          <ul>
                            <li>
                              <span class="docsName"
                                >Attestation de travaille.pdf</span
                              >
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
                              <span class="docsName"
                                >Attestation de travaille.pdf</span
                              >
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
                              <span class="docsName">CV.doc</span>
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
                              <span class="docsName"
                                >Pièce d'identité.jpeg</span
                              >
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
                              <span class="docsName"
                                >Attestation de travaille.pdf</span
                              >
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
                              <span class="docsName"
                                >Attestation de travaille.pdf</span
                              >
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
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12"
                    ><small class="d-none">*indicates required field</small>
                  </v-col>
                  <v-col cols="12">
                    <span class="annuler" @click="closeDialog"> ANNULER </span>
                    <v-btn type="submit" class="envoyer"> SAUVEGARDER </v-btn>
                  </v-col>
                </v-row>
              </v-form>
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
import rules from "../../mixins/rules";
import Cropper from "cropperjs";
import VueUploadComponent from "vue-upload-component";
import toFormData from "@/plugins/objectToFormData";
export default {
  mixins: [rules],
  data() {
    return {
      isValid: false,
      fonctionSelected: "",
      departementId: "",
      menu1: false,
      menu2: false,
      files: [],
      edit: false,
      cropper: false,
      photoFromEdited: false,
    };
  },
  props: ["value", "collaborateur", "collaborateurToEditCopied"],
  components: {
    FileUpload: VueUploadComponent,
  },
  methods: {
    ...mapActions([
      "getFonctionPostsAction",
      "getFonctionsAction",
      "addCollaborateurAction",
      "editCollaborateurAction",
      "disableCollaborateurAction",
    ]),

    closeDialog() {
      this.dialog = false;
    },
    collaborateur_submit() {
      // const formData = new FormData();
      if (this.collaborateur.id == "") {
        this.$refs.myForm.validate();
        if (this.isValid) {
          if (this.files.length) {
            const formData = toFormData({
              ...this.collaborateur,
              file: this.files[0].file,
            });
            console.log("colaborateur formdata", formData);
            this.addCollaborateurAction(formData);
          } else {
            const formData = toFormData({
              ...this.collaborateur,
            });
            this.addCollaborateurAction(formData);
          }
          this.closeDialog();
        }
      } else {
        this.$refs.myForm.validate();
        if (this.isValid) {
          if (this.files.length) {
            const formData = toFormData({
              ...this.collaborateur,
              file: this.files[0].file,
            });
            console.log("update");

            this.editCollaborateurAction(formData);
          } else {
            this.editCollaborateurAction(this.collaborateur);
          }
          this.closeDialog();
        }
      }
    },
    departementIdChaged() {
      this.getFonctionPostsAction(this.departementId);
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
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
      if (this.photoFromEdited) {
        if (this.files.length) {
          this.$refs.upload.clear();
          return;
        } else {
          this.photoFromEdited = false;
          return;
        }
      } else {
        this.$refs.upload.clear();
      }
    },
  },
  computed: {
    ...mapGetters(["getPosts", "getFonctions", "getPhotosFolder"]),
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    getPostsByfonctionSelected: function () {
      return this.getFonctionPostsAction(this.fonctionSelected);
    },
    birthdayComputedDateFormat() {
      return this.formatDate(this.collaborateur.birthday);
    },
    dateEmbaucheComputedDateFormat() {
      return this.formatDate(this.collaborateur.dateEmbauche);
    },
  },
  mounted: function () {
    this.getFonctionsAction();
  },
  updated: function () {
    if (this.collaborateur.id != "" && !this.collaborateurToEditCopied) {
      this.collaborateurToEditCopied = true;
      this.departementId = this.collaborateur.departement_id;
      this.departementIdChaged();
    }
  },
  watch: {
    edit(value) {
      if (value) {
        this.$nextTick(function () {
          if (!this.$refs.editImage) {
            return;
          }
          let cropper = new Cropper(this.$refs.editImage, {
            aspectRatio: 1 / 1,
            viewMode: 1,
          });
          this.cropper = cropper;
        });
      } else {
        if (this.cropper) {
          this.cropper.destroy();
          this.cropper = false;
        }
      }
    },
    dialog: {
      immediate: true,
      handler(val) {
        if (val == true) {
          if (this.collaborateur.photo) {
            this.photoFromEdited = true;
          } else {
            this.photoFromEdited = false;
          }
        } else {
          this.photoFromEdited = false;
          this.$refs.upload.clear();
        }
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.addActualiteModel {
  border-radius: 20px;
}
.inputField {
  padding-bottom: 0;
  padding-top: 0;
  height: 50px;
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
  padding-right: 18px;
  .a {
    fill: #87b0e6;
  }
  .b {
    fill: #fff;
  }
}
.docsList {
  max-height: 98px;
  min-height: 98px;
  overflow-y: auto;
  border: 1px solid #87b0e6;
  background: transparent 0% 0% no-repeat padding-box;
  border: 1px solid #87b0e6;
  border-radius: 13px;
  margin-right: 18px;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
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
ul {
  list-style-type: none;
  padding: 0 22px !important;
  margin: 0;
  li {
    border-bottom: 1px solid #80808047;
  }
}
.photo {
  width: 190px;
  height: 190px;
  border: 2px dashed #bfbfbf;
  border-radius: 17px;
  position: relative;
  .photoAdd {
    position: absolute;
    top: 139px;
    left: 81px;
    .a {
      fill: #4762f1;
    }
  }
  .photoAdd2 {
    position: absolute;
    top: 139px;
    left: 81px;
    height: 30px;
    width: 30px;
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
  left: 61px;
  top: 60px;
  .a {
    fill: #bfbfbf;
  }
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
  display: inline-block !important;
  text-align: center !important;
  width: 203px !important;
  height: 56px !important;
  box-shadow: 0px 5px 9px #4762f17a !important;
  border-radius: 14px !important;
  background-color: #4762f1 !important;
  color: white !important;
  font-size: 16px !important;
  font-family: Poppins-Bold, Poppins !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  user-select: none !important;
  float: right !important;
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
.selectField {
  margin-top: 15px !important;
  margin-bottom: 0 !important;
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
