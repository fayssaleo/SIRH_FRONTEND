<template>
  <b-row class="container-row p-0 m-0">
    <b-col cols="12" class="mobileNavbar d-none m-0 p-0">
      <span class="MobileNavbarlogo"
        ><img src="@/assets/Devcorp-LOGO-big-6@2x.png" align-h="center" alt=""
      /></span>
      <b-button class="mobileNavBarButton" @click.stop="drawer = !drawer">
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
      </b-button>
      <span class="mobileNavbarquickProfil"
        ><span class="notifiactions">
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
        </span>
        <span class="userFullname">Kamal EL FATIHI</span>
        <span class="quickProfile">
          <img src="@/assets/quickProfilePictures/quickProfilePic.png" alt="" />
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="11.435"
              viewBox="0 0 20 11.435"
            >
              <path
                class="a"
                d="M16.191,19.235l7.562-7.568a1.423,1.423,0,0,1,2.019,0,1.441,1.441,0,0,1,0,2.025L17.2,22.265a1.427,1.427,0,0,1-1.971.042L6.6,13.7a1.429,1.429,0,0,1,2.019-2.025Z"
                transform="translate(-6.188 -11.246)"
              /></svg
          ></span> </span
      ></span>
    </b-col>
    <b-col
      class="sidebar m-0 p-0 col-3"
      style="max-width: 280px; display: flex; flex-direction: column"
    >
      <Sidebar />
    </b-col>
    <b-col class="webpage m-0 p-0 mt-4 ml-3">
      <Header />
      <b-col class="home-content pt-0" cols="12">
        <router-view />
      </b-col>
    </b-col>
    <v-navigation-drawer
      v-out-click="() => (drawer = false)"
      v-model="drawer"
      absolute
      left
      width="297px"
      style="z-index: 999"
      temporary
    >
      <Sidebar />
    </v-navigation-drawer>
  </b-row>
</template>
<script>
import Header from "@/layout/Header.vue";
import Sidebar from "@/layout/Sidebar.vue";
import OutClick from "vue-click-outside";
export default {
  components: { Header, Sidebar },
  data() {
    return {
      logged: true,
      drawer: false,
      group: null,
      title: "Tableau de bord",
    };
  },
  methods: {},
  watch: {
    group() {
      this.drawer = false;
    },
  },
  directives: {
    OutClick,
  },
  mounted() {
    
  },
};
</script>
<style lang="scss" scoped>
.container-row {
  background: transparent url("../assets/home-cover.png") 0% 0% no-repeat
    padding-box;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 1;
  overflow: hidden;
}
.webpage {
  display: flex;
  flex-direction: column;
}
.home-content {
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  height: auto;
  min-height: 865px;
}
@media screen and (max-width: 1620px) {
  .home-content {
    padding-bottom: 30px;

    max-height: 1114px;
  }
}
::-webkit-scrollbar {
  width: 8px !important;
}
.mobileNavbar {
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 73px;
  .MobileNavbarlogo {
    width: 195px;
    height: 72px;
    float: left;

    img {
      width: 195px;
      height: 72px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      background: transparent padding-box;
      opacity: 1;
    }
  }
}
.mobileNavBarButton {
  float: right;
  margin-top: 13px;
  margin-right: 9px;
  width: 53px;
  height: 40px;
  background-color: #fff !important;
  fill: #4762f17a;
  border-color: #4762f17a !important;
}
@media screen and (max-width: 990px) {
  .sidebar {
    display: none !important;
  }
  .mobileNavbar {
    display: block !important;
  }
}
.notifiactions {
  position: relative;
  width: 32px;
  height: 29px;
  display: inline-block;
  margin-right: 32px;
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
}
.quickProfile {
  position: relative;
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
  }
}
.mobileNavbarquickProfil {
  float: right;
  margin-top: 12px;
  margin-right: 14px;
}
</style>
