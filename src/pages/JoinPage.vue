<template>
  <top-logo></top-logo>
  <v-divider></v-divider>
  <div class="m-text">
    <p>
      <strong>一、人才类别</strong><br />
      教授/副教授、特聘研究员/副研究员、博士后<br />
      <strong>二、任职要求</strong><br />
      （一）教授/副教授<br />
      1、在国内外高水平大学担任教授或副教授一职；<br />
      2、在计算机相关领域有较高的学术造诣。 <br />
      （二）特聘研究员/副研究员<br />
      1、取得国内外高水平院校博士学位，具有高水平大学助理教授或副教授相当学术水平；<br />
      2、能独立主持一个符合实验室发展要求的学术方向； <br />
      3、可全职在校工作。<br />
      （三）博士后<br />
      1、取得国内外高水平院校博士学位，年龄在35周岁以下；<br />
      2、具有较强的研究创新能力和课题组织能力；<br />
      3、可全脱产在站从事博士后研究工作。<br />
      <strong>三、相关待遇</strong><br />
      1、学术环境：实验室具有优质的生源，开放的科研环境和丰富的合作资源；<br />
      2、薪酬待遇：将根据候选人情况提供极具竞争力的薪酬待遇，具体面议;<br />
      3、科研经费：提供极具有竞争力的科研启动经费；<br />
      4、住房安排：可申请租用学校教师公寓。<br />
      <strong>四、应聘方式</strong><br />
      请将个人简历和未来研究计划整合为一个PDF文档，以“姓名+人才类别”命名，发送至：<br />
      Email: xxx<br />
    </p>
  </div>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";

export default {
  name: "JoinPage",
  components: { TopLogo },
};
</script>

<style scoped>
.m-text {
  margin: 1rem 0 1rem 0;
  line-height: 2.5;
}
</style>
