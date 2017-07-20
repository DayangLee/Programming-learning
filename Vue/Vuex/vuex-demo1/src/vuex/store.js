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

export default new Vuex.Store({
    state,
    mutations
})