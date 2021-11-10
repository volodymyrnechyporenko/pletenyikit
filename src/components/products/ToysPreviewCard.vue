<template>
  <div class="product" @click="$router.push({
        name: 'ToysDetails',
        params: {
          id: product.id,
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
import toys from '../../data/toys.js';
export default {
  props: ['product'],
  data() {
    return {
      toys: toys
    };
  }
};
</script>

<style></style>
