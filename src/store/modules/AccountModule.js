import loginService from '../../services/LoginService';

export default {
  namespaced: true,
  state: {
    loggedIn: false,
    currentUser: null,
  },
  actions: {
    login: ({ commit }, { username, password }) => loginService.login(username, password)
      .then(() => {
        commit('setLoggedIn', true);
        sessionStorage.setItem('isAuthenticated', 'true');
      })
      .catch((error) => {
        console.log(error);
      }),
    logout: () => {
      sessionStorage.removeItem('isAuthenticated');
    },
    getCurrentUser: ({ commit }) => loginService.getCurrentUser()
      .then((user) => {
        commit('setCurrentUser', user);
      })
      .catch((error) => {
        console.log(error);
      }),
  },
  mutations: {
    setLoggedIn: (state, loggedIn) => {
      state.loggedIn = loggedIn;
    },
    setCurrentUser: (state, user) => {
      state.currentUser = user;
    },
  },
};
