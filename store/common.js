export const COMMON_MUTATIONS = {
  UPDATE_ASIDE_MENU_STATUS: 'UPDATE_ASIDE_MENU_STATUS'
}
const state = () => ({
  asideMenuStatus: true
})

const mutations = {
  [COMMON_MUTATIONS.UPDATE_ASIDE_MENU_STATUS](state, value) {
    state.asideMenuStatus = value
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}

