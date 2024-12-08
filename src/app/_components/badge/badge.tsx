import { FC } from "react";
import { BadgeProps } from "./badge-types";
import classNames from "classnames";
import { Size } from "../types/size-limit-type";
export const Badge :FC<BadgeProps>=({variant,children,className,size="tiny"})=>{
    const sizeClasses:Record<Size,string>={
        normal:'badge-md',
        tiny:'badge-xs',
        small:'badge-sm',
        large:'badge-large'
    }
    const classes=classNames('badge',className,{[`badge-${variant}`]:variant},{[`${sizeClasses[size]}`]:size})
    return(
        <span className={classes}>
            {children}
        </span>
    )
}