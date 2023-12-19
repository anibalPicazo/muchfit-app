export const strict = false

export const state = () => ({});

export const mutations = {};

export const modules = {

  user: {
    namespaced: true,
    state: () => ({
      userId: '',
      token: null,

    }),
    mutations: {
      setUserData(state, userData) {
        state.userId = userData.uuid
        state.token = userData.token

      }
    }
  },
  notification: {
    namespaced: true,
    state: () => ({
      userId: '',
      display: false,
      token: null,
      timeout: 4000,
      text: '',
      color: 'success'
    }),
    mutations: {
      setUserData(state, userData) {
        state.userId = userData.uuid
        state.token = userData.token

      },
      show(state, notification) {
        state.display = true;
        state.text = notification.text;
        state.color = notification.color;
        state.timeout = notification.timeout;
      },
      close(state) {
        state.display = false
      }
    }
  }
};

