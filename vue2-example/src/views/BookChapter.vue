<template>
  <div>
    <div class="row marketing">
      <div class="col-lg-6" :key="item.id" v-for="(item) in data">
        <a class="ellipsis-1" href="#" @click="goContent(item)">{{item.chapterName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookChapter',
  data() {
    return {
      data: [],
      loading: false
    }
  },
  created() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.loading = true
      this.$http.post('/book/chapter/list', this.$route.query).then((data) => {
        this.data = data
        this.loading = false
      }).catch(() => this.loading = false)
    },
    goContent(item) {
      this.$router.push({ path: '/book/content', query: { "bookName": item.bookName, "chapterName": item.chapterName } })
    }
  }
}
</script>

<style scoped>
</style>