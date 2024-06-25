import { IButton } from "../../../types/componets/iButton"
import { Icon, IconsSize } from "../icons"

const InclineButton = (props:IButton) => {
    return (
        <button className={`${props.className} btn flex flex-1 skew-x-12 rounded-non p-0`} onClick={props.onPress}>
            {props.icon != undefined && <Icon icon={props.icon} className={props.iconClass +" -skew-x-12"} size={props.iconSize||IconsSize.normal}  />}
            {props.isLoading && <span className="loading loading-spinner loading-sm"></span>}
            {props.label && <article className={props.labelClass+" -skew-x-12 prose prose-slate"}><span className="text-xs">{props.label}</span></article>}
        </button>
    )
}

export default InclineButton