
const DataCart=[
    {
        "name": "ÁO Nỉ Da Cá Text Printed Note 1610",
        "price": 335750,
        quantity:2,
        "imageUrl": [
            "https://hanoicomputercdn.com/media/product/61621_laptop_acer_gaming_aspire_7_a715_42g_18.jpg",
            "https://product.hstatic.net/200000201725/product/45_c9590149e2a947b1be9200c3989e9563_master.jpg",
            "https://product.hstatic.net/200000201725/product/_k9a7459_ece8b6674f624cb592f1f9c098f61a8d_master.jpg",
            "https://product.hstatic.net/200000201725/product/z3881807868950_dffc67491a682a513aea9c17d563835e_ff6835fb502c449991eb576549a78c07_master.jpg"
        ],
        "size": [
            {
                "count": 34,
                "propertyName": "M",
                "value": "M"
            },
            {
                "count": 36,
                "propertyName": "L",
                "value": "L"
            },
            {
                "count": 37,
                "propertyName": "XXL",
                "value": "XXL"
            },
        ],
        "colors": [
            {
                "id": 1,
                "value": "Đen"
            },
            {
                "id": 2,
                "value": "Vàng"
            },
        ],
        "original_price":395000,
    },
    {
        "name": "ÁO Nỉ Da Cá Text Printed Note 1610",
        "price": 335750,
        "imageUrl": [
            "https://hanoicomputercdn.com/media/product/61621_laptop_acer_gaming_aspire_7_a715_42g_18.jpg",
            "https://product.hstatic.net/200000201725/product/45_c9590149e2a947b1be9200c3989e9563_master.jpg",
            "https://product.hstatic.net/200000201725/product/_k9a7459_ece8b6674f624cb592f1f9c098f61a8d_master.jpg",
            "https://product.hstatic.net/200000201725/product/z3881807868950_dffc67491a682a513aea9c17d563835e_ff6835fb502c449991eb576549a78c07_master.jpg"
        ],
        "size": [
            {
                "count": 34,
                "propertyName": "M",
                "value": "M"
            },
            {
                "count": 36,
                "propertyName": "L",
                "value": "L"
            },
            {
                "count": 37,
                "propertyName": "XXL",
                "value": "XXL"
            },
        ],
        "colors": [
            {
                "id": 1,
                "value": "Đen"
            },
            {
                "id": 2,
                "value": "Vàng"
            },
        ],
        quantity:1,
        "original_price":395000,
    },
    {
        "name": "ÁO Nỉ Da Cá Text Printed Note 1610",
        "price": 335750,
        quantity:2,
        "imageUrl": [
            "https://hanoicomputercdn.com/media/product/61621_laptop_acer_gaming_aspire_7_a715_42g_18.jpg",
            "https://product.hstatic.net/200000201725/product/45_c9590149e2a947b1be9200c3989e9563_master.jpg",
            "https://product.hstatic.net/200000201725/product/_k9a7459_ece8b6674f624cb592f1f9c098f61a8d_master.jpg",
            "https://product.hstatic.net/200000201725/product/z3881807868950_dffc67491a682a513aea9c17d563835e_ff6835fb502c449991eb576549a78c07_master.jpg"
        ],
        "size": [
            {
                "count": 34,
                "propertyName": "M",
                "value": "M"
            },
            {
                "count": 36,
                "propertyName": "L",
                "value": "L"
            },
            {
                "count": 37,
                "propertyName": "XXL",
                "value": "XXL"
            },
        ],
        "colors": [
            {
                "id": 1,
                "value": "Đen"
            },
            {
                "id": 2,
                "value": "Vàng"
            },
        ],
        "original_price":395000,
    },
    {
        "name": "ÁO Nỉ Da Cá Text Printed Note 1610",
        "price": 335750,
        "imageUrl": [
            "https://hanoicomputercdn.com/media/product/61621_laptop_acer_gaming_aspire_7_a715_42g_18.jpg",
            "https://product.hstatic.net/200000201725/product/45_c9590149e2a947b1be9200c3989e9563_master.jpg",
            "https://product.hstatic.net/200000201725/product/_k9a7459_ece8b6674f624cb592f1f9c098f61a8d_master.jpg",
            "https://product.hstatic.net/200000201725/product/z3881807868950_dffc67491a682a513aea9c17d563835e_ff6835fb502c449991eb576549a78c07_master.jpg"
        ],
        "size": [
            {
                "count": 34,
                "propertyName": "M",
                "value": "M"
            },
            {
                "count": 36,
                "propertyName": "L",
                "value": "L"
            },
            {
                "count": 37,
                "propertyName": "XXL",
                "value": "XXL"
            },
        ],
        "colors": [
            {
                "id": 1,
                "value": "Đen"
            },
            {
                "id": 2,
                "value": "Vàng"
            },
        ],
        quantity:1,
        "original_price":395000,
    }
]
export const getCart =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        // const res:any=await api.get(API_URL.category)
        // return onSuccess(res)
        return onSuccess(DataCart)
    }catch (e) {
        return onError(e)
    }
}
export const addCart =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        // const res:any=await api.get(API_URL.category)
        // return onSuccess(res)
        return onSuccess()
    }catch (e) {
        return onError(e)
    }
}
export const deleteCart =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        // const res:any=await api.get(API_URL.category)
        // return onSuccess(res)
        return onSuccess()
    }catch (e) {
        return onError(e)
    }
}
export const updateCart =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        // const res:any=await api.get(API_URL.category)
        // return onSuccess(res)
        return onSuccess()
    }catch (e) {
        return onError(e)
    }
}
