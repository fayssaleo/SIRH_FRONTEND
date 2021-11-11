export default {
  computed: {
    isRequired() {
      return [(v) => (v ? !!v.toString() || "Champs est obligatoire" : "")];
    },
  },
};
