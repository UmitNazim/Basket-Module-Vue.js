<template>
  <organism-card shadow color="snow-drift">
    <header>
      <h5 class="text-uppercase">{{ $t('basket.summary') }}</h5>
      <atom-divider></atom-divider>
    </header>
    <main>
      <div class="place-items-between mb-3 font-size-14">
        <span class="fw-normal">{{ $t('basket.generalTotalAmount') }}</span>
        <strong>{{ summary.GeneralTotalAmount || '0,00' }} TL</strong>
      </div>

      <div class="place-items-between mb-3 font-size-14">
        <span class="fw-normal">{{ $t('basket.discountAmount') }}</span>
        <strong>{{ summary.DiscountAmount || '0,00' }} TL</strong>
      </div>
      <div class="place-items-between mb-3 font-size-14">
        <span class="fw-normal">{{ $t('basket.cargoAmount') }}</span>
        <strong>{{ summary.CargoAmount || '0,00' }} TL</strong>
      </div>
      <atom-divider></atom-divider>

      <div class="place-items-between mb-3 font-size-14">
        <span class="fw-normal">{{ $t('basket.totalAmount') }}</span>
        <strong>{{ summary.TotalAmount || '0,00' }} TL</strong>
      </div>
      <atom-button bg-color="black" flat block size="lg">
        {{ $t('general.continue') }}</atom-button
      >
    </main>
  </organism-card>
</template>

<script>
export default {
  name: 'SummaryContent',
  computed: {
    summary() {
      return this.$store.getters['basket/getBasketSummary'];
    },
  },
  async created() {
    await this.$store.dispatch('basket/fetchBasketSummary');
  },
};
</script>
