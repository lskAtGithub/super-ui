<template>
  <button class="s-button" :class="classs">
    <i v-if="props.icon" :class="`s-icon-${props.icon}`"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from 'vue'

type ButtonType = 'primary' | 'warning' | 'info' | 'danger'

export default defineComponent({
  name: 'SButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: () => '',
    },
    disabled: Boolean,
    icon: {
      type: String,
      default: () => '',
    },
  },
  setup(props, ctx) {
    const classs = computed(() => [
      props.type ? 's-button--' + props.type : '',
      {
        'is-disabled': props.disabled,
      },
    ])
    
    return { classs, props }
  },
})
</script>
