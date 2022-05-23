<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="ml-2 mr-2"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-container id="header-routes">
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

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav dense>
        <v-item-group v-model="group" selected-class="bg-primary">
          <v-list-item
            class="m-drawer-list"
            v-ripple
            v-for="(item, index) in routes"
            :key="index"
            @click="changeRoute(item.name)"
          >
            <v-list-item-avatar>
              <v-icon>{{ item.icon || "mdi-home" }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-item-group>
      </v-list>
    </v-navigation-drawer>

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
    drawer: false,
    group: null,
    routes: [
      { text: "首页", name: "home", icon: "mdi-home" },
      // { text: "新闻", name: "news, icon: "mdi-newspaper" },
      { text: "研究", name: "research", icon: "mdi-layers-search" },
      { text: "团队", name: "team", icon: "mdi-account-group" },
      // { text: "课程", name: "course", icon: "mdi-book-variant" },
      { text: "生活", name: "life", icon: "mdi-camera-iris" },
      { text: "加入我们", name: "join", icon: "mdi-shuriken" },
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
#header-routes {
  padding: 0;
}
.m-drawer-list {
  user-select: none;
}
@media screen and (max-width: 600px) {
  #header-routes {
    display: none;
  }
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
  padding: 0 !important;
  background: rgb(255 255 255 / 66%) !important;
  backdrop-filter: saturate(200%) blur(10px);
}
</style>
