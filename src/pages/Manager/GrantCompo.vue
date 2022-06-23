<template>
  <v-row>
    <v-col cols="12" class="ml-4">
      <h4 class="pb-2">文件上传：</h4>
      <v-file-input
        show-size
        counter
        multiple
        label="选择文件"
        accept=".csv"
        v-model="files"
        :hide-details="errorMsg.length === 0"
        :error-messages="errorMsg"
        density="comfortable"
      ></v-file-input>
    </v-col>
    <v-divider class="my-2"></v-divider>
    <v-col cols="12" v-if="uploaded.length > 0" class="ml-4">
      <h4 class="pb-2">证书颁发：</h4>
      <v-select
        v-model="selected"
        :items="items"
        label="模板选择"
        hide-details
        prepend-icon="mdi-certificate-outline"
        single-line
        density="comfortable"
      ></v-select>
      <v-textarea
        class="mt-4"
        label="描述"
        rows="1"
        v-model="description"
        prepend-icon="mdi-text"
        hide-details="true"
        density="compact"
      ></v-textarea>
      <v-btn block variant="flat" class="mt-4" @click="process">批量颁发</v-btn>
      <v-divider class="mt-4"></v-divider>
      <v-table>
        <thead>
          <tr>
            <th class="m-table-header">ID</th>
            <th class="m-table-header">姓名</th>
            <th class="m-table-header">操作进度</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in uploaded"
            :key="item.id"
            v-ripple
            class="m-table-item"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <v-progress-linear
                v-model="item.progress"
                color="light-green darken-4"
                height="10"
                striped
              ></v-progress-linear>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api";

export default {
  data: () => ({
    files: [],
    errorMsg: "",
    uploaded: [{ id: "202113708000", name: "张三", progress: 0 }],
    selected: "",
    templates: [],
    description: "",
  }),
  computed: {
    items() {
      return this.templates.map((item) => {
        return item.name;
      });
    },
    value() {
      // 这里的value是v-select的值
      if (!this.selected) return "";
      const v = this.templates.find((item) => {
        return item.name === this.selected;
      });
      return v ? v.id : "";
    },
  },
  mounted() {
    this.getTemplates();
  },
  watch: {
    files(val) {
      if (this.files.length > 0) {
        const file = this.files[0];
        // 条件判断
        this.errorMsg = "";
        if (file.size > 500000) {
          this.errorMsg = "文件大小不能超过500KB";
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          const text = e.target.result;
          this.uploaded = this.csvToArray(text);
          this.uploaded.forEach((item) => {
            item.progress = 0;
          });
        };
      } else {
        this.errorMsg = "";
      }
    },
  },
  methods: {
    async getTemplates() {
      // get templates
      const templates = await api.getTemplates();
      this.templates = templates;
    },
    csvToArray(str, delimiter = ",") {
      // slice from start of text to the first \n index
      // use split to create an array from string by delimiter
      const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
      // slice from \n index + 1 to the end of the text
      // use split to create an array of each csv value row
      const rows = str.slice(str.indexOf("\n") + 1).split("\n");
      // Map the rows
      // split values from each row into an array
      // use headers.reduce to create an object
      // object properties derived from headers:values
      // the object passed as an element of the array
      const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });
      // return the array
      return arr;
    },
    async process() {
      if (this.uploaded.length === 0) {
        this.$toast.error("用户列表为空");
        return;
      }
      if (!this.value) {
        this.$toast.error("请选择模板");
        return;
      }
      if (!this.description) {
        this.$toast.error("请填写描述");
        return;
      }
      for (let index in this.uploaded) {
        const item = this.uploaded[index];
        try {
          const res = await api.register(item.id, item.name, "000000"); // default password
          this.uploaded[index].progress = 50; // 注册新用户
        } catch (e) {
          this.uploaded[index].progress = 50; // 用户已注册
        }
        try {
          const res = await api.grantCert(
            item.id,
            this.value,
            this.description
          );
          this.uploaded[index].progress = 100; // 颁发证书成功
        } catch (e) {
          this.uploaded[index].progress = 0; // 颁发证书失败
        }
      }
    },
  },
};
</script>

<style scoped>
.m-table-header {
  min-width: 5rem;
}
/* .m-table-item {
  cursor: pointer;
} */
</style>
