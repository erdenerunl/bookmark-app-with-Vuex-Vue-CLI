<template>
  <div>
    <div class="my-3 container d-flex justify-content-center bg-primary input-con">
      <div class="form-group text-center">
        <label class="col-form-label my-2 inputbox" for="inputDefault">Add your bookmark below </label>
        <input type="text" class="form-control" v-model="bookmarkData.title" placeholder="Bookmark Title..." id="inputDefault" />
        <input type="text" class="form-control" v-model="bookmarkData.description" placeholder="Bookmark Description..." id="inputDefault" />
        <input type="text" class="form-control" v-model="bookmarkData.url" placeholder="Bookmark Url..." id="inputDefault" />
        <button type="button" class="btn btn-success" @click="onSave">Success</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkData: {
        title: "",
        description: "",
        url: "",
      },
    };
  },
  methods: {
    onSave() {
      const saveData = {
        ...this.bookmarkData,
      };
      this.$store.dispatch("saveBookmark", saveData);
      this.bookmarkData = {
        title: "",
        description: "",
        url: "",
      };
    },
  },
};
</script>

<style scoped>
.inputbox {
  font-size: 1.6rem;
}
.input-con {
  border-radius: 2rem;
}
label {
  color: #fff;
}
button {
  margin-top: 35px;
  height: 75px !important;
}
</style>
