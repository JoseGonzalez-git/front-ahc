import axios from "axios";

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  stateUser: (state) => state.user,
};

const actions = {
  async register({ dispatch }, form) {
    await axios.post("/auth/signup", form);
    const data = {
      email: form.email,
      password: form.password,
    };
    await dispatch("login", data);
  },
  async login({ commit }, form) {
    const res = await axios.post("/auth/signin", form);
    const token = res.data.token;
    const isAdmin = res.data.isAdmin;
    const data = {
      email: form.email,
      token,
      isAdmin,
    };
    localStorage.setItem("isAdmin", isAdmin);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);
    await commit("setUser", data);
  },
  async logout({ commit }) {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    const user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
    state.user = user;
  },
  logout(state, user) {
    state.user = user;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
