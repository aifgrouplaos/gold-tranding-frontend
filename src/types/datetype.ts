export interface IFormlogin {
  username: string;
  password: string;
}

export interface IErrorrespone {
  statusCode: number;
  message: string;
  error: string;
}

export interface IError {
  response: IErrorrespone;
  status: number;
  options: {};
  message: string;
  name: string;
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  imagePath: string;
  data: IUser;
  error?: IError;
}

export interface IUser {
  id: number;
  roleId: number;
  username: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  token: string;
} 