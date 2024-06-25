import {  forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { CheckBoxWithRightSideLabel } from "../../molecules/Form/CheckBoxWithRightSideLabel"

export interface ICheckBoxGroup {
    lst:{label:string,key:string}[],
    className?:string,
    cb:(data:ICheckProps|undefined)=>any;
}


export interface ICheckProps{
    key:string,
    value:boolean
}

export interface TCheckBoxGroupRef  {
    setCheckValue:(props:ICheckProps)=>any
}



export const CheckBoxGroup = forwardRef<TCheckBoxGroupRef,ICheckBoxGroup> ((props,ref) => {
    const [state,setState] = useState<ICheckProps>()

    const onValueChange = (props:ICheckProps) => {
        return (
            setState(props)
        )
    }

    useEffect(()=>{
        if(state)props.cb(state)
    },[state])


    useImperativeHandle(ref, () => ({
         setCheckValue: onValueChange,
     }));

    return(
        <div className={`${props.className}`}>
            {
                props.lst.map(row=>{
                    return(
                        <CheckBoxWithRightSideLabel key={row.key}
                            currentState={row.key === state?.key ? true : false}
                            onChange={(status)=>{onValueChange({key:row.key,value:status})}}  
                        >{row.label}</CheckBoxWithRightSideLabel>
                    )
                })
            }
        </div>
    )
})

// export const CheckedBoxList:FC<ICheckBoxGroup> = (props) => {
//     const [state,setState] = useState<ICheckProps[]>([])


//     const onValueChange = (props:ICheckProps) => {
//         return (
//             setState(current=>[...current,props])
//         )
//     }
//     return(
//         <div className={`${props.className}`}>
//             {
//                 props.lst.map(row=>{
//                     return(
//                         <CheckBoxWithRightSideLabel key={row.key}
//                             onChange={(status)=>{onValueChange({key:row.key,value:status})}}  
//                         >{row.label}</CheckBoxWithRightSideLabel>
//                     )
//                 })
//             }
//         </div>
//     )
// }