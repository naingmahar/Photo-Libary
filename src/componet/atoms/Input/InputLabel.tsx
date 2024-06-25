import { ELABELS } from "../../../assets/static_string";
import { Icon, IconKey, IconsSize } from "../icons"

interface IProps{
    icon?:IconKey,
    label?:ELABELS
}
const InputLabel= (props:IProps) => {
    return (
        <label className="label justify-start mb-1">
            {props.icon && <Icon icon={props.icon} size={IconsSize.normal} className="me-2"  />}
            <span className="label-text font-bold">{props.label}</span>
        </label>
    )
}


export default InputLabel;