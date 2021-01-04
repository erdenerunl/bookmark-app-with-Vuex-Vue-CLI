import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      bookmarks: []
    };
  },


  mutations: {
    fillBookmarkList(state, pBookmarkList) {
      state.bookmarks = pBookmarkList;
    },
    newBookmark(state, bookmark){
        state.bookmarks.push(bookmark)
    }
  },



  actions: {
    initApp({ commit }) {
      axios.get("http://localhost:3000/bookmarks").then(response => {
        commit("fillBookmarkList", response.data);
      });
    },
    saveBookmark({commit} , bookmark){
        axios.post('http://localhost:3000/bookmarks', bookmark).then( (response) => {
            commit('newBookmark', response.data)
        })
    }
  },

  getters: {
      getBookmarkList : (state) => state.bookmarks
  }
});

export default store;
