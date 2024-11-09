import { Button } from '@/components/ui/button';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant='outline'
			size='icon'
			className='rounded-full h-12 w-12 [&_svg]:size-5'
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			<IconSun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<IconMoon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
		</Button>
	);
}
