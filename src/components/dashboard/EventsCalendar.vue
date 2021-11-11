<template>
  <b-row class="eventsCallendar">
    <b-col class="title" cols="12">
      <span class="calendar-title">Calendrier des événements</span>
      <router-link to="/evenements">
        <b-button class="addButton"><i class="fas fa-plus"></i></b-button>
      </router-link>
    </b-col>
    <b-col class="callenderDiv"
      ><vc-calendar :attributes="attributes" is-expanded height="100%"
    /></b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
        {
          bar: "orange",
          popover: {
            label: "Devcorp - BBQ Party !",
          },
          dates: [
            new Date(2021, 3, 15), // Jan 1st
            new Date(2021, 3, 10), // Jan 10th
            new Date(2021, 3, 21), // Jan 22nd
          ],
        },
        {
          bar: "blue",
          popover: {
            label: "Devcorp - Event example 1 !",
          },
          dates: [
            new Date(2021, 3, 13), // Jan 1st
            new Date(2021, 3, 10), // Jan 10th
            new Date(2021, 3, 22), //// Jan 15th
          ],
        },
        {
          bar: "green",
          popover: {
            label: "Devcorp - Event example 2 !",
          },
          dates: [
            new Date(2021, 3, 14), // Jan 1st
            new Date(2021, 3, 11), // Jan 10th
            new Date(2021, 4, 22), // Jan 15th
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.eventsCallendar {
  display: flex;
  flex-flow: column;
}
.calendar-title {
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
.addButton {
  color: white;
  float: right;
  background-color: #4762f1;
  border-radius: 25px;
}
.callenderDiv {
  min-height: 100%;
}
@media screen and (max-width: 1777px) {
  .calendar-title {
    font: normal normal normal 18px/35px Poppins;
  }
}
</style>
