<template>
    <el-menu-item
      v-if="!children || children.length == 0"
      :index="currentIndex"
      >{{ currentName }}</el-menu-item
    >
    <el-submenu v-else :index="currentIndex">
      <template slot="title"> {{ currentName }}</template>
      <routerComponent
        v-for="(item, index) in children"
        :key="index"
        :children="item.children ? item.children : []"
        :currentIndex="currentIndex + '/' + item.path"
        :currentName="item.name"
      ></routerComponent>
    </el-submenu>
</template>

<script>
export default {
  name: "routerComponent",
  props: { currentIndex: String, currentName: String, children: Array },
  data() {
    return {};
  },
  methods: {
    handleSelect() {},
  },
};
</script>

<style>
</style>