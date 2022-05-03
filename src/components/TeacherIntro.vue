<template>
  <div class="m-container">
    <img :src="bgImage" class="m-content-bg" />
    <div class="m-teacher-pic m-skew">
      <v-img :src="teacherImage" height="100%" width="100%"></v-img>
    </div>
    <div class="m-teacher-intro m-skew" :class="{ 'a-slide-x': enter }">
      介绍
    </div>
  </div>
</template>

<script>
import { useSwiperSlide } from "swiper/vue";

export default {
  name: "TeacherIntro",
  setup() {
    const swiperSlide = useSwiperSlide();
    return {
      swiperSlide,
    };
  },
  data: () => ({
    bgImage: require("@/assets/bg-dark-blur.jpg"),
    teacherImage: require("@/assets/bg-test.jpg"),
    enter: false,
  }),
  watch: {
    swiperSlide(newV, oldV) {
      if (newV.isActive === true) {
        this.enter = true;
      } else {
        this.enter = false;
      }
    },
  },
};
</script>

<style scoped>
.m-container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.m-teacher-pic {
  margin-left: 4em !important;
  transform: skew(-10deg);
  color: white;
  width: 300px;
  height: 420px;
}
.m-teacher-intro {
  margin-right: 4em !important;
  padding: 10px;
  color: white;
  width: 600px;
  height: 400px;
  border-left: 4px solid white;
  transform: skew(-10deg) translate(100px, 0);
  transition: transform 0.2s ease 0.1s;
}
.m-skew {
  margin: 40px;
  background-color: rgb(0 0 0 / 70%);
  box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 36%);
  transition-property: padding, height, width, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}
.m-teacher-intro:hover {
  padding: 20px;
}
.m-teacher-pic:hover {
  height: 440px;
  width: 320px;
}
.a-slide-x {
  transform: skew(-10deg) translate(0px, 0);
}
</style>
