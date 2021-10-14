import axios from '@/api';

export default {
  async fetchBasket({ commit }) {
    const { data: items } = await axios.get('basket');
    commit('setBasket', { items });
  },
  async fetchBasketSummary({ commit }) {
    const { data: items } = await axios.get('summary');
    commit('setBasketSummary', { items });
  },
  async deleteBasketProduct(context, { id = null }) {
    return await axios.delete(`basket/${id}`);
  },
  async updateProductQuantity(context, { item }) {
    return await axios.put(`basket/${item.id}`, item);
  },
};
