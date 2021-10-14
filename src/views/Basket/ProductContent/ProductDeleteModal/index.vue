<template>
  <organism-modal
    size="md"
    :title="$t('product.delete')"
    @on-close="$emit('on-close')"
  >
    <p
      class="font-size-14 text-mid-grey m-0"
      v-html="
        $t('product.description.willBeDeleted', {
          product: product.DisplayName,
        })
      "
    ></p>
    <template v-slot:footer>
      <div class="place-items-end">
        <atom-button
          class="me-2"
          bg-color="black"
          @on-click="$emit('on-close')"
          >{{ $t('general.cancel') }}</atom-button
        >
        <atom-button
          color="black"
          bg-color="gunmetal"
          @on-click="getProductDeleting"
        >
          <atom-loader
            color="mid-grey"
            v-if="isProductBeingDeleted"
          ></atom-loader>
          <template v-else> {{ $t('general.delete') }}</template>
        </atom-button>
      </div>
    </template>
  </organism-modal>
</template>

<script>
import ActionMixin from '../_shared/actionsMixin';

export default {
  name: 'ProductDeleteModal',
  mixins: [ActionMixin],
  data() {
    return {
      isProductBeingDeleted: false,
    };
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async deleteBasketProduct() {
      await this.$store.dispatch('basket/deleteBasketProduct', {
        id: this.product.id,
      });
    },
    async getProductDeleting() {
      this.isProductBeingDeleted = true;
      await this.deleteBasketProduct();
      Promise.all([this.fetchBasket(), this.fetchSummary()]);
      //I have put them in setTimeout because it generally takes time.
      setTimeout(() => {
        this.isProductBeingDeleted = false;
        this.$emit('on-close');
      }, 1500);
    },
  },
};
</script>
