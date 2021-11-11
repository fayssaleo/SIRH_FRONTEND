<template>
  <b-row class="content m-0 p-0">
    <span class="title">{{ setTitle }}</span>
    <div class="navTools">
      <span class="add d-none" @click="dialog = !dialog">
        <svg
          data-v-202f3529=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="48"
          height="48"
          viewBox="13 8 48 48"
        >
          <defs data-v-202f3529="">
            <filter
              data-v-202f3529=""
              id="a"
              x="0"
              y="0"
              width="73"
              height="73"
              filterUnits="userSpaceOnUse"
            >
              <feOffset
                data-v-202f3529=""
                dy="5"
                input="SourceAlpha"
              ></feOffset>
              <feGaussianBlur
                data-v-202f3529=""
                stdDeviation="4.5"
                result="b"
              ></feGaussianBlur>
              <feFlood
                data-v-202f3529=""
                flood-color="#4762f1"
                flood-opacity="0.478"
              ></feFlood>
              <feComposite
                data-v-202f3529=""
                operator="in"
                in2="b"
              ></feComposite>
              <feComposite data-v-202f3529="" in="SourceGraphic"></feComposite>
            </filter>
          </defs>
          <g data-v-202f3529="" transform="translate(-1087.5 -19.5)">
            <g
              data-v-202f3529=""
              transform="matrix(1, 0, 0, 1, 1087.5, 19.5)"
              class="c"
            >
              <rect
                data-v-202f3529=""
                width="46"
                height="46"
                rx="23"
                transform="translate(13.5 8.5)"
                class="a"
              ></rect>
            </g>
            <path
              data-v-202f3529=""
              d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z"
              transform="translate(1106 33)"
              class="b"
            ></path>
          </g>
        </svg>
      </span>
      <span class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Recherche"
          v-model="serachContent"
        />
        <span
          :class="searched ? 'd-none' : '  search-icon '"
          @click="clearSearch()"
        >
          <i class="fa fa-times"></i>
        </span>
        <span :class="searched ? 'search-icon' : ' d-none'">
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
      <span
        class="notifiactions"
        @click="showNotificationList"
        v-out-click="() => hideNotificationList()"
      >
        <span class="notification-bell-icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.75"
            height="29.25"
            viewBox="0 0 24.75 29.25"
          >
            <path
              class="a"
              d="M18.07,8.471a10.165,10.165,0,0,1,1.681.315,7.166,7.166,0,0,1,5.462,7.021v8.973l.655.658.548.55H9.584l.548-.55.655-.658V15.806a7.166,7.166,0,0,1,5.462-7.021,12.447,12.447,0,0,1,1.681-.315m.07-5.1a2.15,2.15,0,0,0-2.184,2.194V6.592a9.479,9.479,0,0,0-7.279,9.214V23.85L5.625,26.775v1.462h24.75V26.775L27.463,23.85V15.806a9.479,9.479,0,0,0-7.279-9.214V5.569A2.15,2.15,0,0,0,18,3.375ZM20.912,29.7H15.088a2.912,2.912,0,1,0,5.823,0Z"
              transform="translate(-5.625 -3.375)"
            /></svg
        ></span>

        <span class="counter counter-lg">2</span>
        <span
          class="notificationList"
          :class="{ displayNone: !notificationListIsShow }"
        >
          <ul>
            <li class="notificationListActive">
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li class="notificationListActive">
              <span class="notifElementIcon">
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
                  </g></svg
              ></span>
              <span class="notifElementText">
                Actualites : Ipsum dolor inset
              </span>
              <span class="notifElementTime"> 15:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
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
                  </g></svg
              ></span>
              <span class="notifElementText">
                Collaborateurs : Nouveau membre !
              </span>
              <span class="notifElementTime"> 15:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
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
                  </g></svg
              ></span>
              <span class="notifElementText">
                Documents : Attestation de travaille est près
              </span>
              <span class="notifElementTime"> 15:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText"> Evenement : Loup garoup </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
            <li>
              <span class="notifElementIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.112"
                  height="22.908"
                  viewBox="0 0 23.112 22.908"
                >
                  <path
                    class="a"
                    d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
                    transform="translate(-6.444 -5.076)"
                  /></svg
              ></span>
              <span class="notifElementText">
                Evenement : Match de football
              </span>
              <span class="notifElementTime"> 19:00 </span>
            </li>
          </ul>
        </span>
      </span>

      <span
        class="quickProfile"
        @click="showQuickProfileMenu"
        v-out-click="() => hideQuickProfileMenu()"
      >
        <span class="userFullname">Kamal EL FATIHI</span>
        <img src="@/assets/quickProfilePictures/quickProfilePic.png" alt="" />

        <span
          class="quickProfileMenu"
          :class="{ displayNone: !quickProfileMenuIsShow }"
        >
          <ul>
            <router-link to="/profil">
              <li>Profil</li>
            </router-link>
            <router-link to="/profil">
              <li>Déconnexion</li>
            </router-link>
          </ul>
        </span>
      </span>
    </div>
    <v-app>
      <add-modal v-model="dialog" />
    </v-app>
  </b-row>
</template>
<script>
import AddModal from "@/components/shared/modal/AddModal";
import OutClick from "vue-click-outside";

export default {
  name: "Header",
  props: ["title"],
  components: {
    AddModal,
  },
  data() {
    return {
      isSearching: true,
      serachContent: "",
      dialog: false,
      quickProfileMenuIsShow: false,
      notificationListIsShow: false,
    };
  },
  methods: {
    clearSearch: function () {
      this.serachContent = "";
    },
    showQuickProfileMenu: function () {
      this.quickProfileMenuIsShow = !this.quickProfileMenuIsShow;
    },
    hideQuickProfileMenu: function () {
      this.quickProfileMenuIsShow = false;
    },
    showNotificationList: function () {
      this.notificationListIsShow = !this.notificationListIsShow;
    },
    hideNotificationList: function () {
      this.notificationListIsShow = false;
    },
  },
  computed: {
    searched: function () {
      return this.serachContent.length === 0;
    },
    setTitle: function () {
      let title = "";
      switch (this.$route.name) {
        case "Dashboard":
          title = "Tableau de bord";
          break;
        case "Evenements":
          title = "Evenements";
          break;
        case "Actualites":
          title = "Actualités";
          break;
        case "Calendrier":
          title = "Calendrier";
          break;
        case "Collaborateurs":
          title = "Collaborateurs";
          break;
        case "Conges":
          title = "Congés";
          break;
        case "Bibliotheque":
          title = "Bibliothèque";
          break;
        case "Documents":
          title = "Demandes de documents";
          break;
        case "Profil":
          title = "Mon Profil";
          break;
        case "Habilitations":
          title = "Table D'habilitations";
          break;
        default:
          break;
      }
      return title;
    },
  },
  directives: {
    OutClick,
  },
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  margin-left: 35px !important;
  height: 80px;
  flex-grow: 0;
}
.title {
  height: 45px;
  font: var(--unnamed-font-style-normal) normal 600 32px/48px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-010101);
  text-align: left;
  font: normal normal 600 32px/48px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
}
.navTools {
  position: absolute;
  right: 0;
  margin-right: 37px;
  .input-group {
    position: relative;
    display: inline-flex;
    width: 354px;
    height: 46px;
    background: 0% 0% no-repeat padding-box;
    border-radius: 23px;
    opacity: 1;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;

    margin-right: 69px;
    input {
      background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 23px !important;
      border: none !important;
      color: #bfbfbf;
      opacity: 1;
    }
    .search-icon {
      fill: #bfbfbf;

      z-index: 5;
      /* margin-top: 6px; */
      position: absolute;
      right: 6px;
      cursor: pointer;
      background-color: #ffffff;
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
  .notifiactions {
    position: relative;
    width: 32px;
    height: 29px;
    display: inline-block;
    margin-right: 32px;
    cursor: pointer;
    user-select: none;
    .notification-bell-icon {
      fill: #87b0e6;
      font-size: 4px;
    }
    .counter {
      position: absolute;
      right: -1px;
      top: 3px;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      text-align: left;
      font: normal normal bold 12px/18px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      background-color: red;
      opacity: 1;
      text-align: center;
      padding-top: 1.5px;
    }
  }
  .userFullname {
    width: 122px;
    height: 23px;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-right: 18px;
    user-select: none;
    cursor: pointer;
  }
  .quickProfile {
    position: relative;
    user-select: none;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    img {
      width: 44px;
      height: 44px;
      background: transparent 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000069;
      border-radius: 10px;
      opacity: 1;
      margin-right: 11px;
    }
    span {
      width: 20px;
      height: 11px;
      fill: #87b0e6;
      opacity: 1;
      cursor: pointer;
      z-index: 60;
    }
  }
  .quickProfile:hover {
    box-shadow: 8px 17px 20px 0px #007bff0f;
    border-radius: 8px;
  }
  @media screen and (max-width: 1300px) {
    .navTools {
      margin-right: 0px !important;
    }
    .input-group {
      margin-right: 20px;
      width: 250px;
    }
    .notifiactions {
      margin-right: 14px;
    }
    .userFullname {
      margin-right: 20px;
    }
  }
}
@media screen and (max-width: 1195px) {
  .content {
    margin-left: 0 !important;
  }
  .input-group {
    width: 205px;
  }
}
@media screen and (max-width: 990px) {
  .notifiactions {
    display: none !important;
  }
  .userFullname {
    display: none !important;
  }
  .quickProfile {
    display: none !important;
  }
  .input-group {
    width: 350px;
  }
}
.add {
  width: 46px;
  height: 46px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 41px;
  svg {
    cursor: pointer;
    border-radius: 25px;
    box-shadow: 0px 5px 9px #4762f17a;
  }
  .a {
    fill: #4762f1;
  }
  .b {
    fill: #fff;
  }
  .c {
    filter: url(#a);
  }
}
.quickProfileMenu {
  position: absolute;
  right: 179px;
  top: 65px;
  z-index: 3;
  * {
    user-select: none;
  }
  ul {
    padding: 0;
    margin: 0;
    text-indent: 0;
    list-style-type: none;

    background-color: white;
    border: 4px solid #e0e0e0;
    z-index: 20;
    width: 200px;
    border-radius: 15px;
    user-select: none;

    a {
      border-radius: none;
    }
    li {
      font: normal normal 600 16px/48px Poppins;
      padding-left: 17px;
    }
    a:first-child {
      li:first-child {
        border-radius: 0 !important;
        border-top-left-radius: 12px !important;
        border-top-right-radius: 12px !important;
        color: rgba(0, 0, 0, 0.482);
      }
    }
    a:last-child {
      li:first-child {
        border-radius: 0 !important;
        border-bottom-left-radius: 12px !important;
        border-bottom-right-radius: 12px !important;
        border-top: 1px solid #00000036;
        color: rgba(0, 0, 0, 0.482);
      }
    }
    a:hover {
      text-decoration: none;
      li:first-child {
        background-color: #4762f1e0;
        color: white;
        cursor: pointer;
      }
    }
  }
  ul {
    a:first-child {
      ::before {
        content: "";
        position: absolute;
        left: 153px;
        bottom: 11px;
        width: 0;
        height: 0;
        border-right: 15px solid transparent;
        border-bottom: 16px solid #e0e0e0;
        border-left: 15px solid transparent;
      }
    }
  }
}
.displayNone {
  display: none !important;
}
.notificationList {
  position: absolute;
  right: 20px;
  top: 37px;
  display: inline-block;
  z-index: 3;
  * {
    user-select: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 440px;
    border-radius: 15px;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #87b0e6;
    background-color: white;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  li {
    border-bottom: 1px solid #0000001a;
    color: #0000008c;
    height: 33px;
    padding: 7px;
    padding-top: 3px;
  }
  li:hover {
    background-color: #8080801f;
  }
  span {
    text-align: left;
    font: normal normal normal 14px/18px Poppins;
    letter-spacing: 0px;
  }
  svg {
    fill: #87b0e6;
  }
  .notifElementIcon {
    margin-left: 5px;
    margin-right: 5px;
  }
  .notifElementText {
    height: 33px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .notifElementTime {
    float: right;
  }
}
.notificationListActive {
  background-color: #4762f1;
  * {
    color: #ffffff;
    fill: #ffffff;
  }
  border-bottom: 1px solid #877d7d8c !important;
}
.notificationListActive:hover {
  background-color: #4763f1a7 !important;
}
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
</style>
