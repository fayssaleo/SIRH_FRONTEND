<template>
  <b-row class="profil-container p-4">
    <b-col cols="6" class="pr-0">
      <b-row>
        <b-col cols="4" class="pl-0 pr-0">
          <b-row>
            <b-col cols="12">
              <span>
                <img
                  class="profilePic"
                  src="@/assets/quickProfilePictures/quickProfilePic.png"
                  alt=""
                />
              </span>
            </b-col>
            <b-col cols="12">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
                  /></svg
              ></span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
                  /></svg
              ></span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
                  /></svg
              ></span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path
                    d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"
                  /></svg
              ></span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="8" class="pl-0 pr-5">
          <b-row>
            <b-col cols="12" class="fullname pt-0 pb-2">Kamal EL FATIHI</b-col>
            <b-col cols="6" class="pt-0 pb-2">
              <span class="title">Prénom</span>
              <span class="value">fayssal</span>
              <span class="bottomBorder"></span>
            </b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Nom</span>
              <span class="value">Ourezzouq</span>
              <span class="bottomBorder"></span>
            </b-col>
            <b-col cols="6" class="contact pt-0 pb-2"
              ><span class="title">Téléphone</span>
              <span class="value">0604996360</span>
              <span class="bottomBorder"></span>
              <span
                class="edit"
                @click="openEditModal('Téléphone', '0604996360')"
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
            </b-col>
            <b-col cols="6" class="contact pt-0 pb-2"
              ><span class="title">Téléphone urgent</span>
              <span class="value">0758693254</span>
              <span class="bottomBorder"></span>
              <span
                class="edit"
                @click="openEditModal('Téléphone urgent', '0758693254')"
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
            </b-col>
            <b-col cols="12" class="contact pt-0 pb-2"
              ><span class="title">Email</span>
              <span class="value">Fayssal.ourezzouq@gmail.com</span>
              <span class="bottomBorder"></span>
              <span
                class="edit"
                @click="openEditModal('Email', 'Fayssal.ourezzouq@gmail.com')"
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
            </b-col>

            <b-col cols="12" class="pt-0 pb-2"
              ><span class="title">Adresse</span>
              <span class="value">Sidi Maarouf, casablanca</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Fonction</span>
              <span class="value">Team Developer</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Type de contrat</span>
              <span class="value">Stagiaire</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="12" class="pt-0 pb-2"
              ><span class="title">Departement</span>
              <span class="value">IT</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Date de naissance</span>
              <span class="value">02/09/1995</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Lieu de naissance</span>
              <span class="value">Rabat</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Nationalité</span>
              <span class="value">Marrocain</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Situation familiale</span>
              <span class="value">célibataire</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Nombre d'enfant(s)</span>
              <span class="value">0</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">Nom de l'épaux</span>
              <span class="value">fayssal</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">CIN / Carte séjour</span>
              <span class="value">AE215sd</span>
              <span class="bottomBorder"></span
            ></b-col>
            <b-col cols="6" class="pt-0 pb-2"
              ><span class="title">N° Passeport</span>
              <span class="value">2568-950</span>
              <span class="bottomBorder"></span
            ></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="6" style="padding-top: 77px">
      <b-row>
        <b-col cols="12" class="conge">
          <b-row>
            <b-col cols="5">
              <span class="congeSolde"> Mon Solde Congé : </span>
              <span class="congeNumber"> 15j </span>
              <span class="verticalSeparator"></span>
            </b-col>
            <b-col cols="7" class="soldeCongeRightTextContainer">
              <b-row>
                <b-col cols="12" class="soldeCongeRightText">
                  <span>Solde années précédentes : </span>
                  <span> 11</span>
                </b-col>
                <b-col cols="12" class="soldeCongeRightText">
                  <span>Solde année actuelle : </span>
                  <span> 4.5</span>
                </b-col>
                <b-col cols="12" class="soldeCongeRightText">
                  <span>Solde année actuelle : </span>
                  <span> 14</span>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="pr-0 pl-0">
          <span class="documents"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="193"
              height="33"
              viewBox="0 0 193 33"
            >
              <defs>
                <svg:style>
                  .adocument {
                    fill: #87b0e6;
                    font-size: 24px;
                    font-family: Poppins-Regular, Poppins;
                  }
                </svg:style>
              </defs>
              <text class="adocument" transform="translate(0 25)">
                <tspan x="0" y="0">Mes documents</tspan>
              </text>
            </svg></span
          >

          <div class="docsList">
            <ul>
              <li>
                <span class="docsName">Attestation de travaille.pdf</span>
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
                <span class="docsName">Attestation de travaille.pdf</span>
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
                <span class="docsName">Pièce d'identité.jpeg</span>
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
                <span class="docsName">Attestation de travaille.pdf</span>
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
                <span class="docsName">Attestation de travaille.pdf</span>
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
        </b-col>
      </b-row>
    </b-col>
    <ContactModifyModal
      v-model="dialog"
      :typeContact="selectedContact"
      :textValue="selectedTextValue"
    />
  </b-row>
</template>
<script>
import ContactModifyModal from "./ContactModifyModal";
export default {
  methods: {
    openEditModal: function (selectedContact, selectedTextValue) {
      this.selectedContact = selectedContact;
      this.selectedTextValue = selectedTextValue;
      this.dialog = true;
    },
  },
  data: function () {
    return {
      dialog: false,
      selectedContact: "",
      selectedTextValue: "",
    };
  },

  components: {
    ContactModifyModal,
  },
};
</script>
<style lang="scss" scoped>
.profil-container {
  border-radius: 27px;
  opacity: 1;
  background: transparent 0% 0% no-repeat padding-box;
  margin: 10px;
}
.profilePic {
  box-shadow: 0px 3px 6px #00000069;
  border-radius: 18px;
}
.fullname {
  text-align: left;
  font: normal normal bold 49px/73px Poppins;
  letter-spacing: 0px;
  color: #4762f1;
  font-size: 49px;
}
.conge {
  border-radius: 26px;
  background-color: #87b0e69c;
  min-width: 100%;
  color: white;
  height: 139px;
  span {
    display: inline-block;
  }
}
.congeSolde {
  text-align: left;
  font: normal normal 600 24px/35px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  width: 132px;
  height: 68px;
  margin-left: 8px;
  margin-right: 19px;
}
.congeNumber {
  text-align: left;
  font: normal normal 800 81px/121px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000066;
  width: 109px;
  height: 113px;
}
.soldeCongeRightText {
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000066;
  height: 28px;
  margin-bottom: 5px;
  span {
    margin-right: 5px;
  }
}
.soldeCongeRightTextContainer {
  margin-top: 12px;
}
.verticalSeparator {
  height: 96px;
  border: 1px solid #ffffff;
  float: right;
  margin-top: 16px;
  box-shadow: 0px 1px 8px #21252980;
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

  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
  ul {
    list-style-type: none;
    padding: 0 22px !important;
    margin: 0;
    li {
      border-bottom: 1px solid #80808047;
    }
  }
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
.title {
  display: block;
  color: #ababab;
  font-size: 11px;
}
.value {
  text-align: left;
  font: normal normal 600 16px/25px Poppins;
  letter-spacing: 0px;
  color: #010101;
  display: inline-block;
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bottomBorder {
  display: block;
  max-width: 100%;
  border: 1px solid #87b0e6;
}
.edit {
  position: absolute;
  right: 0;
  top: 15px;
  display: inline-block;
  height: 34px;
  width: 40px;
  z-index: 10;
  svg {
    fill: #87b0e69c;
    cursor: pointer;
  }
}
.edit:hover {
  svg {
    fill: #326cb89c;
  }
}
</style>
