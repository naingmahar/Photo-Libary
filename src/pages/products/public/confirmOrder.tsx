import {  useNavigate } from "react-router-dom"
import { ELABELS } from "../../../assets/static_string"
import { ColumnContainer, RowContainer } from "../../../componet/atoms/Container/FlexContainer"
import IconButton from "../../../componet/atoms/button/IconButton"
import { IconKey } from "../../../componet/atoms/icons"
import { LoadingHeader } from "../../../componet/molecules/LoadingLabel"
import { PublicNavBar } from "../../../componet/themes/nav"
import { useCreateOrder } from "../../../feature/query/Order/createOrder"
import { useRecoilState } from "recoil"
import { shoppingCartState } from "../../../feature/recoilState"
import { useEffect } from "react"
import { ICreateOrder, OrderItem } from "../../../types/models/IOrder"
import { STORAGE_KEY, Storage } from "../../../feature/storage/localstorage"
import { ICustomer } from "../../../types/models/ICustomer"


export const ConfirmOrder = () => {

    const orderQuery = useCreateOrder();
    const [carts, setCarts] = useRecoilState(shoppingCartState); 
    const customer = Storage.getItemByObjectOrArray<ICustomer>(STORAGE_KEY.customer); 
    const navigate= useNavigate();

    useEffect(()=>{
        let orderItems:OrderItem[] = []

        carts.map((row)=>{
            orderItems.push(
            {
                amount:row.item.price * row.count,
                price:row.item.price,
                product_id:row.id,
                qty:row.count
            }
            )
        })

        let param:ICreateOrder = {
            "shop_id": 3,
            "customer_id": customer && customer.id ? customer.id : 0,
            "delivery_method_id": customer?.delivery_method_id || 1,
            "order_status": "pending",
            "payment_status": "pending",
            order_items:orderItems
        }
        orderQuery.mutate(param,{
            onSuccess:()=>{
                setCarts([])
            }
        })
    },[])


    return (
        <ColumnContainer className="h-screen w-screen items-center pt-32">
            <PublicNavBar />
            <ColumnContainer className="justify-center items-center">
                <div>
                    <LoadingHeader
                        label={ELABELS.OrderLoading}
                        failTitle={ELABELS.OrderFailed}
                        failLabel={orderQuery.error?.message}
                        successLabel={ELABELS.OrderConfirmed}
                        successDescription={"Thank you "+ customer?.email}
                        isLoading={orderQuery.isLoading}
                        isSuccess={orderQuery.isSuccess}
                        isFailed={orderQuery.isError}
                    />
                </div>
                <div>
                <RowContainer className="justify-center items-center mt-5">
                    <IconButton className="btn decoration-gray-500" label={ELABELS.backToHome} icon={IconKey.shop} onPress={()=>{navigate("/")}} />
                </RowContainer>
                </div>
            </ColumnContainer>

        </ColumnContainer>
    )
} 