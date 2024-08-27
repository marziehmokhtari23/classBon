import { ButtonHTMLAttributes } from "react"
import {ComponentBase} from "@/app/_components/types/component-base-type"
import { LoadingBehavior } from "../types/loading-type"
export  type ButtonProps=ButtonHTMLAttributes<HTMLButtonElement> & ComponentBase & LoadingBehavior & {
isOutline?:boolean,
variant?:string,
animatedIcon?:boolean,
shape?:ButtonShape,
isLink?:boolean,
}
export type ButtonShape="default"|"wide" |"full" | "square"