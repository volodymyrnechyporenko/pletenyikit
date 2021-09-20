<template>

<div class="heading">
    <h1>Для кухні</h1>
</div>

<div class="product-category">
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/serdechka')">
            <div class="product-title">Сердечка</div>
            <img loading="lazy" src="../assets/img/serdtsya_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/zakokhani_kotyky')">
            <div class="product-title">Закохані котики</div>
            <img loading="lazy" src="../assets/img/zakohani_kotyky_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/kaleidoskop')">
            <div class="product-title">Калейдоскоп</div>
            <img loading="lazy" src="../assets/img/kvadraty_02.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/chervona_faktura')">
            <div class="product-title">Червона фактура</div>
            <img loading="lazy" src="../assets/img/chervoni_fakturni_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/koliorovi_smailyky')">
            <div class="product-title">Кольорові смайлики</div>
            <img loading="lazy" src="../assets/img/kolyorovi_smailyky_02.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/siri_smailyky')">
            <div class="product-title">Сірі смайлики</div>
            <img loading="lazy" src="../assets/img/siri_smailyky_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/yabluka')">
            <div class="product-title">Яблука</div>
            <img loading="lazy" src="../assets/img/yabluka_05.jpg" class="product-image" alt="">
        </a>
    </div>
</div>
  
</template>

<script>

export default {
  
}

</script>

<style>

</style>