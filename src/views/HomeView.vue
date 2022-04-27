<template>
  <swiper
    :direction="'vertical'"
    :pagination="pagination"
    :hashNavigation="{
      watchState: true,
    }"
    :mousewheel="true"
    :slidesPerView="1"
    :modules="modules"
  >
    <swiper-slide data-hash="Front"><front-page></front-page></swiper-slide>
    <swiper-slide data-hash="Study">研究方向</swiper-slide>
    <swiper-slide data-hash="Teacher" class="swiper-no-swiping"
      >老师介绍</swiper-slide
    >
    <swiper-slide data-hash="Techs">前后端,客户端运维</swiper-slide>
    <swiper-slide data-hash="Equip"><equip-page></equip-page></swiper-slide>
    <swiper-slide data-hash="Lab">Lab:书架,FPGA板子,地址</swiper-slide>
    <swiper-slide data-hash="End"><end-page></end-page></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper";
import FrontPage from "@/components/FrontPage.vue";
import EquipPage from "@/components/EquipPage.vue";
import EndPage from "@/components/EndPage.vue";

export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    FrontPage,
    EquipPage,
    EndPage,
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
  background: #f6f6f6;
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
.m-content-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
