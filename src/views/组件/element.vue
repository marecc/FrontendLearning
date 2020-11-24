<template>
  <div class="main-container">
    <div class="btn-part">
      <div class="btn-container">
        <el-button v-for="item in typeTexts" :key="item" :type="item">{{
          item
        }}</el-button>
      </div>

      <div class="btn-container">
        <el-button plain v-for="item in typeTexts" :key="item" :type="item">{{
          item
        }}</el-button>
      </div>

      <div class="btn-container">
        <el-button
          round
          plain
          v-for="item in typeTexts"
          :key="item"
          :type="item"
          >{{ item }}</el-button
        >
      </div>

      <div class="btn-container">
        <el-button
          circle
          plain
          v-for="item in typeTexts"
          :key="item"
          :type="item"
          >{{ item }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeTexts: ["primary", "success", "info", "warning", "danger"],
    };
  },
};
</script>

<style>
.main-container {
}
.btn-container {
  margin: 10px;
  display: flex;
}
</style>