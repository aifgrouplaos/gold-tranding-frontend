export const useFetch = async (props: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body: any;
}) => {
  const body = {}; 
  const header = {
    "Content-Type": "application/json", 
    "X-CSRF-TOKEN": "CSRF token mismatch.",
    "Authorization": `Bearer ` + localStorage.getItem("token"),
    "params": props.body,
  };

  return await fetch(process.env.baseUrl+props.url, {
    headers: header,
    method: props.method, 
    body: JSON.stringify(body),
  });
};
