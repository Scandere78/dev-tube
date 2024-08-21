<template>
  <HeaderNavbar />
  <RouterView />
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar.vue';


export default {
  name: 'App',
  components: {
    HeaderNavbar,
  },
}
</script>

