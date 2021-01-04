<template>
  <div>
    <div class="card border-primary mb-3" style="max-width: 20rem">
      <div class="card-header d-flex justify-content-between">
          <h5 class="card-title"> {{bookmark.title}} </h5>
          <button type="button" @click="deleteBookmark" class="btn btn-danger">X</button>
      </div>
      <div class="card-body">
        <p class="card-text"> {{ bookmark.description}} </p>
        <div class="mini-wrapper d-flex justify-content-between">
          <a :href="bookmark.url"> {{bookmark.url}} </a>
          <button type="button" class="btn btn-primary">Düzenle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ["bookmark"],
    methods : {
        
    }
};
</script>

<style>
</style>