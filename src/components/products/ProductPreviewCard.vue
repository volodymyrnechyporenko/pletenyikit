<template>
  <div class="product" @click="$router.push({
        name: productPath,
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
        :src="require(`@/assets/img/${this.product.images[0]}`)"
        class="product-image"
        alt=""
      />
  </div>
</template>

<script>
export default {
  props: ['product', 'productPath'],
};
</script>

<style></style>
