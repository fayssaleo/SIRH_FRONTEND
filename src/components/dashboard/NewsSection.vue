<template>
  <b-row class="p-0">
    <b-col cols="12">
      <span class="title">Actualités</span>
      <span class="pageWikiDevcorp">
        <router-link to="/actualites"> Voir tous les actualités </router-link>
      </span>
    </b-col>
    <b-col class="eventsList mb-2" cols="12">
      <b-col class="event event mb-2" cols="12">
        <News
          :newsTitle="'Félicitations à notre collègue Kawthat Nouini d avoir donné naissance à bébé FARISS'"
          :newImage="'a.png'"
          :newsDate="'14/04/2021 - 16:20'"
        />
      </b-col>
      <b-col class="event mb-2" cols="12">
        <News
          :newsTitle="'Félicitations à notre collègue Kawthat Nouini d avoir donné naissance à bébé FARISS'"
          :newImage="'b.png'"
          :newsDate="'14/04/2021 - 16:20'"
        />
      </b-col>
      <b-col class="event mb-2" cols="12">
        <News
          :newsTitle="'Félicitations à notre collègue Kawthat Nouini d avoir donné naissance à bébé FARISS'"
          :newImage="'c.png'"
          :newsDate="'14/04/2021 - 16:20'"
        />
      </b-col>
      <b-col class="event mb-2" cols="12">
        <News
          :newsTitle="'Félicitations à notre collègue Kawthat Nouini d avoir donné naissance à bébé FARISS'"
          :newImage="'d.png'"
          :newsDate="'14/04/2021 - 16:20'"
        />
      </b-col>
    </b-col>
  </b-row>
</template>
<script>
import News from "@/components/dashboard/News.vue";

export default {
  components: { News },
};
</script>

<style lang="scss" scoped>
.title {
  width: 154px;
  height: 33px;
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
}
.pageWikiDevcorp {
  width: 242px;
  height: 23px;
  text-align: right;
  text-decoration: underline;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  float: right;
  margin-top: 6px;
  a {
    color: #bfbfbf;
  }
}
.eventsList {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 522px;
}
.event:hover {
  cursor: pointer;
  * {
    font-weight: 700;
  }
}
::-webkit-scrollbar {
  width: 8px !important;
}
.event{
  flex-basis: initial;
}
</style>
