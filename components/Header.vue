<template>
  <header class="header" :class="{flat: flatNav}">
    <nav class="navigation">
      <!-- LOGO  -->
      <a v-if="!scrolled && !flatNav" href="https://www.studiokora.com/" target="_blank" ><img src="../static/assets/images/logo_header.png" alt="logo"></a>
      <a v-if="scrolled || flatNav" href="https://www.studiokora.com/" target="_blank" ><img src="../static/assets/images/logo_header_scrolled.png" alt="logo"></a>
      <!-- NAVIGATION  -->
      <ul class="navigation__list">
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/">
            О компании
          </nuxt-link>
        </li>
        <li class="list__item">
          <button class="arch__button nav-link" @click="goToArch" >
            Архитектура
          </button> 
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/design/">
            Дизайн интерьера
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/gallery/">
            Галерея
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/cooperation/">
            Сотрудничество
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/contacts/">
            Контакты
          </nuxt-link>
        </li>
      </ul>
      <!-- CALL NUMBER  -->
      <div class="search-call">
        <img v-if="flatNav" class="open__input" src="../static/assets/images/search_icon.png" alt="" @click="openSearch">
        <input v-if="openInput" v-model="searchText" class="input__text" type="text">

        <a href="tel: +78126459810" class="call-number">+7 (812) 645 98 10</a>
      </div>
    </nav>
    <!-- HEADER CONTENT  -->
    <div class="title__wrapper">
      <span class="motto">
        Меняем качество жизни
      </span>

      <h1 class="title__arch">
        Архитектура
      </h1>

      <span class="title__line"></span>

      <h1 class="title__design">
        дизайн интерьера
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    flatNav: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scrolled: false,
      openInput: false,
      searchText: ''
    }
  },
  
  mounted() {
    // CHECK POSITION FOR NAVIGATION STYLE
    const navigation = document.querySelector('.navigation');
    const headerBox = document.querySelector('.header')

    const navigationPosition = navigation.getBoundingClientRect().bottom;
    const headerBoxPosition = headerBox.getBoundingClientRect().bottom;

    if (navigationPosition - 120 > headerBoxPosition || this.flatNav) {
      navigation.classList.add('scrolled');
      this.scrolled = true;
    }
    if (headerBoxPosition > navigationPosition) {
      navigation.classList.remove('scrolled');
      this.scrolled = false;
    }
    // SCROLL IN AND OUT THE HEADER
    document.addEventListener('scroll', () => {
      const navigation = document.querySelector('.navigation');
      const headerBox = document.querySelector('.header')
      const button = document.querySelector('.arch__button')
      
      const headerBoxPosition = headerBox.getBoundingClientRect().bottom;
      const navigationPosition = navigation.getBoundingClientRect().bottom;

      if (navigationPosition - 120 > headerBoxPosition) {
        navigation.classList.add('scrolled');
        button.classList.add('active-button');
        this.scrolled = true;
      }
      if (headerBoxPosition > navigationPosition) {
        navigation.classList.remove('scrolled');
        button.classList.remove('active-button');
        this.scrolled = false;
      }
    });   
  },
  methods: {
    // SCROLL FUNCTION
    scrollTo(element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
      })
    },
    // SCROLL TO ARCH SECTION
    goToArch(e) {
      const button = e.target;
      const archSection = document.querySelector('.arch__section');
      this.scrollTo(archSection);
      button.classList.add('active-button');
    },
    // OPEN SEARCH INPUT 
    openSearch() {
      this.openInput = !this.openInput;
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .header {
    background-image: url('images/header-img.png');
    height: 864px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .navigation {
      height: 214px;
      padding: 0 8vw 0 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      width: 100%;
      transition: all .5s ease;

      .navigation__list {
        flex: 2;
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0 4vw;

        .list__item {
          font-size: 15px;
          
          .nav-link {
            text-transform: uppercase;
            text-decoration: none;
            color: #cccbc6;
            transition: all .4s ease;
          }
          .nav-link:hover {
            color: #fff;
          }

          .active-button {
            padding: 0 0 7px 0;
            color: #8F6B2D !important;
            border-bottom: 1px solid #8F6B2D;
          }
        }
      }
      .search-call {
        .call-number {
          text-decoration: none;
          color: #fff;
          letter-spacing: 1px;
        }
      }
    }

    .scrolled {
      transition: all .5s ease;
      height: 88px;
      background: #fff;
      z-index: 10;

      .navigation__list {

        .list__item {

          .nav-link {
            text-decoration: none;
            color: #131217;
            transition: all .4s ease;
          }

          .nav-link:hover {
            color: #000;
          }
        }
      }

      .search-call {
        display: flex;
        align-items: center;

        .call-number {
          margin-left: 10px;
          color: #131217;
        }
      }
    }

    .title__wrapper {
      margin: 310px auto;
      text-align: center;
      
      .motto {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 4px;
        color: #FFFFFF;
      }

      .title__arch, .title__design {
        margin: 50px 0 25px;
        font-family: 'Cormorant Garamond', serif;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 51px;
        letter-spacing: 12px;
        color: #DBD8D1;
      }

      .title__line {
        display: inline-block;
        height: 1px;
        width: 99px;
        background: #CCBB9E;
      }
      .title__design {
        margin: 25px 0 50px;
      }
    }
  }

  .flat {
    background: #fff;
    height: 88px;
    .navigation {
      height: 88px;
      position: static;

      .navigation__list {

        .list__item {

          .nav-link {
            text-decoration: none;
            color: #131217;
            transition: all .4s ease;
          }

          .nav-link:hover {
            color: #000;
          }
        }
      }
      .search-call {
        .open__input {
          cursor: pointer;
        }

        .input__text {
          border: 1px solid #c3c3c3;
          border-radius: 8px;
          padding: 5px;
          margin-left: 5px;
        }

        .call-number {
          color: #131217;
        }
      }
    }

    .title__wrapper {
      display: none;
    }  
  }
</style>