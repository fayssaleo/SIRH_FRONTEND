<template>
  <b-row class="p-0">
    <b-col cols="12">
      <span class="title">Wiki Devcorp</span>
      <router-link to="/bibliotheque">
        <span class="pageWikiDevcorp">Page wiki Devcorp</span>
      </router-link>
    </b-col>
    <b-col class="docsList" cols="12">
      <b-col class="docs" cols="12">
        <span class="docName">Règlement intérieur</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.442"
            height="30.849"
            viewBox="0 0 26.442 30.849"
            style="fill: red"
          >
            <path
              class="a"
              d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
              transform="translate(-2.571 -2.203)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Demande de congé</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.442"
            height="30.849"
            viewBox="0 0 26.442 30.849"
            style="fill: red"
          >
            <path
              class="a"
              d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
              transform="translate(-2.571 -2.203)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Organigramme de la société</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.849"
            height="26.992"
            viewBox="0 0 30.849 26.992"
            style="fill: #87b0e6"
          >
            <path
              class="a"
              d="M31.488,5.784l0,0V28.917l0,0H4.5l0,0V5.788l0,0Zm0-1.928H4.5A1.934,1.934,0,0,0,2.571,5.784V28.921A1.934,1.934,0,0,0,4.5,30.849H31.491a1.934,1.934,0,0,0,1.928-1.928V5.784a1.934,1.934,0,0,0-1.928-1.928ZM27.635,10.6a2.892,2.892,0,1,1-2.892-2.892A2.892,2.892,0,0,1,27.635,10.6Zm1.928,16.388H6.427V23.136l6.748-11.568,7.712,9.64h1.928l6.748-5.784Z"
              transform="translate(-2.571 -3.856)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Historique de devcorp</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.25"
            height="29.25"
            viewBox="0 0 29.25 29.25"
            style="fill: #66e5c2"
          >
            <path
              class="a"
              d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm-1.515,27.07A12.537,12.537,0,0,1,8.46,9.868a13.891,13.891,0,0,1,.142,1.7c-.115,1.673-.28,2.72.7,4.132a6.817,6.817,0,0,1,.661,1.974c.182.623.907.949,1.408,1.333,1.01.774,1.976,1.674,3.046,2.355.707.45,1.148.673.941,1.536a5.449,5.449,0,0,1-.572,1.738,3.523,3.523,0,0,0,.587,1.574c.527.527,1.05,1.011,1.625,1.485C17.887,28.431,16.91,29.387,16.485,30.445Zm10.379-3.581a12.446,12.446,0,0,1-6.508,3.451A5.2,5.2,0,0,1,21.9,28.251a5.238,5.238,0,0,0,1.385-1.712,11.894,11.894,0,0,1,.955-1.632c.5-.766-1.225-1.922-1.783-2.164a18.377,18.377,0,0,1-3.316-2.065c-.795-.559-2.409.292-3.306-.1A17.3,17.3,0,0,1,12.52,18.3c-1.1-.83-1.049-1.8-1.049-3.023.864.032,2.092-.239,2.665.455.181.219.8,1.2,1.219.85.34-.284-.252-1.424-.366-1.692-.352-.824.8-1.145,1.392-1.7.771-.729,2.424-1.872,2.293-2.394s-1.654-2-2.549-1.771c-.134.035-1.315,1.272-1.543,1.467q.009-.606.018-1.212c0-.255-.476-.517-.454-.681.056-.416,1.214-1.17,1.5-1.5-.2-.126-.89-.717-1.1-.631-.5.21-1.074.355-1.579.565a3.211,3.211,0,0,0-.047-.5A12.416,12.416,0,0,1,16.112,5.6l.99.4.7.83.7.72.61.2.969-.914-.25-.652V5.6a12.4,12.4,0,0,1,5.31,2.1c-.284.025-.6.067-.947.112a3.151,3.151,0,0,0-.49-.184c.459.987.938,1.961,1.425,2.935.52,1.041,1.673,2.157,1.875,3.256.239,1.295.073,2.471.2,3.995a6.823,6.823,0,0,0,1.654,3.134,3.312,3.312,0,0,0,1.293.157A12.459,12.459,0,0,1,26.864,26.864Z"
              transform="translate(-3.375 -3.375)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Historique de devcorp</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.25"
            height="29.25"
            viewBox="0 0 29.25 29.25"
            style="fill: #66e5c2"
          >
            <path
              class="a"
              d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm-1.515,27.07A12.537,12.537,0,0,1,8.46,9.868a13.891,13.891,0,0,1,.142,1.7c-.115,1.673-.28,2.72.7,4.132a6.817,6.817,0,0,1,.661,1.974c.182.623.907.949,1.408,1.333,1.01.774,1.976,1.674,3.046,2.355.707.45,1.148.673.941,1.536a5.449,5.449,0,0,1-.572,1.738,3.523,3.523,0,0,0,.587,1.574c.527.527,1.05,1.011,1.625,1.485C17.887,28.431,16.91,29.387,16.485,30.445Zm10.379-3.581a12.446,12.446,0,0,1-6.508,3.451A5.2,5.2,0,0,1,21.9,28.251a5.238,5.238,0,0,0,1.385-1.712,11.894,11.894,0,0,1,.955-1.632c.5-.766-1.225-1.922-1.783-2.164a18.377,18.377,0,0,1-3.316-2.065c-.795-.559-2.409.292-3.306-.1A17.3,17.3,0,0,1,12.52,18.3c-1.1-.83-1.049-1.8-1.049-3.023.864.032,2.092-.239,2.665.455.181.219.8,1.2,1.219.85.34-.284-.252-1.424-.366-1.692-.352-.824.8-1.145,1.392-1.7.771-.729,2.424-1.872,2.293-2.394s-1.654-2-2.549-1.771c-.134.035-1.315,1.272-1.543,1.467q.009-.606.018-1.212c0-.255-.476-.517-.454-.681.056-.416,1.214-1.17,1.5-1.5-.2-.126-.89-.717-1.1-.631-.5.21-1.074.355-1.579.565a3.211,3.211,0,0,0-.047-.5A12.416,12.416,0,0,1,16.112,5.6l.99.4.7.83.7.72.61.2.969-.914-.25-.652V5.6a12.4,12.4,0,0,1,5.31,2.1c-.284.025-.6.067-.947.112a3.151,3.151,0,0,0-.49-.184c.459.987.938,1.961,1.425,2.935.52,1.041,1.673,2.157,1.875,3.256.239,1.295.073,2.471.2,3.995a6.823,6.823,0,0,0,1.654,3.134,3.312,3.312,0,0,0,1.293.157A12.459,12.459,0,0,1,26.864,26.864Z"
              transform="translate(-3.375 -3.375)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Historique de devcorp</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.25"
            height="29.25"
            viewBox="0 0 29.25 29.25"
            style="fill: #66e5c2"
          >
            <path
              class="a"
              d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm-1.515,27.07A12.537,12.537,0,0,1,8.46,9.868a13.891,13.891,0,0,1,.142,1.7c-.115,1.673-.28,2.72.7,4.132a6.817,6.817,0,0,1,.661,1.974c.182.623.907.949,1.408,1.333,1.01.774,1.976,1.674,3.046,2.355.707.45,1.148.673.941,1.536a5.449,5.449,0,0,1-.572,1.738,3.523,3.523,0,0,0,.587,1.574c.527.527,1.05,1.011,1.625,1.485C17.887,28.431,16.91,29.387,16.485,30.445Zm10.379-3.581a12.446,12.446,0,0,1-6.508,3.451A5.2,5.2,0,0,1,21.9,28.251a5.238,5.238,0,0,0,1.385-1.712,11.894,11.894,0,0,1,.955-1.632c.5-.766-1.225-1.922-1.783-2.164a18.377,18.377,0,0,1-3.316-2.065c-.795-.559-2.409.292-3.306-.1A17.3,17.3,0,0,1,12.52,18.3c-1.1-.83-1.049-1.8-1.049-3.023.864.032,2.092-.239,2.665.455.181.219.8,1.2,1.219.85.34-.284-.252-1.424-.366-1.692-.352-.824.8-1.145,1.392-1.7.771-.729,2.424-1.872,2.293-2.394s-1.654-2-2.549-1.771c-.134.035-1.315,1.272-1.543,1.467q.009-.606.018-1.212c0-.255-.476-.517-.454-.681.056-.416,1.214-1.17,1.5-1.5-.2-.126-.89-.717-1.1-.631-.5.21-1.074.355-1.579.565a3.211,3.211,0,0,0-.047-.5A12.416,12.416,0,0,1,16.112,5.6l.99.4.7.83.7.72.61.2.969-.914-.25-.652V5.6a12.4,12.4,0,0,1,5.31,2.1c-.284.025-.6.067-.947.112a3.151,3.151,0,0,0-.49-.184c.459.987.938,1.961,1.425,2.935.52,1.041,1.673,2.157,1.875,3.256.239,1.295.073,2.471.2,3.995a6.823,6.823,0,0,0,1.654,3.134,3.312,3.312,0,0,0,1.293.157A12.459,12.459,0,0,1,26.864,26.864Z"
              transform="translate(-3.375 -3.375)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Règlement intérieur</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.442"
            height="30.849"
            viewBox="0 0 26.442 30.849"
            style="fill: red"
          >
            <path
              class="a"
              d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
              transform="translate(-2.571 -2.203)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Demande de congé</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.442"
            height="30.849"
            viewBox="0 0 26.442 30.849"
            style="fill: red"
          >
            <path
              class="a"
              d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
              transform="translate(-2.571 -2.203)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Historique de devcorp</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.25"
            height="29.25"
            viewBox="0 0 29.25 29.25"
            style="fill: #66e5c2"
          >
            <path
              class="a"
              d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.625,14.625,0,0,0,18,3.375Zm-1.515,27.07A12.537,12.537,0,0,1,8.46,9.868a13.891,13.891,0,0,1,.142,1.7c-.115,1.673-.28,2.72.7,4.132a6.817,6.817,0,0,1,.661,1.974c.182.623.907.949,1.408,1.333,1.01.774,1.976,1.674,3.046,2.355.707.45,1.148.673.941,1.536a5.449,5.449,0,0,1-.572,1.738,3.523,3.523,0,0,0,.587,1.574c.527.527,1.05,1.011,1.625,1.485C17.887,28.431,16.91,29.387,16.485,30.445Zm10.379-3.581a12.446,12.446,0,0,1-6.508,3.451A5.2,5.2,0,0,1,21.9,28.251a5.238,5.238,0,0,0,1.385-1.712,11.894,11.894,0,0,1,.955-1.632c.5-.766-1.225-1.922-1.783-2.164a18.377,18.377,0,0,1-3.316-2.065c-.795-.559-2.409.292-3.306-.1A17.3,17.3,0,0,1,12.52,18.3c-1.1-.83-1.049-1.8-1.049-3.023.864.032,2.092-.239,2.665.455.181.219.8,1.2,1.219.85.34-.284-.252-1.424-.366-1.692-.352-.824.8-1.145,1.392-1.7.771-.729,2.424-1.872,2.293-2.394s-1.654-2-2.549-1.771c-.134.035-1.315,1.272-1.543,1.467q.009-.606.018-1.212c0-.255-.476-.517-.454-.681.056-.416,1.214-1.17,1.5-1.5-.2-.126-.89-.717-1.1-.631-.5.21-1.074.355-1.579.565a3.211,3.211,0,0,0-.047-.5A12.416,12.416,0,0,1,16.112,5.6l.99.4.7.83.7.72.61.2.969-.914-.25-.652V5.6a12.4,12.4,0,0,1,5.31,2.1c-.284.025-.6.067-.947.112a3.151,3.151,0,0,0-.49-.184c.459.987.938,1.961,1.425,2.935.52,1.041,1.673,2.157,1.875,3.256.239,1.295.073,2.471.2,3.995a6.823,6.823,0,0,0,1.654,3.134,3.312,3.312,0,0,0,1.293.157A12.459,12.459,0,0,1,26.864,26.864Z"
              transform="translate(-3.375 -3.375)"
            /></svg
        ></span>
      </b-col>
      <b-col class="docs" cols="12">
        <span class="docName">Règlement intérieur</span>
        <span class="docIcon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.442"
            height="30.849"
            viewBox="0 0 26.442 30.849"
            style="fill: red"
          >
            <path
              class="a"
              d="M27.842,8.745a4.006,4.006,0,0,1,.826,1.308,3.973,3.973,0,0,1,.344,1.515V31.4a1.646,1.646,0,0,1-1.653,1.653H4.223A1.646,1.646,0,0,1,2.571,31.4V3.856A1.646,1.646,0,0,1,4.223,2.2H19.648a3.974,3.974,0,0,1,1.515.344,4.006,4.006,0,0,1,1.308.826ZM20.2,4.545v6.473h6.473a1.881,1.881,0,0,0-.379-.706L20.9,4.923a1.88,1.88,0,0,0-.706-.379Zm6.61,26.3V13.221H19.648a1.646,1.646,0,0,1-1.653-1.653V4.407H4.774V30.849H26.809ZM17.961,20.64a13.1,13.1,0,0,0,1.446.964,17.082,17.082,0,0,1,2.014-.121q2.531,0,3.047.844a.832.832,0,0,1,.034.9.05.05,0,0,1-.017.034l-.034.034v.017q-.1.654-1.222.654a7.1,7.1,0,0,1-1.98-.344,12.552,12.552,0,0,1-2.238-.912,31,31,0,0,0-6.748,1.429q-2.634,4.51-4.166,4.51a1,1,0,0,1-.482-.121L7.2,28.318q-.017-.017-.1-.086a.711.711,0,0,1-.1-.62,3.738,3.738,0,0,1,.964-1.575,8.319,8.319,0,0,1,2.272-1.661.251.251,0,0,1,.4.1.1.1,0,0,1,.034.069q.9-1.463,1.842-3.391a26.274,26.274,0,0,0,1.79-4.51,13.916,13.916,0,0,1-.525-2.746,6.693,6.693,0,0,1,.112-2.195q.189-.689.723-.689h.379a.726.726,0,0,1,.6.258,1.375,1.375,0,0,1,.155,1.171.373.373,0,0,1-.069.138.448.448,0,0,1,.017.138v.516a22.542,22.542,0,0,1-.241,3.305,8.709,8.709,0,0,0,2.513,4.1ZM8.045,27.715A7.6,7.6,0,0,0,10.4,25,9.813,9.813,0,0,0,8.9,26.442,5.722,5.722,0,0,0,8.045,27.715ZM14.9,11.878a5.119,5.119,0,0,0-.034,2.272q.017-.121.121-.757,0-.052.121-.74a.387.387,0,0,1,.069-.138.05.05,0,0,1-.017-.034.035.035,0,0,0-.009-.026.035.035,0,0,1-.009-.026.991.991,0,0,0-.224-.62.05.05,0,0,1-.017.034v.034ZM12.762,23.257a25.25,25.25,0,0,1,4.889-1.394,2.6,2.6,0,0,1-.224-.164,3.083,3.083,0,0,1-.275-.232,9.119,9.119,0,0,1-2.186-3.03,23,23,0,0,1-1.429,3.391q-.516.964-.775,1.429Zm11.121-.275a4.12,4.12,0,0,0-2.41-.413,6.511,6.511,0,0,0,2.135.482,1.67,1.67,0,0,0,.31-.017q0-.017-.034-.052Z"
              transform="translate(-2.571 -2.203)"
            /></svg
        ></span>
      </b-col>
    </b-col>
  </b-row>
</template>
<style lang="scss" scoped>
.title {
  width: 154px;
  height: 33px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) /
    var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
}
.pageWikiDevcorp {
  width: 184px;
  height: 23px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 16px/25px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: right;
  text-decoration: underline;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  float: right;
  margin-top: 6px;
}
.docName {
  width: 196px;
  height: 28px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 20px/30px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-010101);
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
}
.docIcon {
  width: 26px;
  height: 31px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  float: right;
}
::-webkit-scrollbar {
  width: 8px !important;
}
.docsList {
  max-height: 345px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.docs{
  flex-basis: initial;
}
.docs:hover {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 1px 2px 22px #4762f152;
  padding-left: 9px;
  cursor: pointer;
}
.docs:active {
  background-color: #4763f1b2;
  color: white;
  user-select: none;
  .docName {
    color: white;
  }
}
@media screen and (max-width: 1620px) {
  .docsList {
    max-height: 330px;
  }
}
</style>
