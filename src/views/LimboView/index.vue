<template>
  <main class="w-full max-w-screen-lg mx-auto my-0 p-4">
    <div class="flex-cols md:flex md:justify-between">
      <div class="flex flex-col w-full md:w-60%">
        <div class="flex justify-between mb-2">
          <a-button
            color="#161f2c"
            :dark="isDark"
            :icon="IconMember"
          >
            5
          </a-button>
          <div>
            <a-button
              color="#161f2c"
              :dark="isDark"
              :icon="IconSound"
            >
            </a-button>

            <a-button
              color="#161f2c"
              :dark="isDark"
            >
              <IconSound :is-open="true" />
            </a-button>
          </div>
        </div>
        <div class="h-280px md:h-400px rounded-md overflow-hidden">
          <iframe
            class="w-full h-full border-0"
            src="/web-mobile/index.html?game=limbo"
            ref="iframeRef"
          ></iframe>
        </div>

        <div  class="gameLimbo_amountBetBox__zy2m3">
          <div
            
            class="cashOutAtControl_cashOutAtControl__i44xQ gameLimbo_crashOutInput__N+LVH"
          >
            <div  class="cashOutAtControl_top__Di90s">
              <div  class="cashOutAtControl_btn__vJnLB">
                -
              </div>
              <div
                
                class="cashOutAtControl_cashOutAtValue__EA8rv"
              >
                <div  class="adjustTextInput_wrapper__OxPlQ">
                  <span  style="color: transparent">9</span
                  ><input
                    
                    type="number"
                    inputmode="decimal"
                    autocomplete="off"
                    style="width: 24px"
                  />
                </div>
              </div>
              <div  class="cashOutAtControl_btn__vJnLB">
                +
              </div>
            </div>
            <label
              
              class="cashOutAtControl_cashOutAtTitle__8axX3"
              for="cashOutAtInput"
              >Cash out</label
            >
          </div>
          <div
            
            class="betAmountControl_betAmountControl__vBhn7 gameLimbo_betAmountInput__S+Wiq"
          >
            <div  class="betAmountControl_sideBtn__p3FlV">
              <p  class="">Min</p>
              <p  class="">Max</p>
            </div>
            <label
              
              class="betAmountControl_center__4Ertc"
              for="betAmountInput"
              ><div
                
                class="betAmountControl_betAmountNumber__Fe3n8"
              >
                <p >₱</p>
                <div  class="adjustTextInput_wrapper__OxPlQ">
                  <span  style="color: transparent"
                    >10000</span
                  ><input
                    
                    type="number"
                    inputmode="decimal"
                    autocomplete="off"
                    style="width: 74px"
                  />
                </div>
              </div>
              <p >₱ 10,000</p></label
            >
            <div  class="betAmountControl_sideBtn__p3FlV">
              <p  class="">1/2</p>
              <p  class="betAmountControl_active__4p5uS">
                2x
              </p>
            </div>
          </div>
          <button
            
            type="button"
            class="bet3DButton_btn__B66Sj bet3DButton_btn_lg__Srkwa bet3DButton_btn3d__Cncpu bet3DButton_second__sRRCJ ak_betBtn"
          >
            <div  class="bet3DButton_tempbox__fEQrB"></div>
            <div
              
              class="betButton_betButton__LJB9B betButton_disable__LbSFP"
              style="display: none"
            >
              <p
                
                class="betButton_betBtnText__EgiE6 betButton_disable__LbSFP"
              >
                <span
                  
                  role="img"
                  aria-label="loading"
                  class="anticon anticon-loading anticon-spin"
                  style="color: rgb(255, 255, 255)"
                  ><svg
                    
                    viewBox="0 0 1024 1024"
                    focusable="false"
                    data-icon="loading"
                    width="1.2em"
                    height="1.2em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      
                      d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                    ></path></svg
                ></span>
              </p>
              <p  class="betButton_betBtnSubText__2wFzM">
                Wait
              </p>
            </div>
            <div  class="betButton_betButton__LJB9B" style="">
              <p  class="betButton_betBtnText__EgiE6">Bet</p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B betButton_disable__LbSFP"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">BET</p>
              <p  class="betButton_betBtnSubText__2wFzM">
                Bet
              </p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">Bet</p>
              <p  class="betButton_betBtnSubText__2wFzM">
                Next round
              </p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">
                Cancel
              </p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">
                Cash out
              </p>
              <p  class="betButton_betBtnSubText__2wFzM">0</p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">
                Start
              </p>
              <p  class="betButton_betBtnSubText__2wFzM">∞</p>
            </div>
            <div
              
              class="betButton_betButton__LJB9B"
              style="display: none"
            >
              <p  class="betButton_betBtnText__EgiE6">Stop</p>
              <p  class="betButton_betBtnSubText__2wFzM">∞</p>
            </div>
          </button>
        </div>
        <div class="mt-4 flex flex-wrap gap-4">
          <div class="flex-cols my-border border-1 round-lg p-4">
            <el-input-number v-model="cashOut" />
            <div class="text-center">Cash out</div>
          </div>

          <div class="flex-cols my-border border-1 round-lg p-4">
            <el-input-number v-model="cashOut" />
            <div class="text-center">Cash out</div>
          </div>

          <div class="flex-cols my-border border-1 round-lg p-4">
            <el-input-number v-model="cashOut" />
            <div class="text-center">Cash out</div>
          </div>
        </div>
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
import { ref, onMounted } from 'vue'
import { useDark } from '@vueuse/core'

import IconMember from '@/components/icons/IconMember.vue'
import IconSound from '@/components/icons/IconSound.vue'

const isDark = useDark()
const cashOut = ref(0)
console.log(isDark)
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
@import './index.less';

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
