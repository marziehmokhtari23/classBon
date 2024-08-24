"use client"
import {FC} from "react";
import {tailwindColor} from "../../../../tailwind.config"
import { colord } from "colord";
const getTextColor=(input:string) : string=>{
    return colord(input).isDark()?"#dddddd":"#333333";
 }
export const Colors:FC=()=>{
  
    return (
        <div lang="en" className="flex flex-wrap justify-start items-center  gap-2">
{Object.entries(tailwindColor).map(([name,value])=>(
    <ColorBox key={name} name={name} value={value}/> 
))}
        </div>
    )
}
const ColorBox:FC<{name:string,value:string}>=({name,value})=>{


    return(
    <div style={{backgroundColor:value,color:getTextColor(value)}} className="w-80 h-96 flex flex-col justify-center items-center gap-2" >
        <span>{name}</span>
        <span>{value}</span>
    </div>

    )
}