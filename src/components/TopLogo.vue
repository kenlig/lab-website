<template>
  <v-row class="m-logo ma-1" justify="center">
    <v-col cols="8" sm="4" md="4" lg="4" xl="4">
      <img
        :src="arc1"
        class="m-logo-image"
        style="width: 100%"
        draggable="false"
      /> </v-col
    ><v-col cols="0" sm="8" md="8" lg="8" xl="8" id="i-ripple">
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
@media screen and (max-width: 600px) {
  #i-ripple {
    display: none;
  }
}
</style>
