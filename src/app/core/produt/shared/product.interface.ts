import { IPadrao } from 'src/app/shared/interface-padrao';

export interface IProduct extends IPadrao {
  _id?: string;
  code: string;
  productName: string;
  description: string;
  price: number;
  priceOff: number;
  isOnSale: boolean;
  typeProduct: string;
  isActive: boolean;
  brand: string;
  imgPath: string;
}
