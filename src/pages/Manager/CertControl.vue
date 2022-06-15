<template>
  <v-row class="h-100 mt-5" align="center" v-if="certs.length === 0">
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
            <th class="m-table-header">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in certs"
            :key="item.id"
            v-ripple
            class="m-table-item"
          >
            <td>{{ item.description }}</td>
            <td>{{ item.grantee_name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.id }}</td>
            <td>
              <v-btn variant="content-flat" @click="manage(item.id)"
                >管理</v-btn
              >
              <v-btn variant="content-flat" @click="getImage(item.id)"
                >查看证书</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
  <v-overlay v-model="overlay" class="align-center justify-center">
    <v-row style="width: 800px; max-width: 100vw">
      <v-col cols="12" class="w-100">
        <v-img :src="imageURL" ref="image" width="800" />
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script>
import api from "@/api";

export default {
  props: ["id"],
  data: () => ({
    certs: [],
    overlay: false,
    imageURL: "",
  }),
  async mounted() {
    this.certs = await api.getUserCerts(this.id);
  },
  methods: {
    async getImage(id) {
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
    async manage(id) {
      // manage cert details
      this.$toast.warning("该功能暂未实现");
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
</style>
