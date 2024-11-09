import { cn } from '@/utils/cn';
import * as React from 'react';

interface Props {
	icon: React.ReactElement;
	title: string;
	desc: string;
	isError?: boolean;
}

export function BuyAlert({ icon, title, desc, isError }: Props) {
	return (
		<div className='flex items-start w-full bg-card border shadow rounded-lg gap-4 p-4 mt-4'>
			{React.cloneElement(icon, { className: cn('w-10 h-auto mt-1', isError ? 'text-destructive' : 'text-green-500') })}
			<div className='flex flex-col flex-1'>
				<p className='text-lg font-bold'>{title}</p>
				<p className='text-sm'>{desc}</p>
			</div>
		</div>
	);
}
