<template>

    <div class="item-all" v-for="productItem in productItems" :key="productItem.id">
        <div class="item-left">
            <swiper
                :slides-per-view="1"
                :space-between="20"
                :navigation="true"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 3000 }"
                loop
            >
                    <swiper-slide
                        v-for="image in images"
                        :key="image">
                        <img :src="image">
                        </swiper-slide>
            </swiper>
        </div>
        <div class="item-right">
            <div class="item-text">
                <h3>{{productItem.title}}</h3>
                <p>{{productItem.description}}</p>
                <div class="price">{{productItem.price}} грн</div>
            </div>
        </div>
    </div>

</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { mapGetters } from 'vuex';

SwiperCore.use([Navigation, Pagination, Autoplay]);

  export default {
    name: "ProductDetails",
    props: ["productItem"],
    computed: {
        ...mapGetters([
            'productItems'
        ])
    },
    data() {
        return {
            images: ["productItem.image_tag"]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Navigation,
        Pagination,
        Autoplay
    },
    
  }

</script>

<style>

</style>