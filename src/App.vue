<template>
  <!-- <img alt="283 logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <n-space id="app"> -->
  <n-layout>
    <n-layout-header class="header" ref="header">
      <bread-crumb-nav></bread-crumb-nav>
    </n-layout-header>
    <n-layout-content >
      <router-view></router-view>
      <!-- <n-back-top :listen-to="target" :bottom="220" :visibility-height="10">
        <div
          style="
            width: 200px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
          "
        >
          指定目标
        </div>
      </n-back-top> -->
    </n-layout-content>
  </n-layout>
</template>

<script>
import BreadCrumbNav from "./components/BreadCrumbNav.vue";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
export default {
  components: { BreadCrumbNav },
  data() {
    return {
      target: () => this.$refs.scrollContainer,
    }
  },
};
</script>

<style>
body,
html {
  height: 100%;
  background: url("./assets/pattern_bg.png");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
}

.n-layout-content {
  margin: 10px 30px;
}

.n-layout {
  background: none;
}
</style>
