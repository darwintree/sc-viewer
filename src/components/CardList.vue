<template>
  <n-grid x-gap="12" y-gap="12" cols="3">
    <n-gi v-for="(cardObj, index) in allList" v-bind:key="index">
      <n-thing class="card-style" @click="selectStory(cardObj)">
        <template #avatar>
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
    v-bind:showIcon="showIcon"
    v-bind:selectedStoryObj="selectedStoryObj"
    v-bind:translatedDetails="translatedDetails"
  ></chapter-list-modal>
</template>

<script>
import { getIconSrc } from "../tools";
import ChapterListModal from './ChapterListModal.vue'


export default {
  // 渲染所有的卡片
  props: ["idolName", "allList", "translatedList", "translatedDetails"],
  components: {
    ChapterListModal
  },
  name: "CardList",
  data() {
    return {
      selectedStoryObj: null,
      showModal: false,
    };
  },
  mounted() {
  },
  methods: {
    getIconSrc(cardId) {
      return getIconSrc(cardId);
    },
    selectStory(cardObj) {
      this.selectedStoryObj = cardObj;
      this.showModal = true;
    },
  },
  computed: {
    showIcon() {
      return this.selectedStoryObj?.name[0] === '【'
    }
  },
};
</script>

<style scoped>
.card-style {
  background: rgba(255, 255, 255, 0.5);
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

.center-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>