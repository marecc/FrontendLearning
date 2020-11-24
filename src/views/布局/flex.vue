<template>
  <div>
    <div class="boxcontainer1">
      <titleComponent :titleText="titleText"></titleComponent>
      <boxcomponent
        v-for="n in 20"
        :key="n"
        :boxclass="'box' + n"
      ></boxcomponent>
    </div>
    <h1>boxes</h1>
    <div class="boxcontainer2">
      <numberedBoxComponent
        :numberText="n"
        v-for="n in 15"
        class="box"
        :key="n"
      ></numberedBoxComponent>
    </div>
  </div>
</template>

<script>
import boxcomponent from "./Components/BoxComponent"; // ../上一级目录下
import titleComponent from "./Components/titleComponent"; // ./ 当前目录下
import numberedBoxComponent from "./Components/numberedBoxComponent";

export default {
  components: {
    boxcomponent,
    titleComponent,
    numberedBoxComponent,
  },
  data() {
    return {
      titleText: "flex布局",
    };
  },
  methods: {},
};
</script>

<style>
.titleOfItems {
  text-align: 20px;
}
/* 主要是由justify-content\align-items\align-content(wrap)\align-items(单个元素特例)四种 */
.boxcontainer1 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.boxcontainer2 {
  background-color: #16a085;
  /* 不设置height由内部元素撑起大小 */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-content只在多行显示为flex-wrap时有效 */
  /* space-aroud两行间距更小,space-between两行间距较大 */
  align-content: space-around;
}
.box {
  height: 100px;
  width: 100px;
  background-color: #1abc9c;
  margin: 20px;
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
.box8 {
  display: flex;
  align-items: center;
}
.box9 {
  display: flex;
  align-items: flex-end;
}
.box10 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box11 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box12 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>