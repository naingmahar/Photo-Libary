import { AuxProps } from "../../../types/componets/iContainer"


export const CardContainer:React.FC<AuxProps> = (props) => {
    return (
        <div className={`mb-1 shadow-sm border w-full p-3 rounded-xl ${props.className}`}>{props.children}</div>
    )
}