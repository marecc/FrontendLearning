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
        <p>
          css样式:display: flex; flex-wrap: wrap; align-content: space-between;
        </p>
        <p>
          align-content只在多行显示为flex-wrap时有效,space-aroud两行间距更小,space-between两行间距较大
        </p>
        <el-input-number
          v-model.number="numberOfBoxes"
          :min="11"
          :max="30"
          label="请选择方块个数"
        ></el-input-number>
        <select-component
          :selectorList="selectorListOfFlexWarp"
          @commit="commitStyleChangeOfFlexWarp"
        ></select-component>
      </div>
      <div class="boxcontainer2" :style="styleOptionOfFlexWarp">
        <numberedBoxComponent
          v-for="n in numberOfBoxes"
          :numberText="n"
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
  computed: {},
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
      selectorListOfFlexWarp: [
        {
          name: "align-content",
          valueOfStyleOption: "",
          options: ["space-around", "space-between"],
        },
      ],
      styleOption: "", //传递flex样式数据变量到组件
      styleOptionOfFlexWarp: "",
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
    commitStyleChangeOfFlexWarp() {
      this.styleOptionOfFlexWarp =
        "display: flex-wrap: wrap;  align-content:" +
        this.selectorListOfFlexWarp[0].valueOfStyleOption +
        ";";
      console.log(this.styleOptionOfFlexWarp);
    },
  },
};
</script>

<style lang=less scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  padding: 0% 5% 0% 5%;
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
}
.boxes {
  height: 100px;
  width: 100px;
  background-color: #1abc9c;
  margin: 20px;
}
</style>