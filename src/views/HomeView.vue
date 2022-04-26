<template>
  <swiper
    :direction="'vertical'"
    :mousewheel="true"
    :slidesPerView="1"
    :pagination="pagination"
    :hashNavigation="{
      watchState: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide data-hash="Slide1">Slide 1</swiper-slide>
    <swiper-slide data-hash="Slide2">Slide 2</swiper-slide>
    <swiper-slide data-hash="Slide3">Slide 3</swiper-slide>
    <swiper-slide data-hash="Slide4">Slide 4</swiper-slide>
    <swiper-slide data-hash="Slide5">Slide 5</swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper";

export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination, Navigation],
      pagination: {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<div><span class="' + className + "></span></div>";
        // },
      },
    };
  },
  mounted() {},
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet {
  margin: 8px !important;
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}
.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
</style>
