import { FC, useEffect, useState } from "react"
import { RowContainer } from "../../atoms/Container/FlexContainer"
import { Label, SmLabel } from "../../atoms/typography/typography"
interface IQuantityController{
    stock:number,
    isHideLabel?:boolean,
    onChange:(qty:number)=>void,
    className?:string,
    qty?:number
}
export const QuantityController:FC<IQuantityController> = (props) => {
    const [state,setState] = useState(props.qty||1);

    useEffect(()=>{
        if(state <= props.stock){
            props.onChange(state)
        }else{
            setState((count)=>(count-1))
        }
    },[state])

    return(
        <RowContainer className={"items-center "+props.className}>
            {!props.isHideLabel && <Label className="text-gray-500 me-2">Quantity</Label>}
            <QuantityButton onPress={()=>setState((count)=>count -1)}>-</QuantityButton>
            <Label className="mx-3 font-semibold">{state.toString()}</Label>
            <QuantityButton onPress={()=>setState((count)=>count +1)}>+</QuantityButton>
            {!props.isHideLabel && <SmLabel className="ms-2">{`Only ${props.stock} items left`}</SmLabel>}
        </RowContainer>
    )
}

const QuantityButton = (props:{children:string,onPress:()=>any}) => {
    return(
        <div onClick={props.onPress} className="flex felx-1 justify-center items-center w-8 h-8 lg:w-12 md:w-10 lg:h-12 md:h-10 bg-gray-100 rounded-lg "> 
            <span className="text-black text-lg font-semibold">{props.children}</span>
        </div>
    )
}