<template>
  <div class="m-container">
    <div class="m-flex-container">
      <v-img
        :src="bookImage"
        :lazy-src="lazyImage"
        height="100%"
        :class="{ 'a-hover': hoverBook }"
        @mouseover="hoverBook = true"
        @mouseleave="hoverBook = false"
        ><div class="m-hover-text" :class="{ 'a-darker': hoverBook }">
          <h2 class="m-image-text">“藏经架”(部分)</h2>
          <p class="m-image-text">
            实验室藏书十分丰富，你需要的你不需要的在这都有，就算没有也可以报销购买（只要专业相关）。
          </p>
        </div>
      </v-img>
      <v-img
        :src="equipImage"
        :lazy-src="lazyImage"
        height="100%"
        :class="{ 'a-hover': hoverEquip }"
        @mouseover="hoverEquip = true"
        @mouseleave="hoverEquip = false"
        ><div class="m-hover-text" :class="{ 'a-darker': hoverEquip }">
          <h2 class="m-image-text">设备</h2>
          <p class="m-image-text">描述待补充。。</p>
        </div>
      </v-img>
      <v-img
        :src="boardImage"
        :lazy-src="lazyImage"
        height="100%"
        :class="{ 'a-hover': hoverBoard }"
        @mouseover="hoverBoard = true"
        @mouseleave="hoverBoard = false"
        ><div class="m-hover-text" :class="{ 'a-darker': hoverBoard }">
          <h2 class="m-image-text">开发板</h2>
          <p class="m-image-text">描述待补充。。</p>
        </div>
      </v-img>
    </div>
    <div class="m-background" :class="{ 'a-hover': isActive }"></div>
  </div>
</template>

<script>
import { useSwiperSlide } from "swiper/vue";

export default {
  name: "LabPage",
  setup() {
    const swiperSlide = useSwiperSlide();
    return {
      swiperSlide,
    };
  },
  data: () => ({
    isActive: false,
    lazyImage: require("@/assets/bg-dark-blur.jpg"),
    bookImage: require("@/assets/ct-lab-book.jpg"),
    equipImage: require("@/assets/ct-lab-equip.jpg"),
    boardImage: require("@/assets/ct-lab-board.jpg"),
    hoverBook: false,
    hoverEquip: false,
    hoverBoard: false,
  }),
  watch: {
    swiperSlide(newV, oldV) {
      if (newV.isActive === true) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style scoped>
.m-container {
  position: static;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  transform: translateZ(0);
  filter: brightness(90%);
}
.m-flex-container {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m-flex-container > div.v-img {
  flex: 1 0 auto;
  transition: flex 0.4s ease 0s;
}
.m-flex-container > div.v-img:not(:last-child) {
  border-right: 0.5rem solid rgba(0, 0, 0, 0.8);
}
.a-hover {
  flex: 2 0 auto !important;
}
.m-background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(-20deg, rgb(0 0 0), rgb(157 150 140));
  transition: opacity 3s ease-out 0s;
  opacity: 0.5;
  z-index: -10;
}
.a-darker {
  opacity: 1 !important;
}
.m-hover-text {
  position: absolute;
  bottom: 0;
  padding: 4rem 0 2rem 0;
  width: 100%;
  background: linear-gradient(0deg, black, transparent);
  transition: opacity 0.3s ease 0s;
  color: white;
  opacity: 0;
  text-align: left;
  z-index: 10;
}
.m-image-text {
  padding: 0 2rem 0 2rem;
}
</style>
