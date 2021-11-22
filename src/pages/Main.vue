<template>

  <div class="heading">
    <h1>Плетений КіТ</h1>
    <h2>Найгарніша реінкарнація пряжі!<br>Плетені аксесуари для вас та вашої оселі</h2>
  </div>

  <div class="product-category">
    <div class="product">
        <a href="#" @click="$router.push('/toys')">
            <div class="category-title">Іграшки</div>
            <img src="../assets/img/realistychna_kotoigrashka_01.jpg" class="product-image toys" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/accessories')">
            <div class="category-title">Аксесуари</div>
            <img src="../assets/img/mitenky_sovy_girchychni_01.jpg" class="product-image accessories" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/pillows')">
            <div class="category-title">Подушки</div>
            <img src="../assets/img/pesyk_kvadratnyi_01.jpg" class="product-image pillows" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/kitchen')">
            <div class="category-title">Для кухні</div>
            <img src="../assets/img/serdtsya_01.jpg" class="product-image kitchen" alt="">
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