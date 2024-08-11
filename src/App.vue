<template>
  <header class="m-8 mt-4 rounded-xl flex justify-center bg-white shadow-sm">
    <nav class="w-full mx-12 flex flex-row justify-between items-center">
      <RouterLink to="/" class="w-10">
        <img src="/devtube.png" alt="Devtube logo">
      </RouterLink>
      <form>
        <input type="text" placeholder="Search..." class="my-3 ml-8 px-4 py-3 rounded-xl bg-gray-100 text-sm">
      </form>
      <font-awesome-icon icon="magnifying-glass" />
    </nav>
  </header>
  <RouterView />
</template>

<script>
export default {
  name: 'App',
}
</script>

