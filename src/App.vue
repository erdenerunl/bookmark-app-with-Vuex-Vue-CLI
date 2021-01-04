<template>
  <app-navbar />
  <add-bookmark />
  <bookmark-list />
</template>

<script>
import AddBookmark from './components/AddBookmark.vue'
import AppNavbar from './components/AppNavbar.vue'
import BookmarkList from './components/BookmarkList.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AddBookmark,
    BookmarkList
  }
}
</script>

<style>

</style>
