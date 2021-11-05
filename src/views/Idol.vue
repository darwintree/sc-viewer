<template>
  <!-- <n-layout has-sider> -->
  <n-layout>
    <n-layout-content>
      <n-tabs default-value="card" justify-content="space-evenly" type="line">
        <n-tab-pane name="card" tab="卡片剧情">
          <card-list
            v-bind:presentList="cardList"
            v-bind:translatedDetails="translatedDetails"
          ></card-list>
        </n-tab-pane>
        <n-tab-pane name="produce" tab="共通剧情">
          <card-list
            v-bind:presentList="universalList"
            v-bind:translatedDetails="translatedDetails"
          ></card-list>
        </n-tab-pane>
      </n-tabs>
    </n-layout-content>
    <!-- <n-layout-sider 
        collapse-mode="transform"
        :collapsed-width="10"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
      <profile v-bind:idolName="idol"></profile>
    </n-layout-sider> -->
  </n-layout>
</template>

<script>
import Profile from "../components/Profile.vue";
import CardList from "../components/CardList.vue";
import { get } from "../tools";

export default {
  components: {
    Profile,
    CardList,
  },
  data() {
    return {
      idol: "",
      allDetails: null,
      translatedDetails: null,
    };
  },
  computed: {
    // Note: our project is based on SCTtanslation, the idol-info file only provided aux info
    cardList() {
      if (!this.translatedDetails || !this.allDetails) return [];
      let nameSet = new Set()
      let baseList = Object.keys(this.allDetails).map((id) => {
        nameSet.add(this.allDetails[id].name)
        return {
          id: id,
          name: this.allDetails[id].name,
        };
      });
      Object.keys(this.translatedDetails).map((name) => {
        if (!nameSet.has(name) && name[0] === "【") {
          nameSet.add(name)
          baseList.push({
            name,
          })
        }
        return null
      });
      return baseList
    },
    universalList() {
      if (!this.translatedDetails) return [];
      return Object.keys(this.translatedDetails).map((name) => {
        if (name[0] === "【") return null
        return {
          name,
        };
      }).filter(Boolean);
    }
  },
  // setup(props, context) {

  // },
  mounted() {
    // executed immediately after page is fully loaded
    this.$nextTick(async function () {
      this.idol = this.$route.params.idol;
      // console.log(Papa)

      this.allDetails = (
        await get(this.$store.getters.allCardsUrl(this.idol))
      ).details;
      this.translatedDetails = (
        await get(this.$store.getters.translatedUrl(this.idol))
      ).details;
    });
  },
};
</script>

<style scoped>

.n-layout {
  /* background: rgba(255, 255, 255, 0); */
  background: None;

}
</style>