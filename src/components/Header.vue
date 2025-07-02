<script setup>
</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand"  href="/">Vue App</a>
      <div>
        <router-link class="nav-link d-inline text-white me-3" :to="{name:'home'}">Home</router-link>
        <router-link class="nav-link d-inline text-white me-3" :to="{name:'about'}">About</router-link>
        <router-link class="nav-link d-inline text-white" :to="{name:'lifecyclehook'}">Lifecycle Hooks</router-link> &nbsp;
        <router-link class="nav-link d-inline text-white me-3" :to="{name:'blogs'}">Blogs</router-link>
        <router-link class="nav-link d-inline text-white" :to="{name:'contact'}">Contact Us</router-link>
      </div>
    </div>
  </nav>
</template>


<style scoped>
</style>