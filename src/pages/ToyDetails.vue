<template>

<div class="heading">
  <h1>Іграшки</h1>
</div>

<CartDetails
    v-for="product in toys"
    :key="product.id"
    :product="product"
/>

</template>

<script>

import toys from '../data/toys.js'
import CartDetails from "../components/CartDetails.vue";

export default {
    components: {
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