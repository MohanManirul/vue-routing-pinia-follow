<script setup></script>

<template>
  <ul>

    <li>
      <router-link class="nav-link d-inline" :to="{name:'tags' , params:{category:'travel'}}">Travel</router-link>    
    </li>

    <li>
      <router-link class="nav-link d-inline" :to="{name:'tags' , params:{category:'food'}}">Food</router-link>    
    </li>

    <li>
      <router-link class="nav-link d-inline" :to="{name:'tags' , params:{category:'cricket'}}">Cricket</router-link>    
    </li>

  </ul>
</template>

<style scoped></style>
 