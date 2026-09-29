import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/lib/axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const ready = ref(false)
  const isLoggin = computed(() => user.value !== null)

  async function fetchUser() {
    try {
      const result = await api.get('/api/member/profile')

      user.value = result.data
    } catch (error) {
      console.log(error)
      user.value = null
    } finally {
      ready.value = true
    }
  }
  return { user, ready, isLoggin, fetchUser }
})
