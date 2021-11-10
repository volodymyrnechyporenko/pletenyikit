<template>
  <div class="heading">
    <h1>Іграшки</h1>
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
