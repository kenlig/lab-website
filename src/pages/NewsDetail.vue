<template>
  <div>
    <h1 class="font-weight-light m-title">{{ detail.title }}</h1>
    <v-divider class="m-divider"></v-divider>
    <template v-for="(item, index) in detail.detail" :key="index">
      <p v-if="!item.image" class="m-text">{{ item.content }}</p>
      <v-img v-else :src="item.content" class="m-image" cover>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </template>
    <v-chip class="ma-2" @click="$router.go(-1)">
      <v-icon left>mdi-menu-left</v-icon>
      返回
    </v-chip>
  </div>
</template>

<script>
import news from "@/data/news";

export default {
  computed: {
    index() {
      return parseInt(this.$route.params.id);
    },
    detail() {
      if (this.index === undefined) return {};
      return news[this.index];
    },
  },
};
</script>

<style scoped>
.m-divider {
  margin-bottom: 1rem;
}
.m-title {
  text-align: center;
  margin-bottom: 16px;
}
.m-text {
  line-height: 2rem;
  text-indent: 2rem;
}
.m-image {
  margin: 1rem auto;
  max-height: 40rem;
  max-width: 50rem;
}
.m-image img {
  object-fit: cover !important;
}
</style>
