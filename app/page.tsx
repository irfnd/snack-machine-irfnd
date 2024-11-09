import { Header } from '@/components/child-components/header';
import { ItemList } from '@/components/child-components/item-list';

export default function HomePage() {
	return (
		<div className='flex justify-center max-h-dvh w-full py-12'>
			<div className='flex flex-col w-full max-w-lg gap-8'>
				<Header />
				<ItemList />
			</div>
		</div>
	);
}
