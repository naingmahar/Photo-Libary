import { IInput } from "../../../types/componets/iInput"


const BasicInput = (props:IInput) => {
    return(
        <div className={`form-control w-full ${props.className}`}>
            {props.label && <label className="label">
                <span className="label-text">{props.label}</span>
            </label>}
            <input 
                type={props.type || "text"} 
                placeholder={props.placeholder} 
                className="input input-bordered w-full" 
                onChange={(e)=>props.onChange(e.target.value)}  />
        </div>
    )
}




export default BasicInput