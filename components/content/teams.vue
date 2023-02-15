<template>
  <div class="grid auto-rows-min w-full max-w-8xl">
    <h2 class="text-white font-bold text-4xl text-center pb-4 pt-20 lg:pt-4">{{ content.title }}</h2>
    <div class="grid grid-cols-12 grid-rows-1 w-full">
      <button class="col-auto text-white font-bold font-3xl flex items-center justify-center" @click="changeGroup(-1)">
        <b-icon-chevron-left />
      </button>
      <div class="grid col-span-10 auto-rows-max">
        <transition name="fade">
          <div class="grid grid-rows-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-5 gap-8 w-full py-4">
            <card-profile v-for="(card, key) in cardCluster[activeGroup]" :key="key" :name="card.name" :job="card.job" />
          </div>
        </transition>
      </div>
      <button class="col-auto text-white font-bold font-3xl flex items-center justify-center" @click="changeGroup(1)">
        <b-icon-chevron-right />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTeams',
  props: {
    content: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      activeGroup: 0,
      groupSize: 10
    }
  },
  computed: {
    cardCluster () {
      const cards = this.content.cards
      const cluster = Array(this.clusterSize)
      let limiter = 0
      for (let i = 0; i < cluster.length; i++) {
        const group = cards.slice(limiter, limiter + this.groupSize)
        cluster[i] = group
        limiter = limiter + this.groupSize
      }
      return cluster
    },
    clusterSize () {
      const cards = this.content.cards
      const clusterSize = Math.ceil(cards.length / this.groupSize)
      return clusterSize
    }
  },
  methods: {
    changeGroup (direction) {
      if (this.activeGroup + 1 >= this.clusterSize) {
        this.activeGroup = 0
      } else if (this.activeGroup === 0 && direction === -1) {
        this.activeGroup = 0
      } else {
        this.activeGroup = this.activeGroup + direction
      }
    }
  }
}
</script>
