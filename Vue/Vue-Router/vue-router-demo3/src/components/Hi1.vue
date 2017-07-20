<<template>
  <div>
    <h1>{{msg}}</h1>
  </div>  
</template>
<<script>
export default {
  data(){
    return{
      msg: 'Hi, this is Hi1 page!'
    }
  },
  beforeRouteEnter: (to, from, next) => {  // 模板中的钩子函数
    console.log('准备进入路由模板');
    next();  // 一定要有 next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开路由模板');
    next();
  }
}
</script>
<<style>

</style>
