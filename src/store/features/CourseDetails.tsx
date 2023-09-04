import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface CourseDetail {
   outliine: any
         id: string,
        category: string,
        title:string,
        description:string,
        location:string,
        price:string,
        duration: string,
        status: string,
        imageURL: string,
        outline: any,
}

interface CourseDetailsState {
    courseDetails: CourseDetail[]
}

const initialState:  CourseDetailsState = {
    courseDetails: [],
}

export const CourseDetailSlice = createSlice({
    name:"courseDetail",
    initialState,
    reducers:{
        addCourseDetail: (state,action: PayloadAction<CourseDetail>) =>{
            state.courseDetails= [{...action.payload}]
           
        } 

    }


})

export default CourseDetailSlice.reducer
export const {
    addCourseDetail
} = CourseDetailSlice.actions; 



