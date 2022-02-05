<template>
  <div
    class="product"
    @click="
      $router.push({
        name: 'KitchenDetails',
        params: {
          link: item.link,
        },
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
import kitchen from "../../data/kitchen.js";
export default {
  props: ["item"],
  data() {
    return {
      kitchen: kitchen,
    };
  },
};
</script>

<style></style>
