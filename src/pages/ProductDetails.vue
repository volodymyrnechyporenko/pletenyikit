<template>
  <ProductSummaryCard
    v-for="product in accessories"
    :key="product.link"
    :product="product"
  />
</template>

<script>
import accessories from '../data/accessories.js';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';

export default {
  components: {
    ProductSummaryCard
  },
  
  data() {
    return {
      accessories: accessories
    };
  }
};
</script>

<style></style>
