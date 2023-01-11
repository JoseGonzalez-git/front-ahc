import { createStore } from "vuex";
import users from "./modules/user";
export default createStore({
  modules: {
    users,
  },
});
