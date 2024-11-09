import { Items } from '@/utils/constants';
import { Item } from '@/utils/types';
import { StateCreator } from 'zustand';

export interface MachineSlice {
	items: Item[];
	selectedItem: Item | null;

	addItem: (item: Item) => void;
	updateItem: (id: string, item: Partial<Item>) => void;
	deleteItem: (id: string) => void;
}

export const machineSlice: StateCreator<MachineSlice, [], [], MachineSlice> = (set) => ({
	items: Items,
	selectedItem: null,
	addDialogOpen: false,
	updateDialogOpen: false,
	deleteDialogOpen: false,

	addItem: (item) => set((state) => ({ items: [...state.items, item] })),
	updateItem: (id, item) => set((state) => ({ items: state.items.map((i) => (i.id === id ? { ...i, ...item } : i)) })),
	deleteItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
});
