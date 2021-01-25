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
      <el-submenu index="/bujuPage">
        <template slot="title">布局</template>
        <el-menu-item index="/bujuPage/flex">flex布局</el-menu-item>
        <el-menu-item index="/bujuPage/grid">grid布局</el-menu-item>
      </el-submenu>
      <el-submenu index="/zujian">
        <template slot="title">组件</template>
        <el-menu-item index="/zujian/element">element</el-menu-item>
      </el-submenu>
      <el-menu-item index="/playground">测试页面</el-menu-item>
    </el-menu>
    <h1
      v-show="this.$router.history.current.fullPath == '/mainPage'"
      class="tipTitle"
    >
      欢迎{{ userName }}👏，请在顶部下拉框中选择项目
    </h1>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
// import axios from "axios"

export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.printConfigMessage();
    console.log("fullPath", this.$router.history.current.fullPath);
    console.log("fullPath", this.$router);
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    printConfigMessage() {
      //显示全局配置信息
      console.log("process.env", process.env);
    },
    handleSelect() {
      //提交选择事件切换路由
      // console.log("fullPath", this.$router.history.current.fullPath);
    },
    getMessage() {
      if (this.$router.history.current.fullPath == "/buju") {
        api.getHelloText().then((res) => {
          console.log(res);
          this.userName = res.data.name;
        });
      }
      else{
        this.userName == 'user'
      }
    },
  },
};
</script>

<style >
/* 消除网页顶端及两边的空白条 */
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background: #ecf0f1;
}
.mainContainer {
  padding-top: 0px;
}
.container {
  /* width: 100%;
  height: 100%; */
  padding: 2%;
  display: flex;
}
.tipTitle {
  text-align: center;
}
</style>