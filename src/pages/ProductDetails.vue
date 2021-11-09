<template>
  <div class="heading">
    <h1>{{ $route.params.category }}</h1>
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
        <swiper-slide :key="image" v-for="image in $route.params.images"
          ><img :src="require(`@/assets/img/${image}`)" alt=""
        /></swiper-slide>
      </swiper>
    </div>
    <div class="item-right">
      <div class="item-text">
        <h3>{{ $route.params.name }}</h3>
        <p>{{ $route.params.description }}</p>
        <div class="price">{{ $route.params.price }} грн</div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style></style>
