<template>
  <div class="row">
    <div class="col-md-8 col-sm-12"><product-content /></div>
    <div class="col-md-4 col-sm-12"><summary-content /></div>
  </div>
</template>

<script>
import ProductContent from './ProductContent';
import SummaryContent from './SummaryContent';

export default {
  name: 'Basket',
  components: {
    ProductContent,
    SummaryContent,
  },
};
</script>
