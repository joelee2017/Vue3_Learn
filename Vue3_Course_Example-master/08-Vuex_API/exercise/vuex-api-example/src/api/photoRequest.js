import axios from "axios";

const photoRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/",
});

// export const getPhotoRequest = () => photoRequest.get("/photo/list");
export const getPhotoRequest = () => photoRequest.get("/photo/list");

// Add a request interceptor
photoRequest.interceptors.request.use( (config)=> {
    // Do something before request is sent
    if(true) throw{response:{data:"資料不得為空"}}
    console.log('interceptors request=> ',config);
    return config;
  },  (error)=>{
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
photoRequest.interceptors.response.use( (response)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('interceptors response=> ',response);
    return response;
  },  (error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });