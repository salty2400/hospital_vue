//引入二次封装的axios
import request from "@/utils/request";
import type { AddOrUpdateUser, AllOrderStateResponseData, AllUserResponseData, UserOrderInfoResponseData, UserParams, CertationTypeResponseData, UseringoResponseData, PayReslt, QrCode, SubmitOrder, OrderResponseData } from './type';

enum API {
    //订单号码接口
    SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
    //订单详情的数据
    GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
    //取消订单的接口
    ORDERCANCEL_URL = '/order/orderInfo/auth/cancelOrder/',
    //支付订单二维码接口
    QRCODE_URL = '/order/weixin/createNative/',
    //查询订单支付的结果
    PAYRESULT_URL = '/order/weixin/queryPayStatus/',
    //当前账号用户信息
    USERINFO_URL = '/user/auth/getUserInfo',
    //证件的类型的接口地址
    CERTIFICATIONTYPE_URL = '/cmn/dict/findByDictCode/',
    //用户认证的结构
    USERCERTATION_URL = '/user/auth/userAuah',
    //用户订单号的数据
    USERORDERINFO_URL = '/order/orderInfo/auth/',
    //全部就诊人的信息
    ALLUSER_URL = '/user/patient/auth/findAll',
    //订单的状态
    ORDERSTATE_URL = '/order/orderInfo/auth/getStatusList',
    //城市的数据
    CITY_URL = '/cmn/dict/findByParentId/',
    //新增就诊人接口
    ADDUSER_URL = '/user/patient/auth/save',
    //更新已有的就诊人接口
    UPDATEUSER_URL = '/user/patient/auth/update',
    //删除已有的就诊人
    DELETEUSER_URL='/user/patient/auth/remove/'
}

export const reqSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => request.post<any, SubmitOrder>(API.SUBMITORDER_URL + `${hoscode}/${scheduleId}/${patientId}`);

export const reqOrderInfo = (id: string) => request.get<any, OrderResponseData>(API.GETORDERINFO_URL + id);

export const reqCancelOrder = (id: string) => request.get<any, any>(API.ORDERCANCEL_URL + id);

export const reqQrcode = (orderId: string) => request.get<any, QrCode>(API.QRCODE_URL + orderId);

export const reqQueryPayState = (orderId: string) => request.get<any, PayReslt>(API.PAYRESULT_URL + orderId);

export const reqUserInfo = () => request.get<any, UseringoResponseData>(API.USERINFO_URL);

export const reqCertationType = (CertificatesType = 'CertificatesType') => request.get<any, CertationTypeResponseData>(API.CERTIFICATIONTYPE_URL + CertificatesType);

export const reqUserCertation = (data: UserParams) => request.post<any, any>(API.USERCERTATION_URL, data);

export const reqUserOrderInfo = (page: number, limit: number, patientId: string, orderStatus: string) => request.get<any, UserOrderInfoResponseData>(API.USERORDERINFO_URL + `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`)

export const reqAllUser = () => request.get<any, AllUserResponseData>(API.ALLUSER_URL);

export const reqOrderState = () => request.get<any, AllOrderStateResponseData>(API.ORDERSTATE_URL);

export const reqCity = (parentId: string) => request.get<any, any>(API.CITY_URL + parentId);

export const reqAddOrUpdateUser = (data: AddOrUpdateUser) => {
    if (data.id) {
        return request.put<any, any>(API.UPDATEUSER_URL, data);
    } else {
        return request.post<any, any>(API.ADDUSER_URL, data);
    }
}

//删除某一个就诊人的信息
export const reqRemoveUser = (id:number)=>request.delete<any,any>(API.DELETEUSER_URL+id)