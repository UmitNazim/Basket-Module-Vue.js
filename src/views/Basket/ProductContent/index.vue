<template>
  <organism-card>
    <product-cards @on-product-delete="getDeletingProduct" />
    <product-delete-modal
      v-if="isModalNeedsOpen"
      @on-close="isModalNeedsOpen = false"
      :product="selectedProduct"
    />
  </organism-card>
</template>

<script>
import ProductCards from './ProductCards';
import ProductDeleteModal from './ProductDeleteModal';

export default {
  name: 'ProductContent',
  components: { ProductCards, ProductDeleteModal },
  data() {
    return {
      isModalNeedsOpen: false,
      selectedProduct: {},
    };
  },
  methods: {
    getDeletingProduct(item) {
      this.selectedProduct = item;
      this.isModalNeedsOpen = true;
    },
  },
};
</script>
