import { Badge } from '@/components/ui/badge';
import { useStore } from '@/stores/store';
import { formatIDR } from '@/utils/format-currency';
import { Item } from '@/utils/types';
import Image from 'next/image';

export function ItemCard({ item }: { item: Item }) {
	const { selectItem, setBuyDialog } = useStore();

	const onSelect = () => {
		selectItem(item);
		setBuyDialog(true);
	};

	return (
		<div
			className='relative flex bg-card text-card-foreground p-4 gap-5 shadow rounded-xl border hover:border-primary cursor-pointer'
			onClick={onSelect}
		>
			<Badge variant='outline' className='absolute right-4 top-4'>
				{item.stock}x
			</Badge>

			<div className='flex justify-center items-center w-200 drop-shadow-md'>
				<Image src={item.image} width={100} height={100} alt={item.name} priority />
			</div>

			<div className='flex flex-col w-full gap-2'>
				<div className='flex flex-col'>
					<h1 className='text-xl font-bold'>{item.name}</h1>
					<p className='text-sm'>{item.desc}</p>
				</div>
				<h1 className='text-lg font-bold'>{formatIDR(item.price)}</h1>
			</div>
		</div>
	);
}
