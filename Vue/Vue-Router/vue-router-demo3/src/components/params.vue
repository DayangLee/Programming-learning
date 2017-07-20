<<template>
  <div>
    <h1>{{msg}}</h1>
    <p>newsId: {{ $route.params.newsId }}</p>
    <p>newsTitle: {{ $route.params.newsTitle }}</p>
  </div>  
</template>
<<script>
export default {
  data(){
    return{
      msg: 'Params Pages!'
    }
  }
}
</script>
<<style>

</style>
