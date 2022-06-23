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
              <v-btn variant="text" @click="manage(item)">管理</v-btn>
              <v-btn variant="text" @click="getImage(item.id)">查看证书</v-btn>
            </td>
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
        <v-img
          :src="imageURL"
          ref="image"
          width="800"
          class="py-2 m-cert-image"
        />
      </v-col>
    </v-row>
  </v-overlay>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog v-model="manageDialog" retain-focus="false">
        <v-card id="change-card">
          <v-toolbar color="success"
            ><span class="px-4">{{ manageCert.id }}</span>
          </v-toolbar>
          <v-select
            v-model="selected"
            :items="items2"
            label="模板选择"
            hide-details
            prepend-icon="mdi-certificate-outline"
            single-line
            density="comfortable"
            class="ma-4"
          ></v-select>
          <v-textarea
            class="mx-4 mb-4"
            label="描述"
            rows="1"
            v-model="description"
            prepend-icon="mdi-text"
            hide-details="true"
            density="compact"
          ></v-textarea>
          <v-btn block variant="flat" class="mb-4" @click="changeDetail"
            >更新证书信息</v-btn
          >
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api";

export default {
  props: ["id"],
  data: () => ({
    certs: [],
    overlay: false,
    imageURL: "",
    manageDialog: false,
    manageCert: {},
    templates: [],
    selected: "",
    description: "",
  }),
  computed: {
    items2() {
      return this.templates.map((item) => {
        return item.name;
      });
    },
    value2() {
      // 这里的value是v-select的值
      if (!this.selected) return "";
      const v = this.templates.find((item) => {
        return item.name === this.selected;
      });
      return v ? v.id : "";
    },
  },
  async mounted() {
    this.certs = await api.getUserCerts(this.id);
    this.getTemplates();
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
    async getTemplates() {
      // get templates
      const templates = await api.getTemplates();
      this.templates = templates;
    },
    async manage(cert) {
      // manage cert details
      this.manageDialog = true;
      this.manageCert = cert;
      this.description = cert.description;
      this.selected = this.templates.find((item) => {
        return item.id === cert.template_id;
      })?.name;
    },
    async changeDetail() {
      try {
        const rs = await api.changeCertInfo(
          this.manageCert.grantee_id,
          this.value2,
          this.description,
          this.manageCert.id
        );
        this.$toast.success("更新成功");
        this.manageDialog = false;
        this.certs = await api.getUserCerts(this.id);
      } catch (e) {
        this.$toast.error(e.message);
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
#change-card {
  max-width: 96vw;
  width: 500px;
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
