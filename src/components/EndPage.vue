<template>
  <div @click="returnTop" class="m-main">
    <h1 class="m-text">&nbsp;&nbsp;加入我们！</h1>
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

<style scoped>
.m-main {
  width: 100%;
  height: 100%;
  background: url("~@/assets/bg-bang.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m-text {
  font-size: 3rem;
}
</style>
