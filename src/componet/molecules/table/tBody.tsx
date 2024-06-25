import { IProduct } from "../../../types/models/IProducts"
import { BasicTableRow, CheckTableRow } from "../../atoms/tableItem/tRow"

export type BasicTableBodyType<T> = Array<{
    type: "string" | "image" |"changeStatus"
    className?: string,
    itemKey: string,
    alt?: string,
    action?:{onChange: (status:"approved"|"rejected") =>any}
    customDataFunc?:(data:T)=>any
}>
export const CheckTableBody = (props: { data: IProduct[] }) => {
    return (
        <tbody>
            {
                props.data.map((row, index) => {
                    return (
                        <CheckTableRow key={row.id} data={row} index={index} />
                    )
                })
            }
        </tbody>
    )
}

export function BasicTableBody<T>(props: { data: T[], types: BasicTableBodyType<T> }) {
    return (
        <tbody>
            {
                props.data.map((row, index) => {
                    return (
                        <BasicTableRow key={index} data={row} index={index} types={props.types} />
                    )
                })
            }
        </tbody>
    )
} 