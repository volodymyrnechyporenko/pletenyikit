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
        <swiper-slide :key="image" v-for="image in product.images"
          ><img :src="require(`@/assets/img/${image}`)" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <div class="item-right">
      <div class="item-text">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.materials }}</p>
        <p>{{ product.dimensions }}</p>
        <div class="price">{{ product.price }} грн</div>
      </div>
    </div>
  </div>
  <h3 v-if="product.similar">Схожі товари</h3>
  <div class="product-similar">
    <AccessoriesSimilarProduct v-for="item in product.similar" :item="item" />
  </div>
</template>

<script>
import accessories from '../data/accessories.js';
import AccessoriesSimilarProduct from '../components/products/AccessoriesSimilarProduct';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Pagination,
    Autoplay,
    AccessoriesSimilarProduct
  },
  data() {
    return {
      product: null,
      accessories: accessories
    };
  },
  created() {
    const product = accessories.find(
      product => product.link === this.$route.params.link
    );
    if (product) {
      this.product = product;
    }
  }
};
</script>

<style></style>
