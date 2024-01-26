<template>
  <div class="p-10 flex flex-col justify-center h-full gap-5">
    <Toaster position="top-center" richColors />
    <div>
      <h2 class="text-3xl font-bold uppercase">Login</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi possimus atque minus nesciunt
        at voluptatem delectus harum aperiam cum quia.
      </p>
    </div>
    <form @submit.prevent="submitForm" class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label for="email" class="capitalize font-semibold">email address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="outline-none border-2 border-gray-400 rounded-xl py-3 px-3"
          v-model="email"
          :style="{
            'border-color': errorClasses ? 'red' : '',
            'background-color': errorClasses ? '#FFCDD2' : ''
          }"
          autocomplete="off"
        />
      </div>
      <div class="flex flex-col">
        <label for="password" class="capitalize font-semibold">password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          :style="{
            'border-color': errorClasses ? 'red' : '',
            'background-color': errorClasses ? '#FFCDD2' : ''
          }"
          class="outline-none border-2 border-gray-400 rounded-xl py-3 px-3"
          autocomplete="off"
        />
      </div>
      <div>
        <button
          type="submit"
          class="w-full bg-gray-800 text-white h-14 rounded-xl transition ease-in-out duration-150 hover:bg-gray-600 active:bg-gray-700"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Toaster, toast } from 'vue-sonner'

export default defineComponent({
  components: {
    Toaster
  },
  data() {
    return {
      email: '',
      password: '',
      errorClasses: false
    }
  },
  methods: {
    submitForm() {
      switch (true) {
        case !this.email || !this.password:
          this.errorClasses = true
          toast.error('Email or password is empty')
          break
        case this.email === 'admin@gmail.com' && this.password === 'admin123':
          localStorage.setItem('token', 'your_token_here')
          this.$router.push('/dashboard')
          break
        default:
          this.errorClasses = true
          toast.error('Email or password is incorrect')
          break
      }
    }
  }
})
</script>
