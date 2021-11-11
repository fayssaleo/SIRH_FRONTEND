<template>
  <div v-bind="$attrs" v-on="$listeners" :class="{ blue: blue }">
    <svg
      data-v-24d9b362=""
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="55"
      height="55"
      viewBox="11 14 53 40"
    >
      <defs>
        <svg:style></svg:style>
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
  </div>
</template>

<script>
export default {
  props: {
    blue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.aaa {
  fill: #4762f1;
}
.bbb {
  fill: #fff;
}
.ccc {
  filter: url(#a);
}

.blue {
  .aaa {
    fill: black;
  }
  .bbb {
    fill: #fff;
  }
  .ccc {
    filter: url(#a);
  }
}
</style>
