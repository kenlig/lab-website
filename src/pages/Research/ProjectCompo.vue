<template>
  <v-divider class="m-divider"></v-divider>
  <template v-for="(item, index) in projects" :key="index">
    <v-row @click="linkToProject(index)" style="cursor: pointer">
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
</template>

<script>
import projects from "@/data/research/projects";

export default {
  data: () => ({
    projects,
  }),
  methods: {
    linkToProject(index) {
      this.$router.push({ name: "project-detail", params: { id: index } });
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
