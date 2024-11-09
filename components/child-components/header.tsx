'use client';

import { TitlePage } from '@/components/child-components/title-page';
import { ToggleTheme } from '@/components/child-components/toggle-theme';

export function Header() {
	return (
		<div className='flex justify-between items-center px-6'>
			<TitlePage />
			<ToggleTheme />
		</div>
	);
}
