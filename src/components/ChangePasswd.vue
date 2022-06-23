<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog v-model="dialogState">
        <v-card id="dialog-card">
          <v-toolbar color="success"
            ><span id="toolbar-title">{{ `${user.name} (${user.id})` }}</span>
          </v-toolbar>
          <v-text-field
            class="ma-4"
            label="新密码"
            type="password"
            prepend-inner-icon="mdi-key"
            hide-details
            clearable
            v-model="passwd"
            v-on:keyup.enter="submit"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api";

export default {
  props: ["dialog", "user"],
  data: () => ({
    passwd: "",
  }),
  computed: {
    dialogState: {
      get() {
        return this.dialog;
      },
      set(val) {
        this.$emit("update:dialog", val);
      },
    },
  },
  methods: {
    async submit() {
      if (!this.passwd) return;
      try {
        const rs = await api.changePassword(this.user, this.passwd);
        this.$toast.success("更改成功");
        this.dialogState = false;
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
  },
};
</script>

<style scoped>
#toolbar-title {
  padding-left: 1rem;
}
#dialog-card {
  width: 500px;
  max-width: 96vw;
  overflow-x: hidden;
  overflow-y: overlay;
}
</style>
