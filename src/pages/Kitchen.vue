<template>
  <div class="heading">
    <h1>Для кухні</h1>
  </div>

  <div class="filter_heading">Фільтри</div>
  <div class="filter_button_wrap">
    <div class="filter_button" v-on:click="priceSorted()">від дешевших</div>
    <div class="filter_button" v-on:click="dateSorted()">від дорожчих</div>
  </div>

  <div class="product-category">
    <KitchenPreviewCard
      v-for="product in kitchen.slice().reverse()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import kitchen from '../data/kitchen.js';
import KitchenPreviewCard from '../components/products/KitchenPreviewCard.vue';

export default {
  components: {
    KitchenPreviewCard
  },
  data() {
    return {
      kitchen: kitchen
    };
  },
  methods: {
    priceSorted() {
      return this.kitchen.sort(function(a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    dateSorted() {
      return this.kitchen.sort(function(a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>

<style></style>