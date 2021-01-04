<template>
  <div>
      <div class="container">
          <div class="row">
              <bookmark-item v-for="bookmark in bookmarkList" :key="bookmark.id" :bookmark="bookmark" />
          </div>
          
      </div>
  </div>
</template>

<script>
import BookmarkItem from '@/components/BookmarkItem'
import { mapGetters } from 'vuex'
export default {
    components : {
        BookmarkItem
    },
    created(){
        this.$store.dispatch('initApp')
    },
    computed : {
        ...mapGetters({
            bookmarkList : 'getBookmarkList'
        })
    }
}
</script>

<style>

</style>