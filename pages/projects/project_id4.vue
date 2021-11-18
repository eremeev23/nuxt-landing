<template>
  <div class="conteiner">
    <Header :flatNav="flatNav" />
    <!-- NAVIGATION  -->
    <section class="ptoject__info">
      <nav class="navigation__list">
        <nuxt-link to="/" class="link__main">Главная</nuxt-link>
        <nuxt-link exact to="/projects/project_id1" class="link__parent">{{ Projects[projectId].name }}</nuxt-link>
      </nav>
      <span class="underline"></span>
    <!-- MAIN CONTENT  -->
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
      projectId: 3
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
  color: #131217;

  .ptoject__info {
    padding-top: 60px;
    max-width: 50vw;
    text-align: center;
    
    .navigation__list {
      text-transform: uppercase;

      .link__main, .link__parent {
        text-decoration: none;
        font-size: 10px;
        color: #131217;
      }

      .link__main {
        font-weight: bold;
        margin-right: 20px;
      }

      .link__parent {
        color: #757470;
      }
    }

    .underline {
      display: inline-block;
      margin: 13px 0;
      height: 2px;
      width: 166px;
      background: #CCBB9E;
    }

    .project__title {
      text-transform: uppercase;
      font-family: 'Cormorant Garamond', serif;
      font-weight: 600;
      font-size: 50.9091px;
      line-height: 62px;
      letter-spacing: 12px;
    }

    .project__image {
      max-width: 100%;
    }

    .description {
      margin: 32px 0 10px;
      font-weight: 300;
      font-size: 18px;
      line-height: 30px;
      text-align: justify;
    }
  }
}

@media (max-width: 440px) {
  .conteiner {
    width: 100vw;
    min-height: 120vh;

    .ptoject__info {
      padding-top: 10px;
      max-width: 80vw;
      text-align: center;
      
      .navigation__list {
        text-transform: uppercase;

        .link__main, .link__parent {
          text-decoration: none;
          font-size: 10px;
          color: #131217;
        }

        .link__main {
          font-weight: bold;
          margin-right: 20px;
        }

        .link__parent {
          color: #757470;
        }
      }

      .underline {
        display: inline-block;
        margin: 13px 0;
        height: 2px;
        width: 166px;
        background: #CCBB9E;
      }

      .project__title {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 4px;
      }

      .project__image {
        max-width: 100%;
      }

      .description {
        margin: 32px 0 10px;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        text-align: justify;
      }
    }
  }
}
</style>