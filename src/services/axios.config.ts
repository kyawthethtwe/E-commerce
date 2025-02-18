import axios from "axios";
export const BASE_URL = "https://fakestoreapi.com";
// import Cookies from "js-cookie";

// set token to axios header
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Content-Encoding": "gzip",
  },
});

// axiosInstance.interceptors.request.use((req) => {
//   if (req.url !== "/login") {
//     const gettoken = Cookies.get("token");
//     req.headers.Authorization = `Bearer ${gettoken}`;
//   }
//   return req;
// });

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (error) => {
//     if (error.response?.data.messageCode === "1500") {
//       localStorage.clear();
//       Cookies.remove("user");
//       Cookies.remove("token");
//       window.location.href = "/login";
//     }
//     if (error.response?.data.messageCode === "1501") {
//       const user = Cookies.get("user")
//         ? JSON.parse(Cookies.get("user") ?? "")
//         : "";
//       const res = await axiosInstance.post(`/auth/front/refresh-token`, {
//         accessToken: user.token,
//         refreshToken: user.refreshToken,
//       });

//       if (res.data.messageCode === "1502" || res.data.messageCode === "1503") {
//         const config = error.config;
//         return axiosInstance.request(config);
//       }

//       const newuser = {
//         ...user,
//         token: res.data.data.resultData[0].token,
//         refreshToken: res.data.data.resultData[0].refreshToken,
//       };
//       Cookies.set("user", JSON.stringify(newuser));

//       Cookies.set("token", res.data.data.resultData[0].token);
//       const config = error.config;
//       return axiosInstance.request(config);
//     }
//     if (error.response?.data.messageCode === "1502") {
//       const config = error.config;
//       return axiosInstance.request(config);
//     }
//     if (error.response?.data.messageCode === "1503") {
//       const config = error.config;
//       return axiosInstance.request(config);
//     }
//     throw error.response;
//   }
// );

export default axiosInstance;
