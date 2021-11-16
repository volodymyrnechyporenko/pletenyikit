<template>
  <div
    class="product"
    @click="
      $router.push({
        name: 'PillowsDetails',
        params: {
          link: item.link,
        }
      })
    "
  >
    <div class="product-price">{{ item.price }}</div>
    <img
      loading="lazy"
      :src="require(`@/assets/img/${this.item.img}`)"
      class="product-image"
      alt=""
    />
  </div>
</template>

<script>
import pillows from '../../data/pillows.js';
export default {
  props: ['item'],
  data() {
    return {
      pillows: pillows
    };
  }
};
</script>

<style></style>
