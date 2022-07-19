export interface Object {
  [key: string]: any;
}
export interface Cart {
  id: string;
  quantity: number;
}
export interface category {
  id: number;
  name: string;
  image: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Object;
  images: Array<string>;
}

export const product: Product = {
  id: 1234125242,
  title: "loading",
  price: 0,
  description: "",
  category: {},
  images: [""],
};
