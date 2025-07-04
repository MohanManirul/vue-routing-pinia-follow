
<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
    const store = useCounterStore();

    function increment(){
        store.count++ ;
    }

    function decrement(){
        store.count-- ;
    }

    // const countDigitLength = store.count.toString().length ; প্রথমে এটা দেখাতে হবে

   // const countDigitLength = computed(()=>store.count.toString().length) ;
    // আমরা এটাকে computed property তে কনভার্ট করব এবং store এ মুভ করাব


</script>

<template>

<div class="d-flex justify-content-center align-items-center gap-3" > <br /> <br />
  <button class="btn btn-danger" @click="decrement">-</button>
  <p class="mb-0">Count Value: {{ store.count }}</p>
  <button class="btn btn-primary" @click="increment">+</button>
</div>
<br />
<p>Counter Moved To {{ store.countDigitLength }} Digit Length</p>

</template>

<style scoped></style>
