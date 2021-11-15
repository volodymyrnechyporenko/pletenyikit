<template>
  <div class="heading">
    <h1>Аксесуари</h1>
  </div>

  <div class="filter_heading">Фільтри</div>
  <div class="filter_button_wrap">
    <div class="filter_button" v-on:click="priceSorted()">від дешевших</div>
    <div class="filter_button" v-on:click="dateSorted()">від дорожчих</div>
  </div>

  <div class="product-category">
    <AccessoriesPreviewCard
      v-for="product in accessories.slice().reverse()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import accessories from '../data/accessories.js';
import AccessoriesPreviewCard from '../components/products/AccessoriesPreviewCard.vue';

export default {
  components: {
    AccessoriesPreviewCard
  },
  data() {
    return {
      accessories: accessories
    };
  },
  methods: {
    priceSorted() {
      return this.accessories.sort(function(a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    dateSorted() {
      return this.accessories.sort(function(a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>

<style></style>
