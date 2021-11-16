<template>
  <NavigationList></NavigationList>
  <ScrollTopArrow></ScrollTopArrow>
  <main>
    
    <router-view :key="$route.path"></router-view>
    
  <AboutTxt></AboutTxt>
  </main>
  <FooterList></FooterList>
  
</template>

<script>
import NavigationList from './components/NavigationList.vue'
import AboutTxt from './components/AboutTxt'
import FooterList from './components/FooterList.vue'
import ScrollTopArrow from './components/ScrollTopArrow'

export default {
  name: 'App',
  components: {
    NavigationList,
    AboutTxt,
    FooterList,
    ScrollTopArrow,
  },
}

</script>

<style>

</style>