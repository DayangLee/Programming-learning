import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1
}
const mutations = { // mutations改变状态
    add(state, n) {
        state.count += n;
    },
    minus(state) {
        state.count--;
    }
}

// actions 和 Mutations 功能基本一样
// actions 是异步的改变 state 状态
// Mutations 是同步改变状态
// actions 可以调用 Mutations 里的方法
const actions = {
    // context：上下文对象，这里可以理解称store本身
    addAction(context) {
        context.commit('add', 50)
        setTimeout(() => { context.commit('minus') }, 3000)
    },
    // {commit}：直接把commit对象传递过来，让方法体逻辑和代码更清晰明了
    minusAction({ commit }) {
        commit('minus')
    }
}

const getters = { // getters计算过滤操作，每次操作 count 加10
    // count: function (state) {
    //     return state.count += 100;
    // }
    count: state => state.count += 10 // 箭头函数写法
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})