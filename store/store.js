import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],
  total_quantity: 0,
  total : 0,
  handleAdd : (product_id, quantity, total) => {
    set(state => ({
      cart: [...state.cart, {product_id, quantity, total}],
      total_quantity: state.total_quantity + quantity,
      total: state.total + total
    }))
  }
}));

export default useStore;