import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BearState {
  bears: number;
}

interface BearActions {
  addBear: () => void;
  removeBear: () => void;
  resetBears: () => void;
  incrementBy: (by: number) => void;
  decrementBy: (by: number) => void;
}

const initialState: BearState = {
  bears: 0,
};

const useBearStore = create<BearState & BearActions>()(
  devtools(
    (set) => ({
      ...initialState,

      addBear: () => set((state) => ({ bears: state.bears + 1 }), false, 'bears/Add a Bear'),

      removeBear: () => set((state) => ({ bears: state.bears - 1 }), false, 'bears/Remove a Bear'),

      incrementBy: (by) =>
        set((state) => ({ bears: state.bears + by }), false, 'bears/Increment Bears By'),

      decrementBy: (by) =>
        set((state) => ({ bears: state.bears - by }), false, 'bears/Decrement Bears By'),

      resetBears: () => set(initialState, false, 'bears/Reset Bears'),
    }),
    { name: 'bear-storage' }
  )
);

export default useBearStore;
