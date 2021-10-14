<template>
  <button
    v-bind="options"
    class="atom-button p-2 place-items-center"
    @click="$emit('on-click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AtomButton',
  emits: ['on-click'],
  props: {
    type: {
      type: String,
      default: 'button',
      validator: val => ['button', 'submit'].includes(val),
    },
    size: {
      type: String,
      default: 'sm',
      validator: val => ['sm', 'md', 'lg'].includes(val),
    },
    bgColor: {
      type: String,
      default: 'regent-grey',
    },
    color: {
      type: String,
      default: 'seas-hell',
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    options() {
      return {
        class: {
          [`text-${this.color}`]: this.color,
          [`bg-${this.bgColor}`]: this.bgColor,
          [`atom-button__${this.size}`]: this.size,
          'w-100': this.block,
          'atom-button__disabled': this.disabled,
          'rounded-0': this.flat,
        },
        disabled: this.disabled,
        type: this.type,
      };
    },
  },
};
</script>
