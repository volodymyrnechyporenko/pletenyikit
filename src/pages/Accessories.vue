<template>
  <div class="heading">
    <h1>Аксесуари</h1>
  </div>

  <div class="product-category">
    <AccessoriesPreviewCard
      v-for="product in accessories"
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
  }
};
</script>

<style></style>