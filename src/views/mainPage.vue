<template>
  <div id="app" class="mainContainer">
    <div class="menuContainer">
      <el-menu
        :default-active="this.$router.history.current.fullPath"
        class="main-menu"
        @select="handleSelect"
        background-color="#2c3e50"
        text-color="#bdc3c7"
        active-text-color="#95a5a6"
        router
        style="width:200px"
      >
        <routerComponent
          v-for="(item, index) in routerList"
          :key="index"
          :children="item.children ? item.children : []"
          :currentIndex="item.path"
          :currentName="item.name"
        ></routerComponent>
      </el-menu>
    </div>
    <div class="viewContainer">
      <h1
        v-if="this.$router.history.current.fullPath == '/mainPage'"
        class="tipTitle"
      >
        欢迎{{ userName }}👏，请在顶部下拉框中选择项目
      </h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
// import axios from "axios"
import routerComponent from "./routerComponent";

export default {
  components: { routerComponent },
  data() {
    return {
      routerList: this.$router.options.routes[2].children,
      userName: "",
    };
  },
  created() {
    // 打印相关信息
    // this.printConfigMessage();
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    printConfigMessage() {
      //显示全局配置信息
      console.log("process.env", process.env);
      //打印当前完整路径
      console.log("fullPath", this.$router.history.current.fullPath);
      //打印当前路由
      console.log("fullPath", this.$router);
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
      } else {
        this.userName == "user";
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
  display: flex;
  flex-direction: row;
}
.menuContainer {
  display: flex;
}
.viewContainer {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1%;
  overflow: auto;
}
.tipTitle {
  text-align: center;
}
</style>