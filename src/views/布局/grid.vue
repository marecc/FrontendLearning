<template>
  <div>
    <h1 class="titleText">grid布局页面</h1>
    <div v-for="n in 10" :key="n" >
    <h2>{{'boxes'+n}}</h2>
    <div :class="'boxes'+n" class="boxesContainer">
      <numberedboxComponent
        v-for="n in 9"
        :key="n"
        :numberText="'box' + n"
      ></numberedboxComponent>
    </div>
    </div>
  </div>
</template>

<script>
import numberedboxComponent from "./Components/numberedBoxComponent";

export default {
  name: "grid",
  components: { numberedboxComponent },
};
</script>

<style>
.titleText{
  text-align: center;
}
.boxesContainer{
  background: #1abc9c;
}
.box {
  height: 100px;
  width: 100px;
  margin: 5px;
  background: #2ecc71;
}
.boxes1 {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 33.3% 33.3% 33.3%;
  background: #1abc9c;
}
.boxes2{
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  background: #1abc9c;
}
.boxes3{
  display: grid;
  grid-template-columns: repeat(2, 50%);
  /* grid-template-rows: repeat(2, 50%); */
  background: #1abc9c;
}
.boxes4{
  display: grid;
  grid-template-columns: repeat(3, 50%);
  grid-template-rows: repeat(3, 50%);
  background: #1abc9c;
}
.boxes5{
  display: grid;
  grid-template-columns: repeat(4,25%);
  grid-template-rows: repeat(4,25%);
  background: #1abc9c;
}
.boxes6{
  display: grid;
  /* 一列110px 填满后换行 */
  grid-template-columns: repeat(auto-fill,110px);
  background: #1abc9c;
}

</style>