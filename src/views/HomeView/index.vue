<template>
  <div class="flex-col h-screen bg-black gap-2">
    <div class="w-full lg:max-w-screen-lg mx-auto my-0 p-5">
      <div class="ListBlock_title">
        <span>game list</span>
      </div>

      <div class="ListBlock_list">
        <div
          class="ListBlock_item"
          :class="{
            'brightness-50': item.status === 'preparing'
          }"
          v-for="item in list"
          :key="item.game"
          @click="onClickEnter(item)"
        >
          <img class="ListBlock_bg" :src="item.img" />
          <div class="ListBlock_home_self">
            <p class="ListBlock_home_text">{{ item.game }}</p>
            <p class="ListBlock_home_text">{{ item.builder }}</p>
          </div>
          <div class="ListBlock_gamePreviewHover">
            <p class="ListBlock_gameTitle">PLAY</p>
            <div class="ListBlock_gamePreviewBtnPlay">
              <div class="ListBlock_trangle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
interface listType {
  game: string
  builder: string
  img: string
  status: 'preparing' | 'online'
}
const list: listType[] = [
  {
    game: 'scratch',
    builder: 'JFFGame',
    img: '/media/scratch.png',
    status: 'online'
  },

  {
    game: 'crash',
    builder: 'JFFGame',
    img: '/media/crash.png',
    status: 'online'
  },
  {
    game: 'limbo',
    builder: 'JFFGame',
    img: '/media/limbo.png',
    status: 'online'
  },

  {
    game: 'mines',
    builder: 'JFFGame',
    img: '/media/mines.png',
    status: 'online'
  },
  {
    game: 'double',
    builder: 'JFFGame',
    img: '/media/double.png',
    status: 'preparing'
  },
  {
    game: 'roulette',
    builder: 'JFFGame',
    img: '/media/roulette.png',
    status: 'preparing'
  },
  {
    game: 'ring',
    builder: 'JFFGame',
    img: '/media/ring.png',
    status: 'preparing'
  },
  {
    game: 'dice',
    builder: 'JFFGame',
    img: '/media/dice.png',
    status: 'preparing'
  },
  {
    game: 'fierybot',
    builder: 'JFFGame',
    img: '/media/fierybot.png',
    status: 'preparing'
  },
  {
    game: 'plinko',
    builder: 'JFFGame',
    img: '/media/plinko.png',
    status: 'preparing'
  },
  {
    game: 'stairs',
    builder: 'JFFGame',
    img: '/media/stairs.png',
    status: 'preparing'
  }
  //   {
  //     game: 'color',
  //     builder: 'JFFGame',
  //     img: '/media/color.png',
  //     status: 'preparing'
  //   }
]

function onClickEnter(item: listType) {
  if (item.status === 'preparing') {
    return
  }
  router.push({ path: item.game })
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
