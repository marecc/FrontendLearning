<template>
  <div class="mainContainer">
    <div class="boxcontainer1">
      <titleComponent :titleText="titleText"></titleComponent>
      <div class="selectGroup">
        <select-component
          :selectorList="selectorList"
          @commit="commitStyleChange"
        ></select-component>
      </div>
      <boxcomponent boxesName="boxes" :styleOption="styleOption"></boxcomponent>
    </div>
    <h1>boxes</h1>
    <div>
      <div>
        <p>方块个数:</p>
        <el-input-number
          v-model="numberOfBoxes"
          :min="11"
          :max="30"
          label="请"
        ></el-input-number>
      </div>
      <div class="boxcontainer2">
        <numberedBoxComponent
          :numberText="n"
          v-for="n in Number(numberOfBoxes)"
          class="box"
          :key="n"
        ></numberedBoxComponent>
      </div>
    </div>
  </div>
</template>

<script>
import boxcomponent from "./Components/BoxComponent"; // ../上一级目录下
import titleComponent from "./Components/titleComponent"; // ./ 当前目录下
import numberedBoxComponent from "./Components/numberedBoxComponent";
import selectComponent from "./Components/selectComponent";

export default {
  components: {
    boxcomponent,
    titleComponent,
    numberedBoxComponent,
    selectComponent,
  },
  created() {},
  mounted() {},
  computed: {
  },
  data() {
    return {
      titleText: "flex布局",
      numberOfBoxes: 15,
      selectorList: [
        //flex布局设计下拉菜单区域数据
        {
          name: "flex-direction", //选项名称
          valueOfStyleOption: "", //绑定获取选项数据
          options: ["column-reverse", "column", "row", "row-reverse"], //选项遍历值
        },
        {
          name: "justify-content",
          valueOfStyleOption: "",
          options: [
            "flex-start",
            "flex-end",
            "center",
            "space-around",
            "space-between",
            "space-evenly",
          ],
        },
        {
          name: "align-items",
          valueOfStyleOption: "",
          options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
        },
      ],
      styleOption: "", //传递flex样式数据变量到组件
    };
  },
  methods: {
    commitStyleChange() {
      //数据发生变化时进行修改的方法
      this.styleOption =
        "display: flex; flex-direction:" +
        this.selectorList[0].valueOfStyleOption +
        ";justify-content:" +
        this.selectorList[1].valueOfStyleOption +
        ";align-items:" +
        this.selectorList[2].valueOfStyleOption +
        ";";
      console.log(this.styleOption);
    },
  },
};
</script>

<style lang=less scoped>
.mainContainer {
  display: box;
}
.titleOfItems {
  text-align: 20px;
}
/* 主要是由justify-content\align-items\align-content(wrap)\align-items(单个元素特例)四种 */
.boxcontainer1 {
  display: flex;
  flex-direction: column;
}
.selectGroup {
  display: flex;
  justify-content: flex-start;
}
.inputOfFlex-wrapBoxes {
  display: flex;
  align-items: center;
  width: 20%;
}
.boxcontainer2 {
  background-color: #16a085;
  /* 不设置height由内部元素撑起大小 */
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  /* align-content只在多行显示为flex-wrap时有效 */
  /* space-aroud两行间距更小,space-between两行间距较大 */
  align-content: space-around;
}
.boxes {
  height: 100px;
  width: 100px;
  background-color: #1abc9c;
  margin: 20px;
}
.box {
  display: flex;
}
/* justify-content针对元素在列上的分布 */
.box1 {
  display: flex;
}
.box2 {
  display: flex;
  justify-content: center;
}
.box3 {
  display: flex;
  justify-content: flex-end;
  /* end 对 justify-content无效 */
}
.box4 {
  display: flex;
  justify-content: space-around;
}
.box5 {
  display: flex;
  justify-content: space-between;
}
.box6 {
  display: flex;
  justify-content: space-evenly;
}

/* align-items针对元素在行上的分布 */
.box7 {
  display: flex;
  align-items: flex-start;
}
</style>