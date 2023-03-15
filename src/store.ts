import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BearState {
  bears: number;
  increase: () => void;
}

const useBearStore = create<BearState>()(
  devtools(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 }), false, 'bears/Increase'),
    }),
    {
      name: 'bear-storage',
    }
  )
);

export default useBearStore;
