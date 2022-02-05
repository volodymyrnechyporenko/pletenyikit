<template>
  <div class="heading">
    <h1>{{ product.category }}</h1>
  </div>

  <div class="item-all">
    <div class="item-left">
      <swiper
        :slides-per-view="1"
        :space-between="20"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        loop
        effect="fade"
      >
        <swiper-slide v-for="image in product.images" :key="image"
          ><img :src="require(`@/assets/img/${image}`)" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <div class="item-right">
      <div class="item-text">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.dimensions }}</p>
        <p>{{ product.amount }}</p>
        <div class="price">{{ product.price }} грн</div>
      </div>
    </div>
  </div>
  <h3 v-if="product.similar">Схожі товари</h3>
  <div class="product-similar">
    <KitchenSimilarProduct
      v-for="item in product.similar"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<script>
import kitchen from "../data/kitchen.js";
import KitchenSimilarProduct from "../components/products/KitchenSimilarProduct";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Pagination,
    Autoplay,
    KitchenSimilarProduct,
  },
  data() {
    return {
      product: null,
      kitchen: kitchen,
      visible: false,
    };
  },
  created() {
    const product = kitchen.find(
      (product) => product.link === this.$route.params.link
    );
    if (product) {
      this.product = product;
    }
  },
};
</script>

<style>
.product-similar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
}

@media screen and (max-width: 767px) and (orientation: portrait) {
  .product-similar {
    grid-template-columns: repeat(2, 1fr);
  }
}

.swiper-container {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-container-pointer-events {
  touch-action: pan-y;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: auto;
  position: relative;
  transition-property: transform;
}

.swiper-slide img {
  max-width: 100%;
}

.swiper-container-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

:root {
  --swiper-navigation-size: 44px;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 0.3s opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-bullet {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  border-radius: 50%;
  background: #aea28f;
  opacity: 0.6;
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 4px;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 0.2s transform, 0.2s left;
}

.swiper-container-horizontal.swiper-container-rtl
  > .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 0.2s transform, 0.2s right;
}

.swiper-pagination-lock {
  display: none;
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}

.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
</style>
