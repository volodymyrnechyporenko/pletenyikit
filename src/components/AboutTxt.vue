<template>
    <div id="about" class="heading">
        <h2>{{ aboutUsTitle }}</h2>
    </div>
    <div class="article">
      <div id="bottom_txt" class="txt-2col">
        <p v-for="aboutUsValue in aboutUsValues" :aboutUsValue="aboutUsValue">{{ aboutUsValue}}</p>
      </div>
    </div>

</template>

<script>
import {aboutUsTitle, aboutUsValues} from '../data/texts';

export default {
  data() {
    return {
      aboutUsTitle: aboutUsTitle,
      aboutUsValues: aboutUsValues
    };
  },
}
</script>

<style>
#about::before {
  display: block;
  content: " ";
  margin-top: -4rem;
  height: 4rem;
  visibility: hidden;
  pointer-events: none;
}

.txt-2col {
  column-count: 2;
  column-gap: 1.6em;
  column-width: auto;
}

.txt-2col p {
  margin-top: 0;
  widows: 2;
}

@media screen and (max-width: 767px) {
  .txt-2col {
    column-count: 1;
  }
}
</style>