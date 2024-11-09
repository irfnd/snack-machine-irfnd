import { CartSlice, cartSlice } from '@/stores/cart-slice';
import { MachineSlice, machineSlice } from '@/stores/nachine-slice';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Slices = MachineSlice & CartSlice;

export const useStore = create<Slices>()(
	persist(
		(...a) => ({
			...machineSlice(...a),
			...cartSlice(...a),
		}),
		{
			name: 'snack-machine',
			partialize: (state) => ({ items: state.items }),
		}
	)
);
