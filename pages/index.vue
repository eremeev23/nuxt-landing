<template>
  <div class="main__page">
    <Header />
    <!-- PAGE TITLE  -->
    <section class="arch__section">
      <h1 class="main__title">проекты</h1>
      <span class="title__underline"></span>
      <!-- SLIDER WRAPPER  -->
      <div class="slider__wrapper">
        <!-- SLIDER  -->
        <div class="slider">
          <!-- PREVIOUS SLIDE  -->
          <button class="prev-slide" @click="prevSlide"><img src="../static/assets/images/arrow_left.png" alt="prev-slide"></button>
          <!-- ONE SLIDE  -->
          <div v-for="project in Projects" :key="project.id" class="slide" :class="{active: project.id === slideIndex}">
            <nuxt-link exact no-prefetch class="router__link" :to="'/projects/project_id'+project.id">
            <!-- SLIDE IMAGE  -->
            <img :src=project.image :alt=project.name class="project__image">
            <!-- DESCRIPTION  -->
            <div class="project__description">
              <span class="project__theme" :class="{focused: project.id === slideIndex}"> 
                {{ project.theme }}
                <span class="project__square">
                {{ project.square }} M²
                </span>
              </span>
              <!-- SLIDE NAME  -->
              <h3 class="project__name" :class="{focused: project.id === slideIndex}"> {{ project.name }}</h3>
            </div>
            
            </nuxt-link>
          </div>
          <!-- NEXT SLIDE  -->
          <button class="next-slide" @click="nextSlide"><img src="../static/assets/images/arrow_right.png" alt="next-slide"></button>
        </div>
      </div>
    </section>
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

  methods: {
// NEXT SLIDE
    nextSlide() {
      const slider = document.querySelector('.slider');
      
      if (this.slideIndex < this.Projects.length) {
        slider.style = `margin-left: calc(${-116*this.slideIndex}px - ${this.slideIndex * 80}vw)`;

        this.slideIndex++;   
      }
    },
// PREVIOUS SLIDE
    prevSlide() {
      const slider = document.querySelector('.slider');
      if (this.slideIndex > 1) {
        this.slideIndex--;
        slider.style = `margin-left: calc(${-116*(this.slideIndex-1)}px - ${(this.slideIndex - 1) * 80}vw)`;
      }
      if (this.slideIndex === 1) {
        slider.style = `margin-left: 0`;
      }
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.main__page {
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  background-image: linear-gradient(0deg, #ffffff80, #ffffff80);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .arch__section {
    width: 80vw;
    margin-left: 116px;

    .main__title {
      margin: 124px 0 10px -58px;
      font-family: 'Cormorant Garamond', serif;
      font-weight: 500;
      font-size: 38px;
      text-transform: uppercase;
    }

    .title__underline {
      margin-left: -58px;
      display: inline-block;
      height: 3px;
      width: 127px;
      background: #d7ae7a94;
    }

    .slider__wrapper {
      position: relative;
      margin-top: 62px;
      width: 80vw;
      margin-left: -58px;

      .slider {
        display: flex;
        margin-left: 0;
        width: 100%;
        transition: all .8s ease;

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
              width: 80vw;
            }

            .project__description {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

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
                margin-bottom: 20px;
              }

              .focused {
                display: block;
              }
            }          
          } 
        }
        
        .active {
          z-index: 1;
        }

        .prev-slide, .next-slide {
          z-index: 10;
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
}

@media (max-width: 440px) {
  .main__page {
    .arch__section {
      .main__title {
        font-size: 28px;
        margin: 97px 0 10px -116px;
      }
      
      .title__underline {
        margin-left: -116px;
      }

      .slider__wrapper {

        .slider {
          
          .slide {

            .router__link {

              .project__description {
                width: 100%;
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;

                .project__name {
                  margin: 0;
                  font-weight: normal;
                  font-size: 22px;
                  letter-spacing: 0;
                }

                .project__theme {
                  margin: 0;
                  font-size: 10px;
                  letter-spacing: 1px;
                  text-transform: uppercase;

                  .project__square {
                  font-size: 12px;
                  font-weight: bold;
                  color: #BF9C62;
                  }
                }
              }
            }
          }

          .prev-slide, .next-slide {
            padding: 5px;
            background: #ffffff7e;
            top: 50%;
            transform: translateY(-60%) scale(.6);
          }

          .prev-slide {
            left: -2vw;
          }

          .next-slide {
            right: -2vw;
          }
        }
      }
    }
  }
}
</style>