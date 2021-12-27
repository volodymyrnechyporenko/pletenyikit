<template>
  <div
    class="product"
    @click="
      $router.push({
        name: 'AccessoriesDetails',
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
import accessories from '../../data/accessories.js';
export default {
  props: ['item'],
  data() {
    return {
      accessories: accessories
    };
  }
};
</script>

<style></style>
