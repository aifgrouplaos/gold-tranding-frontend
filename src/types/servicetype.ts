import { IPackage } from "./packagetype";

export interface IService {
  id: number;
  name: string;
  code: string;
  domestic: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  servicePackages: IPackage[];
}

 