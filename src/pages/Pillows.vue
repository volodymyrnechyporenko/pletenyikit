<template>
  <div class="heading">
    <h1>Подушки</h1>
  </div>

  <div class="product-category">
    <PillowsPreviewCard
      v-for="product in pillows"
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
  }
};
</script>

<style></style>