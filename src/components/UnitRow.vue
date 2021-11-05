<template>
  <!-- <label v-for="idol in unitMembers" v-bind:key="idol">
    {{ idol }}
  </label> -->
  <n-grid x-gap="12" item-responsive responsive="screen">
    <n-gi span="0 m:6" class="center-grid">
      <img v-bind:src="getUnitSrc(unitName)" style="width: 100%" />
      <!-- <div class="light-green"></div> -->
    </n-gi>
    <n-gi v-for="idol in unitMembers" v-bind:key="idol" span="4 m:3 xl:2" responsive="screen">
      <!-- <div class="green"></div> -->
      <router-link
        :to="to(idol)"
        tag="img"
        v-bind:alt="idol"
        v-bind:title="idol"
      >
        <img :src="getIdolSrc(idol)" style="width: 100%; cursor: pointer" />
      </router-link>
    </n-gi>
  </n-grid>
  <n-grid x-gap="12" item-responsive responsive="screen">
    <n-gi span="0 m:6"> </n-gi>
    <n-gi v-for="idol in unitMembers" v-bind:key="idol" span="4 m:3 xl:2">
      <router-link :to="to(idol)" style="text-decoration: none">
        <div style="width: 100%; text-align: center">
          <a class="black-a">{{ idol }}</a>
        </div>
      </router-link>
    </n-gi>
  </n-grid>
</template>
<script>
import { getUnitSrc, getIdolSrc, getIdolFullName } from "../tools";

export default {
  name: "UnitRow",
  props: ["unitName"],
  computed: {
    unitMembers() {
      return this.$store.state.units[this.unitName] ?? [];
    },
    othersLine() {
      return this.unitName === "283_production"
    }
  },
  methods: {
    getUnitSrc(unit) {
      return getUnitSrc(unit);
    },
    getIdolSrc(idol) {
      return getIdolSrc(idol);
    },
    to(idol) {
      return `/album/${getIdolFullName(idol)}`
    }
  },
};
</script>

<style scoped>
.black-a {
  text-decoration: none;
  color: #333;
}

.center-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>