<template>
  <!-- 未登录时 展示查询与登录 -->
  <v-row align="center" class="h-100" v-if="!authorized">
    <v-col cols="12">
      <v-tabs centered v-model="tab">
        <v-tab color="teal lighten-1"> 证书查询 </v-tab>
        <v-tab color="orange lighten-1"> 获取证书 </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item>
          <v-row justify="center" align="center">
            <v-col cols="12" class="m-col">
              <v-text-field
                class="mt-4"
                label="证书编号"
                prepend-inner-icon="mdi-certificate"
                hide-details
                clearable
                v-model="certID"
                v-on:keyup.enter="submit"
              ></v-text-field>
              <!-- <v-btn
                variant="contained-text"
                size="large"
                class="float-right mt-4"
                @click="submit"
                >提交
              </v-btn> -->
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item>
          <v-row justify="center" align="center">
            <v-col cols="12" class="m-col">
              <v-text-field
                class="mt-4"
                label="账号"
                prepend-inner-icon="mdi-account"
                hide-details
                clearable
                v-on:keyup.enter="login"
                v-model="userID"
              ></v-text-field>
              <v-text-field
                class="mt-4"
                label="密码"
                type="password"
                prepend-inner-icon="mdi-key"
                hide-details
                clearable
                v-model="passwd"
                v-on:keyup.enter="login"
              ></v-text-field>
              <!-- <v-btn
                variant="contained-text"
                size="large"
                class="float-right mt-4"
                @click="login"
                >登录
              </v-btn> -->
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
  <!-- 登录状态 展示自己的证书 -->
  <v-row justify="center" class="h-100" v-else>
    <v-col cols="12">
      <v-banner lines="one" style="user-select: none">
        <template v-slot:text>
          <v-icon class="mr-1">mdi-account-circle</v-icon>
          <b>
            {{ userInfo ? `欢迎！${userInfo.name}同学` : "用户名未获取到" }}
          </b>
        </template>
        <template v-slot:actions>
          <v-btn @click="changePassword"> 更改密码 </v-btn>
          <v-btn @click="logout"> 登出 </v-btn>
        </template>
      </v-banner>
      <cert-list></cert-list>
    </v-col>
  </v-row>
  <!-- 查询证书成功 -->
  <v-overlay v-model="overlay" class="align-center justify-center">
    <v-progress-circular
      indeterminate
      size="64"
      v-if="loading"
    ></v-progress-circular>
    <v-row v-else style="width: 400px; max-width: 100vw">
      <v-col cols="12" class="w-100">
        <v-card class="mx-auto" max-width="400px">
          <v-card-header class="pt-4">
            <v-card-header-text>
              <v-card-title>
                <v-icon color="success" size="32" class="mr-2"
                  >mdi-check-decagram</v-icon
                >
                有效证书
              </v-card-title>
            </v-card-header-text>
          </v-card-header>

          <v-card-text class="pb-0">
            <v-table>
              <tbody class="text-h5">
                <tr v-for="item in details" :key="item.text" v-ripple>
                  <td>
                    <b>{{ item.text }}</b>
                  </td>
                  <td>{{ searchResult[item.key] }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <v-card-actions class="pt-0 flex-row-reverse px-4">
            <v-btn variant="contained-text" @click="overlay = false">
              关闭
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script>
import CertList from "@/components/CertList.vue";
import api from "../api";

export default {
  components: { CertList },
  data: () => ({
    tab: 0,
    // 查询证书
    certID: "",
    overlay: false,
    loading: false,
    details: [
      { text: "证书名", key: "description" },
      { text: "姓名", key: "grantee_name" },
      { text: "颁发日期", key: "date" },
      { text: "证书编号", key: "id" },
    ],
    searchResult: {},
    // 登录部分
    userID: "",
    passwd: "",
    authorized: false,
    userInfo: {},
  }),
  methods: {
    async submit() {
      if (this.certID) {
        this.loading = true;
        this.overlay = true;
        try {
          const data = await api.lookup(this.certID);
          this.searchResult = data;
          this.loading = false;
        } catch (e) {
          this.overlay = false;
          this.$toast.warning(e.message);
        }
      }
    },
    async login() {
      if (this.userID && this.passwd) {
        this.loading = true;
        this.overlay = true;
        try {
          const rs = await api.login(this.userID, this.passwd);
          // login succeed
          localStorage.setItem("token", rs);
          api.conf.headers.Authorization = `Bearer ${rs}`;
          this.authorized = true;
          this.overlay = false;
        } catch (e) {
          this.overlay = false;
          this.$toast.error("登陆失败");
        }
      }
    },
    logout() {
      // remove auth token
      localStorage.removeItem("token");
      api.conf.headers.Authorization = "";
      this.authorized = false;
    },
    changePassword() {
      this.$toast.warning("暂未实现");
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      api.conf.headers.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      this.authorized = true;
    }
  },
  watch: {
    async authorized(val) {
      if (val) {
        try {
          const rs = await api.getUserInfo();
          this.userInfo = rs;
        } catch (e) {
          this.logout();
          this.$toast.error("登录过期");
        }
      }
    },
  },
};
</script>

<style scoped>
.m-container {
  height: 100%;
}
.m-col {
  max-width: 500px;
}
</style>
