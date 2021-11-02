<template>
  <div class="heading">
    <h1>Аксесуари</h1>
  </div>

  <div class="product-category">
    <ProductPreviewCard
      v-for="product in accessories"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import accessories from '../data/accessories.js';
import ProductPreviewCard from '../components/products/ProductPreviewCard.vue';

export default {
  components: {
    ProductPreviewCard
  },
  data() {
    return {
      accessories: accessories
    };
  }
};
</script>

<style></style>
