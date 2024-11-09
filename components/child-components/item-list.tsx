'use client';

import { BuyDialog } from '@/components/child-components/buy-dialog';
import { ItemCard } from '@/components/child-components/item-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useStore } from '@/stores/store';

export function ItemList() {
	const { items } = useStore();

	return (
		<>
			{/* Items */}
			<ScrollArea className='flex-1 w-full rounded-lg px-6'>
				<div className='grid grid-cols-1 gap-6'>
					{items.map((item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</ScrollArea>

			{/* Dialogs */}
			<BuyDialog />
		</>
	);
}
