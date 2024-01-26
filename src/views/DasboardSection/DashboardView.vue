<template>
  <Navbar :title="title" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/navbar/NavbarComponent.vue'

export default defineComponent({
  components: {
    Navbar
  },
  data() {
    return {
      title: 'Dashboard'
    }
  }
})
</script>
