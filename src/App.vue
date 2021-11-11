<template>
  <b-container id="app" fluid class="p-0">
    <Home v-if="getCurrentUser" />
    <Login v-else />
  </b-container>
</template>

<style lang="scss">
* {
  margin: 0;
}
#app {
  height: 100vh;
}
::-webkit-scrollbar {
  width: 0px !important;
}
</style>
<script>
import Home from "@/components/Home.vue";
import Login from "@/views/auth/Login.vue";
import { mapGetters } from "vuex";
export default {
  components: { Home, Login },
  data() {
    return {
      logged: false,
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
};
</script>
