import { useNavigate } from "react-router-dom"
import { INavTagProps } from "../../../types/componets/iNav"
import { Icon } from "../../atoms/icons"

const NavTag = (props:INavTagProps) => {
    const navigate = useNavigate();
    return (
        <li>
            <a className="text-white" onClick={()=>{navigate(props.route)}}>
              <Icon icon={props.icon} active={props.active}  />
              {props.label}
            </a>
        </li>
    )
}


export default NavTag