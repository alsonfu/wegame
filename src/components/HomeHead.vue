<template>
  <div class="header">
    <a-image
      style="width: 120px;"
      src="/logo.png"
      fit="contain"
      :preview="false"
    />

    <div class="user_balance_bg">
      <div class="topUserBalance_topBalance">
        <p>$</p>
        <span class="topUserBalance_balVal"> {{ account.toFixed(2) }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  account: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="less" scoped>
.header {
  align-items: center;
  background-color: #161f2c;
  box-sizing: border-box;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 8px 30px;
}
.user_balance_bg {
  width: 200px;
  height: 40px;
  color: white;
  background: #0e131b;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  margin-right: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.topUserBalance_topBalance {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  margin: 0 3px 0 10px;
  padding-right: 16px;
  -webkit-user-select: none;
  user-select: none;
  & > p {
    margin-right: 8px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .topUserBalance_balVal {
    font-size: 14px;
    font-weight: bolder;
    -webkit-user-select: none;
    user-select: none;
  }
}
</style>
