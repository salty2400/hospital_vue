import { defineStore } from "pinia";
import { reqHospitalDetail, reqHospitalDeparment } from '@/api/hospital';
import type { HospitalDetail } from '@/api/hospital/type'
import type { DetailState } from './interface'
import type { HosPitalDetail, DeparmentResponseData, DeparmentArr } from '@/api/hospital/type';
const useDetailStore = defineStore('Detail', {
    state: (): DetailState => {
        return {
            hospitalInfo: ({} as HosPitalDetail),
            deparmentArr: []
        }
    },
    actions: {
        async getHospital(hoscode: string) {
            let result: HospitalDetail = await reqHospitalDetail(hoscode);
            if (result.code == 200) {
                this.hospitalInfo = result.data;
            }
        },
        
        async getDeparment(hoscode: string) {
            let result: DeparmentResponseData = await reqHospitalDeparment(hoscode);
            if (result.code == 200) {
                this.deparmentArr = result.data;
            }
        }
    },
    getters: {

    }
});

export default useDetailStore;