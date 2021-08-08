<template>
  <n-layout has-sider>
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
    <n-layout-sider>
      <profile v-bind:idolName="idol"></profile>
    </n-layout-sider>
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
    cardList() {
      if (!this.allDetails) return [];
      return Object.keys(this.allDetails).map((id) => {
        return {
          id: id,
          name: this.allDetails[id].name,
        };
      });
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

<style>
</style>