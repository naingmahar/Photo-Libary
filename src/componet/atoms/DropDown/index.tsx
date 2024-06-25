import { ELABELS } from "../../../assets/static_string"
import InputLabel from "../Input/InputLabel"
import { Icon, IconKey } from "../icons"

interface IProps {
    items: {key:string,label:string}[],
    onPress : (val:string) => void,
    label : ELABELS,
    icon ?: IconKey,
    value?:string
} 
export const DropDown = (props:IProps) => {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1 rounded-full">
                {props.icon && <Icon icon={props.icon}  />}
                {props.label}
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {
                    props.items.map(row=><li>{row.label}</li>)
                }
            </ul>
        </div>
    )
}

export const SelectBox = (props:IProps) => {
    return(
        <div className="form-control w-full my-5">
            <InputLabel {...props} />
            <select defaultValue={props.value||"DEFAULT"} className="select select-bordered" onChange={(e)=>props.onPress(e.target.value)}>
                <option value="DEFAULT" disabled>Choose {props.label}</option>
                {   
                    props.items.map((row,index)=>(
                        <option key={index} value={row.key}>{row.label}</option>
                    ))
                }
            </select>
        </div>
    )
} 