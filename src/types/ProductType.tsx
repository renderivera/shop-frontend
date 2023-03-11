export default interface ProductType {
	id: number;
	title: string;
	description: string;
	images: string[];
	categories: number[];
	price: number;
	priceSale?: number;
	trending?: boolean;
}
