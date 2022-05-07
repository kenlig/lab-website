<template>
  <div>
    <h1>嵌入式系统与智能机器人研究实验室</h1>
    <img :src="bgImage" class="u-bg-icon" />
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  data: () => ({
    bgImage: require("@/assets/embed.svg"),
  }),
};
</script>

<style scoped>
.u-bg-icon {
  position: absolute;
  bottom: 0;
  right: 10%;
  height: 140px;
  width: 200px;
  filter: opacity(0.1);
}
</style>
