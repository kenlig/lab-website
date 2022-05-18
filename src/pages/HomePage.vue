<template>
  <div>
    <div class="m-logo">
      <img
        :src="arc1"
        class="m-logo-image"
        style="width: 37%"
        draggable="false"
      />
      <img
        :src="arc2"
        class="m-logo-image"
        style="width: 63%"
        draggable="false"
      />
    </div>
    <div class="m-text">
      <p>
        浙江大学计算机系统结构实验室（ZJU ARCLab）
        依托于浙江大学计算机学院系统结构及网络安全研究所，于1990年创立。
        实验室由陈文智教授领衔，经多年发展，建立了一支由10余名教授、副教授、高级工程师、
        资深业界大咖组成的富有激情和创新活力的科研团队，包括实验室副主任张紫徽老师，
        高级工程师王总辉老师，施青松副教授等。ARClab培养了一批又一批优秀的计算机人才，
        毕业生遍布国内外著名企业及学府。
      </p>
      <p>
        ARClab以操作系统为核心竞争力，向下深入到体系结构，向上提升到分布式软件，横向扩展到信息安全。主要研究方向包括计算机体系结构、虚拟化与云平台、嵌入式系统、区块链、大数据和信息安全等。承担国家和省部级科技项目10余项，企业重大合作项目20余项，在TOC、TIFS、TDSC、TVCG、AAAI、TPDS、CSS等国际高水平学术期刊或会议发表论文近100篇，获得国家发明专利授权30余项，获得软件著作权20余项，出版专著9部。荣获国家教学成果二等奖、浙江省科技进步一等奖等国家和省部级奖励5项。
      </p>
      <p>
        ARClab与多家头部企业开展战略合作，成立了浙江大学-阿里巴巴前沿技术联合研究中心（AZFT）智能计算系统实验室，浙江大学-蚂蚁金服金融研究中心智能计算实验室，浙江大学-安恒信息前沿技术联合研究中心，浙江大学-苹果公司科技创新中心，全方位的产学研合作必将推进业界和学术界相关领域的快速发展。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    arc1: require("@/assets/arc/arclab-net-02.png"),
    arc2: require("@/assets/arc/arclab-net-05.png"),
  }),
};
</script>

<style scoped>
.m-logo {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m-logo-image {
  object-fit: contain;
  max-height: 8rem;
  max-width: 100%;
}
.m-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 1rem 0;
  line-height: 2;
}
</style>
