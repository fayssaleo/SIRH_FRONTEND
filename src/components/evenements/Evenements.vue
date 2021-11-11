<template>
  <b-row class="events-container">
    <AddEventModal
      v-model="dialog2"
      v-if="dialog2"
      :selectedDay="selectedDay"
    />

    <b-col class="p-0" cols="4">
      <b-row class="eventsTopBar pb-0 mb-0 pr-0 mr-0"> </b-row>
      <b-row class="EventListContainer events pt-0 pb-0 pr-0 mr-0">
        <span
          v-if="
            eventsFilteredListByDaySelection.length == 0 && selectedDay != null
          "
          class="ShowAddButtpnWhenEmpty"
          @click="
            dialog2 = !dialog2;
            addEvent();
          "
          >Ajouter un evènements à {{ selectedDay }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg
        ></span>
        <span
          v-if="
            eventsFilteredListByDaySelection.length == 0 && selectedDay == null
          "
          class="SelectionnerUnJour"
          >Selectionner un jour !
        </span>
        <slot v-for="event in eventsFilteredListByDaySelection">
          <b-col
            class="eventCadre pr-0"
            style="height: 584px"
            cols="12"
            :key="event.id + 'cadre'"
          >
            <Evenement
              :id="event.id"
              :titre="event.titre"
              :lieu="event.lieu"
              :date="event.date"
              :text="event.text"
              :image="event.image"
              :time="event.time"
              :actif="event.actif"
              :couleur="event.couleur"
              :categorie_name="event.categorie_name"
              :evenements_categorie_id="event.evenements_categorie_id"
              :invites="event.invites"
            />
          </b-col>
          <b-col
            cols="8"
            class="eventSepartor pt-0 pb-0 m-0"
            :key="event.id + 'separator'"
          >
          </b-col>
        </slot>
      </b-row>
      <b-row class="eventsBottomBar pt-0 mt-0 pr-0 mr-0"> </b-row>
    </b-col>
    <b-col class="CalendarContainer">
      <b-col cols="12" class="pl-0">
        <b-col class="pb-0 actionBar pr-0 pl-3" cols="12">
          <b-row>
            <b-col>
              <span
                :class="filteredBy == 'events' ? 'BlueButton' : 'whiteButton'"
                @click="setFilterBy('events')"
                style="width: 100% !important"
                >Evènements</span
              >
            </b-col>
            <b-col class="text-center" v-if="filteredBy == 'events'">
              <b-form-select
                v-model="selectedCategorie"
                class="colorFilter"
                :style="{ color: selectedCategorie.couleur }"
              >
                <b-form-select-option
                  :value="{
                    couleur: '#4762f1',
                  }"
                  >Tous</b-form-select-option
                >
                <b-form-select-option
                  :value="categorie"
                  :style="{ color: categorie.couleur + '!important' }"
                  v-for="categorie in getEvenements_categories"
                  :key="categorie.id"
                  >{{ categorie.nom }}</b-form-select-option
                >
              </b-form-select>
            </b-col>
            <b-col>
              <span
                :class="filteredBy == 'conges' ? 'BlueButton' : 'whiteButton'"
                @click="setFilterBy('conges')"
                style="width: 100% !important"
                >Congés</span
              >
            </b-col>
            <b-col>
              <span
                :class="filteredBy == 'archive' ? 'BlueButton' : 'whiteButton'"
                @click="setFilterBy('archive')"
                style="width: 100% !important"
                >Archive</span
              >
            </b-col>
            <b-col class="text-center" v-if="filteredBy == 'archive'">
              <b-form-select
                v-model="selectedCategorie"
                class="colorFilter"
                :style="{ color: selectedCategorie.couleur }"
              >
                <b-form-select-option
                  :value="{
                    couleur: '#4762f1',
                  }"
                  >Tous</b-form-select-option
                >
                <b-form-select-option
                  :value="categorie"
                  :style="{ color: categorie.couleur + '!important' }"
                  v-for="categorie in getEvenements_categories"
                  :key="categorie.id"
                  >{{ categorie.nom }}</b-form-select-option
                >
              </b-form-select>
            </b-col>
            <b-col>
              <b-tooltip target="tooltip-target-2" triggers="hover">
                Gérer les categories
              </b-tooltip>
              <span
                class="addEvents setting"
                id="tooltip-target-2"
                @click="
                  dialog3 = !dialog3;
                  addEvent();
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="48px"
                  viewBox="0 0 24 24"
                  width="48px"
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
              <b-tooltip
                target="tooltip-target-1"
                triggers="hover"
                v-if="selectedDay != null"
              >
                Ajouter un evènements à {{ selectedDay }}
              </b-tooltip>
              <span
                class="addEvents"
                @click="
                  dialog2 = !dialog2;
                  addEvent();
                "
                id="tooltip-target-1"
                v-if="selectedDay != null"
              >
                <svg
                  data-v-24d9b362=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="50"
                  height="50"
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
            </b-col>
          </b-row>
        </b-col>
      </b-col>
      <b-col cols="12" class="calendar">
        <vc-calendar
          :attributes="attributes"
          title-position="left"
          is-expanded
          height="100%"
          @dayclick="onDateChange"
          v-model="selectedDay"
          @dayfocusout="dayfocusoutFunction"
        />
      </b-col>
    </b-col>
    <EvenementCategorieEditer v-model="dialog3" v-if="dialog3" />
  </b-row>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Evenement from "./Evenement";
import AddEventModal from "./AddEventModal";
import EvenementCategorieEditer from "./EvenementCategorieEditer";

export default {
  data() {
    return {
      filteredBy: "events",
      selectedDay: null,
      dialog2: false,
      dialog3: false,
      addButtonIsClickedDontHideIt: false,
      selectedCategorie: {
        couleur: "#4762f1",
      },
    };
  },
  components: { Evenement, AddEventModal, EvenementCategorieEditer },
  computed: {
    ...mapGetters([
      "getEvents",
      "getValideDemmandeConges",
      "getArchivedEvents",
      "getEvenements_categories",
    ]),
    attributes: function () {
      return [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
        {
          key: "today2",
          highlight: {
            color: "red",
            style: "background-color:red",
          },

          dates:
            this.selectedDay != null
              ? this.selectedDay.split("/").reverse().join("-")
              : "",
        },
        ...this.calendarList,
      ];
    },
    eventsListForCalendar: function () {
      let thisEvenets =
        this.selectedCategorie.couleur != "#4762f1"
          ? this.getEvents.filter(
              (e) => e.evenements_categorie_id == this.selectedCategorie.id
            )
          : [...this.getEvents];

      return thisEvenets.map((e) => {
        return {
          bar: e.couleur,
          popover: {
            label: e.time + " - Devcorp - " + e.titre,
          },
          dates: [
            new Date(e.date.split("/").reverse().join("-")), // Jan 1st
            //// Jan 15th
          ],
        };
      });
    },
    disabledEventsList: function () {
      let thisEvenets =
        this.selectedCategorie.couleur != "#4762f1"
          ? this.getArchivedEvents.filter(
              (e) => e.evenements_categorie_id == this.selectedCategorie.id
            )
          : [...this.getArchivedEvents];
      return thisEvenets.map((e) => {
        return {
          bar: e.couleur,
          popover: {
            label: e.time + " - Devcorp - " + e.titre,
          },
          dates: [
            new Date(e.date.split("/").reverse().join("-")), // Jan 1st
            //// Jan 15th
          ],
        };
      });
    },
    congesList: function () {
      console.log(this.getValideDemmandeConges);
      return this.getValideDemmandeConges.map((e) => {
        return {
          bar: "green",
          popover: {
            label: "pfayssal - " + e.nombreDeJours + " jrs",
          },
          dates: [
            new Date(e.dateDeDebut.split("/").reverse().join("-")), // Jan 1st
            //// Jan 15th
          ],
        };
      });
    },
    calendarList: function () {
      if (this.filteredBy == "events") {
        return this.eventsListForCalendar;
      } else if (this.filteredBy == "conges") {
        return this.congesList;
      } else return this.disabledEventsList;
    },
    eventsFilteredListByDaySelection: function () {
      if (this.selectedDay != null) {
        let eventsSortedList = [...this.showList].sort(function (a, b) {
          return (
            new Date(a["date"].split("/").reverse().join("-")) -
            new Date(b["date"].split("/").reverse().join("-"))
          );
        });
        return eventsSortedList.filter(
          (e) =>
            new Date(e["date"].split("/").reverse().join("-")) >=
              new Date(this.selectedDay.split("/").reverse().join("-")) &&
            new Date(e["date"].split("/").reverse().join("-")) <=
              this.addDays(
                new Date(this.selectedDay.split("/").reverse().join("-")),
                7
              )
        );
      } else {
        let eventsSortedList = [...this.showList].sort(function (a, b) {
          return (
            new Date(a["date"].split("/").reverse().join("-")) -
            new Date(b["date"].split("/").reverse().join("-"))
          );
        });
        return eventsSortedList.filter(
          (e) =>
            new Date(e["date"].split("/").reverse().join("-")) >=
              new Date(
                this.dateFormatter(new Date()).split("/").reverse().join("-")
              ) &&
            new Date(e["date"].split("/").reverse().join("-")) <=
              this.addDays(new Date(), 7)
        );
      }
    },
    showList() {
      if (this.filteredBy == "events") {
        return this.selectedCategorie.couleur != "#4762f1"
          ? this.getEvents.filter(
              (e) => e.evenements_categorie_id == this.selectedCategorie.id
            )
          : [...this.getEvents];
      } else
        return this.selectedCategorie.couleur != "#4762f1"
          ? this.getArchivedEvents.filter(
              (e) => e.evenements_categorie_id == this.selectedCategorie.id
            )
          : [...this.getArchivedEvents];
    },
  },
  methods: {
    ...mapActions([
      "setEvenements_categoriesAction",
      "setEventsAction",
      "getEventImagesFolderAction",
      "getCollaborateursAction",
      "getPhotosFolderAction",
    ]),
    setFilterBy: function (filter) {
      if (this.filteredBy == filter) {
        this.filteredBy = "events";
      } else {
        this.filteredBy = filter;
      }
    },
    onDateChange: function (day) {
      this.selectedDay = day.id.split("-").reverse().join("/");
      console.log(this.selectedDay);
      //this.dialog = true;
    },
    addDays: function (date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    dayfocusoutFunction: function () {},
    dateFormatter: function (date) {
      var dd = String(date.getDate()).padStart(2, "0");
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();

      date = dd + "/" + mm + "/" + yyyy;
      return date;
    },
    addEvent: function () {
      this.addButtonIsClickedDontHideIt = true;
    },
  },
  mounted: function () {
    this.setEvenements_categoriesAction();
    this.setEventsAction();
    this.getEventImagesFolderAction();
    this.getCollaborateursAction();
    this.getPhotosFolderAction();

  },
};
</script>
<style lang="scss" scoped>
.EventListContainer {
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 10px;
  /* box-shadow: 0px 3px 23px #00000029; */
  overflow-y: auto;
  overflow-x: hidden;
  height: 797px;
}
.CalendarContainer {
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 10px;
  box-shadow: 0px 3px 23px #00000029;
  max-height: 105%;
  border-radius: 27px;
  max-height: 846px;
}
.eventsTopBar {
  border-radius: 27px 27px 0 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 25px;
  box-shadow: 0px 3px 23px #00000029;
  margin: 10px;
  margin-bottom: -12px !important;
}
.eventsBottomBar {
  background: #ffffff 0% 0% no-repeat padding-box;
  margin-top: 0;
  box-shadow: 0px 3px 23px #00000029;
  height: 25px;
  margin: 10px;
  border-radius: 0 0 27px 27px;
  margin-top: -11px !important;
}
.eventSepartor {
  border-bottom: 1px dashed gray;
  margin: 0 auto !important;
}

::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.actionBar {
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  margin-bottom: 20px;
  text-align: left;
  span {
    display: inline-block;
    width: 28%;
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
  }
  .BlueButton:hover {
    background-color: #4762f1db;
  }
  .BlueButton:active {
    background-color: gray;
  }
}
.AddNewEvent {
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  margin-bottom: 20px;
  display: inline-block;
  width: unset !important;
  height: unset !important;
  text-align: center;
  padding-top: 13px;
  cursor: pointer;
  user-select: none;
  margin: 0 32px;
  height: 56px;
  background: 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #000000c1;
  border-radius: 14px;
  color: black;
  position: absolute;
  float: right;
}
.addEvents {
  width: 40px !important;
  display: inline-block;
  height: 41px !important;
  cursor: pointer;
  margin: 0 !important;
  float: right;
  margin-right: 21px !important;
  padding-top: 0 !important;
}
.addEvents:hover {
  .aaa {
    fill: #4763f1b9 !important;
  }
}
.addEvents:active {
  .aaa {
    fill: #4763f1 !important;
  }
}
.ShowAddButtpnWhenEmpty {
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  margin-bottom: 20px;
  display: inline-block;
  width: unset !important;
  height: 38px !important;
  text-align: center;
  padding: 6px 14px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 32px;
  height: 56px;
  background: 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px #4762f1;
  border-radius: 13px;
  background-color: #4762f1;
  color: white;
  margin: 0 auto !important;
  svg {
    fill: #ffffff;
  }
}
.SelectionnerUnJour {
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  margin-bottom: 20px;
  display: inline-block;
  width: unset !important;
  height: 38px !important;
  text-align: center;
  padding: 6px 14px 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 32px;
  height: 56px;
  background: 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 9px rgba(128, 128, 128, 0.672);
  border-radius: 13px;
  background-color: gray;
  color: white;
  margin: 0 auto !important;
  svg {
    fill: #ffffff;
  }
}
.setting {
  float: left;
  svg {
    fill: #4762f1;
  }
}
.setting:hover {
  svg {
    fill: #4763f196;
  }
}
.setting:active {
  svg {
    fill: #4763f1;
  }
}
@media screen and (max-height: 959px) {
  .events-container {
    max-height: 1031px;
    overflow-y: auto;
  }
}
.colorFilter {
  height: 56px;
  box-shadow: 0px 5px 9px #4762f17a;
  color: #4762f1;
  border-radius: 14px;
  width: 100%;
  font: normal normal bold 18px/27px Poppins;
  * {
    font: normal normal bold 18px/27px Poppins;
  }
}
</style>
