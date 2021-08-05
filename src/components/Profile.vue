<template>
  <n-card>
    <template #cover>
      <img :src="idolSrc" />
    </template>
  </n-card>
</template>

<script>
import { getIdolSrc } from '../tools'

export default {
  name: 'Profile',
  props: ['idolName'],
  computed: {
    idolSrc() {
      return getIdolSrc(this.idolName)
    }
  }
}
</script>

<style>

</style>