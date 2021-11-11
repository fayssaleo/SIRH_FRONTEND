<template>
  <b-row class="p-0">
    <b-col cols="12">
      <span class="media-title">Media Devcorp</span>
      <span class="seeAllmedias">Toute les medias</span>
    </b-col>
    <b-col class="mt-0 pt-0" cols="12">
      <v-row class="gallery">
        <v-col
          v-for="n in 8"
          :key="n"
          class="d-flex child-flex gellery-pic-container p-0 m-0"
          cols="3"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2 gellery-pic m-1"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </b-col>
  </b-row>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.media-title {
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
.seeAllmedias {
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
.gellery-pic {
  width: 94px;
  height: 75px;
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
}
.gellery-pic:hover {
  box-shadow: 0px 3px 23px #00000029;
  border: 2px;
  border-radius: 14px;
}
</style>
