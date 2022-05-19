<template>
  <v-footer padless dark class="m-footer"
    ><v-card flat tile class="indigo lighten-1 white--text text-right m-footer">
      <v-divider></v-divider>
      <v-container>
        <v-card-text class="white--text">
          <strong>
            Hubei Province Key Laboratory of<br />
            Intelligent Information Processing and<br />
            Real-time Industrial System
          </strong>
          <br />&#169;&nbsp;{{ new Date().getFullYear() }}
        </v-card-text>
      </v-container>
    </v-card>
  </v-footer>
</template>
<style>
.m-footer {
  flex: 0 1 auto;
  width: 100%;
  padding-bottom: 0;
}
</style>
