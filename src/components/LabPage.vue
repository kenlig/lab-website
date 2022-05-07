<template>
  <div class="m-container" :class="{ 's-darker': isActive }">
    <v-img :src="bookImage" class="s-round i-book"></v-img>
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
    bookImage: require("@/assets/ct-lab-book.jpg"),
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
  width: 100%;
  height: 100%;
  background: linear-gradient(-20deg, rgb(42 39 39), rgb(157 150 140));
  display: flex;
  align-items: center;
  padding: 0 5% 0 5%;
  opacity: 0.75;
  transition: opacity 3s ease-out 0s;
}
.s-round {
  border-radius: 0.781vw;
  background-color: wheat;
  box-shadow: 3px 3px 20px 0px rgb(0 0 0 / 50%);
}
.i-book {
  max-height: 75%;
  max-width: 30em;
}
.s-darker {
  opacity: 1;
}
@media screen and (max-width: 400px) {
  .m-container {
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
