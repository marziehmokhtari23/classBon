import { CourseSummery } from "@/types/course-summer.interface";
import { FC } from "react";
import { CourseCard } from "./course-card";
type CourseCardListProps={courses:CourseSummery[]}
export const CourseCardList:FC<CourseCardListProps>=({courses}:CourseCardListProps)=>{
return(
    <div className="flex  flex-wrap gap-6  mt-10 justify-center xl:justify-start">
{
   courses?.map(course=>(
    <CourseCard key={`course-${course?.slug}`}{...course} />
   ))
}
    </div>
)
}