//统一管理首页模块接口
import request from "@/utils/request";
import type { HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalInfo } from './type'

//首页模块的接口地址
enum API {
    //已有的医院的数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    //医院的等级与地区接口
    HOSPITALLEVElANDREGION_URL = '/cmn/dict/findByDictCode/',
    
    HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}
//医院的数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//医院的等级或者获取医院地区的数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVElANDREGION_URL + dictCode);

export const reqHospitalInfo = (hosname: string) => request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname);