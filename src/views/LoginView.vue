<template>
  <div class="container mx-auto h-screen flex items-center justify-center">
    <form
      class="w-3/4 bg-white p-10 rounded-lg shadow-lg"
      @submit.prevent="submit"
    >
      <div class="relative">
        <router-link class="absolute top-0 right-0 text-indigo-600 p-2" to="/"
          >Regresar</router-link
        >
        <h2 class="text-lg font-medium mb-4">Iniciar Sesión</h2>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="email">
            Correo Electrónico
          </label>
          <input
            class="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            id="email"
            v-model="form.email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="password">
            Contraseña
          </label>
          <input
            class="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            id="password"
            v-model="form.password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-indigo-800 text-white p-2 rounded-lg hover:bg-indigo-600"
          >
            Iniciar Sesión
          </button>
          <router-link class="text-indigo-600" to="/register"
            >¿No tienes una cuenta?</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import store from "../store";

export default defineComponent({
  name: "LoginView",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      const User = {
        email: this.form.email,
        password: this.form.password,
      };
      await this.login(User);
      const logged = store.getters.stateUser;

      if (logged.isAdmin) {
        this.$router.push({
          name: "dashboard",
        });
      } else {
        this.$router.push({
          name: "Home",
        });
      }
    },
    validationForm() {},
  },
});
</script>
