<template>
  <n-layout has-sider>
    <n-layout-content>
      <card-list
        v-bind:idolName="idol"
        v-bind:allList="allObject?.list"
        v-bind:translatedList="translatedObject?.list"
      ></card-list>
    </n-layout-content>
    <n-layout-sider>
      <profile
        v-bind:idolName="idol"
      ></profile>
    </n-layout-sider>
  </n-layout>
</template>

<script>
import { parse } from "papaparse"
import Profile from '../components/Profile.vue'
import CardList from '../components/CardList.vue'
import { get } from '../tools'

export default {
  components: {
    Profile,
    CardList
  },
  data() {
    return {
      idol: "",
      allObject: null,
      translatedObject: null
    }
  },
  // setup(props, context) {

  // },
  mounted() {
  // executed immediately after page is fully loaded
    this.$nextTick(async function() {
      
      this.idol = this.$route.params.idol;
      // console.log(Papa)

      this.allObject = await get(this.$store.getters.allCardsUrl(this.idol))
      this.translatedObject = await get(this.$store.getters.translatedUrl(this.idol))
      // this.$http.get("/story_tree.json").then((res)=> {
      //   // console.log(res.data)
      //   res.data.children.forEach((folder) => {
      //     if (folder.name.indexOf(this.idol) > -1) {
      //       if (folder.name === this.idol) {
      //         this.idolStoryInfo = folder.children
      //       } else {
      //         this.idolStoryInfo = folder.children
      //         this.$router.push(folder.name)
      //       }
      //     }
      //   })
      // })
      
    });
  },
}
</script>

<style>

</style>