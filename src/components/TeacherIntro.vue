<template>
  <div class="m-container">
    <img :src="bgImage" class="m-content-bg" />
    <div class="m-teacher-pic m-skew">
      <v-img :src="teacherImage" height="100%" width="100%"></v-img>
    </div>
    <div class="m-teacher-intro m-skew" :class="{ 'a-slide-x': enter }">
      武汉科技大学教授，浙江大学本科/硕士/博士/博士后，英国伯明翰城市大学博士生导师，武汉科技大学计算机学院计算机科学系主任，计算机国家实验教学示范中心副主任，教育部Google奖教金获得者。ACM/IEEE/CCF会员，CCF嵌入式系统专委会委员，CIC区块链专委会委员，CCF
      YOCSEF武汉主席（2021-2022）。
      主要研究方向：（1）任务调度：包括实时调度、调度的可靠性、多核调度、低功耗调度等等；（2）软硬件协同的机器学习优化：分析机器学习算法，从软件和硬件协同的角度进行算法优化。上述研究方向特别是软硬件协同的机器学习优化具有较大的挑战性。应用开发方向：（1）Android/Kotlin开发：面向医疗行业的应用开发，以及其他相关移动端开发；（2）基于Java的服务器端相关开发。学硕：以学术研究为主兼具学习与训练技术开发能力；专硕：在保证满足毕业学术要求前提下，参与实际项目学习与训练技术开发能力。
      创建与英特尔/TI/谷歌/百度/HPE/飞思卡尔/ARM等公司的校企合作联合体。发表国内外学术论文127篇，获第七届IEEE
      ICESS最佳论文奖，获JCSC（SCI源刊）区域编辑推荐论文；专利授权22项，软件著作权42项。主持/主研国家省部级项目二十余项，获省级科技进步奖二等奖1项（序1）、三等奖1项（序2）。主讲主持省一流课程1项，获得省教学成果奖一等奖1项（序5）、二等奖1项（序8）。在读研究生可接受资助前往英国伯明翰城市大学交流。毕业进入百度、阿里、腾讯、京东、字节跳动等企业工作。
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
  height: 520px;
}
.m-teacher-intro {
  margin-right: 4em !important;
  padding: 10px;
  color: white;
  width: 600px;
  height: 500px;
  border-left: 4px solid white;
  transform: skew(-10deg) translate(100px, 0);
  overflow: hidden;
}
.m-skew {
  margin: 40px;
  background-color: rgb(0 0 0 / 70%);
  box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 36%);
  transition-property: padding, height, width, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}
.m-teacher-intro:hover {
  padding: 20px;
}
.m-teacher-pic:hover {
  height: 540px;
  width: 320px;
}
.a-slide-x {
  transform: skew(-10deg) translate(0px, 0);
}
</style>
