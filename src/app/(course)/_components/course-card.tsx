import { Badge } from "@/app/_components/badge";
import { CourseSummery } from "@/types/course-summer.interface";
import Image from "next/image";
import Link from "next/link";
import { title } from "node:process";
import { FC } from "react";
import {IconArrowLeftFill } from "@/app/_components/icons/icons";
export type CourseCardProps = CourseSummery & {}
export const CourseCard: FC<CourseCardProps> = ({ coverImageId, subTitle, level, basePrice, duration, slug, recordStatus }: CourseCardProps) => {
    return (
        <div className="card">
            <figure>
                <Image src={`https://api.classbon.com/api/picture/${coverImageId}`} alt="title" width={550} height={327} />
            </figure>
            <div className="mt-2 flex gap-4 font-semibold dark:text-info px-3 py-2">
                <Badge variant="info">{recordStatus}</Badge>
                <Badge variant="accent">{level}</Badge>
            </div>
            <div className="card-body">
                <Link href={`/course/${slug}`} className="card-title">
                    {title}
                </Link>
                <p>{subTitle}</p>
                <div>
                    <Badge variant="warning">{duration}</Badge>
                    {basePrice}
                </div>

            </div>
            <Link href={`/course/${slug}`} className="card-footer animated-icon justify-center">
               <p>مشاهده جزئیات دوره</p>
             <IconArrowLeftFill/>
                
            </Link>
        </div>

    )
}