<template>
  <div class="main__page">
    <p v-for="project in Projects" :key="project.id">{{ project.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['Projects'])
  },
}
</script>

<style>

</style>