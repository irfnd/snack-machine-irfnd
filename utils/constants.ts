import { Item } from '@/utils/types';

export const AcceptableMoney = [2000, 5000, 10000, 20000, 50000] as const;

export const Items: Item[] = [
	{
		id: '1',
		name: 'Biscuits',
		desc: 'A pack of delicious and crunchy biscuit.',
		image: '/img/biscuit.png',
		price: 6000,
		stock: 10,
	},
	{
		id: '2',
		name: 'Chips',
		desc: 'A pack of tasty and crispy chips.',
		image: '/img/chips.png',
		price: 8000,
		stock: 10,
	},
	{
		id: '3',
		name: 'Oreo',
		desc: 'A pack of creamy and crunchy oreo.',
		image: '/img/oreo.png',
		price: 10000,
		stock: 10,
	},
	{
		id: '4',
		name: 'Tango',
		desc: 'A pack of delicious and crunchy wafer.',
		image: '/img/tango.png',
		price: 12000,
		stock: 10,
	},
	{
		id: '5',
		name: 'Chocolate',
		desc: 'A pack of sweet and creamy chocolate.',
		image: '/img/chocolate.png',
		price: 15000,
		stock: 10,
	},
];
