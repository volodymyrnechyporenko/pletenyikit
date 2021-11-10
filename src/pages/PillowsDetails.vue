<template>
  <div class="heading">
    <h1>{{ product.category }}</h1>
  </div>

  <div class="item-all">
    <div class="item-left">
      <swiper
        :slides-per-view="1"
        :space-between="20"
        :navigation="true"
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
</template>

<script>
import pillows from '../data/pillows.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    Autoplay
  },
  data() {
    return {
      product: null
    }
  },
  created() {
    const product = pillows.find(product => product.link === this.$route.params.link)
    if (product) {
      this.product = product
    }
  }
};
</script>

<style></style>
