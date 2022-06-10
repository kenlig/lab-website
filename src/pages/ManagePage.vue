<template>
  <v-row align="center" justify="center" class="h-100" v-if="!authorized">
    <v-col cols="12" class="m-col">
      <v-text-field
        class="mt-4"
        label="管理密码"
        color="red lighten-1"
        prepend-inner-icon="mdi-snowflake-alert"
        hide-details
        clearable
        v-model="passwd"
        v-on:keyup.enter="admin"
        type="password"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" v-else>
    <v-col cols="12">
      <v-banner lines="one" style="user-select: none" color="red lighten-1">
        <template v-slot:text>
          <v-icon class="mr-1" color="red lighten-1">mdi-account-circle</v-icon>
          以管理员身份登录
        </template>
        <template v-slot:actions>
          <v-btn @click="logout"> 登出 </v-btn>
        </template>
      </v-banner>
    </v-col>
    <v-col cols="12">
      <div class="d-flex flex-row">
        <v-tabs
          v-model="tab"
          direction="vertical"
          color="primary"
          style="min-width: 8rem"
        >
          <v-tab value="option-1"> 人员证书管理 </v-tab>
          <v-tab value="option-2"> 批量证书颁发 </v-tab>
        </v-tabs>
        <v-window v-model="tab" class="w-100">
          <v-window-item value="option-1">
            <user-compo></user-compo>
          </v-window-item>
          <v-window-item value="option-2">
            <grant-compo></grant-compo>
          </v-window-item>
        </v-window>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api.js";
import UserCompo from "./Manager/UserCompo.vue";
import GrantCompo from "./Manager/GrantCompo.vue";

export default {
  components: { UserCompo, GrantCompo },
  data: () => ({
    tab: "option-1",
    authorized: false,
    passwd: "",
    userInfo: {},
  }),
  methods: {
    async admin() {
      // request
      try {
        const rs = await api.adminLogin(this.passwd);
        localStorage.setItem("token", rs);
        api.conf.headers.Authorization = `Bearer ${rs}`;
        this.authorized = true;
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
    logout() {
      // remove auth token
      localStorage.removeItem("token");
      api.conf.headers.Authorization = "";
      this.authorized = false;
    },
  },
  mounted() {
    // check if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      api.conf.headers.Authorization = `Bearer ${token}`;
      this.authorized = true;
    }
  },
  watch: {
    async authorized(val) {
      if (val) {
        try {
          const rs = await api.getUserInfo();
          this.userInfo = rs;
          if (rs.id !== "admin") {
            this.authorized = false;
            this.$toast.warning("无权限访问");
          }
        } catch (e) {
          this.authorized = false;
          localStorage.removeItem("token");
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
