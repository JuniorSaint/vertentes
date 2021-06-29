import { IPadrao } from 'src/app/shared/interface-padrao';

export interface IPurchaseOrder extends IPadrao {
  _id?: string;
  typePay: string;
  _idClient: string;
}
