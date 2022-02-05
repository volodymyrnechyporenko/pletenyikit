<template>
  <div class="heading">
    <h1>Подушки</h1>
  </div>

  <div class="filter_heading">Фільтри</div>
  <div class="filter_button_wrap">
    <div class="filter_button" @click="priceLow()">від дешевших</div>
    <div class="filter_button" @click="priceHigh()">від дорожчих</div>
  </div>

  <div class="product-category">
    <PillowsPreviewCard
      v-for="product in pillows.slice().reverse()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import pillows from "../data/pillows.js";
import PillowsPreviewCard from "../components/products/PillowsPreviewCard.vue";

export default {
  components: {
    PillowsPreviewCard,
  },
  data() {
    return {
      pillows: pillows,
    };
  },
  methods: {
    priceLow() {
      return this.pillows.sort(function (a, b) {
        if (a.price > b.price) {
          return b.price - a.price;
        }
      });
    },
    priceHigh() {
      return this.pillows.sort(function (a, b) {
        if (a.price < b.price) {
          return a.price - b.price;
        }
      });
    },
  },
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

.filter_button::before,
.filter_button::after {
  content: "";
  position: absolute;
  bottom: -0.4rem;
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

.filter_button:hover::before,
.filter_button:hover::after {
  width: 50%;
  opacity: 1;
}
</style>
