<template>
  <NavBar></NavBar>
</template>

<script>
import NavBar from "../components/Dashboard/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
});
</script>
