<template>
  <div class="heading">
    <h1>Подушки</h1>
  </div>

  <div class="filter_heading">Фільтри</div>
  <div class="filter_button_wrap">
    <div class="filter_button" v-on:click="priceSorted()">від дешевших</div>
    <div class="filter_button" v-on:click="dateSorted()">від дорожчих</div>
  </div>

  <div class="product-category">
    <PillowsPreviewCard
      v-for="product in pillows.slice().reverse()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import pillows from '../data/pillows.js';
import PillowsPreviewCard from '../components/products/PillowsPreviewCard.vue';

export default {
  components: {
    PillowsPreviewCard
  },
  data() {
    return {
      pillows: pillows
    };
  },
  methods: {
    priceSorted() {
      return this.pillows.sort(function(a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    dateSorted() {
      return this.pillows.sort(function(a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>

<style></style>