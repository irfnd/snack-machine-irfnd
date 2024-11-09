'use client';

import { BuyAlert } from '@/components/child-components/buy-alert';
import { InputMoney } from '@/components/child-components/input-money';
import { ItemBuyCard } from '@/components/child-components/item-buy-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useStore } from '@/stores/store';
import { formatIDR } from '@/utils/format-currency';
import { IconAlertCircle, IconCircleCheck, IconLoader2 } from '@tabler/icons-react';
import * as React from 'react';

export function BuyDialog() {
	const { buyItem, money, inputMoney, buyDialogOpen, buySuccess, ...handlers } = useStore();
	const { updateMoney, processCart, updateItem, setBuySuccess, resetCart } = handlers;
	const [purchaseLoading, setPurchaseLoading] = React.useState<boolean>(false);
	const [purchaseError, setPurchaseError] = React.useState<string | null>(null);

	const totalMoney = React.useMemo(() => inputMoney.reduce((acc, curr) => acc + curr, 0), [inputMoney]);
	const remaining = React.useMemo(() => (buyItem?.price ? buyItem.price - totalMoney : 0), [buyItem, totalMoney]);
	const change = React.useMemo(() => (buyItem?.price ? totalMoney - buyItem.price : 0), [buyItem, totalMoney]);
	const addMoreMoney = React.useMemo(() => remaining > 0 && inputMoney.length > 0, [remaining, inputMoney]);

	const onPurchase = () => {
		setBuySuccess(false);
		setPurchaseError(null);
		setPurchaseLoading(true);
		setTimeout(() => {
			if (money === 0) setPurchaseError('Please select money to input!');
			else if (buyItem!.stock === 0) setPurchaseError('Item is out of stock, please select another item!');
			else {
				processCart();
				if (totalMoney + money >= buyItem!.price) {
					setBuySuccess(true);
					updateItem(buyItem!.id, { stock: buyItem!.stock - 1 });
				}
			}
			setPurchaseLoading(false);
		}, 1500);
	};

	return (
		<Dialog open={buyDialogOpen} onOpenChange={resetCart}>
			<DialogContent aria-describedby={undefined}>
				<DialogHeader>
					<DialogTitle className='text-xl font-bold'>Purchase Item</DialogTitle>
				</DialogHeader>

				<div className='relative flex flex-col gap-4'>
					{purchaseLoading && (
						<div className='absolute flex justify-center items-center bg-background/75 z-10 w-full h-full'>
							<div className='flex flex-col items-center gap-2'>
								<IconLoader2 className='animate-spin w-14 h-auto' />
								<p>Loading</p>
							</div>
						</div>
					)}

					<ItemBuyCard item={buyItem} />

					<div className='flex flex-col gap-2'>
						<h1 className='text-lg font-bold'>Select Money</h1>
						<InputMoney onValueChange={(value) => updateMoney(Number(value))} disabled={buySuccess} />
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='text-lg font-bold'>Purchase Detail</h1>
						{buyItem && (
							<>
								<div className='flex justify-between items-center gap-4 w-full'>
									<p>{buyItem.name} price</p>
									<Separator className='flex-1' />
									<h1 className='text-lg font-bold'>{formatIDR(buyItem.price)}</h1>
								</div>
								{totalMoney > 0 && (
									<div className='flex justify-between items-center gap-4 w-full'>
										<p>Your money</p>
										<Separator className='flex-1' />
										<h1 className='text-lg font-bold'>{formatIDR(totalMoney)}</h1>
									</div>
								)}
							</>
						)}

						{addMoreMoney && (
							<div className='flex justify-between items-center gap-4 w-full'>
								<p>Remaining</p>
								<Separator className='flex-1' />
								<h1 className='text-lg font-bold text-red-500'>{formatIDR(remaining)}</h1>
							</div>
						)}
						{buySuccess && (
							<div className='flex justify-between items-center gap-4 w-full'>
								<p>Change</p>
								<Separator className='flex-1' />
								<h1 className='text-lg font-bold text-green-500'>{formatIDR(change)}</h1>
							</div>
						)}

						{purchaseError && <BuyAlert title='Purchase Failed!' desc={purchaseError} icon={<IconAlertCircle />} isError />}
						{addMoreMoney && !purchaseError && (
							<BuyAlert
								title='Input More Money!'
								desc='You need to input more money to complete the purchase. Please add the remaining amount to proceed.'
								icon={<IconAlertCircle />}
								isError
							/>
						)}
						{buySuccess && (
							<BuyAlert
								title='Purchase Success!'
								desc="You have successfully purchased the snack. Enjoy your treat and don't forget to take your change!"
								icon={<IconCircleCheck />}
							/>
						)}
					</div>
				</div>

				<DialogFooter className='mt-4 gap-1'>
					{!buySuccess && (
						<Button onClick={onPurchase} disabled={purchaseLoading}>
							Purchase
						</Button>
					)}
					<Button onClick={resetCart} variant='outline' disabled={purchaseLoading}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
