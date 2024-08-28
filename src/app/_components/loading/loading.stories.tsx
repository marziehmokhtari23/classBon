import { Loading } from "./loading";
import {Meta,StoryObj} from "@storybook/react"
 const meta:Meta<typeof Loading>={
    component:Loading,
    tags:["autodocs"],
    decorators: [
        (Story) => {
          document.documentElement.classList.add('dark');
          return <Story />;
        },
      ],
 }

 export default meta;
 type Story=StoryObj<typeof Loading>
export const SpinnerLoading:Story={
    render:()=>(
        <>
        <Loading type="spinner" variant="primary"/>
        <Loading type="spinner" variant="error"/>
        <Loading type="spinner" variant="success"/>
        <Loading type="spinner" variant="secondary"/>
        <Loading type="spinner" variant="info"/>
        </>
    )
 }
 export const RingLoading:Story={
    render:()=>(
        <>
        <Loading type="ring" variant="primary"/>
        <Loading type="ring" variant="error"/>
        <Loading type="ring" variant="success"/>
        <Loading type="ring" variant="secondary"/>
        <Loading type="ring" variant="info"/>
        </>
    )
 }
 export const RingLoadingWithSize:Story={
    render:()=>(
       
        <Loading type="ring" variant="primary" size="large"/>
        
    )
 }