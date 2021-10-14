const actionsMixin = {
  methods: {
    async fetchBasket() {
      await this.$store.dispatch('basket/fetchBasket');
    },
    async fetchSummary() {
      await this.$store.dispatch('basket/fetchBasketSummary');
    },
  },
};

export default actionsMixin;
