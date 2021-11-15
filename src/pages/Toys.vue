<template>
<<<<<<< HEAD

<div class="heading">
  <h1>Іграшки</h1>
</div>
  
<div class="product-category">
  <div class="product">
    <a href="#" @click="$router.push('/toys/realistychna_kotoigrashka')">
        <div class="product-title">Реалістична котоіграшка</div>
        <img loading="lazy" src="../assets/img/realistychna_kotoigrashka_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/koshenya_rudenki_vushka')">
        <div class="product-title">Кошеня з руденькими вушками</div>
        <img loading="lazy" src="../assets/img/koshenya_rudenki_vushka_05.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/myshka_bila')">
        <div class="product-title">Мишка біла</div>
        <img loading="lazy" src="../assets/img/myshoigrashka_bila_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/myshka_temno_sira')">
        <div class="product-title">Мишка темно-сіра</div>
        <img loading="lazy" src="../assets/img/myshoigrashka_temno-sira_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/myshka_sira')">
        <div class="product-title">Мишка сіра</div>
        <img loading="lazy" src="../assets/img/myshoigrashka_sira_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/kotyk_bezhevyi')">
        <div class="product-title">Котик бежевий</div>
        <img loading="lazy" src="../assets/img/bezheva_kotoigrashka_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/kotyk_blakytnookyi')">
        <div class="product-title">Котик блакитноокий</div>
        <img loading="lazy" src="../assets/img/bila_naturalistychna_01.jpg" class="product-image" alt="">
    </a>
  </div>
  <div class="product">
    <a href="#" @click="$router.push('/toys/myshka_ruda')">
        <div class="product-title">Мишка руда</div>
        <img loading="lazy" src="../assets/img/kryska_rudisha_01.jpg" class="product-image" alt="">
    </a>
=======
  <div class="heading">
    <h1>Іграшки</h1>
>>>>>>> dev
  </div>

  <div class="filter_heading">Фільтри</div>
  <div class="filter_button_wrap">
    <div class="filter_button" v-on:click="priceSorted()">від дешевших</div>
    <div class="filter_button" v-on:click="dateSorted()">від дорожчих</div>
  </div>

  <div class="product-category">
    <ToysPreviewCard
      v-for="product in toys.slice().reverse()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import toys from '../data/toys.js';
import ToysPreviewCard from '../components/products/ToysPreviewCard.vue';

export default {
  components: {
    ToysPreviewCard
  },
  data() {
    return {
      toys: toys
    };
  },
  methods: {
    priceSorted() {
      return this.toys.sort(function(a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    dateSorted() {
      return this.toys.sort(function(a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>

<style></style>
