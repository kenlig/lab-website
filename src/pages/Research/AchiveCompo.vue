<template>
  <v-col cols="12" class="py-2 px-0">
    <v-btn-toggle v-model="text" tile color="deep-purple accent-3" mandatory>
      <template v-for="(item, index) in achivements" :key="index">
        <v-btn :value="item.title"> {{ item.title }} </v-btn>
      </template>
    </v-btn-toggle>
    <template v-for="(item, index) in achivements" :key="index">
      <div v-if="text === item.title">
        <v-list>
          <v-list-item
            v-for="(s, index) in item.array"
            :key="index"
            v-ripple
            class="m-list-item px-0"
          >
            <v-list-item-avatar start class="mr-1">
              <v-icon icon="mdi-circle-small"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="s" style="white-space: break-spaces">
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-col>
</template>

<script>
import achives from "@/data/research/achives";

export default {
  data: () => ({
    text: "论文", // 切换选项卡，及默认值
    achivements: achives,
  }),
};
</script>

<style></style>
