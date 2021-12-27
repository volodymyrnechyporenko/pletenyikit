<template>
  <div
    class="product"
    @click="
      $router.push({
        name: 'ToysDetails',
        params: {
          link: item.link,
        }
      })
    "
  >
    <div class="product-price">{{ item.price }}</div>
    <img
      loading="lazy"
      :src="require(`@/assets/img/${item.img}`)"
      class="product-image"
      alt=""
    />
  </div>
</template>

<script>
import toys from '../../data/toys.js';
export default {
  props: ['item'],
  data() {
    return {
      toys: toys
    };
  }
};
</script>

<style></style>
