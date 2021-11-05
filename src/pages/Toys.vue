<template>
  <div class="heading">
    <h1>Іграшки</h1>
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
  }
};
</script>

<style></style>