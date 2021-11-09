<template>
  <div class="product">
    <router-link
      :to="{
        name: 'ProductDetalis',
        params: {
          name: product.name,
          description: product.description,
          price: product.price,
          link: product.link,
          category: product.category,
          images: product.images
        }
      }"
    >
      <div class="product-title">{{ product.name }}</div>
      <img
        loading="lazy"
        :src="require(`@/assets/img/${this.product.images[0]}`)"
        class="product-image"
        alt=""
      />
    </router-link>
  </div>
</template>

<script>
import kitchen from '../../data/kitchen.js';
export default {
  props: ['product'],
  data() {
    return {
      kitchen: kitchen
    };
  }
};
</script>

<style></style>
