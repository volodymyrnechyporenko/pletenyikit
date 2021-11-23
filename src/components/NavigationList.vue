<template>
  <header>
    <div class="nav">
      <ul class="nav-left">
        <li class="menu-link">
          <a href="#" @click="$router.push('/toys')">Іграшки</a>
        </li>
        <li class="menu-link">
          <a href="#" @click="$router.push('/accessories')">Аксесуари</a>
        </li>
        <li class="menu-link">
          <a href="#" @click="$router.push('/pillows')">Подушки</a>
        </li>
      </ul>
      <div class="nav-logo">
        <a href="#" @click="$router.push('/')">
          <img
            src="../assets/img/PletenyiKit_logo_round.png"
            alt="pletenyikit"
          />
        </a>
      </div>
      <ul class="nav-right">
        <li class="menu-link">
          <a href="#" @click="$router.push('/kitchen')">Для кухні</a>
        </li>
        <li class="menu-link">
          <router-link to="#about">Про нас</router-link>
        </li>
        <li class="menu-link">
          <a href="#" @click="$router.push('/order')">Замовлення</a>
        </li>
      </ul>
      <div class="menu-icon">
        <font-awesome-icon :icon="icon" size="2x" @click.prevent="toggle" />
      </div>
    </div>
    <div
      class="sidebar"
      :class="{ _active: isBurgerActive }"
      @click.prevent="toggle"
    >
      <ul>
        <li class="side">
          <a href="#" @click="$router.push('/toys')">Іграшки</a>
        </li>
        <li class="side">
          <a href="#" @click="$router.push('/accessories')">Аксесуари</a>
        </li>
        <li class="side">
          <a href="#" @click="$router.push('/pillows')">Подушки</a>
        </li>
        <li class="side">
          <a href="#" @click="$router.push('/kitchen')">Для кухні</a>
        </li>
        <li class="side"><router-link to="#about">Про нас</router-link></li>
        <li class="side">
          <a href="#" @click="$router.push('/order')">Замовлення</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    isBurgerActive: false
  }),
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    }
  },
  computed: {
    icon() {
      if (this.isBurgerActive) {
        return ['fas', 'times'];
      } else {
        return ['fas', 'bars'];
      }
    }
  }
};
</script>

<style>
header {
  background-color: #a32720;
  color: #cbac6a;
  width: 100%;
  padding: 0.6rem 0;
  position: fixed;
  border-bottom: 3px solid #cbac6a;
  z-index: 9;
  animation: navSlow ease 0.5s;
}

@keyframes navSlow {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 922px) and (orientation: landscape) {
  header {
    position: absolute;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  align-items: center;
}

@media screen and (max-width: 812px) {
  .nav {
    padding: 0 1rem;
  }
}

.nav-left,
.nav-right {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  width: 30%;
}

@media screen and (max-width: 992px) {
  .nav-left,
  .nav-right {
    display: none;
  }
}

.menu-link {
  display: inline-block;
  position: relative;
  font-size: 1.4vw;
  list-style-type: none;
}

.menu-link:after {
  background: none repeat scroll 0 0 transparent;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #cbac6a;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.menu-link:hover:after {
  width: 100%;
  left: 0;
}

.nav-logo {
  width: 5%;
}

.nav-logo img {
  max-width: 100%;
}

@media screen and (max-width: 735px) {
  .nav-logo {
    width: 10%;
    text-align: left;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #2b2b2a;
  color: #ffffff;
  z-index: 8;
  overflow: auto;
  transform: translate(-100%, 0px);
  transition: all 0.3s ease-in-out;
}

.sidebar ul {
  margin-top: 4rem;
}

.sidebar li {
  list-style-type: none;
  margin-bottom: 3rem;
}

.sidebar .side {
  font-size: calc(24px + 16 * (100vw / 1920));
}

._active {
  transform: translate(0px, 0px);
  transition: all 0.5s ease-in-out;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 992px) {
  .menu-icon {
    z-index: 9;
    display: block;
    position: relative;
    cursor: pointer;
  }
}
</style>
