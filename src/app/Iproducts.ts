export interface Iproducts {
    id: number;
    img: string;
    category: string;
    name: string;
    price: number;
    description?: string;
    quantity: number;
    calories: number;
    weight: string;
    size: string;
    preparationTime: string;
    accessibility: boolean;
    hot: boolean;
}