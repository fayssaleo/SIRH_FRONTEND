<template>
  <b-row>
    <b-col class="pt-0 mt-0 mb-0 pb-0" cols="12">
      <img
        class="newsPic"
        :src="require('../../assets/dashboardPics/' + newImage)"
        alt=""
        :style="{
          height: height,
        }"
    /></b-col>
    <b-col
      class="newTitle pt-0 mt-1 mb-0 pb-0"
      cols="12"
      :style="{ font: font }"
      >{{ newsTitle.toUpperCase() }}
    </b-col>
    <b-col
      class="newsDate pt-2 mt-0 mb-0 pb-0"
      cols="12"
      :style="{ color: color }"
      ><span class="pr-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          style="fill: #87b0e6"
        >
          <g transform="translate(-3.375 -3.375)">
            <path
              class="a"
              d="M14.864,3.375a11.5,11.5,0,1,0,11.511,11.5A11.5,11.5,0,0,0,14.864,3.375Zm.011,20.7a9.2,9.2,0,1,1,9.2-9.2A9.2,9.2,0,0,1,14.875,24.075Z"
            />
            <path
              class="a"
              d="M18.263,10.688H16.538v6.9l6.038,3.621.862-1.415-5.175-3.069Z"
              transform="translate(-2.813 -1.563)"
            />
          </g></svg></span
      ><span class="newDate">{{ newsDate }}</span></b-col
    >
  </b-row>
</template>
<script>
export default {
  props: ["newsTitle", "newImage", "newsDate", "height", "font", "color"],
};
</script>

<style lang="scss" scoped>
.newsPic {
  opacity: 1;
  width: 101%;
  height: 162px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 11px;
  opacity: 1;
}
.newTitle {
  width: 438px;
  text-align: left;
  letter-spacing: 0px;
  color: #010101;
  overflow-wrap: break-word;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 1;
}
.newDate {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 16px/25px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
}
@media screen and (max-width: 1600px) {
  .newsPic {
    width: 103%;
    height: 217px;
  }
}
@media screen and (max-width: 1350px) {
  .newsPic {
    width: 103%;
  }
}
</style>
