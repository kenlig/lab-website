<template>
  <div>
    <img :src="bgImage" class="m-content-bg s-blur" />
    <div class="m-position-left m-background">
      <v-card width="344">
        <v-img :src="ctImage" height="200px"></v-img>

        <v-card-title> 配备设备 </v-card-title>

        <v-card-subtitle> 没电脑怎么学习（工作）呢 </v-card-subtitle>
        <v-card-text>
          实验室会给每人配一台台式机和至少一个显示器，鼠标键盘插线板等等都是有的，还有工位，以供大家在实验室学习、看论文或者做项目。
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
            v-ripple="{ class: 'success--text' }"
            style="padding: 0px"
          >
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              实验室分配机器一般没有显卡，写写代码够用了，但想玩游戏还是得自己买个显卡。鼠标键盘实验室的比较老，我们喜欢用自己买的。
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  nanme: "EquipPage",
  data: () => ({
    bgImage: require("@/assets/bg-equip.jpg"),
    ctImage: require("@/assets/ct-monitor.jpg"),
    show: false,
  }),
};
</script>

<style>
.m-position-left {
  display: flex;
  align-items: center;
  position: absolute;
  left: 10em;
  top: 0;
  height: 100%;
  text-align: left;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.s-blur {
  filter: blur(4px);
  -webkit-filter: blur(8px);
  transform: scale(1.05);
}
.m-background {
}
</style>
