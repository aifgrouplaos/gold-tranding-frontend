import { ICountry } from "./countrytype";
import { IOffice } from "./usertype";

export interface IPostcode {
    id: number;
    postcode: string;
    name: string;
    contryId?: number;
    isDomestic: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: any;
    country?: ICountry;
    office?: IOffice;
  }