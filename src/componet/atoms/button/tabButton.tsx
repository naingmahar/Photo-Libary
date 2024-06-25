import { IButton } from "../../../types/componets/iButton";

const TabButton = (props:IButton) => {
    return(
        <button className={`btn btn-sm border-m ${props.className}`} onClick={props.onPress}>
            <div className="text-xs">{props.label}</div>
        </button>
    )
}


export default TabButton;