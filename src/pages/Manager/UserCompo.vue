<template>
  <v-row class="ml-2">
    <v-col cols="12" class="py-0">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="模糊搜索"
        placeholder="姓名"
        variant="underlined"
        hide-details="true"
        clearable
        v-model="searchText"
        @keyup.enter="search"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row class="w-100 my-5" align="center" v-if="users.length === 0">
    <v-col cols="12" align="center">
      <v-icon size="96" color="rgba(0, 0, 0, 0.2)"
        >mdi-alert-decagram-outline</v-icon
      >
      <p class="pa-4" id="i-alert-text">内容查询为空</p>
    </v-col>
  </v-row>
  <v-row v-else class="ml-2">
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th class="m-table-header">ID</th>
            <th class="m-table-header">姓名</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in users"
            :key="item.id"
            v-ripple
            class="m-table-item"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
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
    searchText: "",
    users: [],
  }),
  methods: {
    async search() {
      if (this.searchText === "") {
        this.allUsers();
        return;
      }
      try {
        this.users = await api.searchUser(this.searchText);
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async allUsers() {
      try {
        this.users = await api.getAllUsers();
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
  },
  mounted() {
    this.allUsers();
  },
};
</script>

<style scoped>
#i-alert-text {
  color: rgba(0, 0, 0, 0.6);
  user-select: none;
}
.m-table-header {
  min-width: 5rem;
}
.m-table-item {
  cursor: pointer;
}
</style>
