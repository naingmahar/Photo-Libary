import { IButton } from "../../../types/componets/iButton";
import { Icon, IconsSize } from "../icons";

const ResponsiveButton = (props:IButton) => {
    return (
        <button className={`${props.className} btn w-full rounded-full`} onClick={props.onPress}>
            {props.icon != undefined && <Icon icon={props.icon} size={props.iconSize||IconsSize.normal}  />}
            {props.isLoading && <span className="loading loading-spinner loading-sm"></span>}
            <article className=""><span className="text-xs">{props.label}</span></article>
        </button>
    )
}


export default ResponsiveButton;