<template>
  <v-row class="h-100" align="center" v-if="certs.length === 0">
    <v-col cols="12" align="center">
      <v-icon size="96" color="rgba(0, 0, 0, 0.2)"
        >mdi-alert-decagram-outline</v-icon
      >
      <p class="pa-4" id="i-alert-text">证书查询为空</p>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th class="m-table-header">证书名</th>
            <th class="m-table-header">姓名</th>
            <th class="m-table-header">等级</th>
            <th class="m-table-header">颁发日期</th>
            <th class="m-table-header">证书编号</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in certs"
            :key="item.id"
            v-ripple
            class="m-table-item"
          >
            <td>{{ item.cert }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.level }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    certs: [
      {
        cert: "XXX获奖证书",
        name: "怀瑾",
        level: "一等奖",
        date: "2022-06-01",
        id: "9999999999",
      },
      {
        cert: "XXX获奖证书",
        name: "怀瑾",
        level: "二等奖",
        date: "2022-06-01",
        id: "9999999999",
      },
      {
        cert: "XXX获奖证书",
        name: "怀瑾",
        level: "一等奖",
        date: "2022-06-01",
        id: "9999999999",
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
