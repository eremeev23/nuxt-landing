<template>
  <div class="main__page">
    <Header />
    <!-- PAGE TITLE  -->
    <h1 class="main__title">проекты</h1>
    <span class="title__underline"></span>
    <!-- SLIDER WRAPPER  -->
    <div class="slider__wrapper">
      <!-- SLIDER  -->
      <div class="slider">
        <!-- PREVIOUS SLIDE  -->
        <button @click="prevSlide" class="prev-slide"><img src="../static/assets/images/arrow_left.png" alt="prev-slide"></button>
        <!-- ONE SLIDE  -->
        <div class="slide" :class="{active: project.id === slideIndex}" v-for="project in Projects" :key="project.id">
          <nuxt-link exact no-prefetch class="router__link" :to="'/projects/project_id'+project.id">
          <!-- SLIDE IMAGE  -->
          <img :src=project.image :alt=project.name class="project__image">
          <!-- DESCRIPTION  -->
          <span class="project__theme" :class="{focused: project.id === slideIndex}"> 
            {{ project.theme }}
            <span class="project__square">
             {{ project.square }} M²
            </span>
          </span>
           <!-- SLIDE NAME  -->
          <h3 class="project__name" :class="{focused: project.id === slideIndex}"> {{ project.name }}</h3>
          </nuxt-link>
        </div>
        <!-- NEXT SLIDE  -->
        <button @click="nextSlide" class="next-slide"><img src="../static/assets/images/arrow_right.png" alt="next-slide"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header.vue'

export default {
  name: 'MainContent',
  components: {
    Header
  },
  data() {
    return {
      slideIndex: 1,
      focus: true,
    }
  },

  computed: {
    ...mapGetters(['Projects'])
  },

  mounted() {
    
  },

  methods: {
    nextSlide() {
      if (this.slideIndex < this.Projects.length) {
        this.slideIndex++;
      }
    },
    prevSlide() {
      if (this.slideIndex > 1) {
        this.slideIndex--;
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.main__page {
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  display: flex;
  flex-direction: column;
  align-items: center;

  .main__title {
    margin: 124px 0 10px;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 38px;
    text-transform: uppercase;
  }

  .title__underline {
    display: inline-block;
    height: 3px;
    width: 127px;
    background: #d7ae7a94;
  }

  .slider__wrapper {
    position: relative;
    display: flex;
    margin-top: 62px;
    max-width: 68vw;
    justify-content: center;

    .slider {
      display: flex;
      margin-left: 0;
      width: 68vw;

      .slide {
        margin-right: 116px;
        max-width: 100%;
        z-index: -1;
        font-family: 'PT Sans', sans-serif;
        

        .router__link {
          text-decoration: none;
          color: #131217;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .project__image {
            width: 68vw;
          }

          .project__theme {
            display: none;
            margin: 37px 0 10px;
            font-size: 12px;
            letter-spacing: 1px;
            text-transform: uppercase;

            .project__square {
            font-size: 12px;
            font-weight: bold;
            color: #BF9C62;
            }
          }

          .project__name {
            display: none;
            font-family: 'Cormorant Garamond';
            font-size: 42px;
            letter-spacing: 2px;
          }

          .focused {
            display: block;
          }
        }
      }

      .active {
        z-index: 1;
      }

      .prev-slide, .next-slide {
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
      }

      .prev-slide {
        left: -4vw;
      }

      .next-slide {
        right: -4vw;
      }
    }
  }
}
</style>