export const strict = false

export const state = () => ({});

export const mutations = {};

export const modules = {

  notification: {
    namespaced: true,
    state: () => ({
      display: false,
      timeout: 4000,
      text: '',
      color: 'success'
    }),
    mutations: {
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
  },

};
