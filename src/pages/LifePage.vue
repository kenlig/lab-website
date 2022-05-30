<template>
  <div>
    <h1 class="font-weight-light m-title">生活</h1>
    <v-divider style="margin-bottom: 1rem"></v-divider>
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
          cover
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.m-title {
  text-align: center;
  margin-bottom: 16px;
}
@media screen and (max-width: 600px) {
  .v-col-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
