import vuex from "vuex";
import Vue from "vue";

Vue.use(vuex);
import home from "@/store/home";
import search from "@/store/search";

export default new vuex.Store({
  modules: {
    home,
    search,
  },
});
