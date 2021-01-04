<template>
  <div>
      <div class="container">
          <bookmark-item v-for="bookmark in bookmarkList" :key="bookmark.id" :bookmark="bookmark" />
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
    computed : {
        ...mapGetters({
            bookmarkList : 'getBookmarkList'
        })
    }
}
</script>

<style>

</style>