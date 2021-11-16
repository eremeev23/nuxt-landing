<template>
  <div class="conteiner">
    <Header :flatNav="flatNav" />

    <section class="ptoject__info">
      <nav class="navigation__list">
        <nuxt-link to="/" class="link__main">Главная</nuxt-link>
        <nuxt-link exact to="/projects/project_id1" class="link__parent">{{ Projects[projectId].name }}</nuxt-link>
      </nav>
      <span class="underline"></span>

      <h1 class="project__title">{{ Projects[projectId].title }}</h1>

      <p class="description">
        {{ Projects[projectId].desc }}
      </p>

      <img :src=Projects[projectId].image :alt=Projects[projectId].name class="project__image">
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../../components/Header.vue'

export default {
  name: "Project1",
  components: {
    Header
  },
  data() {
    return {
      flatNav: false,
      projectId: 1
    }
  },
  computed: {
    ...mapGetters(['Projects'])
  },
  created() {
    this.flatNav = true;
  },
  
}
</script>

<style lang="scss" scoped>
.conteiner {
  width: 100vw;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ptoject__info {
    max-width: 60vw;
    text-align: center;
    
    .navigation__list {
      text-transform: uppercase;

      .link__main, .link__parent {
        text-decoration: none;
        color: #000;
      }

      .link__main {
        font-weight: bold;
        margin-right: 20px;
      }
    }

    .project__title {
      text-transform: uppercase;
      font-family: 'Cormorant Garamond', serif;
    }

    .project__image {
      max-width: 100%;
    }

    .description {
      text-align: justify;
    }
  }
}
</style>