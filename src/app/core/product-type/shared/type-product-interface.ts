import { IPadrao } from 'src/app/shared/interface-padrao';

export interface IProductType extends IPadrao {
  _id?: string;
  productType: String;
}
