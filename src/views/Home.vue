<script setup>

import {useCounterStore} from "../stores/counter"
const store = useCounterStore();

import Counter from "../components/Counter.vue"

</script>

<template>
      <div class="container py-5 text-center">
        <h2>🏠 Home Page</h2>
        <p>This is the home page of our Vue app using Bootstrap.</p>
        {{ store.count }}
        <Counter :count="store.count" />
      </div>
</template>

<style scoped>
</style>