<template>
  <!-- <n-layout has-sider> -->
  <n-layout>
    <n-layout-content>
      <card-list
        v-bind:presentList="universalList"
        v-bind:translatedDetails="translatedDetails"
      ></card-list>
    </n-layout-content>
    <!-- <n-layout-sider>
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
    universalList() {
      if (!this.translatedDetails) return [];
      return Object.keys(this.translatedDetails)
        .map((name) => {
          if (name[0] === "【") return null;
          return {
            name,
            cover: name
          };
        })
        .filter(Boolean);
    },
  },
  // setup(props, context) {

  // },
  mounted() {
    // executed immediately after page is fully loaded
    this.$nextTick(async function () {
      this.idol = this.$route.params.idol;

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