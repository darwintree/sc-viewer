<template>
  <div class="dialogue" v-if="index !== 0 && !isJsonLine()">
    <div class="speaker_icon">
      <img :src="thumb" />
    </div>
    <div class="speaker_name">{{ speaker }}</div>
    <div class="speak_content">
      <div v-html="ja"></div>
      <div v-html="cn"></div>
    </div>
  </div>
</template>

<script>
import { getIdolSrc } from "../tools";

export default {
  name: "StoryLine",
  props: ["line", "index", "len"],
  // methods: {
  //   getDummy
  // },
  methods: {
    isJsonLine() {
      // return false
      return (
        this.line[0] == "info" ||
        (this.index === this.len - 3 && this.line[2] === "")
      );
    },
    isTranslatorLine() {
      // return false
      return (
        this.line[0] === "译者" ||
        (this.index === this.len - 2 && this.line[2] === "")
      );
    },
  },
  computed: {
    speaker() {
      if (this.isJsonLine()) {
        return "";
      }
      if (this.isTranslatorLine()) {
        return "译者：" + this.line[1];
      }
      if (!this.line[1]) {
        return "";
      }
      return this.line[1] === "プロデューサー" ? "制作人" : this.line[1];
    },
    ja() {
      if (this.isJsonLine()) {
        return "";
      }
      if (this.isTranslatorLine()) {
        return "";
      }
      if (!this.line[2]) {
        return "";
      }
      return this.line[2].replace("\\n", "<br>");
    },
    cn() {
      if (this.isJsonLine()) {
        return "";
      }
      if (this.isTranslatorLine()) {
        return "";
      }
      if (!this.line[3]) {
        return "";
      }
      return this.line[3].replace("\\n", "<br>");
      // return this.line[3]
    },
    thumb() {
      return getIdolSrc(this.line[1]);
    },
  },
};
</script>
<style>
.container {
  /* position: relative;
    z-index: 1; */
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  /* width: 20%; */
  /* left: 65%;
    top: -25px; */
  left: 20%;
  height: 100%;
  /* height: 7em;
    opacity: 0.9; */
}

.chara {
  height: 30%;
}
.main {
  height: 40%;
}

.dialogue {
  display: grid;
  justify-content: center;
  grid-template-rows: 120px 25px;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  margin: 15px;
  max-width: 900px;
}

.speaker_icon {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  text-align: center;
  padding: 5px;
  position: relative;
}

.speaker_icon img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 3px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
}

.speaker_icon svg {
  position: absolute;
  bottom: 18px;
  right: -10px;
}

.speaker_name {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  text-align: center;
  font-family: "Noto Sans SC", sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: auto;
}

.speak_content {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  margin-top: auto;
  margin-bottom: auto;
  font-family: "Noto Sans SC", sans-serif;
  font-weight: 700;
}
</style>
