<template>
  <n-breadcrumb separator="/">
    <n-breadcrumb-item @click="to('/album')">相簿首页</n-breadcrumb-item>
    <n-breadcrumb-item
      v-if="$route.params.idol"
      @click="to(`/album/idol/${$route.params.idol}`)"
      >
        {{ $route.params.idol }}</n-breadcrumb-item
    >
    <n-breadcrumb-item
      v-if="$route.params.story"
      @click="to(`/album/idol/${$route.params.idol}`)"
      >{{ $route.params.story }}</n-breadcrumb-item
    >
    <n-breadcrumb-item v-if="$route.params.chapter">{{
      $route.params.chapter
    }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script>
export default {
  name: "BreadCrumbNav",
  // components: {
  //   // HnloWorld,
  //   Album
  // },
  data() {
    return {};
  },
  methods: {
    to(path) {
      this.$router.push(path)
    }
  }
};
</script>