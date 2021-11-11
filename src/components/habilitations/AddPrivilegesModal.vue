<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1200px" height="1200px">
        <v-card class="">
          <v-card-title style="background-color: #87b0e6; border-radius: 0">
            <span class="headline" style="color: white"
              >{{ role.name }} : Privileges
            </span>
          </v-card-title>
          <v-card-text>
            <v-container class="container">
              <v-row>
                <v-col cols="12">
                  <v-expansion-panels focusable popout>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23.112"
                              height="22.908"
                              viewBox="0 0 23.112 22.908"
                            >
                              <path
                                class="a"
                                d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                                transform="translate(-6.444 -5.076)"
                              /></svg></span
                          >Evènements
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['evenements_consulter'].roleHaveThis
                              "
                              :label="'Consulter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['evenements_ajouter'].roleHaveThis
                              "
                              :label="'Ajouter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['evenements_modifier'].roleHaveThis
                              "
                              :label="'Modifier'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['evenements_supprimer'].roleHaveThis
                              "
                              :label="'Supprimer'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
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
                              </g></svg></span
                          >Actualités
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['actualites_consulter'].roleHaveThis
                              "
                              :label="'Consulter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['actualites_ajouter'].roleHaveThis
                              "
                              :label="'Ajouter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['actualites_modifier'].roleHaveThis
                              "
                              :label="'Modifier'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['actualites_supprimer'].roleHaveThis
                              "
                              :label="'Supprimer'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['actualites_desactiver'].roleHaveThis
                              "
                              :label="'Désactiver'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18.891"
                              height="16.456"
                              viewBox="0 0 18.891 16.456"
                            >
                              <g transform="translate(0 -33)">
                                <path
                                  class="a"
                                  d="M172.21,39.42A3.21,3.21,0,1,0,169,36.21,3.214,3.214,0,0,0,172.21,39.42Zm0-5.313a2.1,2.1,0,1,1-2.1,2.1A2.105,2.105,0,0,1,172.21,34.107Z"
                                  transform="translate(-162.764)"
                                />
                                <path
                                  class="a"
                                  d="M379.029,101.059A2.029,2.029,0,1,0,377,99.029,2.032,2.032,0,0,0,379.029,101.059Zm0-2.952a.922.922,0,1,1-.922.922A.923.923,0,0,1,379.029,98.107Z"
                                  transform="translate(-363.09 -61.639)"
                                />
                                <path
                                  class="a"
                                  d="M16.386,241H15.53a2.509,2.509,0,0,0-2.276,1.452A4.454,4.454,0,0,0,9.961,241H8.93a4.454,4.454,0,0,0-3.292,1.452A2.509,2.509,0,0,0,3.361,241H2.505A2.5,2.5,0,0,0,0,243.49v4.029A1.084,1.084,0,0,0,1.085,248.6H4.47a1.294,1.294,0,0,0,1.287,1.181h7.378a1.294,1.294,0,0,0,1.287-1.181h3.346a1.123,1.123,0,0,0,1.124-1.119V243.49A2.5,2.5,0,0,0,16.386,241ZM1.107,243.49a1.392,1.392,0,0,1,1.4-1.383h.856a1.392,1.392,0,0,1,1.4,1.383v.379c-.372.969-.3,1.55-.3,3.625H1.107Zm12.213,5a.185.185,0,0,1-.185.185H5.757a.185.185,0,0,1-.185-.185v-3.024a3.362,3.362,0,0,1,3.358-3.358H9.961a3.362,3.362,0,0,1,3.358,3.358Zm4.464-1.008c0,.019.206.013-3.358.013,0-2.09.076-2.657-.3-3.625v-.379a1.392,1.392,0,0,1,1.4-1.383h.856a1.392,1.392,0,0,1,1.4,1.383Z"
                                  transform="translate(0 -200.325)"
                                />
                                <path
                                  class="a"
                                  d="M27.029,101.059A2.029,2.029,0,1,0,25,99.029,2.032,2.032,0,0,0,27.029,101.059Zm0-2.952a.922.922,0,1,1-.922.922A.923.923,0,0,1,27.029,98.107Z"
                                  transform="translate(-24.078 -61.639)"
                                />
                              </g></svg></span
                          >Collaborateurs
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['collaborateurs_ajouter']
                                  .roleHaveThis
                              "
                              :label="'Ajouter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['collaborateurs_modifier']
                                  .roleHaveThis
                              "
                              :label="'Modifier'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['collaborateurs_archiver']
                                  .roleHaveThis
                              "
                              :label="'Archiver'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['collaborateurs_consulter_tous']
                                  .roleHaveThis
                              "
                              :label="'Consulter Tous'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges[
                                  'collaborateurs_consulter_presque_tous'
                                ].roleHaveThis
                              "
                              :label="'Consulter presque Tous'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges[
                                  'collaborateurs_consulter_les_profils'
                                ].roleHaveThis
                              "
                              :label="'Consulter les profils'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['collaborateurs_gerer_ses_documents']
                                  .roleHaveThis
                              "
                              :label="'Gerer ses documents'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges[
                                  'collaborateurs_gerer_documents_des_autres'
                                ].roleHaveThis
                              "
                              :label="'Gerer les documents des autres'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges[
                                  'collaborateurs_gerer_departements_fonctions'
                                ].roleHaveThis
                              "
                              :label="'Gerer les departements et les fonctions'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.242"
                              height="25.102"
                              viewBox="0 0 17.242 25.102"
                            >
                              <g transform="translate(-80.162 0)">
                                <g transform="translate(80.162 0)">
                                  <path
                                    class="a"
                                    d="M97.267,4.012a6.168,6.168,0,0,0-4.953-1.186,3.792,3.792,0,0,0-.911.364,2.913,2.913,0,0,0-.137-.355A5.29,5.29,0,0,0,87.366,0a.368.368,0,0,0-.348.576,10.168,10.168,0,0,1,.638,1.112C85.208.106,82.2,1.266,82.073,1.316A.368.368,0,0,0,82.065,2a20.378,20.378,0,0,1,4.352,2.743,5.8,5.8,0,0,0-1.874.071,6.712,6.712,0,0,0-4.348,3.661.368.368,0,0,0,.49.484,17.36,17.36,0,0,1,6.194-1.292,2.52,2.52,0,0,0,.815,1.474A30.665,30.665,0,0,0,86,19.033c-.094,2.449-.013,4.5.03,5.334h-.4a.368.368,0,1,0,0,.735h3.93a.368.368,0,1,0,0-.735h-.464c-.208-1.652-1.06-9.434.64-14.62a2.548,2.548,0,0,0,1.655-.99A13.222,13.222,0,0,1,95.391,12.6a.368.368,0,0,0,.678-.136,7.825,7.825,0,0,0,.011-1.846,5.051,5.051,0,0,0-1.454-3.228,3.917,3.917,0,0,0-2.48-1.114,19.051,19.051,0,0,1,4.941-1.615.368.368,0,0,0,.18-.651ZM83.242,1.749a5.414,5.414,0,0,1,4.039.575A5.234,5.234,0,0,1,88.8,3.884a.368.368,0,0,0,.628-.383,5.359,5.359,0,0,0-.447-.621A15.191,15.191,0,0,0,88.1.955a4.325,4.325,0,0,1,2.5,2.19,2.722,2.722,0,0,1,.165.491,4.259,4.259,0,0,0-.774.887,5.161,5.161,0,0,0-.751,1.929A20.879,20.879,0,0,0,83.242,1.749Zm-.148,5.663c-.689.161-1.269.336-1.714.488a5.469,5.469,0,0,1,3.3-2.368A4.171,4.171,0,0,1,87.8,6l.035.021c.3.3.6.621.885.957A18.377,18.377,0,0,0,83.094,7.413Zm4.894,11.916c.065,2.31.275,4.225.376,5.039H86.772c-.092-1.751-.39-9.816,1.55-14.82a2.512,2.512,0,0,0,.653.2A30.289,30.289,0,0,0,87.988,19.329ZM89.373,9.04a1.793,1.793,0,0,1-1.745-1.379,15.808,15.808,0,0,1,1.859.145,11.247,11.247,0,0,1,1.269.581A1.8,1.8,0,0,1,89.373,9.04Zm4.754-1.108a4.8,4.8,0,0,1,1.262,3.4,13.718,13.718,0,0,0-5.005-3.954,3.952,3.952,0,0,1,.8-.286A3.088,3.088,0,0,1,94.126,7.932Zm-4.178-1.3a3.637,3.637,0,0,1,2.548-3.1,4.039,4.039,0,0,1,1-.124,5.545,5.545,0,0,1,2.563.7A20.817,20.817,0,0,0,89.948,6.636Z"
                                    transform="translate(-80.162 0)"
                                  />
                                </g>
                              </g></svg></span
                          >Congés
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['conges_deposer_demande']
                                  .roleHaveThis
                              "
                              :label="'Déposer une demande'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['conges_accepter_refuser_demande']
                                  .roleHaveThis
                              "
                              :label="'Accepter/Refuser une demande'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.024"
                              height="18.974"
                              viewBox="0 0 14.024 18.974"
                            >
                              <g transform="translate(-61.381)">
                                <path
                                  class="a"
                                  d="M72.094,0H62.544a1.165,1.165,0,0,0-1.163,1.164V17.81a1.165,1.165,0,0,0,1.163,1.164h11.7A1.164,1.164,0,0,0,75.4,17.81V3.6Zm.275,1.741L73.82,3.318H72.368Zm2.06,16.069a.187.187,0,0,1-.187.187h-11.7a.187.187,0,0,1-.186-.187V1.164a.186.186,0,0,1,.186-.186h8.846v2.83a.489.489,0,0,0,.489.488h2.548ZM64.082,5.2h8.3a.366.366,0,0,1,0,.732h-8.3a.366.366,0,1,1,0-.732Zm8.663,2.826a.366.366,0,0,1-.366.366h-8.3a.366.366,0,1,1,0-.732h8.3A.366.366,0,0,1,72.745,8.023Zm0,2.379a.366.366,0,0,1-.366.366h-8.3a.366.366,0,1,1,0-.732h8.3A.366.366,0,0,1,72.745,10.4Zm0,2.42a.366.366,0,0,1-.366.366h-8.3a.366.366,0,1,1,0-.732h8.3A.366.366,0,0,1,72.745,12.822Z"
                                />
                              </g></svg></span
                          >Demande de documents
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['documents_deposer_demande']
                                  .roleHaveThis
                              "
                              :label="'Déposer une demande'"
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-checkbox
                              v-model="
                                privileges['documents_accepter_refuser_demande']
                                  .roleHaveThis
                              "
                              :label="'Accepter/Refuser une demande'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18.227"
                              height="18.049"
                              viewBox="0 0 18.227 18.049"
                            >
                              <path
                                class="a"
                                d="M18.076,4.7,15.925,2.653a.437.437,0,0,0-.325-.16H6.981a.457.457,0,0,0-.457.457v1.4l-3.038.521a.45.45,0,0,0-.365.519l.154.9c-.987.332-2,.675-2.98,1.026a.452.452,0,0,0-.27.574L1.972,13.3a.267.267,0,0,0,.5-.181L.557,7.79c.922-.33,1.877-.653,2.81-.967l.917,5.349,1.056,6.16a.452.452,0,0,0,.519.366l2.859-.491,2.234-.383-3.36,1.208-2.65.953L2.884,14.26a.267.267,0,1,0-.5.181l2.087,5.805a.451.451,0,0,0,.422.3.442.442,0,0,0,.152-.027l2.729-.981,6.2-2.228,1.184-.2H17.77a.458.458,0,0,0,.457-.458V5.006a.384.384,0,0,0-.15-.3Zm-.707.063H16c-.064,0-.214,0-.252-.036a.15.15,0,0,1-.019-.092l0-1.439Zm.323,11.8H7.058v-5.2a.267.267,0,1,0-.534,0v5.28a.458.458,0,0,0,.457.458h5.013l-3.366.577-2.776.476L4.811,12.081l-1.149-6.7,2.862-.491v5.234a.267.267,0,1,0,.534,0v-7.1h8.133l0,1.614a.636.636,0,0,0,.177.47.816.816,0,0,0,.593.191h1.727Z"
                                transform="translate(0 -2.493)"
                              />
                              <path
                                class="a"
                                d="M234.43,111.716a.267.267,0,0,0,.267.267h7.634a.267.267,0,0,0,0-.534H234.7A.267.267,0,0,0,234.43,111.716Z"
                                transform="translate(-226.085 -107.57)"
                              />
                              <path
                                class="a"
                                d="M242.331,164.731H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                                transform="translate(-226.085 -158.956)"
                              />
                              <path
                                class="a"
                                d="M242.331,218.013H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                                transform="translate(-226.085 -210.341)"
                              />
                              <path
                                class="a"
                                d="M242.331,271.3H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                                transform="translate(-226.085 -261.726)"
                              />
                              <path
                                class="a"
                                d="M242.331,324.578H234.7a.267.267,0,0,0,0,.534h7.634a.267.267,0,0,0,0-.534Z"
                                transform="translate(-226.085 -313.112)"
                              /></svg></span
                          >Bibliothèque
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['bibliotheque_consulter']
                                  .roleHaveThis
                              "
                              :label="'Consulter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['bibliotheque_ajouter'].roleHaveThis
                              "
                              :label="'Ajouter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['bibliotheque_telecharger']
                                  .roleHaveThis
                              "
                              :label="'Télécharger'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['bibliotheque_supprimer']
                                  .roleHaveThis
                              "
                              :label="'Supprimer'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <div class="moduleTitle">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"
                              /></svg></span
                          >Habilitation
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row class="privilegesPerModule">
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['habilitation_consulter']
                                  .roleHaveThis
                              "
                              :label="'Consulter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['habilitation_ajouter'].roleHaveThis
                              "
                              :label="'Ajouter'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['habilitation_modifier'].roleHaveThis
                              "
                              :label="'Modifier'"
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="3">
                            <v-checkbox
                              v-model="
                                privileges['habilitation_supprimer']
                                  .roleHaveThis
                              "
                              :label="'Supprimer'"
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pt-0 pb-0"
                  ><small class="d-none">*indicates required field</small>
                </v-col>
                <v-col cols="12" class="pt-2 pb-0 mb-2">
                  <span class="annuler" @click="closeDialog"> ANNULER </span>
                  <v-btn @click="setPriviliges" class="envoyer">
                    SAUVEGARDER
                  </v-btn>
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
import rules from "../../mixins/rules";
export default {
  mixins: [rules],
  data() {
    return {
      isValid: false,
      roleToEdit: {
        id: "",
        name: "",
      },
      privileges: {
        evenements_consulter: {
          id: 1,
          roleHaveThis: false,
        },

        evenements_ajouter: {
          id: 2,
          roleHaveThis: false,
        },

        evenements_modifier: {
          id: 3,
          roleHaveThis: false,
        },

        evenements_supprimer: {
          id: 4,
          roleHaveThis: false,
        },

        actualites_consulter: {
          id: 5,
          roleHaveThis: false,
        },

        actualites_ajouter: {
          id: 6,
          roleHaveThis: false,
        },

        actualites_modifier: {
          id: 7,
          roleHaveThis: false,
        },

        actualites_supprimer: {
          id: 8,
          roleHaveThis: false,
        },

        actualites_desactiver: {
          id: 9,
          roleHaveThis: false,
        },

        collaborateurs_ajouter: {
          id: 10,
          roleHaveThis: false,
        },

        collaborateurs_modifier: {
          id: 11,
          roleHaveThis: false,
        },

        collaborateurs_archiver: {
          id: 12,
          roleHaveThis: false,
        },

        collaborateurs_consulter_tous: {
          id: 13,
          roleHaveThis: false,
        },

        collaborateurs_consulter_presque_tous: {
          id: 14,
          roleHaveThis: false,
        },

        collaborateurs_consulter_les_profils: {
          id: 15,
          roleHaveThis: false,
        },

        collaborateurs_gerer_ses_documents: {
          id: 16,
          roleHaveThis: false,
        },

        collaborateurs_gerer_documents_des_autres: {
          id: 17,
          roleHaveThis: false,
        },

        collaborateurs_gerer_departements_fonctions: {
          id: 18,
          roleHaveThis: false,
        },

        conges_deposer_demande: {
          id: 19,
          roleHaveThis: false,
        },

        conges_accepter_refuser_demande: {
          id: 20,
          roleHaveThis: false,
        },

        documents_deposer_demande: {
          id: 21,
          roleHaveThis: false,
        },

        documents_accepter_refuser_demande: {
          id: 22,
          roleHaveThis: false,
        },

        bibliotheque_consulter: {
          id: 23,
          roleHaveThis: false,
        },

        bibliotheque_ajouter: {
          id: 24,
          roleHaveThis: false,
        },

        bibliotheque_telecharger: {
          id: 25,
          roleHaveThis: false,
        },

        bibliotheque_supprimer: {
          id: 26,
          roleHaveThis: false,
        },

        habilitation_consulter: {
          id: 27,
          roleHaveThis: false,
        },

        habilitation_ajouter: {
          id: 28,
          roleHaveThis: false,
        },

        habilitation_modifier: {
          id: 29,
          roleHaveThis: false,
        },

        habilitation_supprimer: {
          id: 30,
          roleHaveThis: false,
        },
      },
    };
  },
  props: ["value", "role"],
  methods: {
    ...mapActions(["addRolesAction", "setPrivilegesAction"]),
    closeDialog() {
      this.dialog = false;
    },
    setPriviliges() {
      let payload = {
        role_id: this.roleToEdit.id,
        privileges: this.privileges,
      };
      this.setPrivilegesAction(JSON.stringify(payload)).then(()=>{
        this.closeDialog();
      });
    },
  },
  computed: {
    ...mapGetters([]),

    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  updated: function () {},
  mounted: function () {
    this.roleToEdit={...this.role};
    let priviligesArray=Object.entries(this.privileges).map((e) => {
      return {
        "name":e[0],
       ...e[1] 
      }
    });
    console.log(priviligesArray)
     for (let i = 0; i < priviligesArray.length; i++) {
      if(this.roleToEdit.privileges.includes(priviligesArray[i].id)){
        this.privileges[priviligesArray[i].name].roleHaveThis=true;
      }
    } 
  },
};
</script>
<style lang="scss" scoped>
.addActualiteModel {
  border-radius: 20px;
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
.dateTitle {
  display: inline-block;
  font: normal normal normal 29px/25px Poppins;
  letter-spacing: 0px;
  color: #87b0e6;
  font-size: 23px;
}
.congeType:hover {
  background-color: #87b0e6d4;
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.container {
  overflow-y: auto;
}
.moduleTitle {
  text-align: left;
  font: normal normal bold 16px/25px Poppins;
  color: #4762f1;
  span {
    margin-right: 10px;
  }
  svg {
    fill: #4762f1;
  }
}
</style>
