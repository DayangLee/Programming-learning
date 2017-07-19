<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- router-link标签同html中a标签 -->
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <!-- :to绑定的传参方式 -->
      <router-link :to="{ name:'Hi1', params: {username:'LJY',age: '23'} }">Hi页面1</router-link> |
      <router-link to="/hi/hi2">Hi页面2</router-link>
    </div>
    <!-- 若有子路由时，name无效 -->
    <!-- $route.name传参方式 -->
    <p>{{ $route.name }}</p>
    <router-view></router-view>
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
</style>
