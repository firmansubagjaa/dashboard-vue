<template>
  <nav class="pl-6 flex flex-col gap-3">
    <router-link
      v-for="(item, index) in links"
      :key="index"
      :to="item.path"
      active-class="bg-white text-black"
      class="transition ease-in-out duration-150 font-semibold hover:bg-white hover:text-black active:bg-gray-400 w-full h-16 text-left pl-4 rounded-l-xl flex items-center"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    links: Array
  }
})
</script>
