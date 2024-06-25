import { IInput } from "../../../types/componets/iInput"


const SearchInput = (props:IInput) => {
    return(
        <div className={`form-control w-full ${props.className}`}>
            <input type="text" placeholder={props.placeholder} className={`${props.inputStyle} input input-sm input-bordered`} />
        </div>
    )
}

export default SearchInput