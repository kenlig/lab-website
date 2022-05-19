<template>
  <v-row class="m-container">
    <v-col cols="3">
      <div class="m-content">
        <v-img
          :src="detail.pic"
          aspect-ratio="1"
          class="grey lighten-2"
          cover
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="m-text">{{ detail.name }}<br />{{ detail.title }}</p>
      </div>
    </v-col>
    <v-col cols="9">
      <v-card variant="contained-text" class="m-card">
        <v-card-title>简介</v-card-title>
        <v-card-text>{{ detail.profile }}</v-card-text>
      </v-card>
      <v-card variant="contained-text" class="m-card">
        <v-card-title>研究方向</v-card-title>
        <v-card-text>{{ detail.interests }}</v-card-text>
      </v-card>
      <v-card variant="contained-text" class="m-card">
        <v-card-title>研究成果</v-card-title>
        <v-card-text>{{ detail.research }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import teachers from "@/data/teachers";

export default {
  computed: {
    index() {
      return parseInt(this.$route.params.id);
    },
    detail() {
      if (this.index === undefined) return {};
      return teachers[this.index];
    },
  },
};
</script>

<style scoped>
.m-container {
  margin: 1rem;
}
.m-content {
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
.m-card {
  margin: 0 0.5rem 1rem 0.5rem;
}
.m-text {
  padding: 0.5rem;
}
/* 影响global 必须scoped */
.v-card .v-card-text {
  padding-top: 0rem;
  line-height: 2rem;
  font-size: 1rem;
}
.v-card .v-card-title {
  padding-top: 1rem;
}
</style>
