<template>
  <div>
    <top-logo></top-logo>
    <v-divider class="m-divider" style="border-color: #2ba1d3"></v-divider>
    <template v-for="(item, index) in news" :key="index">
      <v-row @click="linkToNews(index)" style="cursor: pointer">
        <v-col cols="3">
          <v-img :src="item.picture" class="m-image" cover></v-img>
        </v-col>
        <v-col cols="9">
          <h3 class="m-news-title">{{ item.title }}</h3>
          <span v-if="item.date">{{ item.date }}</span>
          <p class="m-news-description">
            {{ item.description ? item.description : item.detail[0].content }}
          </p>
        </v-col>
      </v-row>
      <v-divider class="m-divider"></v-divider>
    </template>
    <v-icon color="grey lighten-1" large style="display: block; margin: auto">
      mdi-orbit
    </v-icon>
  </div>
</template>

<script>
import news from "@/data/news";
import TopLogo from "@/components/TopLogo.vue";

export default {
  components: { TopLogo },
  data: () => ({
    news,
  }),
  methods: {
    linkToNews(index) {
      this.$router.push({ name: "news-detail", params: { id: index } });
    },
  },
};
</script>

<style scoped>
.m-divider {
  margin: 1rem 0;
}
.m-news-title {
  display: inline-block;
  margin: 0.5rem;
}
.m-news-description {
  margin: 0.5rem;
}
.m-image {
  height: 10rem;
}
</style>
