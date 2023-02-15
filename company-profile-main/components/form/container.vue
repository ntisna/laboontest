<template>
  <form action="get" class="bg-black-semi-transparent xl:mx-12 lg:mx-4 rounded-2xl">
    <div class="flex flex-col justify-center items-center py-8 text-center font-bold text-white">
      <p>Anda Ingin Sewa Kapal?</p>
      <p>Registrasi Sekarang</p>
    </div>
    <div class="flex flex-col px-10">
      <input class="bg-white px-4 py-3 mb-6 rounded-md" :required="true" type="text" name="nama" placeholder="Nama">
      <input class="bg-white px-4 py-3 mb-6 rounded-md" :required="true" type="text" name="telp" placeholder="Nomor Telepon">
      <input class="bg-white px-4 py-3 mb-6 rounded-md" :required="true" type="email" name="email" placeholder="Email">
      <input class="bg-white px-4 py-3 mb-6 rounded-md" :required="false" type="text" name="refferal" placeholder="Kode Refferal">
    </div>
    <div class="pb-8 flex items-center w-full">
      <button class="bg-secondary-1 rounded-3xl text-white font-bold mx-auto bg-red-400 px-16 py-4 text-sm">Daftar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormContainer'
}
</script>
<style scoped>
.bg-black-semi-transparent {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
