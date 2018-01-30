import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//状态
const state = {
    //公用的数据
    count : 1
}
//改变状态的方法
const mutations = {
    add(state,num){
        state.count += num
    },
    recease(state){
        state.count--
    }
}
//注意观察添加getters后点击按钮数据如何变化。

const getters = {
    count : function(state){
        return state.count += 100
    }
}

const actions = {
    addAction(context){
        //可以调用mutations的方法的
        //
        context.commit('add',10)
    },
    receaseAction({commit}){
        commit('recease')
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions

})