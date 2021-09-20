<template>
  <header>
      <div class="nav">
        <ul class="nav-left">
            <li class="menu-link"><a href="#" @click="$router.push('/toys')">Іграшки</a></li>
            <li class="menu-link"><a href="#" @click="$router.push('/accessories')">Аксесуари</a></li>
            <li class="menu-link"><a href="#" @click="$router.push('/pillows')">Подушки</a></li>
        </ul>
        <div class="nav-logo">
            <a href="#" @click="$router.push('/')">
                <img src="../assets/img/PletenyiKit_logo_round.png" alt="pletenyikit">
            </a>
        </div>
        <ul class="nav-right">
            <li class="menu-link"><a href="#" @click="$router.push('/kitchen')">Для кухні</a></li>
            <li class="menu-link"><router-link to="#about">Про нас</router-link></li>
            <li class="menu-link"><a href="#" @click="$router.push('/order')">Замовлення</a></li>
        </ul>
        <div class="menu-icon">
            <font-awesome-icon :icon="icon" size="2x"
            @click.prevent="toggle"
            />
        </div>
      </div>
      <div class="sidebar" 
          :class="{ '_active' : isBurgerActive }"
          @click.prevent="toggle"
      >
        <ul>
            <li class="side"><a href="#" @click="$router.push('/toys')">Іграшки</a></li>
            <li class="side"><a href="#" @click="$router.push('/accessories')">Аксесуари</a></li>
            <li class="side"><a href="#" @click="$router.push('/pillows')">Подушки</a></li>
            <li class="side"><a href="#" @click="$router.push('/kitchen')">Для кухні</a></li>
            <li class="side"><router-link to="#about">Про нас</router-link></li>
            <li class="side"><a href="#" @click="$router.push('/order')">Замовлення</a></li>
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
            this.isBurgerActive = !this.isBurgerActive
        }
    },
    computed: {
        icon() {
            if (this.isBurgerActive) {
                return ['fas', 'times']
            } else {
                return ['fas', 'bars']
            }
        }
    }
}

</script>

<style>

</style>
