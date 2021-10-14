<template>
  <div v-bind="options"><slot></slot></div>
</template>

<script>
export default {
  name: 'OrganismCard',
  props: {
    color: {
      type: String,
      default: 'white',
    },
    flat: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    options() {
      return {
        class: {
          'organism-card': true,
          [`bg-${this.color}`]: true,
          'organism-card--shadow': this.shadow,
          'organism-card--hover': this.hover,
          'rounded-0': this.flat,
          'p-0': this.noPadding,
        },
      };
    },
  },
};
</script>
