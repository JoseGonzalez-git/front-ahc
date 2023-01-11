<template>
  <div class="container mx-auto h-screen flex items-center justify-center">
    <form
      class="w-3/4 bg-white p-10 rounded-lg shadow-lg"
      @submit.prevent="submit"
    >
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-medium">Registrarse</h2>
        <router-link class="text-indigo-600" to="/">Regresar</router-link>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="name">
          Nombre completo
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="name"
          v-model="form.name"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="email">
          Correo Electrónico
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          v-model="form.email"
          required
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
          required
        />
        <span :hidden="invalidPassword">Las contraseñas no coinciden</span>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 font-medium mb-2"
          for="passwordConfirmation"
        >
          Confirmar Contraseña
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="password"
          id="passwordConfirmation"
          v-model="passwordConfirmation"
          required
        />
        <span :hidden="invalidPassword">Las contraseñas no coinciden</span>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-indigo-800 text-white p-2 rounded-lg hover:bg-indigo-600"
        >
          Registrar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import store from "../store";

export default defineComponent({
  name: "RegisterView",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      passwordConfirmation: "",
      invalidPassword: true,
    };
  },
  methods: {
    ...mapActions(["register"]),
    async submit() {
      const User = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      };
      if (this.validatePassword()) {
        console.log(User, this.passwordConfirmation);
        await this.register(User);

        const logged = store.getters.stateUser;
        if (logged) {
          this.$router.push({
            name: "Home",
          });
        }
      }
    },
    validatePassword() {
      if (this.passwordConfirmation !== this.form.password) {
        //contraseña incorrecta
        this.invalidPassword = false;
        return false;
      } else {
        this.invalidPassword = true;
        return true;
      }
    },
  },
});
</script>
