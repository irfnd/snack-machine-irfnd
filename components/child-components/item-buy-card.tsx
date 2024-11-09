import { formatIDR } from '@/utils/format-currency';
import { Item } from '@/utils/types';
import Image from 'next/image';

export function ItemBuyCard({ item }: { item?: Item | null }) {
	return item ? (
		<div className='flex  bg-card text-card-foreground p-4 gap-5 shadow rounded-xl border'>
			<div className='flex justify-center items-center w-[80] drop-shadow-md'>
				<Image src={item.image} width={80} height={80} alt={item.name} priority />
			</div>
			<div className='flex flex-col w-full gap-2'>
				<div className='flex flex-col'>
					<h1 className='text-lg font-bold sm:text-xl'>{item.name}</h1>
					<p className='text-sm'>{item.desc}</p>
				</div>
				<div className='flex justify-between items-center w-full'>
					<h1 className='text-lg font-bold sm:text-xl'>{formatIDR(item.price)}</h1>
				</div>
			</div>
		</div>
	) : null;
}
