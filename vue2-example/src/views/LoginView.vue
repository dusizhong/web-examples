<template>
  <div>
  <h1>Please Login</h1>
        <form class="form-login" :model="formData" @submit="onSubmit">
        <h2 class="form-login-heading">Please sign in</h2>
        <label for="username" class="sr-only">Username</label>
        <input type="text" id="username" v-model="formData.username" class="form-control" placeholder="Username" required autofocus>
        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" v-model="formData.password" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
  </div>
</template>

<script>
import md5 from 'js-md5'
export default {
  name: 'LoginView',
  props: {
    msg: String
  },
  data () {
    return {
      formData: {},
      error: '',
      loading: false
    }
  },
  computed: {
 
  },
  methods: {    
    onSubmit (e) {
      e.preventDefault()
      this.formData.grant_type = 'password'
      this.formData.password = md5(this.formData.password)
      console.log(this.formData)
          this.loading = true
          // let params = { 
          //   grant_type: 'password', 
          //   username: this.form.getFieldValue('username'), 
          //   password: this.form.getFieldValue('password')
          // }
          this.$http.login('/oauth/token', this.formData).then(() => {
            // this.$http.request('/user/detail', {}).then((data) => {
              alert('登录成功')
              this.loading = false
              this.$router.push('/')
            // })
          }).catch(() => {
            this.loading = false
          })
    }
  }
}

</script>
