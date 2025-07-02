<script setup>
import { ref } from 'vue'
import { useUserStore } from './stores/userStore'
import { useProductStore } from './stores/productStore'

const userStore = useUserStore()
const productStore = useProductStore()

// User Input
const userName = ref('')
const userEmail = ref('')

// Product Input
const productName = ref('')
const productPrice = ref('')

// Add User
function addUser() {
  if (userName.value && userEmail.value) {
    userStore.addUser({ name: userName.value, email: userEmail.value })
    userName.value = ''
    userEmail.value = ''
  }
}

// Add Product
function addProduct() {
  if (productName.value && productPrice.value) {
    productStore.addProduct({ name: productName.value, price: productPrice.value })
    productName.value = ''
    productPrice.value = ''
  }
}
</script>

<template>
  <div class="app">
    <h1>🧠 Multi Store (User + Product)</h1>

    <!-- User Section -->
    <section>
      <h2>Add User</h2>
      <input v-model="userName" placeholder="User Name" />
      <input v-model="userEmail" placeholder="User Email" />
      <button @click="addUser">Add User</button>
    </section>

    <section>
      <h3>User List</h3>
      <ul>
        <li v-for="(user, i) in userStore.users" :key="i">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </section>

    <!-- Product Section -->
    <section>
      <h2>Add Product</h2>
      <input v-model="productName" placeholder="Product Name" />
      <input v-model="productPrice" placeholder="Product Price" />
      <button @click="addProduct">Add Product</button>
    </section>

    <section>
      <h3>Product List</h3>
      <ul>
        <li v-for="(product, i) in productStore.products" :key="i">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  font-family: sans-serif;
}
input {
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  width: 100%;
}
button {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
}
section {
  margin-bottom: 2rem;
}
</style>
