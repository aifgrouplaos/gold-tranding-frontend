import { ILoginResponse } from '@/types/datetype'; 
  export function SetLocalstorage(props:ILoginResponse) {    
    localStorage.setItem("username", props.data.username);
    localStorage.setItem("firstname", props.data.firstName);
    localStorage.setItem("lastname", props.data.lastName);
    localStorage.setItem("token", props.data.token);
    localStorage.setItem("roleid", props.data.roleId.toString());
    localStorage.setItem("userid", props.data.id.toString()); 
}
