"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL; // server
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["X-CSRF-TOKEN"] = "CSRF token mismatch.";

const useApi = () => {
  const router = useRouter();
  const fetch = async (props: {
    url: string;
    params?: {};
    method: "post" | "get" | "put" | "patch" | "delete";
  }) => {
    try {
      if (props.method === "post") {
        const response = await axios.post(props.url, props.params, {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      } else if (props.method === "get") {
        const response = await axios.get(props.url, {
          params: props.params,
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      } else if (props.method === "put") {
        const response = await axios.put(props.url, props.params, {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      } else if (props.method === "patch") {
        const response = await axios.patch(props.url, props.params, {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      } else if (props.method === "delete") {
        const response = await axios.delete(props.url, {
          params: props.params,
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      } else {
        const response = await axios.get(props.url, {
          params: props.params,
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return response;
        }
      }
    } catch (error: any) { 
      console.log(error.response);
      if (error.response.status === 401) {
        // ບໍ່ມີສິດທິການກວດສອບ token ຂອງຜູ້ໃຊ້
        router.push("/");
        return toast.error("ກະລຸນາເຂົ້າສູ່ລະບົບ");
      } else if (error.response.status === 400) {
        // ສົ່ງຄ່າໄປຍັງ server ບໍ່ຖືກຕ້ອງ
        return toast.error(error.message);
      } else if (error.response.status === 404) {
        // ສົ່ງຄ່າໄປຍັງ server ບໍ່ພົບຂໍ້ມູນ ຫຼື ກວດສອບ Validation
        return toast.error(error.message);
      }  else {
        console.log(error.response);
      }  
    }
  };
  return fetch;
};
export default useApi;
