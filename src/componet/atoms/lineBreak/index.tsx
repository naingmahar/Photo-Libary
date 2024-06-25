import { FC } from "react"

interface IProps {
    className?:string
}
export const UnderLineFluid:FC<IProps> = (props) => {
    return (
        <hr className={`w-full ${props.className}`} />
    )
}

export const ResponsiveBottomBar:FC<IProps> = () => {
    return(
        <div className="border-b-2 flex flex-1 w-full" />
    )
}