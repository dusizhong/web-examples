<template>
  <div>
    <div class="content">
      <h1>{{data[0].chapterName}}</h1>
      <div v-html="data[0].contentText"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookContent',
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
        this.$http.post('/book/content/list', this.$route.query).then((data) => {
        this.data = data.content
        this.loading = false
      }).catch(() => this.loading = false)
    }
  }
}
</script>

<style scoped>
</style>