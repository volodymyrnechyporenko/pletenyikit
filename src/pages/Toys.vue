<template>

<div class="heading">
  <h1>Іграшки</h1>
</div>

<div class="product-category">
    <CartList
        v-for="product in toys"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
    />
</div>

</template>

<script>

import toys from '../data/toys.js'
import CartList from '../components/CartList.vue'
import CartDetails from "../components/CartDetails.vue";

export default {
    components: {
        CartList,
        CartDetails
    },
    data() {
        return {
            toys: toys,
            product: null
        }
    },
    methods: {
        viewProduct(product) {
            this.product = product
            console.log(this.product)
        }
    }
}

</script>

<style>

</style>