<template>
  <v-row class="m-logo ma-1">
    <v-col cols="4">
      <img
        :src="arc1"
        class="m-logo-image"
        style="width: 100%"
        draggable="false"
      /> </v-col
    ><v-col cols="8">
      <img
        :src="arc2"
        class="m-logo-image"
        style="width: 100%"
        draggable="false"
    /></v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    arc1: require("@/assets/arc/wust.svg"),
    arc2: require("@/assets/arc/arclab-net-05.png"),
  }),
};
</script>

<style scoped>
.m-logo {
  user-select: none;
  align-items: center;
}
</style>
