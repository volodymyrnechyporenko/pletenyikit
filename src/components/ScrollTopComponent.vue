<template>
    <a v-show="visible" class="scrollToTop" @click="scrollTop">
        <slot></slot>
    </a>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeUnmount: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop: function () {
        window.scrollTo({
        top: 0,
        left: 0
      });
    },
    scrollListener: function () {
      this.visible = window.scrollY > 300
    },
  }
}
</script>

<style>

</style>