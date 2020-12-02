<template>
  <div>
    <h1>{{ boxesName }}</h1>
    <div :style="styleOption" >
      <div class="red"></div>
      <div class="blue"></div>
      <div class="purple"></div>
      <div class="orange"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boxcomponent",
  data() {
    return {};
  },
  props: ["boxesName","styleOption"],
};
</script>

<style>
.red {
  height: 100px;
  width: 100px;
  background-color: #1abc9c;
}
.blue {
  height: 150px;
  width: 150px;
  background-color: #2ecc71;
}
.purple {
  height: 200px;
  width: 200px;
  background-color: #3498db;
}
.orange{
  height: 250px;
  width: 250px;
  background-color: #9b59b6;
}
</style>
