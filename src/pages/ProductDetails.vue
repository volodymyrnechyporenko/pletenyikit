<template>
  <ProductSummaryCard
    :product="product"
    v-on="viewProduct(product)"
  />
</template>

<script>
import toys from '../data/toys.js';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';

export default {
  
  components: {
    ProductSummaryCard
  },
  data() {
    return {
      toys: toys
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      return this.product;
    }
  }
};
</script>

<style></style>
