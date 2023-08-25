import { IService } from "./servicetype";
import { IZone } from "./zonetype";

export interface IPackage {
  id: number;
  price: number;
  startWeight: number;
  endWeight: number;
  width: number;
  height: number;
  description: string;
  isUnWeigh: boolean;
  isUnsize: boolean;
  isDomestic: boolean;
  zoneId: number;
  serviceId: number;
  createdAt: string;
  updatedAt: string;
  service:IService;
  zone:IZone
}