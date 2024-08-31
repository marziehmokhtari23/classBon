import Image from "next/image";
import { FC } from "react";
import { TopNavigation } from "./top-navigation";
export const Header: FC = () => {
    return (
        <div className="border-b dark:border-base-content dark:border-opacity-5">

            <div className="flex container items-center justify-between">
                <div><Image
                src="/images/logo/logo-light.svg"
                alt="کلاسبن"
                width={100}
                height={36}
                className="ml-12"
                /></div>
                <div className="flex gap-x-4"><TopNavigation/></div>
                <div className="mr-auto">authenticator</div>
            </div>
        </div>
    )
}