<template>
  <div class="flex">
    <sidebarComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sidebarComponent from '../../components/sidebar/SidebarComponent.vue'

export default defineComponent({
  components: {
    sidebarComponent
  }
})
</script>
