import { useNavigate } from "react-router-dom"
import { INavTagProps } from "../../../types/componets/iNav"
import { Icon } from "../../atoms/icons"

const BottomNavTag = (props:INavTagProps) => {
    const navigate = useNavigate();
    return (
        <button onClick={()=>navigate(props.route)}>
              <Icon icon={props.icon} active={props.active}  />
              <span className="btm-nav-label">{props.label}</span>
        </button>
    )
}


export default BottomNavTag