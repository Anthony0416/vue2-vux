<template>
  <div id="index">
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'index',
  components: {
    Group,
    Cell
  }
}
</script>

<style scoped lang="less">
  #index {
  }
</style>
