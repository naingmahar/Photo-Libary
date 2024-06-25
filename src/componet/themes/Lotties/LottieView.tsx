import Lottie from "lottie-react";
import shopLoaderLottie from "./animation/shop_loader_lottie.json";
import { FC } from "react";

interface IProps {
    className?:string
    isLoading?:boolean
}
export const ShopLoader:FC<IProps> = (props) => {
    if(props.isLoading) return <div />
    return <Lottie className={props.className} animationData={shopLoaderLottie} loop={true} />
}