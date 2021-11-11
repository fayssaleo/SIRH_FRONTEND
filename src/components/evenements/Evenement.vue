<template>
  <b-row class="event-container mr-0 pr-0">
    <b-col class="container pr-0" cols="12">
      <span class="eventPic">
        <img
          :src="require('../../assets/eventsPictures/evenement_defaut.png')"
          alt=""
          v-if="image == null"
        />
        <img :src="getEventImagesFolder + '/' + image" alt="" v-else />
      </span>
    </b-col>
    <b-col cols="12 pr-0" class="pt-0">
      <span class="eventTitle">{{ titre }}</span>
    </b-col>
    <b-col class="placeAndDateContainer pt-0 pb-0 pr-0" cols="12">
      <span class="mb-3">
        <span class="icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.24"
            height="20.091"
            viewBox="0 0 16.24 20.091"
          >
            <g transform="translate(-46.848)">
              <g transform="translate(46.848)">
                <path
                  class="a"
                  d="M146.253,97.4a4.2,4.2,0,1,0,4.2,4.2A4.206,4.206,0,0,0,146.253,97.4Zm0,7.4a3.194,3.194,0,1,1,3.194-3.194A3.2,3.2,0,0,1,146.253,104.8Z"
                  transform="translate(-138.139 -93.397)"
                />
                <path
                  class="a"
                  d="M54.962,0c-.095,0-.193,0-.288,0a8.112,8.112,0,0,0-7.682,9.634,2.571,2.571,0,0,0,.058.271,7.759,7.759,0,0,0,.543,1.595,22.469,22.469,0,0,0,6.634,8.319,1.169,1.169,0,0,0,1.488,0,22.5,22.5,0,0,0,6.626-8.3,7.969,7.969,0,0,0,.547-1.607c.025-.1.041-.181.053-.259A8.113,8.113,0,0,0,54.962,0Zm6.979,9.482c0,.008-.012.078-.041.206a7.393,7.393,0,0,1-.485,1.426,21.473,21.473,0,0,1-6.346,7.933.166.166,0,0,1-.1.037.174.174,0,0,1-.1-.037A21.518,21.518,0,0,1,48.509,11.1a7.08,7.08,0,0,1-.481-1.414c-.025-.107-.037-.173-.041-.193s0-.016,0-.025a7.239,7.239,0,0,1-.095-2.043,7.109,7.109,0,0,1,14.184.695A7.375,7.375,0,0,1,61.941,9.482Z"
                  transform="translate(-46.848)"
                />
              </g>
            </g></svg
        ></span>
        <span class="text">Lieu :</span>
        <span class="value" style="margin-right: 12px">{{ lieu }}</span>
      </span>
      <br />
      <span>
        <span class="icon" style="margin-right: 15px"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.479"
            height="16.467"
            viewBox="0 0 18.479 16.467"
          >
            <g transform="translate(0 -20.9)">
              <g transform="translate(0 20.9)">
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M16.564,22.3H15.4v-.919a.481.481,0,1,0-.963,0V22.3H9.723v-.919a.481.481,0,1,0-.963,0V22.3H4v-.919a.481.481,0,1,0-.963,0V22.3H1.921A1.948,1.948,0,0,0,0,24.25V35.442a1.921,1.921,0,0,0,1.921,1.925H16.559a1.92,1.92,0,0,0,1.921-1.921V24.25A1.941,1.941,0,0,0,16.564,22.3Zm.958,13.141a.96.96,0,0,1-.953.963H1.921a.957.957,0,0,1-.958-.958V24.25a.979.979,0,0,1,.958-.987H3.033v.7a.481.481,0,1,0,.963,0v-.7H8.761v.7a.481.481,0,1,0,.963,0v-.7h4.717v.7a.481.481,0,1,0,.963,0v-.7h1.16a.979.979,0,0,1,.958.987Z"
                    transform="translate(0 -20.9)"
                  />
                </g>
              </g>
              <g transform="translate(6.652 26.392)">
                <path
                  class="a"
                  d="M139.524,135h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                  transform="translate(-138.2 -135)"
                />
              </g>
              <g transform="translate(10.003 26.392)">
                <path
                  class="a"
                  d="M209.124,135h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                  transform="translate(-207.8 -135)"
                />
              </g>
              <g transform="translate(13.382 26.392)">
                <path
                  class="a"
                  d="M279.324,135h-.842a.481.481,0,0,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                  transform="translate(-278 -135)"
                />
              </g>
              <g transform="translate(6.652 29.714)">
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M139.524,204h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                    transform="translate(-138.2 -204)"
                  />
                </g>
              </g>
              <g transform="translate(3.273 29.714)">
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M69.329,204h-.847a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                    transform="translate(-68 -204)"
                  />
                </g>
              </g>
              <g transform="translate(10.003 29.714)">
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M209.124,204h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                    transform="translate(-207.8 -204)"
                  />
                </g>
              </g>
              <g transform="translate(13.382 29.714)">
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M279.324,204h-.842a.481.481,0,0,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                    transform="translate(-278 -204)"
                  />
                </g>
              </g>
              <g transform="translate(6.652 32.987)">
                <path
                  class="a"
                  d="M139.524,272h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                  transform="translate(-138.2 -272)"
                />
              </g>
              <g transform="translate(3.273 32.987)">
                <path
                  class="a"
                  d="M69.329,272h-.847a.481.481,0,1,0,0,.963h.842a.481.481,0,0,0,0-.963Z"
                  transform="translate(-68 -272)"
                />
              </g>
              <g transform="translate(10.003 32.987)">
                <path
                  class="a"
                  d="M209.124,272h-.842a.481.481,0,1,0,0,.963h.842a.481.481,0,1,0,0-.963Z"
                  transform="translate(-207.8 -272)"
                />
              </g>
            </g></svg
        ></span>
        <span class="text" style="margin-right: 12px">Date :</span>
        <span class="value" style="margin-right: 12px">{{ date }}</span>

        <span class="icon" style="margin-right: 15px"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg
        ></span>
        <span class="text" style="margin-right: 12px">Heure :</span>
        <span class="value" style="margin-right: 12px">{{ time }}</span>
      </span>
    </b-col>
    <b-col cols="12">
      <span class="eventText pr-0">{{ text }}</span>
    </b-col>
    <b-col class="pb-0 actionBar pr-0" cols="12">
      <span class="whiteButton">Absent</span>
      <span class="BlueButton">Présent</span>
      <span class="whiteButton" @click="openDetailsModal">Details</span>
    </b-col>
    <b-col class="d-none">
      <DayDetailsModal
        v-model="dialog"
        :modalEventid="id"
        :modalEventTitle="titre"
        :modalEventImage="image"
        :modalEventDate="date"
        :modalEventTime="time"
        :modalEventPlace="lieu"
        :modalEventText="text"
        :couleur="couleur"
        :categorie_name="categorie_name"
        :actif="actif"
        :evenements_categorie_id="evenements_categorie_id"
        :invites="invites"
        @openDetailsModal="openDetailsModal"
      />
    </b-col>
  </b-row>
</template>
<script>
import DayDetailsModal from "./DayDetailsModal";
import { mapGetters } from "vuex";

export default {
  components: { DayDetailsModal },
  data() {
    return {
      dialog: false,
    };
  },
  props: [
    "id",
    "titre",
    "lieu",
    "date",
    "time",
    "text",
    "image",
    "actif",
    "couleur",
    "categorie_name",
    "evenements_categorie_id",
    "invites",
  ],
  computed: {
    ...mapGetters(["getEventImagesFolder"]),
  },
  methods: {
    openDetailsModal() {
      console.log("isClicked");
      this.dialog = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.event-container {
  opacity: 1;
  width: 100%;
}
.eventPic {
  display: inline-block;
  width: 100%;
  img {
    border: 1px solid #707070;
    border-radius: 12px;
    width: 100%;
    height: 211px;
  }
}
.eventTitle {
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #010101;
  font-size: 24px;
}
.placeAndDateContainer {
  span {
    display: inline-block;
  }
}
.icon {
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
  fill: #4762f1;
  margin-right: 17px;
  flex: 1;
  svg {
    fill: #4762f1;
  }
}
.text {
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #010101;
  opacity: 1;
  margin-right: 21px;
  flex: 1;
}
.value {
  color: var(--unnamed-color-4762f1);
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #4762f1;
  opacity: 1;
  flex: 1;
}
.eventText {
  text-align: left;
  font: normal normal normal 13px/15px Poppins;
  letter-spacing: 0px;
  color: #00000087;
  opacity: 1;
  display: inline-block;
  white-space: break-spaces;
  text-overflow: ellipsis;
  overflow-y: auto;
  max-height: 232px;
  line-height: 25px;
}
.actionBar {
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  margin-bottom: 20px;
  text-align: center;
  span {
    display: inline-block;
    width: 30%;
    height: 56px;
    text-align: center;
    padding-top: 13px;
    cursor: pointer;
    user-select: none;
  }

  .whiteButton {
    height: 56px;
    background: 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 9px #4762f17a;
    color: #4762f1;
    border-radius: 14px;
  }
  .whiteButton:hover {
    background-color: rgba(128, 128, 128, 0.345);
  }
  .whiteButton:active {
    background-color: #80808080;
    color: #4763f190;
  }
  .BlueButton {
    height: 56px;
    background: 0% 0% no-repeat padding-box;
    background: #4762f1 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 9px #4763f1c1;
    border-radius: 14px;
    color: #ffffff;
    margin: 0 13px;
  }
  .BlueButton:hover {
    background-color: #4762f1db;
  }
  .BlueButton:active {
    background-color: gray;
  }
}
</style>
