import Image from "next/image";
import { FC } from "react";
import { Button } from "../button";

 export const HeroSection:FC=()=>{
    return(
        <main className="w-screen  bg-hero-pattern bg-no-repeat  bg-center xl:bg-left mt-5 xl:mt-20">
        <div className="container flex flex-col  items-center xl:flex xl:flex-row-reverse">
          <Image src={"/images/content/programmer-landing.svg"}
            width={702}
            height={521}
            alt="programmer"
          />
          <div className="flex-1 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl xl:text-2xl dark:text-info">خوش اومدی به...</h3>
            <h1 className=" text-3xl lg:text-3xl xl:text-3xl  gradient">مسیر صعود به قله‌هابی برنامه نویسی</h1>
            <h4 className="max-w-2xl  text-lg md:text-xl font-bold leading-8">هر جای مسیر برنامه‌نویسی که باشی با همراهی اساتید باتجربه کلاسبن میتونی بدون محدودیت به قله‌هایبالاتر صعود کنی ما همیشه هواتو داریم.</h4>
           <div className="flex gap-2 items-center justify-start">
            <Button size="large" variant="primary" >{"دوره‌های معماری ری اکت"}</Button>
            <Button size="large" variant="neutral" >{"مشاوره برنامه‌نویسی"}</Button>
  
           </div>
            <Image width={412} height={39} src={"/images/content/frameworks.png"} className="grayscale mt-4 opacity-70 m-auto xl:m-0" alt="framework" />
          </div>
        </div>
      </main>
    )
}
