
import moment from "moment";
//  format lao date 
export const formatDate = (dateTime: any) => {
    moment.locale("lo");
    let resp = moment(dateTime).format("DD MMMM YYYY");
    if (dateTime) return resp;
    else return ""
};
// format slashdate (/)
export const formateDateSlash = (slashData: any) => {
    let resp = moment(slashData).format("DD/MM/YYYY");
    return resp;
  };
  
// format slashdate  (/) with time
export const formateDateSlashAndTime = (slashData: any) => {
    let resp = moment(slashData).format("DD/MM/YYYY HH:mm");
    return resp;
  };
  
  // format dashDate (-)
  export const formatDateDash = (dashDate: any) => {
    let resp = moment(dashDate).format("YYYY-MM-DD");
    return resp;
  };
  
  // format dashDate (-) with time
  export const formatDateDashAndTime = (dashDate: any) => {
    let resp = moment(dashDate).format("YYYY-MM-DD HH:mm");
    return resp;
  };