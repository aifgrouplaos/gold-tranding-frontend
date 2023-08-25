import { provinces } from './../enums/provinces';
export interface ICity {
    id: number,
    provinceId: number,
    name: string,
    createdAt: string,
    updatedAt: string
}
export interface IGetCity {
    id: number,
    provinceId: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    province: {
        name: string;
      };
}