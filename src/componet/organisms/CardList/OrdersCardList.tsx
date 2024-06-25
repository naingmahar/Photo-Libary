import { IOrderRes } from "../../../types/models/IOrderRes"
// import OrderRow from "../../molecules/ColumnRow/OrderRow"

export const OrdersCardList = (props:IOrderRes[]) => {
    return (
        <div className="flex flex-1 flex-col w-full mt-5">
            {
                props.map(()=>{
                    return <div></div>
                    // return <OrderRow key={row.id} />
                })
            }
        </div>
    )
}