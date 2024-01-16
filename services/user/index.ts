import request from "@/utils/request";
import { ACCOUNT_LOGIN,SEND_SMS_CODE,ACCOUNT_LOGOUT,USER_DETAIL } from "@/constants/http"


/** 发送短信验证码 */
export async function getSmsCodeApi(phone:string) {
    return request.get(`${SEND_SMS_CODE}`,{
        params: {phone},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    
    });
}


/** 登录 */
export async function loginApi(data:{
    code: string
    phone: string
}) {
    return request.post(ACCOUNT_LOGIN, data,{});
}

/** 退出登录 */
export async function logoutApi() {
    return request.get(ACCOUNT_LOGOUT,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

/**  用户信息 */
export async function getUserDetailApi() {
    return request.get(USER_DETAIL,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}