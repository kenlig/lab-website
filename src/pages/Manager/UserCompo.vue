<template>
  <v-row class="w-100" align="center" v-if="users.length === 0">
    <v-col cols="12" align="center">
      <v-icon size="96" color="rgba(0, 0, 0, 0.2)"
        >mdi-alert-decagram-outline</v-icon
      >
      <p class="pa-4" id="i-alert-text">内容查询为空</p>
    </v-col>
  </v-row>
  <v-row v-else class="ml-2">
    <v-col cols="12" class="py-0">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="模糊搜索"
        placeholder="姓名"
        variant="underlined"
        hide-details="true"
        clearable
        v-model="searchText"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th class="m-table-header">邮箱</th>
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
            <td>{{ item.email }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    searchText: "",
    users: [
      {
        email: "xxx@gmail.com",
        name: "怀瑾",
      },
      {
        email: "xxx@gmail.com",
        name: "鱼",
      },
      {
        email: "xxx@gmail.com",
        name: "月",
      },
    ],
  }),
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
