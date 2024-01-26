<template>
  <aside>
    <div class="bg-gray-800 py-10 text-white h-screen w-80">
      <div class="flex flex-col justify-between h-full">
        <SidebarHeaderVue />
        <SidebarNav :links="links" />
        <SidebarSignOutButton />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidebarHeaderVue from './SidebarHeader.vue'
import SidebarSignOutButton from './SidebarSignOutButton.vue'
import SidebarNav from './SidebarNav.vue'

export default defineComponent({
  components: {
    SidebarHeaderVue,
    SidebarSignOutButton,
    SidebarNav
  },
  data() {
    return {
      links: [
        { path: '/dashboard', name: 'Dashboard' },
        { path: '/employee', name: 'Employee' },
        { path: '/statistic', name: 'Statistic' },
        { path: '/task-status', name: 'Task Status' },
        { path: '/notes', name: 'Notes' }
      ]
    }
  }
})
</script>
