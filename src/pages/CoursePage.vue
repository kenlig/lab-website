<template>
  <div>
    <h1 class="font-weight-light m-title">课程</h1>
    <v-divider style="margin-bottom: 1rem"></v-divider>
    <v-row>
      <v-col
        v-for="(item, index) in courses"
        :key="index"
        class="d-flex child-flex"
        cols="3"
      >
        <div class="m-content">
          <v-img
            :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
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
          <p class="m-text">{{ item.name }}<br />{{ item.en }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    courses: [
      { name: "嵌入式系统", en: "Embedded System" },
      { name: "高级计算机体系结构", en: "Advanced Computer Architecture" },
      { name: "计算机体系结构", en: "Computer Architecture" },
      { name: "计算机组成", en: "Computer Organization" },
    ],
  }),
};
</script>

<style scoped>
.m-content {
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
.m-title {
  text-align: center;
  margin-bottom: 16px;
}
.m-text {
  padding: 0.5rem;
}
@media screen and (max-width: 600px) {
  .v-col-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
