import axios from "axios";
const fonctionsModule = {
  state: {
    posts: [],
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    EDIT_POST(state, post) {
      state.posts = state.posts.map((c) => {
        if (c.id == post.id) {
          c = post;
        }
        return c;
      });
    },
    DELETE_POST(state, post) {
      state.posts = state.posts.filter((c) => c.id != post.id);
    },
    CLEAR_POSTS(state) {
      state.posts = [];
    },
  },
  actions: {
    editPostAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/fonctions/update", payload)
          .then((response) => {
            commit("EDIT_POST", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deletePostAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/fonctions/delete", payload)
          .then((response) => {
            commit("DELETE_POST", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addPostAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("api/fonctions/create", payload)
          .then((response) => {
            commit("ADD_POST", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    clearPosts({ commit }) {
      commit("CLEAR_POSTS");
    },
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
  },
};
export default fonctionsModule;
