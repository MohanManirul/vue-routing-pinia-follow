import { defineStore } from "pinia";

// stores/auth.js
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {
      
    },
  }),

   getters: {
        fullname: (state) => {
        if (!state.user.firstName || !state.user.lastName) return '';
        return `${state.user.firstName} ${state.user.lastName}`;
      },
    },

  actions:{

     async login(){
        const res = await fetch("https://dummyjson.com/users/1");
         const data = await res.json();
         this.user = data
        this.isAuthenticated = true        
        
    },

    logout(){
      this.$patch((state)=>{
        state.isAuthenticated = false,
        state.user = {}
      })
    
    },
  
  },
  
});
