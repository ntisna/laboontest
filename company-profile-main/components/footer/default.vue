<template>
  <div class="h-60 bg-primary-1 w-full flex items-center px-4 lg:px-0">
    <div class="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between w-full px-4">
      <div class="text-white pb-8 lg:pb-0">
        <img :src="require('@/assets/img/logo/laboon-white.png')" alt="logo laboon white">
        <p class="text-xs">Copyright © 2022 PT. Penghubung Laut Nusantara. All Right Reserved.</p>
      </div>
      <div class="text-white flex justify-start">
        <a href="https://wa.me/6285160668800">
          <b-icon-whatsapp class="text-3xl lg:text-4xl m-2" />
        </a>
        <a href="https://www.instagram.com/laboon.app/">
          <b-icon-instagram class="text-3xl lg:text-4xl m-2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterDefault'
}
</script>
