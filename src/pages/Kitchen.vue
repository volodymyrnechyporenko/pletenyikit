<template>
  <div class="heading">
    <h1>Для кухні</h1>
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
  }
};
</script>

<style></style>