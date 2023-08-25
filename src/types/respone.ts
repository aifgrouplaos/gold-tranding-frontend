export interface IDatapagination {
  success: boolean;
  message: string;
  imagePath: string;
  data: IData;
  error?: any;
}

export interface IData {
  records: number;
  pages: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
  rows: [];
}

export interface IDataRespone {
  success: boolean;
  message: string;
  imagePath: string;
  data:any;
  error: any;
}
