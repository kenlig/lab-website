<template>
  <div class="m-container" @scroll="handleScroll">
    <div class="m-flex-container">
      <v-img
        :src="bookImage"
        :lazy-src="lazyImage"
        class="s-round i-book"
        height="75%"
        @mouseover="hoverBook = true"
        @mouseleave="hoverBook = false"
      >
        <div class="m-hover-text" :class="{ 'a-hover': hoverBook }">
          <h2 class="m-image-text">“藏经架”(部分)</h2>
          <p class="m-image-text">
            实验室藏书十分丰富，你需要的你不需要的在这都有，就算没有也可以报销购买（只要专业相关）。
          </p>
        </div>
      </v-img>
      <v-img
        :src="equipImage"
        :lazy-src="lazyImage"
        class="s-round i-book"
        height="75%"
        @mouseover="hoverEquip = true"
        @mouseleave="hoverEquip = false"
      >
        <div class="m-hover-text" :class="{ 'a-hover': hoverEquip }">
          <h2 class="m-image-text">设备</h2>
          <p class="m-image-text">描述待补充。。</p>
        </div>
      </v-img>
    </div>
    <div class="m-background" :class="{ 'a-darker': isActive }"></div>
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
    hoverBook: false,
    hoverEquip: false,
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
  methods: {
    handleScroll: function (e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.m-container {
  position: static;
  width: 100%;
  height: 100%;
  overflow: overlay;
  user-select: none;
  transform: translateZ(0);
}
.m-flex-container {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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
.s-round {
  flex: 1 1 0;
  margin: 1rem;
  border-radius: 0.781vw;
  background-color: rgba(0 0 0 / 30%);
  box-shadow: 3px 3px 20px 0px rgb(0 0 0 / 50%);
}
.i-book {
  max-height: 75%;
  max-width: 30em;
}
.a-darker {
  opacity: 1;
}
.m-hover-text {
  position: absolute;
  bottom: 0;
  padding: 4rem 0 2rem 0;
  width: 100%;
  border-bottom-left-radius: 0.781vw;
  border-bottom-right-radius: 0.781vw;
  background: linear-gradient(0deg, black, transparent);
  transition: opacity 0.3s ease 0s;
  color: white;
  opacity: 0;
  text-align: left;
}
.a-hover {
  opacity: 1;
}
.m-image-text {
  padding: 0 2rem 0 2rem;
}
@media screen and (max-width: 400px) {
  .m-flex-container {
    flex-direction: column;
    align-items: unset;
  }
  .i-book {
    max-width: 100%;
    max-height: 40%;
    margin-top: 5%;
  }
}
</style>
