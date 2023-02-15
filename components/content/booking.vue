<template>
  <div class="grid auto-rows-auto max-w-8xl w-full">
    <h2 class="text-white font-bold text-4xl text-center py-8">{{ content.title }}</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div ref="left-ilustration" class="grid auto-rows-min gap-4">
        <div style="padding-bottom: 56.25%" class="bg-black shadow-lg" />
        <div class="grid grid-cols-3 gap-4">
          <div style="padding-bottom: 56.25%" class="bg-black shadow-lg relative">
            <b-icon-play-circle class="text-white text-lg absolute right-0 left-0 bottom-0 top-0" />
          </div>
          <div style="padding-bottom: 56.25%" class="bg-black shadow-lg" />
          <div style="padding-bottom: 56.25%" class="bg-black shadow-lg" />
        </div>
      </div>
      <div ref="right-description" class="grid auto-rows-min gap-4">
        <p class="text-sm text-white">{{ content.description }}</p>
        <div class="grid grid-rows-2 grid-cols-4 gap-4 py-4">
          <card-numbered
            v-for="(card, key) in content.cards"
            :key="key"
            :label="card.label"
            :number="key+1"
          >
            <template v-slot:icon>
              <!-- <b-icon-chevron-right /> -->
              <div class="absolute inset-0 text-black text-4xl flex justify-center items-center">
                <component :is="iconName(card.icon)" />
              </div>
            </template>
          </card-numbered>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBooking',
  props: {
    content: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    iconName (name) {
      let res = 'div' // fallback
      if (name) {
        res = name
      }
      return res
    }
  }
}
</script>
