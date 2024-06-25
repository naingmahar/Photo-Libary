import { useEffect } from "react"
import { ITableDetailsPropsInfo } from "../../componet/organisms/Tables/SubComponet/TableDetail"
import { Table } from "../../componet/organisms/Tables/Table"
import { useOrders } from "../../feature/query/Order/createOrder"
import OrderRow from "../../componet/molecules/ColumnRow/OrderRow"

const OrderPage = () => {

    const orderState = useOrders();
    useEffect(()=>{
        orderState.mutate(1)
    },[])
    
    console.log("ORDER PAGE",orderState.data?.data.dataList)
    return(
        <div className="max-w-full flex flex-1 flex-col px-3 lg:mx-20 pt-5 lg:pt-10 justify-center items-center">
            <div className="flex flex-1 justify-between items-center w-full">
                <article className="prose prose-slate">
                    <h2 className="">Orders</h2>
                </article>
            </div>
            <div className="flex flex-1 justify-center items-center flex-col w-full pt-5">
                <Table 
                    data={orderState.data?.data ? orderState.data?.data.dataList : []} 
                    title={["ID","Customer","Total","Items","Order Date","Status"]}  
                    types={[
                        {itemKey:"id",type:"string",alt:"",className:"font-semibold"},
                        {itemKey:"customer",type:"string",alt:"",className:"",customDataFunc(data) {
                            return <div>{data.customer.email}</div>
                        },},
                        {itemKey:"amount",type:"string",alt:"",className:""},
                        {itemKey:"items",type:"string",alt:"",className:"",customDataFunc(data) {
                            let labels:JSX.Element[] = []
                            data.order_items.map(row=>{labels.push(<div>{row.product.qty}x {row.product.name}</div>)})
                            return <div>{labels}</div>
                        },},
                        {itemKey:"order_date",type:"string",alt:"",className:""},
                        {itemKey:"order_status",type:"changeStatus",alt:"",className:"",action:{onChange:()=>{}}},
                    ]}
                    detail={(item)=>{
                        // item.order_items.map(row=><div>{`${row.product.qty}x ${row.product.name}`}</div>)
                        let infoParam:ITableDetailsPropsInfo[] = [
                            {isHeader:true,label:"ID",text:item.id.toString()},
                            {isHeader:true,label:"Customer",text:""},
                            {className:"ps-1",label:"email",text:item.customer.email},
                            {className:"ps-1",label:"name",text:item.customer.name},
                            {className:"ps-1 border-b pb-2",label:"phone",text:item.customer.phno},

                            {label:"Delivery Method",text:item.delivery_method},
                            {className:"border-b pb-2",label:"Order Date",text:item.order_date},
                            {label:"Total",text:"$ "+item.amount.toString()},
                            {isHeader:true,label:"Items",text:""},
                        ] 
                        
                        item.order_items.map((row)=>{
                            infoParam.push(
                                {className:"ps-1",label:`${row.product.qty}x ${row.product.name}`,text:"$ " + row.product.price*row.product.qty}
                            )
                        })

                        return{
                            header:item.id.toString(),
                            info:infoParam
                        }
                    }}
                    mobileUiPlugin={(row)=><OrderRow key={row.id} data={row} />}
                    pagiantion={
                        {totalPage:orderState.data?.data.totalPage||1,onChange(page) {
                            orderState.mutate(page)
                        },}
                    }
                />
            </div>

        </div>
    )
}

export default OrderPage