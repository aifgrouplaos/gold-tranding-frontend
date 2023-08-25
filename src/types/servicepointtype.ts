export interface IServicepoint {
  name: string, // Required
  type: string, // Required
  postcode: number | '', 
  isDomestic: boolean, // Required
  provinceId: number | null ,
  districtId: number | null,
}
export interface IGetServicepoint {
  name: string, // Required
  type: string, // Required
  postcode: number | '', 
  isDomestic: boolean, // Required
  provinceId: number ,
  districtId: number ,
  createdAt: string,
  id: number,
}




