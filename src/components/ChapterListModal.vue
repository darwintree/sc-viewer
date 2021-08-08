<template>
  <n-modal v-model:show="showModal">
    <n-card>
      <n-thing>
        <template #avatar v-if="showIcon">
          <n-avatar :src="getIconSrc(selectedStoryObj.id)" :size="80">
          </n-avatar>
        </template>
        <template #header>
          <div class="n-thing-header">
            {{ selectedStoryObj.name }}
          </div>
        </template>
        <template #description>
          <n-list
            v-for="(chapterName, index) in translatedDetails[
              selectedStoryObj.name
            ]"
            v-bind:key="index"
          >
            <n-list-item class="center">
              <router-link
                :to="`/album/${$route.params.idol}/${
                  selectedStoryObj.name
                }/${stripCsvSuffix(chapterName)}`"
                class="text item black-a"
                @click="showModal = false"
              >
                <Icon size="18">
                  <PlayCircle20Regular />
                  </Icon
                >{{ stripCsvSuffix(chapterName) }}
              </router-link>
            </n-list-item>
          </n-list>
        </template>
      </n-thing>
    </n-card>
  </n-modal>
</template>

<script>
import { getIconSrc } from "../tools";
import { PlayCircle20Regular } from "@vicons/fluent";
import { Icon } from '@vicons/utils'

export default {
  props: ["showModal", "selectedStoryObj", "translatedDetails"],
  emits: ["update:showModal"],
  name: "ChapterListModal",
  components: {
    PlayCircle20Regular,
    Icon
  },
  watch: {
    showModal(newVal) {
      this.$emit("update:showModal", newVal);
    },
  },
  computed: {
    showIcon() {
      return Boolean(this.selectedStoryObj.id)
    }
  },
  methods: {
    getIconSrc(cardId) {
      return getIconSrc(cardId);
    },
    stripCsvSuffix(chapterName) {
      return chapterName.substring(0, chapterName.length - 4);
    },
  },
};
</script>

<style scoped>
.n-card {
  width: 40%;
}

.n-thing {
  font-family: "Noto Sans SC", sans-serif;
}

.n-thing-header {
  font-size: 20px;
}

.black-a {
  text-decoration: none;
  color: #333;
}

.n-list-item {
  text-indent: 1em;
  font-size: 18px;
  padding: 0;
}
</style>