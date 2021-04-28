<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> 
      <!-- <router-link to="/user">User</router-link> |
      <router-link to="/item">Item</router-link> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color:#fff;
    background-color:#42b883;
    display: flex;
    padding:8px;
}

.header a {
    color: #fff;
    padding:0 10px
}

.header a.router-link-exact-active {
    color: #35495e
}
</style> 