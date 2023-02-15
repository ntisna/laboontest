<template>
  <div class="fixed w-auto bottom-10 right-10 z-40" style="color:#4ba92a; z-index: 9999">
    <div class="bg-white rounded-full shadow-2xl">
      <a :href="content.cta.url">
        <b-icon-whatsapp class="text-7xl" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterWhatsapp',
  props: {
    content: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>
