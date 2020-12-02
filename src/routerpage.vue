<template>
  <div id="app" class="mainContainer">
    <el-menu
      :default-active="this.$router.history.current.fullPath"
      class="main-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#2c3e50"
      text-color="#bdc3c7"
      active-text-color="#95a5a6"
      router
    >
      <el-submenu index="/buju">
        <template slot="title">布局</template>
        <el-menu-item index="/buju/flex">flex布局</el-menu-item>
        <el-menu-item index="/buju/grid">grid布局</el-menu-item>
      </el-submenu>
      <el-submenu index="/zujian">
        <template slot="title">组件</template>
        <el-menu-item index="/zujian/element">element</el-menu-item>
      </el-submenu>
    </el-menu>
    <h1 v-show="this.$router.history.current.fullPath == '/'" class="tipTitle">
      欢迎👏，请在顶部下拉框中选择项目
    </h1>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    printConfigMessage() {
      //显示全局配置信息
      console.log(process.env);
    },
    handleSelect() {
      //提交选择事件切换路由
      console.log(this.$router.history.current.fullPath);
    },
  },
  created() {
    this.printConfigMessage();
  },
};
</script>

<style >
/* 消除网页顶端及两边的空白条 */
body {
  margin: 0px;
  padding: 0px;
  background: #ecf0f1;
}
.mainContainer {
  padding-top: 0px;
}
.container {
  padding: 2%;
  display: flex;
}
.tipTitle {
  text-align: center;
}
</style>