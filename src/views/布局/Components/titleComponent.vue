<template>
  <h1 class="title">{{ titleText }}</h1>
</template>

<script>
export default {
  name: "titleComponent",
  data() {
    return {};
  },
  props: ["titleText"],
};
</script>

<style>
.title {
  line-height: 20px;
}
</style>