<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/book/list">Book</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-view/>
</div>
</template>

<script>
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
