<template>
  <h3 class="font-size-16 text-uppercase fw-bold">
    {{ $t('product.list') }}
  </h3>
  <atom-divider></atom-divider>
  <template v-if="basket.length">
    <div
      v-for="item in basket"
      :key="`basket-products-${item.id}`"
      class="row border-bottom p-4"
    >
      <div class="col-md-4 col-sm-12">
        <div class="place-items-center">
          <atom-image
            lazy
            class="hover-opacity-7 img-fluid"
            :alt="item.DisplayName"
            :src="item.ResizedImage"
          ></atom-image>
        </div>
      </div>
      <div class="col-md-8 col-sm-12 font-size-14">
        <div class="place-items-between mb-2">
          <h5 class="text-uppercase m-0">{{ item.Brand }}</h5>
          <atom-button
            color="rose-red"
            bg-color="transparent"
            @on-click="$emit('on-product-delete', item)"
            >{{ $t('general.delete') }}</atom-button
          >
        </div>
        <div class="mb-2">{{ item.DisplayName }}</div>
        <div class="place-items-start mb-2">
          <div
            class="place-items-center bg-rose-red"
            style="width:40px; height:40px;"
          >
            <span class="text-white">%{{ item.DiscountRate }}</span>
          </div>
          <div class="ms-3">
            <div class="text-muted text-decoration-line-through fw-bold">
              {{ item.OriginalPrice }} TL
            </div>
            <div class="fw-bold">{{ item.SalePrice }} TL</div>
          </div>
        </div>
        <div class="mb-2">
          <span class="fw-bold ">{{ $t('general.color') }}</span
          ><span class="ms-3">{{ item.Color }}</span>
        </div>
        <div class="mb-2">
          <span class="fw-bold">{{ $t('general.size') }}</span
          ><span class="ms-3">{{ item.Size }}</span>
        </div>
        <div class="place-items-start">
          <span class="fw-bold">{{ $t('general.quantity') }} </span
          ><molecule-counter
            class="ms-3"
            v-model="item.Quantity"
            @on-change="getProductQuantityUpdate(item)"
          ></molecule-counter>
        </div>
      </div>
    </div>
  </template>
  <atom-no-data-card
    v-else
    :description="$t('product.description.noProductInBasket')"
  />
</template>

<script>
import ActionMixin from '../_shared/actionsMixin';

export default {
  name: 'ProductCards',
  emits: ['on-product-delete'],
  mixins: [ActionMixin],
  computed: {
    basket() {
      return this.$store.getters['basket/getBasket'];
    },
  },
  methods: {
    async updateProductQuantity(item) {
      await this.$store.dispatch('basket/updateProductQuantity', { item });
    },
    async getProductQuantityUpdate(item) {
      await this.updateProductQuantity(item);
      Promise.all([this.fetchBasket(), this.fetchSummary()]);
    },
  },
  async created() {
    await this.fetchBasket();
  },
};
</script>
