<template>
  <v-row class="h-100" align="center" v-if="certs.length === 0">
    <v-col cols="12" align="center">
      <v-icon size="96" color="rgba(0, 0, 0, 0.2)"
        >mdi-alert-decagram-outline</v-icon
      >
      <p class="pa-4" id="i-alert-text">内容查询为空</p>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th class="m-table-header">证书名</th>
            <th class="m-table-header">姓名</th>
            <th class="m-table-header">颁发日期</th>
            <th class="m-table-header">证书编号</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in certs"
            :key="item.id"
            v-ripple
            class="m-table-item"
            @click="getImage(item.id)"
          >
            <td>{{ item.description }}</td>
            <td>{{ item.grantee_name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
  <v-overlay
    v-model="overlay"
    class="align-center justify-center"
    @click="overlay = !overlay"
  >
    <v-row style="width: 800px; max-width: 100vw">
      <v-col cols="12" class="w-100">
        <v-img :src="imageURL" ref="image" width="800" class="m-cert-image" />
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script>
import api from "../api";

export default {
  data: () => ({
    certs: [],
    overlay: false,
    imageURL: "",
  }),
  async mounted() {
    this.certs = await api.getCerts();
  },
  methods: {
    async getImage(id) {
      this.imageURL = "";
      try {
        this.overlay = true;
        const rs = await api.getCertImage(id);
        let blob = new Blob([rs], { type: "image/png" });
        let url = window.URL.createObjectURL(blob);
        // this.$refs.image.src = url;
        this.imageURL = url;
      } catch (e) {
        console.log(e);
        this.$toast.error("获取图片失败");
      }
    },
  },
};
</script>

<style scoped>
#i-alert-text {
  color: rgba(0, 0, 0, 0.6);
  user-select: none;
}
.m-table-header {
  min-width: 5rem;
}
.m-table-item {
  cursor: pointer;
}
.m-cert-image {
  height: 100vh;
}
</style>
