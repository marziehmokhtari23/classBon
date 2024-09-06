
import { HeroSection } from "@/app/_components/hero-section/hero-section";
import { CourseSummery } from "@/types/course-summer.interface";
import { CourseCardList } from "@/app/(course)/_components/course-card-list";
import { Feature } from "./_components/feature/feature";
import { homeFeatures } from "@/data/home-feature";
console.log("marzieh")

async function getNewestCourses(count: number): Promise<CourseSummery[]> {
    const res = await fetch(
        `https://api.classbon.com/api/courses/newest/${count}`,
        {
            next: { revalidate: 24 * 60 * 60 },
        }
    );
  
    return res.json();
}
export default async function Home() {
    const newestCourses = await getNewestCourses(4);
    return (
        <>
            <HeroSection />
            <section className="dark:bg-base-75 mt-10">
                <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
                    {homeFeatures.map((feature) => (
                        <Feature key={`feature-${feature.title}`} feature={feature} />
                    ))}
                </div>
            </section>
            <section className="container pt-20">
              <div className="text-center xl:text-right">
              <h2 className="text-2xl font-extrabold">تازه‌ترین دوره‌های آموزشی</h2>
              <p>
                برای به روز موندن،یادگرفتن نکته‌های تازه ضروریه!
              </p>
              </div>
              <CourseCardList courses={newestCourses}/>
            </section>
        </>
    );
}
