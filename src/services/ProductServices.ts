import {api, API_URL} from "@api";

export const getProduct =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        const res:any=await api.get(API_URL.product,undefined,payload)
        return onSuccess(res?.data?.length>0?res?.data:[])
    }catch (e) {
        return onError(e)
    }
}
export const getProductDetail =async (id:string,payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        const res:any=await api.get(API_URL.productDetail+id,undefined,payload)
        return onSuccess(res)
    }catch (e) {
        return onError(e)
    }
}
