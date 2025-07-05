<script setup>

import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();


function logout(){
  authStore.$patch((state)=>{
    state.isAuthenticated = false,
    state.user = {}
  })
 
}

function login(){
    authStore.$patch((state)=>{
    state.isAuthenticated = true
    state.user = {name:"saiful" , email:"saiful@gmail.com"}
  })
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >Vue App</router-link
      >
      <div>
        <router-link
          class="nav-link d-inline text-white me-3"
          :to="{ name: 'home' }"
          >Home</router-link
        >
        <router-link
          class="nav-link d-inline text-white me-3"
          :to="{ name: 'about' }"
          >About</router-link
        >
        <router-link
          class="nav-link d-inline text-white me-3"
          :to="{ name: 'blog' }"
          >Blogs</router-link
        >
        <router-link
          class="nav-link d-inline text-white me-3"
          :to="{ name: 'contact' }"
          >Contact Us</router-link
        >

        <li
          v-if="authStore.isAuthenticated"
          class="nav-link d-inline text-white me-3"
        >
          <button class="btn btn-danger" @click="logout">Logout</button>
        </li>
        <li
          v-else
          class="nav-link d-inline text-white me-3"
        >
          <button class="btn btn-success" @click="login">Login</button>
        </li>

      </div>
    </div>
  </nav>
</template>

<style scoped></style>
