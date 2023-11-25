<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="app">
    <div>
      router:
      <el-button type="primary" link @click="router.push('/')">Home</el-button>
      <el-button type="primary" link @click="router.push('/login')">login</el-button>
    </div>
    <br />
    <br />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
}
</style>
