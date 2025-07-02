

<script setup>

import { ref , onBeforeMount , onMounted } from 'vue';

const status = ref([])

const apiResponse = ref(null)

  onBeforeMount(()=>{
    
    fetch("https://dummyjson.com/todos/1")
    .then(response=>response.json())
    .then(json=>{
      status.value.push(json)
      })
    
  })

  onBeforeMount(()=>{
    
    fetch("https://dummyjson.com/todos/1")
    .then(response=>response.json())
    .then(json=>{
      apiResponse.value = json
      })
    
  })

// onBeforeMount(function(){
//   console.log('before Mount');
//   status.value.push('before Mount')
  
// })


onMounted(()=>{
  console.log("Mounted")
  status.value.push('Mounted')
  
})


</script>

<template>
  <p>Hello</p>
  {{ apiResponse }}
  
  {{ status }} <br/>


</template>

<style scoped>
</style>