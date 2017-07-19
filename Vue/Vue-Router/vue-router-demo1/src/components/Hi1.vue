<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>{{ $route.params.username }}</h3>
    <h3>age: {{ $route.params.age }}</h3>
  </div>
</template>
<script>
export default {
  name: 'hi1',
  data() {
    return {
      msg: 'This is Hi1 Page!'
    }
  }
}
</script>
<style scoped>

</style>
