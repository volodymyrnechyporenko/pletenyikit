<template>
  <div class="heading">
    <h1>Іграшки</h1>
  </div>

  <div class="filter_heading">{{ filterTitle }}</div>
  <div class="filter_button_wrap">
    <div class="filter_button" v-on:click="priceLow()">{{ filterCheap }}</div>
    <div class="filter_button" v-on:click="priceHigh()">{{ filterExpensive }}</div>
  </div>

  <div class="product-category">
    <ProductPreviewCard
      v-for="product in toys.slice().reverse()"
      :key="product.id"
      :product="product"
      :productPath="'ToysDetails'"
    />
  </div>
</template>

<script>
import { filterTitle, filterCheap, filterExpensive } from '../data/texts';
import toys from '../data/toys.js';
import ProductPreviewCard from '../components/products/ProductPreviewCard.vue';

export default {
  components: {
    ProductPreviewCard
  },
  data() {
    return {
      filterTitle: filterTitle,
      filterCheap: filterCheap,
      filterExpensive: filterExpensive,
      toys: toys
    };
  },
  methods: {
    priceLow() {
      return this.toys.sort(function(a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    priceHigh() {
      return this.toys.sort(function(a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>

<style>
.filter_heading {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0 1rem 0;
}

.filter_button_wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter_button {
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  width: 6.5rem;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.filter_button::before, .filter_button::after {
  content: "";
  position: absolute;
  bottom: -.4rem;
  width: 0;
  height: 2px;
  margin: 5px 0 0;
  transition: all 0.2s ease-in-out;
  transition-duration: 0.3s;
  opacity: 0;
  background-color: #aea28f;
}

.filter_button::before {
  left: 50%;
}

.filter_button::after {
  right: 50%;
}

.filter_button:hover::before, .filter_button:hover::after {
  width: 50%;
  opacity: 1;
}
</style>
