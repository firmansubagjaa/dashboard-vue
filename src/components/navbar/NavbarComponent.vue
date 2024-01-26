<template>
  <header class="w-full">
    <div class="p-5 flex justify-between items-center w-full bg-gray-100 shadow-sm">
      <div>
        <h1 class="font-bold text-xl">{{ title }}</h1>
      </div>
      <div class="flex items-center w-64 justify-between">
        <div>
          <p class="font-semibold text-lg">Hello, Firman Subagja!</p>
          <p class="text-sm">Administrator</p>
        </div>
        <div>
          <div class="w-12 h-12 bg-gray-900 rounded-full" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>
