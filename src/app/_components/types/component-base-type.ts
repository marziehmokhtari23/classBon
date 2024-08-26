
import { SizeLimit } from "./size-limit-type"
import { Variant } from "./variant-type"
export type ComponentBase ={
    isDisabled ?:boolean,
    variant?:Variant,
    size:SizeLimit,
}