<template>
  <ScrollTopComponent>
      <a class="scrollToTop">
        <font-awesome-icon :icon="['fas', 'arrow-alt-circle-up']" size="3x"/>
      </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './ScrollTopComponent'
export default {
  components: {
    ScrollTopComponent
  }
}
</script>

<style>

</style>