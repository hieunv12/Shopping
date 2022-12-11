import {api, API_URL} from "@api";

export const getBanner =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        const res:any=await api.get(API_URL.banner)
        return onSuccess(res?res:[])
    }catch (e) {
        return onError(e)
    }
}
