<template>
  <div
    class="product"
    @click="
      $router.push({
        name: 'PillowsDetails',
        params: {
          id: product.id,
          name: product.name,
          price: product.price,
          link: product.link,
          images: product.images
        }
      })
    "
  >
    <div class="product-price">{{ product.price }}</div>
    <div class="product-title">{{ product.name }}</div>
    <img
      loading="lazy"
      :src="require(`@/assets/img/${product.images[0]}`)"
      class="product-image"
      alt=""
    />
  </div>
</template>

<script>
import pillows from '../../data/pillows.js';
export default {
  props: ['product'],
  data() {
    return {
      pillows: pillows
    };
  }
};
</script>

<style></style>
