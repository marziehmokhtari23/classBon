import { CourseLevel } from "@/enums/course-level.enum";

export interface CourseSummery{
id:number,
title:string,
courseCategoryId:number,
levelNumber: CourseLevel;
duration: string; 
level: string; 
averageReviewRating: number | null;
numOfReviews: number | null;
coverImageId: number | null;
recordStatus: string;
slug: string;
subTitle: string;
isFree: boolean;
basePrice: number;
discountedPrice: number | null; 
discountRemainingTime: any;
discountType: string | null;
}