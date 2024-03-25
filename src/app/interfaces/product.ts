export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    imageUrl: string;
    isNewArival?: boolean;
    isPopular?:boolean;
}