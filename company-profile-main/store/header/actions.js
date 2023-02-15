import menuJSON from '~/static/json/menu.json'
export default {
  async fetchNavMenus ({ commit }, { app }) {
    const items = menuJSON
    const {
      header: {
        navigation = []
      }
    } = items
    commit('setNavMenus', navigation)
  }
}
