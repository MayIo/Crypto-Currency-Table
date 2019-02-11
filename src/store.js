import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    data: 0,
  },
  mutations: {
    changeCurrentData(state, newData) {
        state.data = newData;
    }
  },
  actions: {
    loadNewData(state) {
      axios
        .get("https://api.coincap.io/v2/assets")
        .then(response => state.commit('changeCurrentData', response.data))
        .catch(err => console.log(err.msg))
    },
    updateCurrentData(state, data) {
      
      let arr = this.state.data.data;
      let newData = JSON.parse(data);

      Object.keys(newData).forEach(item => {
        for(let i=0; i<arr.length; i++) {
          if(arr[i].id == item) {
            arr[i].priceUsd = newData[item]; break;
          }
        }
      });

      

      // console.log(newData);

    }
  }
})
