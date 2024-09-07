import { FC } from "react";
import { BlogPostSummery } from "@/types/blog-summery-inerface";
import { BlogPost } from "./blog-post-card";
type BlogPostListProps = {
    blogPostList: BlogPostSummery[]
}
export const BlogPosList: FC<BlogPostListProps> = ({ blogPostList }) => {
    return (
        <div  className='flex flex-wrap justify-center xl:justify-start gap-6 mt-10'>
            {blogPostList.map(item => (
                <BlogPost key={`blog-post-${item?.slug}`} {...item} />
            )
            )}
        </div>
    )
}