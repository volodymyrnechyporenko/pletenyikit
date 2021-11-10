<template>
  <div class="product" @click="$router.push({
        name: 'AccessoriesDetails',
        params: {
          name: product.name,
          description: product.description,
          price: product.price,
          link: product.link,
          category: product.category,
          images: product.images
        }
      })">
      <div class="product-title">{{ product.name }}</div>
      <img
        loading="lazy"
        :src="require(`@/assets/img/${this.product.images[0]}`)"
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
