import ProductType from "./ProductType";

export default interface CartItemType {
	count: number;
	product: ProductType;
}

export const getCartItemsReduced = (
	products: ProductType[]
): CartItemType[] => {
	const cartItemsReduced: CartItemType[] = [];

	products.forEach((p) => {
		const count = cartItemsReduced.filter((c) => c.product === p).length;

		if (count === 0) {
			cartItemsReduced.push({ count: 1, product: p });
		} else {
			cartItemsReduced.forEach((c) => {
				if (c.product === p) {
					c.count++;
				}
			});
		}
	});

	return cartItemsReduced.sort((a, b) => a.product.id - b.product.id);
};
