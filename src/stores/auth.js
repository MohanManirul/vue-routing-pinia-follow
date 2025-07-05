import { defineStore } from "pinia";

// stores/auth.js
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: "Saiful",
      email: "saiful@gmail.com",
    },
  }),
  
});
