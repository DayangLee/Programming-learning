<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <!-- 直接赋值 -->
    <h3>直接赋值: {{ $store.state.count }}</h3>
  
    <!-- computed计算属性赋值 -->
    <!-- <h3>computed计算属性赋值: {{ count1 }}</h3> -->
  
    <!-- mapState对象赋值 -->
    <!-- <h3>mapState对象赋值: {{ count2 }}</h3> -->
  
    <!-- mapState数组赋值 -->
    <h3>mapState数组赋值: {{ count }}</h3>
  
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('minus')">-</button>
      <!-- 引入mapMutations调用方法 -->
      <button @click="minus">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello Vuex!'
    }
  },

  // computed计算属性赋值
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // },

  // mapState对象赋值
  // computed: mapState({
  //   count2: state => state.count
  // }),

  // mapState数组赋值
  computed: mapState(['count']),
  methods: mapMutations(['minus']),
  store
}
</script>

<style>

</style>
