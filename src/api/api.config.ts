//if you using .env pls change domain in below line.

export const ApiConfigs = {
  baseURL: 'https://api-clothing-production.up.railway.app',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 30000,
  },
  timeout: 30000,
};

export const API_URL = {
  //category
  category:'/category',
  product:"/product/all-paging",
  productDetail:"/product/",
};
