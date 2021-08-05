<template>
  <!-- <img alt="283 logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <n-space id="app"> -->
    <n-layout id="app">
      <n-layout-header class="header">header</n-layout-header>
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  <!-- </n-space> -->
</template>

<script>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
// export default {
//   components: {NLayout, NSpace, }
// }
</script>

<style>
body,
html{
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
  background: url("./assets/pattern_bg.png");
}

.n-layout-content {
  margin: 10px 30px
}

.n-layout {
  background: none
}

.header {
  background: blue;
}


</style>
