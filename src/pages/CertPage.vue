<template>
  <v-tabs centered v-model="tab">
    <v-tab color="blue lighten-1"> 证书查询 </v-tab>
    <v-tab color="teal lighten-1"> 获取证书 </v-tab>
  </v-tabs>
  <v-window v-model="tab" class="h-100">
    <v-window-item class="h-100">
      <v-row justify="center" align="center" class="h-100">
        <v-col cols="12" class="m-col">
          <!-- <div class="pl-1 text-body">请输入查询编号：</div> -->
          <v-text-field
            class="mt-4"
            label="证书编号"
            prepend-inner-icon="mdi-certificate"
            hide-details
            clearable
            v-model="certID"
          ></v-text-field>
          <v-btn variant="contained-text" size="large" class="float-right mt-4"
            >提交</v-btn
          >
        </v-col>
      </v-row>
    </v-window-item>
    <v-window-item class="h-100">
      <v-row justify="center" align="center" class="h-100">
        <v-col cols="12" class="m-col">
          <!-- <div class="pl-1 text-h6">获取证书</div> -->
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
          ></v-text-field>
          <v-btn variant="contained-text" size="large" class="float-right mt-4"
            >登录</v-btn
          >
        </v-col>
      </v-row>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data: () => ({
    tab: 0,
    certID: "",
    userID: "",
    passwd: "",
  }),
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
