<template>
  <div>
    <header-default />
    <header-sidebar-mobile v-if="sidebarVisibility" />
    <main ref="container" class="">
      <transition name="fade">
        <nuxt />
      </transition>
    </main>
    <footer-default />
  </div>
</template>

<script>
import '~/assets/css/transitions.css'
import { mapState } from 'vuex'
export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState({
      sidebarVisibility: state => state.header.sidebarIsVisible
    })
  }
}
</script>
