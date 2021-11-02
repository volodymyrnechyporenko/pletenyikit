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
          ><img :src="image" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <div class="item-right">
      <div class="item-text">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <div class="price">{{ product.price }} грн</div>
      </div>
    </div>
  </div>
</template>

<script>
import accessories from '../../data/accessories.js';
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
  props: ['product']
};
</script>

<style></style>
