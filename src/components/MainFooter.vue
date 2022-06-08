<template>
  <v-footer padless dark class="m-footer"
    ><v-card flat tile class="indigo lighten-1 white--text text-right m-footer">
      <v-divider></v-divider>
      <v-container id="footer-container">
        <v-card-text class="white--text" style="user-select: none">
          <strong>
            Hubei Province Key Laboratory of<br />
            Intelligent Information Processing and<br />
            Real-time Industrial System
          </strong>
          <br /><span @dblclick="this.$router.push({ name: 'manage' })">
            &#169;&nbsp;{{ new Date().getFullYear() }}
          </span>
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
#footer-container {
  padding-left: 0;
  padding-right: 0;
}
@media screen and (max-width: 360px) {
  div strong br {
    display: none;
  }
}
</style>
