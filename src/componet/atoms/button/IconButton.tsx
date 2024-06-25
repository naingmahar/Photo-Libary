import { IButton } from "../../../types/componets/iButton"
import { Icon, IconsSize } from "../icons"

const IconButton = (props:IButton) => {
    return (
        <button className={`${props.className} btn`} onClick={props.onPress}>
            {props.icon != undefined && <Icon icon={props.icon} className={props.iconClass} size={props.iconSize||IconsSize.normal}  />}
            {props.isLoading && <span className="loading loading-spinner loading-sm"></span>}
            {props.label && <article className="prose prose-slate"><span className="text-xs">{props.label}</span></article>}
        </button>
    )
}

export default IconButton