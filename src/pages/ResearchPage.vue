<template>
  <v-tabs centered v-model="tab">
    <v-tab color="blue lighten-1"> 研究项目 </v-tab>
    <v-tab color="teal lighten-1"> 研究成果 </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item>
      <project-compo></project-compo>
    </v-window-item>
    <v-window-item>
      <achive-compo></achive-compo>
    </v-window-item>
  </v-window>
</template>

<script>
import AchiveCompo from "./Research/AchiveCompo.vue";
import ProjectCompo from "./Research/ProjectCompo.vue";

export default {
  components: { AchiveCompo, ProjectCompo },
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped></style>
