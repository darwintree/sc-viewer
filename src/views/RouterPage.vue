<template>
  <idol v-if="isIdolPage"></idol>
  <campaign v-else></campaign>
</template>

<script>
import Campaign from './Campaign.vue'
import Idol from './Idol.vue'

export default {
  components: {
    Campaign,
    Idol
  },
  computed: {
    isIdolPage() {
      return this.$route.params.idol !== "283活动剧情" && this.$route.params.idol !== "主页剧情"
    }
  }
}
</script>

<style>

</style>