import { RadioButtonGroup, RadioButtonGroupItem } from '@/components/ui/radio-button-group';
import { useStore } from '@/stores/store';
import { AcceptableMoney } from '@/utils/constants';
import { formatIDR } from '@/utils/format-currency';

interface Props {
	onValueChange: (value: string) => void;
	disabled?: boolean;
}

export function InputMoney({ onValueChange, disabled }: Props) {
	const { money } = useStore();

	return (
		<RadioButtonGroup
			className='grid grid-cols-1 gap-4 min-[350px]:grid-cols-2 sm:grid-cols-3'
			value={money === 0 ? '' : String(money)}
			onValueChange={onValueChange}
		>
			{AcceptableMoney.map((money, i) => (
				<RadioButtonGroupItem
					key={`input-${money}-${i}`}
					className='flex w-full p-4 bg-card shadow rounded-lg data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
					value={String(money)}
					id={String(money)}
					disabled={disabled}
				>
					<h1>{formatIDR(money)}</h1>
				</RadioButtonGroupItem>
			))}
		</RadioButtonGroup>
	);
}
