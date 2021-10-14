<template>
  <div class="place-items-center">
    <atom-button
      class="p-0"
      :disabled="disabled"
      @on-click="
        value--;
        $emit('on-change');
      "
      bg-color="transparent"
    >
      <atom-image :src="require('@/assets/icons/minus-sign.svg')"></atom-image>
    </atom-button>

    <div class="molecule-counter place-items-center">
      <atom-loader
        color="white"
        class="p-2"
        size="xs"
        v-if="onLoader"
      ></atom-loader>
      <span v-else class="molecule-counter__count">{{ value }}</span>
    </div>

    <atom-button
      class="p-0"
      bg-color="transparent"
      @on-click="
        value++;
        $emit('on-change');
      "
    >
      <atom-image :src="require('@/assets/icons/plus-sign.svg')" />
    </atom-button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'MoleculeCounter',
  emits: ['on-change', 'update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    onLoader: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value),
    });
    return { value };
  },
  computed: {
    disabled() {
      return this.value === 1;
    },
  },
};
</script>
