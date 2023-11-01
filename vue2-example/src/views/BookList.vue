<template>
  <div>
    <div class="row marketing">
      <div class="col-lg-6" :key="item.id" v-for="(item) in data">
        <div class="row">
          <div class="col-xs-4 col-sm-2 col-md-4">
            <img src="assets/gushu.jpg" alt="gushu" width="100" height="140">
          </div>
          <div class="col-xs-8 col-sm-10 col-md-8">
            <h5 class="ellipsis-1">{{item.bookName}}</h5>
            <p class="ellipsis-2">{{item.bookIntro}}</p>
            <p><a class="btn btn-default" role="button" @click="goChapter(item)">查看 &raquo;</a></p>
            <!-- <router-link :to="`/book/detail/{{item.id}}`">查看</router-link> -->
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="...">
      <ul class="pager">
        <li><a type="button" @click="onPageChange(-1)">上一页</a></li>
        <li class="currentPage">{{params.pageNumber + 1}} / {{params.totalPages}}</li>
        <li><a type="button" @click="onPageChange(1)">下一页</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      data: [],
      params: { "pageNumber": 0, "pageSize": 2, "totalPages": 0 },
      loading: false
    }
  },
  created() {
    this.requestData()
  },
  methods: {
    requestData() {
      this.loading = true
      this.$http.post('/book/list', this.params).then((data) => {
        this.data = data.content
        this.params.totalPages = data.totalPages
        this.loading = false
      }).catch(() => this.loading = false)
    },
    onPageChange(n) {
      let current = Number(this.params.pageNumber) + n
      if(current < 0) {
        return
      }
      if(current == this.params.totalPages) {
        return
      }
      this.params.pageNumber = Number(this.params.pageNumber) + n
      this.requestData()
    },
    goChapter(item) {
      this.$router.push({ path: '/book/chapter', query: { bookName: item.bookName } })
    }
  }
}
</script>

<style scoped>
.currentPage {
  margin: 0 10px;
}
</style>