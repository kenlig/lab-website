<template>
  <div class="end-page-container">
    <div class="u-icon-top">
      <v-btn icon color="success" @click="returnTop" class="swiper-no-swiping">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { useSwiper } from "swiper/vue";

export default {
  name: "EndPage",
  setup() {
    const swiper = useSwiper();
    return { swiper };
  },
  methods: {
    returnTop() {
      this.swiper.slideTo(0);
    },
  },
};
</script>

<style>
.end-page-container {
  background-color: #a9a9a9;
  width: 100%;
  height: 10em;
}
.u-icon-top {
  padding: 15px;
}
</style>
