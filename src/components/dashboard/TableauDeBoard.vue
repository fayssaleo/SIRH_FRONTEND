<template>
  <b-row class="dashbord-container p-4">
    <b-col class="dashboradColumn eventsSection section p-0">
      <EventsSection />
    </b-col>
    <b-col
      class="dashboradColumn p-0"
      style="display: flex; flex-direction: column; max-height: 97%"
    >
      <b-row class="section calendarTableauDeBoard p-4">
        <b-col cols="12" class="p-0"> <EventsCalendar /> </b-col>
      </b-row>
      <b-row class="section p-4">
        <b-col cols="12" class="p-0"> <WikiDevcorp /> </b-col>
      </b-row>
    </b-col>
    <b-col class="dashboradColumn p-0 last-section">
      <b-row class="section p-4 first" style="height: 74% !important">
        <b-col cols="12" class="p-0"> <NewsSection /> </b-col>
      </b-row>
      <b-row
        class="section p-4 last"
        style="height: 25%; padding-top: 5px !important"
      >
        <b-col cols="12" class="p-0"><MediaDevcorp /> </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import EventsSection from "@/components/dashboard/EventsSection.vue";
import EventsCalendar from "@/components/dashboard/EventsCalendar.vue";
import WikiDevcorp from "@/components/dashboard/WikiDevcorp.vue";
import NewsSection from "@/components/dashboard/NewsSection.vue";
import MediaDevcorp from "@/components/dashboard/MediaDevcorp.vue";

export default {
  name: "TableauDeBoard",
  components: {
    EventsSection,
    EventsCalendar,
    WikiDevcorp,
    NewsSection,
    MediaDevcorp,
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@media screen and (max-width: 1620px) {
  .dashbord-container {
    overflow: auto !important;
  }
}
.dashbord-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: calc(100% - 122px) !important;
  overflow: auto !important;
  min-height: calc(100% - 70px) !important;
  .dashboradColumn {
    min-height: 820.02px;
    max-height: 95%;
    flex: 30%;
  }
  .section {
    border-radius: 27px;
    opacity: 1;
    background: #ffffff 0% 0% no-repeat padding-box;
    margin: 10px;
    box-shadow: 0px 3px 23px #00000029;
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 1620px) {
  .dashbord-container {
    .dashboradColumn {
      max-width: 50%;
    }
  }
  .last-section {
    flex: 100% !important;
    max-width: 100%;
    display: flex;
  }
  .first {
    display: block;
    min-width: 98%;
    height: 86% !important;
  }
  .last {
    display: block;
    min-width: 95%;
  }
  .calendarOnHome {
    min-height: 395px;
  }
  .eventsSection {
  }
}
@media screen and (max-width: 1350px) {
  .dashbord-container {
    .dashboradColumn {
      max-width: 97%;
    }
    width: 100%;
    .section {
      flex: 100%;
      max-width: 100%;
      width: 100%;
    }
  }
  .last-section {
    flex: 100% !important;
    max-width: 100%;
    display: flex;
    margin-top: 30px;
  }
  .first {
    max-width: 50% !important;
    width: 50% !important;
    flex: 50%;
    min-width: 50% !important;
    height: 773px !important;
  }
  .last {
    max-width: 50% !important;
    width: 50% !important;
    flex: 50%;
    min-width: 48% !important;
    height: 30% !important;
  }
}

@media screen and (max-width: 1135px) {
  .first {
    height: 773px !important;
  }
}
@media screen and (max-width: 1150px) {
  .dashboard-container {
    padding: 0;
  }
}
.calendarTableauDeBoard {
  min-height: 373px;
}
</style>
