import { ITableHeader } from "../../../types/componets/ITable";


const CheckTableHeader = (props:ITableHeader) => {
    return(
        <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                {
                    props.headers.map((header)=><th key={header}>{header}</th>)
                }
            </tr>
        </thead>
    )
}

export default CheckTableHeader;