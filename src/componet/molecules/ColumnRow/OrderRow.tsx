import { useState } from "react";
import { ELABELS } from "../../../assets/static_string";
import { IOrderRes } from "../../../types/models/IOrderRes";
import { CardContainer } from "../../atoms/Container/CardContainer";
import { ColumnContainer, RowContainer } from "../../atoms/Container/FlexContainer";
import IconButton from "../../atoms/button/IconButton";
import { Icon, IconKey, IconsSize } from "../../atoms/icons";
import { StatusChangeDropDown } from "../../atoms/tableItem/tRow";
import { CardDescriptionText, CardHeaderText } from "../../atoms/typography/typography";

const OrderRow = (props:{data:IOrderRes}) => {
    const [state,setState] = useState(false)
    return(
        <CardContainer className="mb-2 rounded-md">
            <RowContainer>
                <ColumnContainer>
                    <RowContainer className="justify-between">
                        <CardHeaderText>{"Order ID "+props.data.id.toString()}</CardHeaderText>
                        <IconButton className="btn-ghost btn-xs" iconClass="text-blue-500" label={ELABELS.empty} icon={IconKey.info} onPress={()=>{setState(old=>!old)}}  />
                    </RowContainer>
                    <CardDescriptionText className="my-2">{props.data.customer.email}</CardDescriptionText>
                    <RowContainer  className="mb-2">
                        <RowContainer>
                            <Icon icon={IconKey.calendar} size={IconsSize.sm} />
                            <CardDescriptionText className="ms-2">{new Date().toDateString()}</CardDescriptionText>
                        </RowContainer>
                        <CardDescriptionText className="mb-2 font-semibold">{props.data.amount.toString()}</CardDescriptionText>
                    </RowContainer>
                    {
                        state && 
                        <div className="mx-3 my-2"> 
                            <CardDescriptionText className="mb-2 font-semibold">Receipt</CardDescriptionText>
                            {
                                props.data.order_items.map(row=>{
                                    return (
                                        <RowContainer className="justify-between ms-1 mb-2">
                                            <CardDescriptionText>{row.product.name +" x"+row.qty}</CardDescriptionText>
                                            <CardDescriptionText>{row.product.price + ""}</CardDescriptionText>
                                        </RowContainer>
                                    )
                                })
                            }

                            <CardDescriptionText className="mb-2 font-semibold my-3">FulFillment</CardDescriptionText>
                            <RowContainer className="justify-between ms-1 mb-2">
                                <CardDescriptionText> Type </CardDescriptionText>
                                <CardDescriptionText className="mb-2">{props.data.delivery_method}</CardDescriptionText>
                            </RowContainer>


                            <CardDescriptionText className="mb-2 font-semibold my-3">Customer</CardDescriptionText>
                            <RowContainer className="justify-between ms-1 mb-2">
                                <CardDescriptionText> Name </CardDescriptionText>
                                <CardDescriptionText className="mb-2">{props.data.customer.name||"unknown"}</CardDescriptionText>
                            </RowContainer>
                            <RowContainer className="justify-between ms-1 mb-2">
                                <CardDescriptionText> Phone </CardDescriptionText>
                                <CardDescriptionText className="mb-2">{props.data.customer.phno}</CardDescriptionText>
                            </RowContainer>
                            <RowContainer className="justify-between ms-1 mb-2">
                                <CardDescriptionText> Email </CardDescriptionText>
                                <CardDescriptionText className="mb-2">{props.data.customer.email}</CardDescriptionText>
                            </RowContainer>
                        </div>
                    }
                    <StatusChangeDropDown label={props.data.order_status} onChange={()=>{}} />
                </ColumnContainer>
            </RowContainer>
            
        </CardContainer>
    )
}


export default OrderRow