<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const changeByWatch = ref('empty')
const watchDirectly = ref('empty')
const counterStore = useCounterStore()

// this will lose reactivity
const { count: lostCount, doubleCount: lostDoubleCount } = counterStore

// this will be reactivity
const { count: reactivityCount, doubleCount: reactivityDoubleCount } = storeToRefs(counterStore)

watch(
  () => counterStore.count,
  (newVal) => {
    changeByWatch.value = `watch: ${newVal}`
    counterStore.changeByOutSide = `changeByOutSide: ${newVal}`
  }
)
watch(reactivityCount, (newVal) => {
  watchDirectly.value = `watchDirectly: ${newVal}`
})
</script>

<template>
  <main>
    <el-button type="primary" link @click="router.push('/login')">to login</el-button>
    <div>lostCount: -----{{ lostCount }}</div>
    <div>lostDoubleCount: -----{{ lostDoubleCount }}</div>
    <div>watchDirectly:-----{{ watchDirectly }}</div>
    <div>--------------------------------------</div>
    <div>reactivityCount: -----{{ reactivityCount }}</div>
    <div>reactivityDoubleCount: -----{{ reactivityDoubleCount }}</div>
    <div>--------------------------------------</div>
    <div>counter: -----{{ counterStore.count }}</div>
    <div>doubleCount: -----{{ counterStore.doubleCount }}</div>
    <div>watched:-----{{ changeByWatch }}</div>
    <div>changeByOutSide:-----{{ counterStore.changeByOutSide }}</div>
    <el-button type="primary" @click="counterStore.increment()">count + 1</el-button>
    <el-button type="primary" @click="counterStore.$reset()">reset count</el-button>
    <br />
    <br />
    name : TestTestAutoImport <TestTestAutoImport />
  </main>
</template>
