import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      bookmarks: [],
      updatedBookmark: {}
    };
  },


  mutations: {
    fillBookmarkList(state, pBookmarkList) {
      state.bookmarks = pBookmarkList;
    },
    newBookmark(state, bookmark){
      state.bookmarks.push(bookmark)
    },
    deleteBookmark(state, bookmarkId){
       state.bookmarks =  state.bookmarks.filter(f => f.id !== bookmarkId )
    },
    updateDOM(state , bookmark){
        bookmark.update = true;
        state.updatedBookmark = {...bookmark}
    },
    cancelUpdate(state , bookmark){
        bookmark.update = false;
        state.updatedBookmark.update = false
        const matched = state.bookmarks.findIndex(b => b.id === bookmark.id)
        state.bookmarks[matched] = {...state.updatedBookmark}
    },
    updateDB(state , bookmark){
        const matched = state.bookmarks.findIndex(b => b.id === bookmark.id)
        state.bookmarks[matched] = bookmark 
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
    },
    deleteBookmark({ commit }, bookmarkId){
        axios.delete(`http://localhost:3000/bookmarks/${bookmarkId}`).then((response) => {
            if(response.status === 200){
                commit('deleteBookmark', bookmarkId)
            }
        })
    },
    updateDB({commit , state}, bookmark){
        const matched = state.bookmarks.findIndex(b => b.id === bookmark.id)
      
        state.bookmarks[matched].update = false
        axios.patch(`http://localhost:3000/bookmarks/${bookmark.id}`, state.bookmarks[matched])
        .then((response) => {
            commit('updateDB', response.data)
        })
    }
    
  },

  getters: {
      getBookmarkList : (state) => state.bookmarks,
  }
});

export default store;
