<template>
<transition name="fade">
  <header ref="header" class="fixed w-full z-10">
    <div class="container max-w-8xl mx-auto w-full">
      <div class="flex justify-between p-3">
        <div class="flex items-center justify-center lg:pl-8">
          <img
            src="~/assets/img/logo/laboon-white.png"
            alt="logo laboon color"
            height="80"
            width="150"
            class="pt-1 flex"
          >
        </div>
        <div ref="nav-desktop" class="hidden lg:flex items-center px-4 ">
          <ul class="flex justify-between w-full">
            <li v-for="(item,key) in menuItems" :key="key" class="capitalize text-white font-bold">
              <transition name="fade" mode="out-in">
                <nuxt-link  class="p-4" :to="item.url" :class="{ 'font-bold text-lg' : $route.path === item.url}">
                  {{ item.label }}
                </nuxt-link>
              </transition>
            </li>
          </ul>
        </div>
        <div ref="nav-mobile" class="lg:hidden flex items-end">
          <client-only>
            <button @click="$store.commit('header/sidebarVisibility')" class="border border-white rounded">
              <b-icon-list class="text-4xl text-white"/>
            </button>
          </client-only>
        </div>
      </div>
    </div>
  </header>
</transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HeaderDefault',
  computed: {
    ...mapState({
      menuItems: state => state.header.menuItems
    })
  },
  async fetch () {
    const { app } = this.$nuxt.context
    await this.fetchNavMenus({ app })
  },
  methods: {
    ...mapActions({
      fetchNavMenus: 'header/fetchNavMenus'
    }),
    getWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
    },
    hasScrolled () {
      if (this.getWidth() > 300) {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 10) {
          this.$refs.header.classList.add('bg-primary-1')
          this.$refs.header.classList.add('opacity-90')
        } else {
          this.$refs.header.classList.remove('bg-primary-1')
          this.$refs.header.classList.remove('opacity-90')
        }
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.hasScrolled)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.hasScrolled)
  }
}
</script>
<style lang="postcss" scoped>
/* .bg-white-semi-transparent {
  background-color: rgba(255, 255, 255, 0.5);
} */
/* start: transisi buat sidebar */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.5s ease-out;
}
.slide-down-enter,
.slide-down-leave-to {
    transform: translateX(-100%);
}
.opacity-enter-active,
.opacity-leave-active {
    transition: opacity 5s;
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
