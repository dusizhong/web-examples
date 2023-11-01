<template>
  <div>
    <div class="content">
      <h1>{{data.bookTitle}}</h1>
      <div>{{data.bookIntro}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  data() {
    return {
      data: {},
      params: { "id": null },
      loading: false
    }
  },
  created() {
    this.params.id = this.$route.query.id;
    this.requestData()
  },
  methods: {
    requestData() {
        this.loading = true;
        this.$http.post('/book/detail', this.params).then((data) => {
        this.data = data
        this.loading = false
      }).catch(() => this.loading = false)
    }
  }
}
</script>

<style scoped>
</style>