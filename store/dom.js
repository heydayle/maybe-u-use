export default {
  namespaced: true,
  state: {
    'windowWidth': 0,
    'windowHeight': 0,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1336,
    '2xl': 1920,
    '3xl': 2048,
  },

  mutations: {
    SET_WINDOW_WIDTH(state, value) {
      state.windowWidth = value
    },
    SET_WINDOW_HEIGHT(state, value) {
      state.windowHeight = value
    },
  },

  getters: {
    isXS: state => state.windowWidth < state.sm,
    isSM: state => state.windowWidth >= state.sm,
    isMD: state => state.windowWidth >= state.md,
    isLG: state => state.windowWidth >= state.lg,
    isXL: state => state.windowWidth >= state.xl,
  },
}
