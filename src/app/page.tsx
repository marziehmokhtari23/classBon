
import { HeroSection } from "@/app/_components/hero-section/hero-section";
import { CourseSummery } from "@/types/course-summer.interface";
import { CourseCardList } from "@/app/(course)/_components/course-card-list";
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
