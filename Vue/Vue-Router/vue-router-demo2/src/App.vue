<template>
  <div id="app">
    <router-link to="/">model1</router-link> |
    <router-link to="/2">model2</router-link>
    <div class="view">
      <router-view name="left" class="left"></router-view>
      <router-view class="center"></router-view>
      <router-view name="right" class="right"></router-view>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.view {
  margin-top: 100px;
}

.left {
  float: left;
  width: 33%;
  background-color: #ccc;
  height: 300px;
}

.center {
  float: left;
  width: 33%;
  background-color: blue;
  height: 300px;
}

.right {
  float: left;
  width: 33%;
  background-color: #c0c;
  height: 300px;
}
</style>
