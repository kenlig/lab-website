<template>
  <v-app>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-container style="padding: 0">
        <v-btn
          class="text-body-1 mr-2"
          v-for="(item, index) in routes"
          :key="index"
          @click="changeRoute(item.name)"
          :variant="active === item.name ? 'outlined' : 'text'"
          ><span>{{ item.text }}</span></v-btn
        >
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container><router-view /></v-container>
    </v-main>
    <main-footer></main-footer>
  </v-app>
</template>
<script>
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: { MainFooter },
  name: "MainView",
  data: () => ({
    routes: [
      { text: "首页", name: "home" },
      { text: "新闻", name: "news" },
      { text: "研究", name: "research" },
      { text: "团队", name: "team" },
      { text: "课程", name: "course" },
      { text: "生活", name: "life" },
      { text: "加入我们", name: "join" },
    ],
  }),
  computed: {
    active() {
      return this.$route.name || undefined;
    },
  },
  methods: {
    changeRoute(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style>
.m-main {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  color: rgba(0, 0, 0, 0.95) !important;
  margin: 0;
  padding: 0;
}
html::-webkit-scrollbar {
  display: none;
}
html {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
header {
  background: rgb(255 255 255 / 66%) !important;
  backdrop-filter: saturate(200%) blur(10px);
}
</style>
