import { FC } from "react"
import { ButtonProps } from "./button-types"
import classNames from "classnames"
import { Size } from "../types/size-limit-type"
import { ButtonShape } from "./button-types"
import { Loading } from "../loading"
export const Button: FC<ButtonProps> = ({
    variant,
    isLoading = false,
    isOutline = false,
    animatedIcon = false,
    type = "button",
    children,
    isDisabled = false,
    loadingText = "در حال ارسال درخواست",
    loadingType = "spinner",
    size = "normal",
    shape = "default",
    isLink = false,
    className,
    ...rest
}: ButtonProps) => {
    const sizeClasses: Record<Size, string> = {
        normal: '',
        tiny: 'xs',
        small: 'sm',
        large: 'lg'

    }
    const shapeClasses: Record<ButtonShape, string> = {
        square: 'square',
        default: '',
        wide: 'wide',
        full: 'full',
    }
    const classes = classNames('btn', { 'btn-outline': isOutline }, { 'btn-link': isLink }, { 'animated-icon': animatedIcon }, { "pointer-events-none opacity-80": isLoading }, { [`btn-${variant}`]: variant }, { [`btn-${sizeClasses[size]}`]: size },{ [`btn-${shapeClasses[shape]}`]: shape }, className)
    return (
        <button type={type} disabled={isDisabled}{...rest} className={classes}>
            {isLoading && <Loading type={loadingType}/>}
            {isLoading ? loadingText:children}
        </button>
    )
}