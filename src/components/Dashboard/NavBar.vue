<template>
  <nav class="bg-gray-800 p-6">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-lg text-white font-medium">Paso Blanco - Admins</h1>
      <div class="relative">
        <button
          class="text-white font-medium"
          @click="showDropdown = !showDropdown"
        >
          {{ userName }}
        </button>
        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-lg"
        >
          <button
            class="block min-w-full px-4 py-2 text-white hover:bg-gray-900"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import store from "../../store";

export default defineComponent({
  name: "dashboard",
  data() {
    return {
      userName: store.getters.stateUser.email,
      showDropdown: false,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
});
</script>
