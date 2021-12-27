<template>
  <div
class="product" @click="$router.push({
        name: 'AccessoriesDetails',
        params: {
          id: product.id,
          name: product.name,
          price: product.price,
          link: product.link,
          images: product.images
        }
      })">
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
import accessories from '../../data/accessories.js';
export default {
  props: ['product'],
  data() {
    return {
      accessories: accessories
    };
  }
};
</script>

<style></style>
