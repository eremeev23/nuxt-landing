<template>
  <div id="app">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '../components/Header'

export default {
  name: 'HomePage',
  components: {
    Header
  },

  data () {
    return {

    }
  },
  
  created() {
    this.LoadProjectsFromApi();
  },
  
  methods: {
    ...mapActions([
      'LoadProjectsFromApi',
    ]),
  },
}
</script>
