export default {
  sidebarVisibility (state) {
    state.sidebarIsVisible = !state.sidebarIsVisible
  },
  setNavMenus (state, payload) {
    state.menuItems = payload
  }
}
