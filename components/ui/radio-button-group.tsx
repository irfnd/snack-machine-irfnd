'use client';

import { cn } from '@/utils/cn';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';

const RadioButtonGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return <RadioGroupPrimitive.Root className={cn('flex gap-2', className)} {...props} ref={ref} />;
});
RadioButtonGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioButtonGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				'flex w-fit rounded-xl text-foreground border ring-offset-background focus:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			{children}
		</RadioGroupPrimitive.Item>
	);
});
RadioButtonGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioButtonGroup, RadioButtonGroupItem };
