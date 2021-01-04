<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card border-primary mb-3" style="max-width: 20rem">
      <div class="card-header d-flex justify-content-between">
        <h5 v-if="!bookmark.update" class="card-title">{{ bookmark.title }}</h5>
        <input v-else type="text" class="form-control" v-model="bookmark.title" />
        <button v-if="!bookmark.update" type="button" @click="deleteBookmark(bookmark.id)" class="btn btn-danger">X</button>
        <button type="button" v-else @click="cancelUpdate(bookmark)" class="btn btn-danger">İptal</button>

      </div>
      <div class="card-body">
        <p class="card-text" v-if="!bookmark.update">{{ bookmark.description }}</p>
        <input v-else type="text" class="form-control" v-model="bookmark.description" />
        <div class="mini-wrapper d-flex justify-content-between">
          <a :href="bookmark.url" v-if="!bookmark.update"> {{ bookmark.url }} </a>
          <input v-else type="text" class="form-control" v-model="bookmark.url" />
          <button v-if="!bookmark.update" type="button" @click="updateDOM(bookmark)" class="btn btn-primary">Düzenle</button>
          <button v-else type="button" @click="updateDB(bookmark)"  class="btn btn-success">Onayla</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: ["bookmark"],
  methods: {
      ...mapMutations([ 'updateDOM', 'cancelUpdate']),
      ...mapActions(['deleteBookmark', 'updateDB'])
    // deleteBookmark(bookmark) {
    //   this.$store.dispatch("deleteBookmark", bookmark);
    // },
    // updateDOM(bookmark) {
    //   this.$store.commit("updateDOM", bookmark);
    // },
    // cancelUpdate(bookmark){
    //     this.$store.commit("cancelUpdate", bookmark)
    // }
  },
};
</script>

<style>
</style>