<template>
  <div class="m-page-container">
    <img :src="bgImage" class="m-content-bg s-blur" />
    <div class="m-card-container" :class="{ 'a-slide-x': slideX }">
      <v-card max-width="344" elevation="5">
        <v-img
          :src="ctImage"
          :lazy-src="lazyImage"
          height="240px"
          class="m-card-image"
        ></v-img>

        <v-card-title class="font-weight-bold"> 配备设备 </v-card-title>

        <v-card-subtitle> 没电脑怎么学习（工作）呢 </v-card-subtitle>
        <v-card-text class="text-body-1 font-weight-medium">
          实验室会给每人配一台台式机和至少一个显示器，鼠标键盘插线板等等，以供大家在实验室学习、看论文或者做项目。
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
            v-ripple="{ class: 'success--text' }"
            style="padding: 0px"
            class="swiper-no-swiping"
          >
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              实验室分配机器一般没有显卡，写写代码够用了，但想玩游戏还是得自己买个显卡。鼠标键盘实验室的比较老，我们喜欢用自己买的。
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
import { useSwiperSlide } from "swiper/vue";

export default {
  nanme: "EquipPage",
  setup() {
    const swiperSlide = useSwiperSlide();
    return {
      swiperSlide,
    };
  },
  data: () => ({
    lazyImage: require("@/assets/bg-dark-blur.jpg"),
    bgImage: require("@/assets/bg-equip.jpg"),
    ctImage: require("@/assets/ct-monitor.jpg"),
    show: false,
    slideX: true,
  }),
  watch: {
    swiperSlide(newV, oldV) {
      if (newV.isActive === true) {
        this.slideX = true;
      } else {
        this.slideX = false;
      }
    },
  },
};
</script>

<style scoped>
.m-page-container {
  height: 100%;
  width: 100%;
}
.m-card-container {
  display: flex;
  align-items: center;
  position: absolute;
  left: -20%;
  transition: left 0.5s cubic-bezier(0.21, 0.7, 0.46, 1.01) 0s;
  top: 0;
  height: 100%;
  width: 100%;
  text-align: left;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.s-blur {
  filter: blur(4px);
  -webkit-filter: blur(8px);
  transform: scale(1.05);
}
.m-card-image {
  border-radius: 4px 4px 0 0;
}
.a-slide-x {
  left: 15%;
}
@media screen and (max-width: 806px) {
  .m-card-container {
    left: -50%;
    justify-content: center;
  }
  .a-slide-x {
    left: 0;
  }
}
</style>
