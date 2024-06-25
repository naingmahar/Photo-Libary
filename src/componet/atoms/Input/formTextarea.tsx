
import { IInput } from "../../../types/componets/iInput"
import InputLabel from "./InputLabel"

const FormTextArea = (props:IInput) => {
    return (
        <div className={`form-control w-full ${props.className} mb-3`}>
            <InputLabel {...props} />
            <textarea defaultValue={props.value} placeholder={props.placeholder} className="textarea textarea-bordered textarea-md w-full" onChange={(e)=>props.onChange(e.target.value)}></textarea>
        </div>
    )
}

export default FormTextArea