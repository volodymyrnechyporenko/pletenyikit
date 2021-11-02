<template>
  <div class="product">
    <a href="#" @click="$router.push(product.link)">
      <div class="product-title">{{ product.name }}</div>
      <img
        loading="lazy"
        :src="product.images[0]"
        class="product-image"
        alt=""
      />
    </a>
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
