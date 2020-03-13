import { Color } from './color';

export interface Product {
    id: number;
    productName: string;
    productCode: string;
    price: number;
    description?: string;
    imageUrl?: string;
    color?: Color[];
}
