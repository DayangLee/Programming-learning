# vuex-demo

* State：负责存储状态数据
* Mutations：中文意思是“变化”，利用它可以更改状态，本质就是用来处理数据的函数，其接收唯一参数值state，其辅助函数是mapMutations
* Actions：也可以用于改变状态，不过是通过触发mutation实现的，重要的是可以包含异步操作。其辅助函数是mapActions与mapMutations类似，也是绑定在组件的methods上的。如果选择直接触发的话，使用this.$store.dispatch(actionName)方法
* Getters：有些状态需要做二次处理，就可以使用getters。通过this.$store.getters.valueName对派生出来的状态进行访问，或者直接使用辅助函数mapGetters将其映射到本地计算属性中去
