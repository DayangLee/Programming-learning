<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-view class="hihi"></router-view>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data() {
    return {
      msg: 'Hi, DyangLee!'
    }
  }
}
</script>
<style scoped>

</style>
