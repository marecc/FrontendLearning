<template>
  <div class="selectorContainer">
    <template v-for="(item, index) in selectorList">
      <div class="selector" :key="index" style="margin-right: 10px">
        <p style="margin-right: 5px">{{ item.name }}</p>
        <el-select
          size="mini"
          v-model="item.valueOfStyleOption"
          clearable
          placeholder="请选择样式"
          @change="commit"
        >
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </el-option>
        </el-select>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "selectComponent",
  props: ["selectorList"],
  data() {
    return {};
  },
  methods: {
      commit(){
          this.$emit("commit")
      }
  },
};
</script>

<style>
.selectorContainer {
  display: flex;
}
/* 文本及框体中心对齐 */
.selector {
  display: flex;
  align-items: center;
}
</style>