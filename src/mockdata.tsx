import SlideType from "./types/SlideType";
import CategoryType from "./types/CategoryType";
import ProductType from "./types/ProductType";

export const announcement: string =
	"Super Deal! Free Shipping on orders above 30$";

export const slides: SlideType[] = [
	{
		id: 0,
		color: "#FFF6BD",
		title: "Yoga Love",
		description: "Buy now and save big time!",
		image: "https://drive.google.com/uc?id=11Jj5Iz0y_nbuBMeqXYXBH6qO6aA7Gp19",
	},
	{
		id: 1,
		color: "#FFD4B2",
		title: "Yoga Passion",
		description: "Buy now and save big time!",
		image: "https://drive.google.com/uc?id=1xWzq9bHfuL-yuoW-fb1FXG3qiOTe3il5",
	},
	{
		id: 2,
		color: "#CEEDC7",
		title: "Yoga Fitness",
		description: "Buy now and save big time!",
		image: "https://drive.google.com/uc?id=1Mlb6HYBOhaMJcrIeiMXBwvCnussgSL-o",
	},
];

export const categories: CategoryType[] = [
	{
		id: 0,
		title: "Shirts",
		description: "Yoga Shirts",
		image: "https://drive.google.com/uc?id=1W9a9CSXXZe4RhmehngrsXYDSqsskjf1f",
	},
	{
		id: 1,
		title: "Pants",
		description: "Yoga Pants",
		image: "https://drive.google.com/uc?id=1OlFsx3ROuMNykVJcDTbzSNUlnK5Qj_H_",
	},
	{
		id: 2,
		title: "Equipment",
		description: "Yoga Equipment",
		image: "https://drive.google.com/uc?id=1PnBQ2NASREYFe5Y2kKHNzeUnnFMWlAje",
	},
	{
		id: 3,
		title: "Trending",
		description: "These Products are going fast",
		image:
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222256_300x300.jpg?v=1663170643",
	},
];

export const products: ProductType[] = [
	{
		id: 0,
		title: "Yogamatters Racerback Tank Top - Black",
		description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222243-1_300x300.jpg?v=1663169147",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20223726_300x300.jpg?v=1663170643",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20222256_300x300.jpg?v=1663170643",
		],
		categories: [0, 3],
		price: 29.99,
	},
	{
		id: 1,
		title: "Gossypium Freedom Yoga Vest - Orange",
		description: `Introducing our new, practical racerback tank top that provides support through any practice. Made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering under loose and low-cut tops or wearing as it is, our racerback has a high crew neckline that keeps you covered where you want to be, whatever the asana.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Gossypium-SS-2021-Day-30947_e2189b5a-c2a5-4647-98d4-7511070ddbbb_300x300.jpg?v=1652266097",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day309151_a5d5821b-5c46-45d3-8a82-338434d4e274_300x300.jpg?v=1652266097",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Gossypium-SS-2021-Day-30949-1_8b5f73d6-72e9-413a-9fee-bd2ccb43c0ad_300x300.jpg?v=1652266097",
		],
		categories: [0],
		price: 29.99,
	},
	{
		id: 2,
		title: "Yogamatters Crop Top - Lilac",
		description: `Introducing our bestselling, essential cropped yoga top, now dyed with natural dyes and made from a sumptuously soft blend of organically grown cotton and Tencel™ Modal, it’s the perfect combination of function and comfort. Great for layering over a sports bra or wearing as it is, our crop has a scooped neckline that keeps you covered where you want to be, whatever the asana.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221811_300x300.jpg?v=1674144256",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221818_300x300.jpg?v=1674144256",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Yogamatters-Natural-Dyes-August-20221824_300x300.jpg?v=1674144256",
		],
		categories: [0],
		price: 29.99,
	},
	{
		id: 3,
		title: "Yogamatters Eco Blend Second-Skin Leggings - Black",
		description: `Featuring a round neckline and racerback design, our Eco Blend Recycled Bra will support you whether your practicing yoga or in your HIIT class. Wear on its own or as an under layer paired with our Eco Blend vest.

Made in England from ECONYL®, a soft and supportive nylon made from recycled materials`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20235115_300x300.jpg?v=1676451686",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20236205_300x300.jpg?v=1676451686",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/RebeccaforYogamattersJanuary20235135_300x300.jpg?v=1676451686",
		],
		categories: [1, 3],
		price: 29.99,
	},
	{
		id: 4,
		title: "Girlfriend Collective Luxe Legging - Bordeaux",
		description: `Girlfriend Collective's most luxurious legging yet. These medium compression heavyweight leggings are complete with a high rise, subtle matte sheen, and ultra-soft stretch to make them the best combo of your favorite dressy pant and the ultimate lazy day legging.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/1027_LUXE_Scoop_Tank_Bordeaux_Front_300x300.jpg?v=1661516027",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/4015_LUXE_Legging_Long_Bordeaux_Back2_300x300.jpg?v=1661516027",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/4015_LUXE_Legging_Long_Bordeaux_Back_540x.jpg?v=1661516008",
		],
		categories: [1],
		price: 29.99,
	},
	{
		id: 5,
		title: "Gossypium Aspire Harem Pants",
		description: `Our Aspire harem pants are designed with a deep and comfy fold over waistband to keep you warm and unrestricted around the vital central organs, allowing you to move with confidence or slouch in style!`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31549_7c864ed6-3a37-40ce-8682-39bd4a18abdb_300x300.jpg?v=1678204945",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31586_3786ccf4-d65c-4ec4-8c44-6b213f852191_300x300.jpg?v=1678204945",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/GossypiumSS2021Day31570_21fb9374-0e4d-4db1-a159-5a5cf4ae7adf_300x300.jpg?v=1678204945",
		],
		categories: [1],
		price: 29.99,
	},
	{
		id: 6,
		title: "Yogamatters Hemp Buckwheat Bolster - Natural",
		description: `Filled with organic buckwheat hulls and made from hemp, one of the most sustainable raw materials on the planet, our favourite yoga prop - our core buckwheat bolster has been given a simple and earthy twist.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/wKgQugIQ_300x300.jpg?v=1674641554",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/Hemp-Bolster_01_af19631d-6311-4d88-8e62-cbcb010ce9bb_300x300.jpg?v=1674562241",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/zizak3U0_fb491ff4-9071-469a-a1cc-337018831c7b_300x300.jpg?v=1674564550",
		],
		categories: [2, 3],
		price: 29.99,
	},
	{
		id: 7,
		title: "Yogamatters Cork Block",
		description: `Made from cork, a renewable and recyclable resource, the Yogamatters Cork Block is ideal for adding lift, stabilising or grounding into your yoga pose.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0834_1_300x300.jpg?v=1667315633",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/cork-block-web_300x300.jpg?v=1667315633",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0880_1_300x300.jpg?v=1667315633",
		],
		categories: [2],
		price: 29.99,
	},
	{
		id: 8,
		title: "Yogamatters Organic Cotton D-ring Yoga Belt",
		description: `The Yogamatters Organic Cotton D-ring Yoga Belt boasts a strong rib weave structure. With a range of sophisticated hues to choose from and featuring the attractive Yogamatters lotus embroidery detail, this natural cotton belt allows you to stretch out in style and comfort.`,
		images: [
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0295_300x300.jpg?v=1677511767",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/organic-eucalyptus-belt_300x300.jpg?v=1677511767",
			"https://cdn.shopify.com/s/files/1/0278/7259/1939/products/photo0051_2_300x300.jpg?v=1677511767",
		],
		categories: [2],
		price: 29.99,
	},
];
