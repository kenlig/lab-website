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
              <v-btn
                variant="contained-text"
                size="large"
                class="float-right mt-4"
                @click="submit"
                >提交
              </v-btn>
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
              <v-btn
                variant="contained-text"
                size="large"
                class="float-right mt-4"
                @click="login"
                >登录</v-btn
              >
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
        <v-banner-icon icon="mdi-account-circle"></v-banner-icon>
        <template v-slot:text> 欢迎！#用户名。 </template>
        <template v-slot:actions>
          <v-btn @click="logout"> 登出 </v-btn>
        </template>
      </v-banner>
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
                  <td>{{ item.value }}</td>
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
export default {
  data: () => ({
    tab: 0,
    // 查询证书
    certID: "",
    overlay: false,
    loading: false,
    details: [
      { text: "证书名", value: "XXX获奖证书", key: "cert" },
      { text: "姓名", value: "怀瑾", key: "name" },
      { text: "等级", value: "一等奖", key: "level" },
      { text: "颁发日期", value: "2022-06-01", key: "date" },
      { text: "证书编号", value: "9999999999", key: "id" },
    ],
    // 登录部分
    userID: "",
    passwd: "",
    authorized: false,
  }),
  methods: {
    submit() {
      if (this.certID) {
        this.loading = true;
        this.overlay = true;
        // query backend
        // if not valid cert this.overlay = false; show alert
        this.loading = false;
      }
    },
    login() {
      if (this.userID && this.passwd) {
        this.loading = true;
        this.overlay = true;
        // after query if valid
        this.overlay = false;
        this.authorized = true;
      }
    },
    logout() {},
  },
  mounted() {
    // if logged in:
    // this.authorized = true;
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
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
