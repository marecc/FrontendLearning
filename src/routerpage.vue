<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$router.history.current.fullPath);
  }
}

</script>

<style>
/* 消除网页顶端及两边的空白条 */
html,body{
  height: 100%;
  margin: 0px;
  padding: 0px;
  background: #ecf0f1;
}
#app{
  height: 100%;
}
</style>