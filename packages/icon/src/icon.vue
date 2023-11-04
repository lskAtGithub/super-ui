<template>
  <i :class="`s-icon-${name}`" :style="{ fontSize: size + 'px' }"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SIcon',
  props: {
    name: {
      type: String,
      default: () => '',
    },
    size: {
      type: [String, Number],
      default: () => '24',
    },
  },
})
</script>
