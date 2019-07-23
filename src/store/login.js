import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
    token: sessionStorage.token
}
const mutations = {
    updateToken(token,value){
        state.token = value;
    }
}

export default new Vuex.Store({
    state,
    mutations
})