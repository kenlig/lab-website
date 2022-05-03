<template>
  <v-slide-y-reverse-transition>
    <div class="u-icon-return" v-show="show">
      <v-btn icon @click="returnTop" class="swiper-no-swiping" :elevation="5">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </v-slide-y-reverse-transition>
</template>

<script>
import { useSwiper } from "swiper/vue";

export default {
  name: "ReturnTop",
  props: {
    show: Boolean,
  },
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
.u-icon-return {
  position: absolute;
  right: 1em;
  bottom: 1em;
  z-index: 100;
}
</style>
