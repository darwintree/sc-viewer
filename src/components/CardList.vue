<template>
  <n-grid x-gap="40" y-gap="12" cols="2 s:2 m:2 l:3 xl:4" responsive="screen">
    <n-gi v-for="(cardObj, index) in presentList" v-bind:key="index">
      <n-card
        @click="selectStory(cardObj)"
        hoverable
        v-if="Boolean(cardObj.cover)"
      >
        <template #cover>
          <img :src="coverSrc(cardObj.cover)" />
        </template>
        <template #header>
          <div>
            {{ cardObj.name }}
          </div>
        </template>
      </n-card>
      <n-thing class="card-style" @click="selectStory(cardObj)" v-else>
        <template #avatar v-if="!Boolean(cardObj.cover)">
          <n-avatar :src="getIconSrc(cardObj.id)" :size="80"> </n-avatar>
        </template>
        <template #header>
          <div>
            {{ cardObj.name }}
          </div>
        </template>
      </n-thing>
    </n-gi>
  </n-grid>
  <chapter-list-modal
    v-model:showModal="showModal"
    v-bind:selectedStoryObj="selectedStoryObj"
    v-bind:translatedDetails="translatedDetails"
  ></chapter-list-modal>
</template>

<script>
import { getIconSrc, getCampaignCover } from "../tools";
import ChapterListModal from "./ChapterListModal.vue";

export default {
  props: ["presentList", "translatedDetails"],
  components: {
    ChapterListModal,
  },
  name: "CardList",
  data() {
    return {
      selectedStoryObj: null,
      showModal: false,
    };
  },
  mounted() {},
  methods: {
    getIconSrc(cardId) {
      if (!cardId) {
        return "";
      }
      return getIconSrc(cardId);
    },
    selectStory(cardObj) {
      this.selectedStoryObj = cardObj;
      this.showModal = true;
    },
    coverSrc(coverName) {
      return getCampaignCover(coverName);
    },
  },
  computed: {
    showModalIcon() {
      return Boolean(this.selectedStoryObj?.id);
    },
  },
};
</script>

<style scoped>
.card-style {
  background-color: rgba(255, 255, 255, 0.5);
}

.n-card{
  cursor: pointer;
}

.card-style:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.card-style :deep(.n-thing-header-wrapper) {
  display: flex;
}

.n-card :deep(.n-card__content) {
  padding-bottom: 0;
}

.center-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>