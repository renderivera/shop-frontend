import CategoryType from "./CategoryType";
import ImageType from "./ImageType";

export default interface ProductType {
	id: number;
	title: string;
	description: string;
	images: ImageType[];
	categories: CategoryType[];
	price: number;
	featured: boolean;
}
