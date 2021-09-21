<template>
<div class="product">
  <a href="#" @click="$emit('view-product', product)">
    <div class="product-title">{{ product.title }}</div>
    <img loading="lazy" :src="product.image_tag[0]" class="product-image" alt="">
  </a>
</div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  props: ['product'],
}

</script>

<style>

</style>