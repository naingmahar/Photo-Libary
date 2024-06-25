import { useEffect, useState } from "react"

export interface IPopupAlert {
    current:"show"|"close",
    type:"success"|"error",
    label:string
}
export const PopupAlert = (props:IPopupAlert) => {
    let [state,setState] = useState(false)

    useEffect(()=>{
        if(state){
            setTimeout(()=>{
                setState(false);
            },4000)
        }
    },[state])

    useEffect(()=>{
        if(props.current === "show") setState(true)
        if(props.current === "close") setState(false)
    },[props])
    
    if(props.type === "success"){
        return(
            <div>
                {
                    state && (
                    <div className="alert alert-success flex flex-1 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{props.label}</span>
                    </div>)
                }
            </div>
        )
    }

    if(props.type === "error"){
        return(
            <div>
                {
                    state && (
                    <div className="alert alert-warning flex flex-1 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>{props.label}</span>
                    </div>)
                }
            </div>
        )
    }
}