<template>
  <div
    class="product"
    @click="
      $router.push({
        name: itemPath,
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
export default {
  props: ['item', 'itemPath'],
};
</script>

<style></style>
