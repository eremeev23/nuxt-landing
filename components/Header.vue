<template>
  <header class="header">
    <nav class="navigation">
      <a href="https://www.studiokora.com/" target="_blank"><img src="../static/assets/images/logo_header.png" alt="logo"></a>
    
      <ul class="navigation__list">
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/about/" target="_blank">
            О компании
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/architecture/" target="_blank">
            Архитектура
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/design/"  target="_blank">
            Дизайн интерьера
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/gallery/"  target="_blank">
            Галерея
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/cooperation/"  target="_blank">
            Сотрудничество
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link no-prefetch active-class='active' class="nav-link" to="/contacts/"  target="_blank">
            Контакты
          </nuxt-link>
        </li>
      </ul>

      <a href="tel: +78126459810" class="call-number">+7 (812) 645 98 10</a>
    </nav>

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
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
  
  .header {
    background-image: url('images/header-img.png');
    height: 864px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;

    .navigation {
      height: 214px;
      padding: 0 8vw 0 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navigation__list {
        flex: 1;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        padding: 0 4vw;

        .list__item {
          text-transform: uppercase;
          font-size: 15px;
          
          .nav-link {
            font-family: 'Roboto', sans-serif;
            text-decoration: none;
            color: #cccbc6;
          }
        }
      }

      .call-number {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: #fff;
        letter-spacing: 1px;
      }
    }

    .title__wrapper {
      margin: 100px auto;
      text-align: center;
      
      .motto {
        font-family: 'Roboto', sans-serif;
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
</style>