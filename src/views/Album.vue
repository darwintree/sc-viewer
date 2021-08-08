<template>
  <div>
    <unit-row
      v-for="(unitName, index) in unitList"
      v-bind:key="index"
      v-bind:unitName="unitName"
    ></unit-row>
    <unit-row
      v-for="(unitName, index) in others"
      v-bind:key="index"
      v-bind:unitName="unitName"
    ></unit-row>
  </div>
</template>
<script>
import UnitRow from "../components/UnitRow.vue";

export default {
  name: "Album",
  components: { UnitRow },
  computed: {
    unitList() {
      return Object.keys(this.$store.state.units);
    },
    others() {
      return Object.keys(this.$store.state.others)
    }
  },
};
</script>