<template>
  <a-config-provider  :theme="{
    token: {
      colorPrimary: '#00b96b',
    },
  }">
    <HomeHead :account="account"></HomeHead>

    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">

import { useDark, useToggle } from '@vueuse/core'

const account = ref(1000)

const isDark = useDark()

useToggle(isDark)

onMounted(() => {
  if (!isDark.value) {
    useToggle(isDark)()
  }
})
</script>
