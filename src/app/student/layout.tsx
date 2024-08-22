import { ReactNode} from "react";
export default function({children}:{children:ReactNode}){
    return(
        <>
        <aside className=" w-80 bg-gray-300 flex  justify-center items-center">
            aside
        </aside>
        <main>
            {children}
        </main>
        </>
    )
}