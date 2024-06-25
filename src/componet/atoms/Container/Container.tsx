import { AuxProps } from "../../../types/componets/iContainer"

export const MainFlexContainer:React.FC<AuxProps> = (props) => {
    return (
        <div className={`flex flex-1 w-full min-h-screen ${props.className}`}>{props.children}</div>
    )
}

export const MainContainer:React.FC<AuxProps> = (props) => {
    return (
        <div className={`w-screen min-h-screen ${props.className}`}>{props.children}</div>
    )
}