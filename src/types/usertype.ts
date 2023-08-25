import { IRole } from "./roletype";

export interface IUser {
  id: number;
  staffId: string;
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  province: number;
  district: number;
  village: string;
  password: string;
  username: string;
  officeId: string;
  createdAt: string;
  updatedAt: string;
  roleId: string;
}
export interface IShowUser {
  id: number;
  staffId: string;
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  province: string;
  district: string;
  village: string;
  password: string;
  username: string;
  officeId: string;
  office: IOffice; 
  name: string; // office name
  createdAt: string;
  updatedAt: string;
  roleId: string;
  role: IRole;
}

 export interface IOffice {
  id: number;
  name: string;
  type: string;
  postcode: string;
  provinceId: number;
  districtId: number;
}
export interface IUserResponse {
  success: boolean;
  message: string;
  data?: any;
  error: Error;
}

interface Error {
  response: Response;
  status: number;
  options: Options;
  message: string;
  name: string;
}

interface Options {
}

interface Response {
  statusCode: number;
  message: string;
}