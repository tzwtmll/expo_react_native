import axios from 'axios'
import { BASE_URL } from '@/constants/http'
import { StorageKeys } from "@/constants/index"
import storage from "@/utils/storage";
import {createLoading, destroyLoading} from "./globalLoading";
import { useToast } from 'native-base';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 60 * 1000
})

// 添加请求拦截器
instance.interceptors.request.use(async(config) =>  {
   createLoading()
    try {
        const ret = await storage.load({key: StorageKeys.CLIENT_TOKEN})
        config.headers.Authorization = `${ret.token_type} ${ret.access_token}`;
    } catch(err){
        // console.error(err)
    }

  
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    destroyLoading()
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    const toast = useToast();
    destroyLoading()
    if(response.data?.code === 200 || response.data?.code === 0){
      // 对响应数据做点什么
      return response.data;
    } else {
      toast.show({
        title: response.data?.msg,
      })

      return;
    }
    
  }, function (error) {
    destroyLoading()
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
    get: instance.get,
    post: instance.post
}