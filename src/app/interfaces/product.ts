export interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    imageUrl: string;
    imageAlt1:string;
    imageAlt2:string;
    imageAlt3:string;
    uuid:string;
    orders?:{};
    sizes?:'';
    colors?:string;
    isPopular?:boolean;
}