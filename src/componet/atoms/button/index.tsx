import { FC } from "react";
import { ELABELS } from "../../../assets/static_string";

interface IProps{
    children:ELABELS,
    onPress: () => void;
    className?:string;
    disabled?:boolean;
    useCustomPadding?:boolean;
}
export const Button:FC<IProps> = (props) => {
    return <button 
                disabled={props.disabled} 
                className={`btn lg:btn-md btn-md lg:px-10 ${props.useCustomPadding?"":"px-7"}
                ${props.className}`} 
                onClick={props.onPress}>{props.children}</button>
}