
import { IInput } from "../../../types/componets/iInput"
import InputLabel from "./InputLabel"

const FormInput = (props:IInput) => {
    return (
        <div className={`form-control w-full ${props.className} mb-3`}>
            <InputLabel {...props} />
            <input 
                type="text" 
                disabled={props.disabled}
                defaultValue={props.value}
                placeholder={props.placeholder} 
                onChange={(e)=>props.onChange(e.target.value)} className="input input-bordered w-full" />
        </div>
    )
}

export default FormInput