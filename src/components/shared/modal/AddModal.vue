<template>
  <v-app class="addModal">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1000px" height="1200px">
        <component :is="getCurrentComponentByRoute" @closeModal="closeDialog" />
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import AddNewsModal from "@/components/actualites/AddNewsModal.vue";
import AddCollaborateurModal from "@/components/collaborateurs/AddCollaborateurModal.vue";

export default {
  name: "AddSomething",
  props: ["value"],
  components: {
    AddNewsModal: AddNewsModal,
    AddCollaborateurModal: AddCollaborateurModal,
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    getCurrentComponentByRoute() {
      let componentName = "";
      switch (this.$route.name) {
        case "Actualites":
          componentName = "AddNewsModal";
          break;
        case "Collaborateurs":
          componentName = "AddCollaborateurModal";
          break;
        default:
          break;
      }
      return componentName;
    },
  },
};
</script>
<style lang="scss" scoped>
.addModal {
  border-radius: 20px;
}
</style>
