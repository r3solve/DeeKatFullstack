export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    imageUrl: string;
    imageAltList?: Array<String>;
    isPopular?:boolean;
    uuid?:string;
    orders?:any;
}