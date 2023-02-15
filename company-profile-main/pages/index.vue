<template>
  <div>
    <section-default
      title="home"
      class="min-h-screen"
      :background-src="require('~/assets/img/background/bg-home-4.png')"
    >
      <template #default>
        <content-home :content="home" />
      </template>
    </section-default>

    <section-default
      background-color="#ffffff"
      class="min-h-screen"
      title="kapal"
    >
      <div class="flex flex-col max-w-7xl mx-auto gap-y-4 w-full">
        <content-about :cards="about.upper.cards" :description="about.upper.description" />
        <content-about :cards="about.lower.cards" :description="about.lower.description" />
      </div>
    </section-default>

    <section-default
      background-color="#f2f2f2"
      :min-height-screen="true"
      title="feature"
    >
      <content-feature :content="feature" />
    </section-default>

    <section-default
      title="contact"
    >
      <content-contact :content="contact" />
    </section-default>

    <footer-whatsapp :content="home" />
  </div>
</template>

<script>
import contentJSON from '~/static/json/data.json'
export default {
  name: 'IndexPage',
  async asyncData ({ $axios, error, req }) {
    try {
      const {
        home = '',
        about = '',
        feature = '',
        booking = '',
        teams = '',
        contact = ''
      } = contentJSON
      return {
        home,
        about,
        feature,
        booking,
        teams,
        contact
      }
    } catch (err) {
      console.log(err)
      error({
        message: 'Galat'
      })
    }
  },
  computed: {
    background () {
      if (this.image) {
        return { backgroundImage: `url(${this.image})` }
      }
      if (this.color) {
        return { backgroundColor: this.backgroundColor }
      }
      return ''
    }
  }
}
</script>
<style>
.section-booking {
  background-blend-mode: darken;
}
</style>
