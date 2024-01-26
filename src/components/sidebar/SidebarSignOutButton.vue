<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
</script>

<template>
  <div class="pl-6">
    <AlertDialog>
      <AlertDialogTrigger class="w-full"
        ><button
          class="transition ease-in-out duration-150 font-semibold hover:bg-white hover:text-black active:bg-gray-400 w-full h-16 text-left pl-4 rounded-l-xl"
        >
          Sign Out
        </button></AlertDialogTrigger
      >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction @click="signOut">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    signOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
})
</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
export default defineComponent({
  methods: {
    removeToken() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
})
</script> -->
