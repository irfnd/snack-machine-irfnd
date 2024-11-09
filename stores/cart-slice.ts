import { Item } from '@/utils/types';
import { StateCreator } from 'zustand';

export interface CartSlice {
	buyItem: Item | null;
	money: number;
	inputMoney: number[];
	buyDialogOpen: boolean;
	buySuccess: boolean;

	setBuyDialog: (open: boolean) => void;
	setBuySuccess: (success: boolean) => void;
	selectItem: (item: Item) => void;
	updateMoney: (money: number) => void;
	processCart: () => void;
	resetCart: () => void;
}

export const cartSlice: StateCreator<CartSlice, [], [], CartSlice> = (set) => ({
	buyItem: null,
	money: 0,
	inputMoney: [],
	buyDialogOpen: false,
	buySuccess: false,

	setBuyDialog: (open) => set({ buyDialogOpen: open }),
	setBuySuccess: (success) => set({ buySuccess: success }),
	selectItem: (item) => set({ buyItem: item }),
	updateMoney: (money) => set({ money }),
	processCart: () => set(({ money, inputMoney }) => ({ money: 0, inputMoney: [...inputMoney, money] })),
	resetCart: () => set({ buyItem: null, money: 0, inputMoney: [], buyDialogOpen: false, buySuccess: false }),
});
