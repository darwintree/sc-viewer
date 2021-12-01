<template>
  <div>
    <n-tag type="danger" v-if="error !== ''">{{ this.error }}</n-tag>
    <story-line
      v-for="(line, index) in csv"
      :key="index"
      v-bind:line="line"
      v-bind:index="index"
      v-bind:len="csv.length"
    ></story-line>
    <n-space vertical justify="center" class="fixed-button show-content">
      <n-button  @click="toTop">回到顶部</n-button>
      <n-button  @click="showModal = true"
        >目录</n-button
      >
      <n-upload
        @before-upload="refuseUpload"
        action="./hello"
      >
        <n-button>上传文件</n-button>
      </n-upload>
    </n-space>
    <chapter-list-modal
      v-model:showModal="showModal"
      v-bind:selectedStoryObj="storyObj"
      v-bind:translatedDetails="translatedDetails"
    ></chapter-list-modal>
  </div>
</template>

<script>
import StoryLine from "../components/StoryLine.vue";
import ChapterListModal from "../components/ChapterListModal.vue";
import Papa from "papaparse";
import { get, getIdolFullName } from "../tools";

export default {
  components: { StoryLine, ChapterListModal },
  name: "StoryPage",
  data() {
    return {
      csv: "",
      error: "",
      showModal: false,
      translatedDetails: null,
    };
  },
  watch: {
    path() {
      this.getCsv();
    },
    translatedUrl() {
      this.fetchDetails()
    }
  },
  computed: {
    prefix() {
      return this.$store.state.translationBase;
    },
    idol() {
      return this.$route.params.idol;
    },
    story() {
      return this.$route.params.story;
    },
    chapter() {
      return this.$route.params.chapter;
    },
    storyObj() {
      return {
        name: this.$route.params.story,
      };
    },
    path() {
      let path;
      if (this.$route.params.story === "其他剧情") {
        path =
          [
            this.prefix,
            this.$route.params.idol,
            this.$route.params.chapter,
          ].join("/") + ".csv";
      } else if (this.$route.params.story) {
        path =
          [
            this.prefix,
            getIdolFullName(this.$route.params.idol),
            this.$route.params.story,
            this.$route.params.chapter,
          ].join("/") + ".csv";
      }
      return path;
    },
    translatedUrl() {
      return this.$store.getters.translatedUrl(this.$route.params.idol);
    },
  },
  methods: {
    refuseUpload({file}) {
      this.handleFile(file)
      return false
    },
    async handleFile(file) {
      // console.log(file)
      const data = await file.file.text()
      this.csv = Papa.parse(data).data
    },

    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    },
    async getCsv() {
      try {
        const data = await get(this.path);
        this.csv = Papa.parse(data).data;
      } catch (e) {
        this.error = e;
      }
    },
    async fetchDetails() {
      try {
        this.translatedDetails = (await get(this.translatedUrl)).details;
      } catch (e) {
        this.error = e;
      }
    },
  },
  mounted() {
    // executed immediately after page is fully loaded
    this.$nextTick(async function () {
      console.log(this.path);
      // get(this.path)
      //   .then((data) => {
      //     const csv = Papa.parse(data);
      //     this.csv = csv.data;
      //   })
      //   .catch((err) => {
      //     this.error = err;
      //   });
      // await Promise.all(this.getCsv(), this.fetchDetails())
      this.getCsv()
      this.fetchDetails()
    });
  },
};
</script>

<style scoped>
.fixed-button {
  position: fixed;
  cursor: pointer;
  display: flex;
  right: 40px;
}

.to-top {
  bottom: 40px;
}

.show-content {
  bottom: 80px;
}
</style>
