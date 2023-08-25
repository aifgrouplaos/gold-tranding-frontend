export function Logout() { 
  localStorage.removeItem("username");
  localStorage.removeItem("firstname");
  localStorage.removeItem("lastname");
  localStorage.removeItem("token");
  localStorage.removeItem("roleid");
  localStorage.removeItem("userid");  
  return location.href = "/";
}
