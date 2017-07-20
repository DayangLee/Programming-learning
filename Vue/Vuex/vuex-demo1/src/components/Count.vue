<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{ $store.state.count }}</h3> 
    <P>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('minus')">-</button>
    </P>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  data() {
    return {
      msg: 'Hello Vuex!'
    }
  },
  store
}
</script>

<style>

</style>
