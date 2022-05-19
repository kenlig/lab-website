<template>
  <h1 class="font-weight-light m-title">教师</h1>
  <v-divider style="margin-bottom: 1rem"></v-divider>
  <v-row>
    <v-col
      v-for="(item, index) in teachers"
      :key="index"
      class="d-flex child-flex"
      cols="3"
    >
      <div
        class="m-content"
        @click="linkToTeacher(index)"
        style="cursor: pointer"
      >
        <v-img
          :src="item.pic"
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
        <p class="m-text">{{ item.name }}<br />{{ item.title }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import teachers from "@/data/teachers";

export default {
  data: () => ({
    teachers,
  }),
  methods: {
    linkToTeacher(index) {
      this.$router.push({ name: "teacher-detail", params: { id: index } });
    },
  },
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
