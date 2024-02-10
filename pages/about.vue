<template>
  <div>
    <h1>I'm about page</h1>
    <button @click="mainStore.increase()">
      Count: {{ mainStore.getCount }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
</script>
