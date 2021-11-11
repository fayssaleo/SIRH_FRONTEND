<template>
  <b-col cols="12" style="position: relative" class="pdfContainer">
    <span class="navigationTools">
      <span class="page">page</span>
      <span class="pageNumber">{{ numPage }}</span>
      /
      <span class="pageTotal">{{ numPages }}</span>
      <span class="pageZoomOut pageZoomButton" @click="pdfZoomOut"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13H5v-2h14v2z" /></svg
      ></span>
      <span class="pageZoom"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" /></svg
      ></span>
      <span class="pageZoomInt pageZoomButton" @click="pdfZoomIn"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg
      ></span>
    </span>
    <div class="pdfViewContainer" ref="docViewer">
      <pdf
        v-for="i in numPages"
        :key="i"
        :src="loadingTask"
        :page="i"
        ref="pages"
        class="pdfView"
        :style="{
          width: pageViewerWidth + '%',
        }"
      ></pdf>
    </div>
  </b-col>
</template>
<script>
import pdf from "vue-pdf";

export default {
  props: ["selectedDoc"],
  methods: {
    getPageNumber: function (scrollY) {
      let x = 0,
        y = 0,
        i = 0;
      this.$refs.pages.forEach((element) => {
        y = x;
        x += element.$refs.annotationLayer.clientHeight;
        i++;
        if (y <= scrollY && scrollY <= x) {
          this.numPage = i;
        }
      });
    },
    pdfZoomIn: function () {
      this.pageViewerWidth += 10;
    },
    pdfZoomOut: function () {
      this.pageViewerWidth -= 10;
    },
  },
  data: function () {
    return {
      numPages: undefined,
      numPage: 1,
      pageViewerWidth: 100,
    };
  },
  components: {
    pdf,
  },
  computed: {
    loadingTask: function () {
      return pdf.createLoadingTask("/pdfsFile/" + this.selectedDoc);
    },
  },
  mounted: function () {
    this.loadingTask.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
    console.log("mounted");
    console.log(this.$refs.pages);
  },
  updated: function () {
    this.loadingTask.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
    let thisFunc = (e) => this.getPageNumber(e);
    if (this.$refs.pages != undefined)
      this.$refs.docViewer.addEventListener("scroll", function (e) {
        thisFunc(e.target.scrollTop);
      });
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px !important;
  position: absolute;
}
.pdfViewContainer {
  max-height: 678px;
  min-height: 678px;
  overflow: auto;
  background-color: #707070;
  position: relative;
  text-align: center;
  .pdfView {
    height: 100%;
    display: inline-block !important;
    width: 100%;
    background-color: transparent;
  }
}
.navigationTools {
  display: none;
  position: absolute;
  z-index: 1;
  bottom: 30px;
  right: 467px;
  width: 245px;
  background-color: #212529e6;
  text-align: center;
  border-radius: 4px;
  height: 39px;
  padding-top: 5px;
  color: white;
  user-select: none;
  span {
    display: inline-block;
    margin: 0 3px;
  }
  svg {
    fill: white;
  }
  .pageZoomButton {
    cursor: pointer;
  }
  .pageZoomButton:hover {
    background-color: rgba(255, 255, 255, 0.27);
    border-radius: 20px;
  }
  .pageZoomButton:active {
    background-color: rgba(255, 255, 255, 0.619);
    border-radius: 20px;
  }
  .pageSeparator {
    display: inline-block;
    height: 20px;
    border: 1px solid white;
    width: 2px;
  }
  .pageTotal::after {
    content: "";
    height: 20px;
    background-color: white;
  }
}
.pdfContainer:hover {
  .navigationTools {
    display: inline-block;
  }
}
.pageTotal {
  border-right: 1px solid #ffffff38;
  padding-right: 12px;
  height: 29px;
}
</style>
