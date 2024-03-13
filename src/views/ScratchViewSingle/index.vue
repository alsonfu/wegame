<template>
  <main
    class="max-w-full md:max-w-xl mx-auto my-0 flex"
    :class="{
      'items-center': hasTicket,
      'bg-black': hasTicket
    }"
    :style="{ height: windowHeight }"
    ref="mainRef"
  >
    <div class="flex flex-col w-full">
      <div
        v-if="hasTicket"
        class="rounded-md overflow-hidden"
        :style="{ height: height }"
      >
        <iframe
          class="w-full h-full border-0"
          src="/web-mobile/index.html"
          ref="iframeRef"
        />
      </div>
      <div v-else>
        <div class="banner">
          <el-image class="w-full h-250px" :src="imgUrl" fit="cover" />
          <el-image class="w-10 h-10 logo" :src="logoUrl" fit="cover" />
          <div class="banner-bottom">
            <div class="title">Lucky Stars</div>
            <div class="content">
              Scratch three identical numbers to get the corresponding number
              reward.
            </div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="mb-2">Buy Scratch</h3>
          <el-radio-group v-model="radioValue" class="flex gap-2 w-full">
            <el-radio
              v-for="item in priceSetting"
              :value="item.num"
              size="large"
              border
              class="w-full"
            >
              <div class="flex justify-between">
                <div>{{ item.num }} Ticket</div>
                <div>₱ {{ item.price }}</div>
              </div>
            </el-radio>
          </el-radio-group>

          <h3 class="mt4">Play Scratch</h3>

          <div class="flex justify-between items-center">
            <div class="BuyScratchCard_left__yOFBr">Scratchcard Remaining</div>
            <div class="flex items-center p-4">
              <span class="mr-1">{{ remaining }}</span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="BottomBuyCard_bottomBuy">
          <div class="BottomBuyCard_info">
            <div>Ticket: {{ currentSelcted.num }}</div>
            <div class="BottomBuyCard_right">₱ {{ currentSelcted.price }}</div>
          </div>
          <div class="BottomBuyCard_buttonBuy" @click="buyScratchCard">
            <div
              class="BottomBuyCard_button"
              style="background-color: rgb(20, 143, 14)"
            >
              BUY
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import imgUrl from './image.png'
import logoUrl from './logo.png'
import { scratchByApi } from '@/api/scratch'
import { find, get } from 'lodash-es'

import { useToggle } from '@vueuse/core'

const windowHeight = window.innerHeight + 'px'
const iframeRef = ref<HTMLIFrameElement>()
const mainRef = ref()
const height = ref()

const hasTicket = ref(false)

console.log('debug', useToggle)
console.log('ref', ref)
// watch(
//   () => hasTicket.value,
//   (value) => {
//     useToggle(ref(value))()
//   }
// )
const radioValue = ref(1)

console.log(import.meta.env.VITE_SCRATCH_HOST)
const priceSetting = [
  {
    num: 1,
    price: 5.6
  },
  {
    num: 5,
    price: 28
  },
  {
    num: 10,
    price: 56
  }
]

useResizeObserver(mainRef, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect

  height.value = (width * 850) / 480 + 'px'
  console.log(height.value)
})

type MyIframeWindow = Window & {
  playGame: (...args: any) => void
}

watch(
  () => hasTicket.value,
  (value) => {
    if (value) {
      waitForIframeCreated().then((iframeWin) => {
        if (!iframeWin) {
          return
        }
        iframeWin.playGame(
          resultData.value,
          (obj: any) => {
            const remaining = get(obj, 'remaining')
            if (remaining !== undefined && remaining === 0) {
              hasTicket.value = false
            }
          },
          {
            host: import.meta.env.VITE_SCRATCH_HOST
          }
        )
      })
    }
  }
)

function waitForIframeCreated(): Promise<MyIframeWindow> {
  return new Promise((resovle, reject) => {
    const timer = setInterval(() => {
      if (
        iframeRef.value &&
        iframeRef.value.contentWindow &&
        (iframeRef.value.contentWindow as MyIframeWindow).playGame
      ) {
        clearInterval(timer)
        resovle(iframeRef.value.contentWindow as MyIframeWindow)
      }
    }, 25)
  })
}

const currentSelcted = computed<{ price: number; num: number }>(() => {
  const item = find(priceSetting, { num: radioValue.value })
  if (item) {
    return item
  } else {
    return { price: 0, num: 0 }
  }
})

const remaining = ref(0)
const resultData = ref()
async function buyScratchCard() {
  try {
    const item = find(priceSetting, { num: radioValue.value })
    if (!item) {
      return
    }
    const res = await scratchByApi(item.num)
    resultData.value = res
    remaining.value = res.cards.length
    hasTicket.value = true
  } catch (e) {
    console.error(e)
  }
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

.banner {
  position: relative;
  .logo {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 60px;
    height: 60px;
  }
  .banner-bottom {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    .title {
      color: green;
      font-size: 2rem;
      font-weight: 800;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }
    .content {
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }
}

.el-radio {
  margin-right: 0;
  & :deep(.el-radio__label) {
    flex: 1;
  }
}

.BottomBuyCard_bottomBuy {
  background-color: #fff;
  bottom: 0;
  box-shadow: 0 -0.0625rem 1.25rem #333;
  display: flex;
  flex-direction: column;
  height: 7rem;
  left: 0;
  position: fixed;
  right: 0;
  .BottomBuyCard_info {
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
  }
  .BottomBuyCard_info .BottomBuyCard_right {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .BottomBuyCard_buttonBuy {
    flex: 1 1;
    height: 100%;
    padding: 0.625rem;
    width: 100%;
    .BottomBuyCard_button {
      align-items: center;
      background-color: #2aac69;
      border-radius: 0.25rem;
      color: #fff;
      cursor: pointer;
      display: flex;
      font-weight: 700;
      height: 100%;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
