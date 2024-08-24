"use client"
import { FC } from "react"
import { NavigationMenuItem } from "@/types/navigation-menu-item"
import Link from "next/link"
import { usePathname } from "next/navigation"
export const TopNavigation: FC = () => {
    const path= usePathname()
 
    const MenuNavigation: NavigationMenuItem[] = [
        { title: "صفحه اصلی", href: "/" },
        { title: "دوره‌های ری‌اکت و نکست", href: "/courses" },
        { title: "مطالب و مقالات", href: "/blog" },
    ]
    return (
        <>
            {
                MenuNavigation.map(menu => {
                    const isActive = path=== menu.href
                    return (
                        <Link className={`hover:text-primary/70 transition-colors ${isActive && "border-b border-primary"} `} href={menu.href} key={`menu-item${menu.href}`}>
                            {menu.title}
                        </Link>
                    )
                })
            }
        </>
    )
}