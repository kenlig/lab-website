<template>
  <div>
    <h1 class="font-weight-light m-title">课程</h1>
    <v-divider style="margin-bottom: 1rem"></v-divider>
    <div class="m-container">
      <div v-for="(item, index) in courses" :key="index" class="m-content">
        <img :src="item.image" class="u-image" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    courses: [
      { name: "book", image: require("@/assets/ct-lab-book.jpg") },
      { name: "equip", image: require("@/assets/ct-lab-equip.jpg") },
    ],
  }),
};
</script>

<style scoped>
.m-container {
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
}
.m-content {
  flex: 0 0 auto;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
.m-title {
  text-align: center;
  margin-bottom: 16px;
}
.u-image {
  height: 20rem;
  object-fit: cover;
}
</style>
