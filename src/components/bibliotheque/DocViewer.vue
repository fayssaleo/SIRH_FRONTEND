<template>
  <VueDocPreview :value="'/pdfsFile/' + selectedDoc" type="office" />
</template>
<script>
import VueDocPreview from "vue-doc-preview";

export default {
  props: ["selectedDoc"],
  components: {
    VueDocPreview,
  },
};
</script>
