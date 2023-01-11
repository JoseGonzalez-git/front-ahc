<template>
  <div class="h-screen">
    <nav class="bg-indigo-800 text-white p-4">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <div class="text-2xl font-medium">Bienvenido a "Paso Blanco"</div>
          <div>
            <router-link
              :to="{ name: 'Login' }"
              class="text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              >Iniciar Sesión</router-link
            >
            <router-link
              :to="{ name: 'Register' }"
              class="text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              >Registrar</router-link
            >
          </div>
        </div>
      </div>
    </nav>

    <div
      class="min-h-full bg-center bg-cover overlay"
      :style="{
        'background-image': `url('https://img.freepik.com/foto-gratis/sillas-playa-colores-playa_335224-925.jpg?w=1380&t=st=1673438843~exp=1673439443~hmac=97d0a59ff3409337d0e461fa2ea73dfe6450a8a5ca945a5c163f265bc0d8e40b')`,
      }"
    >
      <div
        class="h-screen flex items-center justify-center text-white text-3xl font-medium bg-slate-900/25"
      >
        Alquila tu habitación en "Paso Blanco"
      </div>
    </div>
  </div>
</template>

