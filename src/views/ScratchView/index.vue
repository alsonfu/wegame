<template>
  <main class="w-full max-w-screen-lg mx-auto my-0 p-4">
    <div class="flex-cols md:flex md:justify-between">
      <div class="flex flex-col w-full md:w-60%">
        <div class="flex justify-between mb-4">
          <a-button color="#161f2c" size="small">
            <el-icon><IconWarningFilled /></el-icon>
            5
          </a-button>
          <div>
            <a-button size="small">人员： 5</a-button>
            <a-button size="small">人员： 5</a-button>
          </div>
        </div>
        <div class="mx-25% h-500px md:h-400px rounded-md overflow-hidden">
          <iframe
            class="w-full h-full border-0"
            src="/web-mobile/index.html"
            ref="iframeRef"
          />
        </div>
        <div>123123</div>
      </div>

      <div class="w-full md:w-36%">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="player" label="Player" width="160px" />
          <el-table-column prop="odds" label="Odds" />
          <el-table-column prop="payment" label="Payment" />
        </el-table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HomeHead from '@/components/HomeHead.vue'
import { ref, onMounted } from 'vue'

const iframeRef = ref()
const tableData = [
  {
    player: '2016-05-03',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  },
  {
    player: '2016-05-02',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  },
  {
    player: '2016-05-04',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  },
  {
    player: '2016-05-01',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  },
  {
    player: '2016-05-01',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  },
  {
    player: '2016-05-01',
    odds: 'Tom',
    payment: 'No. 189, Grove St, Los Angeles'
  }
]
onMounted(async () => {
  if (iframeRef.value) {
    await waitForIframeCreated()
    iframeRef.value.contentWindow.playGame()
  }
})

function waitForIframeCreated() {
  return new Promise((resovle, reject) => {
    const timer = setInterval(() => {
      if (iframeRef.value.contentWindow.playGame) {
        clearInterval(timer)
        resovle(iframeRef.value)
      }
    }, 5)
  })
}
</script>

<style lang="less" scoped>
.iframe-wrapper {
  width: 600px;
  height: 400px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
