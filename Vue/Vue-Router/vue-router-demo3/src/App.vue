<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goFront">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/params/123/DayangLee Ohh!">Params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/456/JY Ohh!">goParams</router-link>
    <router-link to="/hi1">Hi1</router-link>
    <router-link to="/hiJY">HiJY</router-link>
    <router-link to="/test">404测试</router-link>
    <!-- 添加transition标签，来实现路由过渡动画效果 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goFront() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push('/');
    }
  }
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

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
