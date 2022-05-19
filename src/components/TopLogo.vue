<template>
  <div class="m-logo">
    <img
      :src="arc1"
      class="m-logo-image"
      style="width: 37%"
      draggable="false"
    />
    <img
      :src="arc2"
      class="m-logo-image"
      style="width: 63%"
      draggable="false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    arc1: require("@/assets/arc/arclab-net-02.png"),
    arc2: require("@/assets/arc/arclab-net-05.png"),
  }),
};
</script>

<style scoped>
.m-logo {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
