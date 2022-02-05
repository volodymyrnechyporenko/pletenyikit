<template>
  <ScrollTopComponent>
    <a class="scrollToTop">
      <font-awesome-icon :icon="['fas', 'angle-up']" size="3x" />
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "./ScrollTopComponent";
export default {
  components: {
    ScrollTopComponent,
  },
};
</script>

<style>
.scrollToTop {
  height: 60px;
  text-align: center;
  font-weight: bold;
  color: #cbac6a;
  text-decoration: none;
  position: fixed;
  bottom: 0px;
  right: 1rem;
  z-index: 7;
  cursor: pointer;
}

.scrollToTop:hover {
  text-decoration: none;
}
</style>
