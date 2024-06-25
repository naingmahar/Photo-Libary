
interface IProps {
    status?:boolean,
    onChange:(status:boolean)=>{}
}
export const CheckedBox = (props:IProps) => {
    return (
        <input 
            type="checkbox"  
            className="checkbox" 
            checked={props.status}
            onChange={e=>{
                props.onChange(e.target.checked)
            }}
        />
    )
}