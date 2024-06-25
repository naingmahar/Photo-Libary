import { IButton } from "../../../types/componets/iButton"

const PicoButton = (props:IButton) => {
    return(
        <button className={`btn border-m border-2 shadow-sm rounded-full ${props.className}`} onClick={props.onPress}>
            <div className="text-xs">{
                props.isLoading && <span className="loading loading-spinner loading-md"></span>
            }{props.label}</div>
        </button>
    )
}


export default PicoButton