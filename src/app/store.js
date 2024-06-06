import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from "../features/api/apiSlice"
import {usersApi} from "../features/users/userApi"
import orderProductSlice from '../features/orderProduct/orderProductSlice'
import cartHandler from '../features/cartHandler/cartHandler'
import productSlice from "../features/product/productSlice"
import categorySlice from '../features/category/categorySlice'
import cardOrderSlice from '../features/CardOrder/cardOrderSlice'
import cartSlice from "../features/cartSlice/cartSlice"
import popUpSlice from "../features/quickView/quickViewSlice"
import sizeModal from "../features/sizeModalSlice/sizeModalSlice"
import  totalCount  from '../features/review/reviewSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cardOrder: cardOrderSlice,
    usersApi,
    order:orderProductSlice,
    cartHandler,
    productSlice,
    categorySlice,
    cart:cartSlice,
    popUp:popUpSlice,
    size:sizeModal,
    totalCount
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})
