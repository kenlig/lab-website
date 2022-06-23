const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       target: "http://192.168.233.156:8000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
