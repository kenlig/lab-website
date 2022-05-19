<template>
  <div>
    <top-logo></top-logo>
    <div class="m-text">
      <p v-for="(item, i) in text" :key="i">{{ item }}</p>
    </div>
    <div class="m-news">
      <p style="font-size: 1.2rem"><strong>实验室动态</strong></p>
      <v-list>
        <v-list-item
          v-for="(item, index) in sliced"
          :key="index"
          v-ripple
          class="m-list-item"
          @click="linkToNews(index)"
        >
          <v-list-item-title>
            <div class="m-list-date">{{ item.date }}</div>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import news from "@/data/news";
import TopLogo from "@/components/TopLogo.vue";

export default {
  components: { TopLogo },
  data: () => ({
    sliced: null,
    text: [
      `浙江大学计算机系统结构实验室（ZJU ARCLab）
        依托于浙江大学计算机学院系统结构及网络安全研究所，于1990年创立。
        实验室由陈文智教授领衔，经多年发展，建立了一支由10余名教授、副教授、高级工程师、
        资深业界大咖组成的富有激情和创新活力的科研团队，包括实验室副主任张紫徽老师，
        高级工程师王总辉老师，施青松副教授等。ARClab培养了一批又一批优秀的计算机人才，
        毕业生遍布国内外著名企业及学府。`,
      `ARClab以操作系统为核心竞争力，向下深入到体系结构，向上提升到分布式软件，横向扩展到信息安全。
        主要研究方向包括计算机体系结构、虚拟化与云平台、嵌入式系统、区块链、大数据和信息安全等。
        承担国家和省部级科技项目10余项，企业重大合作项目20余项，在TOC、TIFS、TDSC、TVCG、AAAI、
        TPDS、CSS等国际高水平学术期刊或会议发表论文近100篇，获得国家发明专利授权30余项，
        获得软件著作权20余项，出版专著9部。荣获国家教学成果二等奖、浙江省科技进步一等奖等国家和省部级奖励5项。`,
      `ARClab与多家头部企业开展战略合作，成立了浙江大学-阿里巴巴前沿技术联合研究中心（AZFT）
        智能计算系统实验室，浙江大学-蚂蚁金服金融研究中心智能计算实验室，
        浙江大学-安恒信息前沿技术联合研究中心，浙江大学-苹果公司科技创新中心，
        全方位的产学研合作必将推进业界和学术界相关领域的快速发展。`,
    ],
  }),
  mounted() {
    this.sliced = news.slice(0, 3);
  },
  methods: {
    linkToNews(index) {
      this.$router.push({ name: "news-detail", params: { id: index } });
    },
  },
};
</script>

<style scoped>
.m-logo-image {
  object-fit: contain;
  max-height: 8rem;
  max-width: 100%;
}
.m-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem 0 1rem 0;
  line-height: 2;
}
.m-list-item {
  padding-inline-start: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  /* min-height: 2rem;
  margin-bottom: 0.5rem; */
}
.m-list-item:hover {
  background: #f5f5f5;
}
.m-list-date {
  display: inline-block;
  background-color: hsl(200deg 100% 50% / 80%);
  line-height: 2rem;
  color: white;
  padding: 0 0.5rem 0 0.5rem;
}
</style>
