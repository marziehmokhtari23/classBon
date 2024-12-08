import { FC } from "react";
import { LoadingProps } from "./loding-types";
import classNames from "classnames";
import { Size } from "../types/size-limit-type";
export const Loading:FC<LoadingProps>=({variant,type="spinner",className,size='normal'}:LoadingProps)=>{
    const sizeClasses:Record<Size,string>={
        small:'loading-sm',
        tiny:'loading-xs',
        large:'loading-lg',
        normal:""
    }
    const classes=classNames('loading',{[`loading-${variant}`]:variant},{[`loading-${type}`]:type},className,{[`${sizeClasses[size]}`]:size})
    return(
        <span className={classes}></span>
    )
}