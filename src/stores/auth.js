import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

// stores/auth.js
export const useAuthStore = defineStore("auth", ()=> {

  const isAuthenticated = ref(false)
  const user = reactive({});
 
 const fullname = computed(()=>`${user.value.firstName} ${user.value.lastName}`) ;
  

     async function login(){
        const res = await fetch("https://dummyjson.com/users/1");
         const data = await res.json();
         this.user.value = data ;
        this.isAuthenticated = true        
        
    }

   function logout(){
      this.$patch((state)=>{
        state.isAuthenticated = false,
        state.user = {}
      })
    
    }

    return { isAuthenticated , user , fullname , login , logout }

  
});
