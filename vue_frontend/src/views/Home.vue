<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { onMounted, ref } from 'vue'

const auth = useAuthStore()

onMounted(() => {
  auth.fetchUser()
})
</script>
<template>
  <div>歡迎來到首頁</div>
  <h1 v-if="auth.user !== null">{{ auth.user.memberName }}</h1>
  <h1 v-else>尚未登入</h1>
</template>

<style scoped></style>
