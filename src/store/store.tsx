import { CourseDetailSlice } from "./features/CourseDetails";
import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {CollideApi} from '../store/features/Api' 


export const store=configureStore({
    reducer:{
        CourseDetail:CourseDetailSlice.reducer,
        [CollideApi.reducerPath]: CollideApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CollideApi.middleware),
   

})
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const  useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
