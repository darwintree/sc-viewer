<template>
  <n-grid x-gap="12" y-gap="12" cols="3">
    <n-gi v-for="(idolObj, index) in allList" v-bind:key="index">
      <n-thing class="card-style">
        <template #avatar>
          <n-avatar :src="getIconSrc(idolObj.id)" :size="80"> </n-avatar>
        </template>
        <template #header>
          <div>
            {{ idolObj.name }}
          </div>
        </template>
      </n-thing>
    </n-gi>
  </n-grid>
</template>

<script>
import { getIconSrc } from "../tools";

export default {
  // 渲染所有的卡片
  props: ["idolName", "allList", "translatedList"],
  name: "CardList",
  methods: {
    getIconSrc(cardId) {
      return getIconSrc(cardId);
    },
  },
};
</script>

<style scoped>

.card-style {
  background: rgba(255, 255, 255, 0.5);
}

.card-style:hover {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .2);
    border-color: #eee;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }

.n-thing :deep(.n-thing-header-wrapper) {
  display: flex
}

.center-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>