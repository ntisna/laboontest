<template>
  <transition name="slide-right">
    <div class="fixed min-h-screen bg-sidebar w-full z-50 flex inset-0">
      <div class="w-1/5 md:w-3/5" @click="$store.commit('header/sidebarVisibility')" />
      <div v-if="navIsVisible" class="w-4/5 md:w-2/5 bg-white shadow-md px-8 py-10 min-h-screen slide">
          <ul class="text-primary-1">
            <li v-for="(item, key) in menuItems" :key="key" class="py-3 text-2xl">
              <button @click="clickMenuItem(item.url)">
                <span class="capitalize pb-1">{{item.label}}</span>
              </button>
            </li>
          </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderSidebarMobile',
  data () {
    return {
      nav: [],
      navIsVisible: false
    }
  },
  watch: {
    '$store.header.sidebarVisibility': {
      immediate: true,
      handler: function () {
        if (this.sidebarVisibility) {
          setTimeout(() => {
            this.navIsVisible = true
          }, 500)
        }
      }
    }
  },
  methods: {
    clickMenuItem (destination) {
      this.$router.push(destination)
      this.$store.commit('header/sidebarVisibility')
    }
  },
  computed: {
    ...mapState({
      sidebarVisibility: state => state.header.sidebarIsVisible,
      menuItems: state => state.header.menuItems
    })
  }
}
</script>
