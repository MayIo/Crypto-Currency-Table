import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    data: 0
  },
  mutations: {
    changeCurrentData(state, newData, index) {
      if(!index)
        state.data = newData
      else 
        state.data[i] = newData.data[id]
    }
  },
  actions: {
    loadNewData(state, newData) {
      axios
        .get("https://api.coincap.io/v2/assets")
        .then(response => state.commit('changeCurrentData', response.data))
        .catch(err => console.log(err.msg))
    },
    // updateCurrentData(state, newData) {
    //   let array = this.state.data.data;

    //   for(var i=0; i < array.length; i++) {
        
    //     let id = array[i].id;

    //     if(id == newData[id]) {
    //       state.commit('changeCurrentData', newData[id], i)
    //     } 

    //   }

    // }
  }
})
