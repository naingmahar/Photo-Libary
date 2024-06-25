import { FC } from "react"
import { BrowserRowContainer, ColumnContainer,  RowContainer } from "../../atoms/Container/FlexContainer"
import { InfoHeader, LgLabel, SmLabel } from "../../atoms/typography/typography"
import { QuantityController } from "../QuantityController"
import { IconKey } from "../../atoms/icons"
import IconButton from "../../atoms/button/IconButton"
import { ELABELS } from "../../../assets/static_string"

export interface ISaleCard{
    name:string,
    description:string,
    stock:number,
    img:string,
    price:string,
    qty:number,
    onDelete:(currentIndex:number)=>any,
    onQtyChange:(count:number,currentIndex:number)=>any,
    currentIndex:number
}
export const SaleCard:FC<ISaleCard> = (props) => {
    return(
        <>
            <BrowserRowContainer className="justify-between shadow-md p-2 my-3">
                <div className="w-28 me-4 bg-white"><img src={props.img} alt={props.name} /></div>
                <RowContainer className="items-center pe-5">
                    <ColumnContainer className="justify-center">
                        <InfoHeader>{props.name}</InfoHeader>
                        <SmLabel>{props.description}</SmLabel>
                    </ColumnContainer>
                    <LgLabel className="font-bold">{"$ " + props.price}</LgLabel>
                </RowContainer>
                <QuantityController onChange={(qty)=>{props.onQtyChange(qty,props.currentIndex)}}  stock={props.stock} qty={props.qty} />

                <div className="min-h-max me-5">
                    <ColumnContainer className="justify-center items-center h-full">
                        <IconButton label={ELABELS.empty} onPress={()=>{props.onDelete(props.currentIndex)}} icon={IconKey.delete} className="btn-ghost" iconClass="text-red-500" />
                    </ColumnContainer>
                </div>
            </BrowserRowContainer>
            {/* <MobileRowContainer className="justify-between shadow-md p-2 my-3">
                <div className="w-28 me-4"><img src={props.img} alt={props.name} className="max-w-full h-auto rounded-lg" /></div>
                <ColumnContainer className="justify-center">
                    <InfoHeader className="text-sm font-semibold">{props.name}</InfoHeader>
                    <SmLabel>{props.description}</SmLabel>
                    <div>
                        <RowContainer className="justify-between items-center">
                            <Label className="text-sm font-semibold">{"$ "+props.price}</Label>
                            <div className="">
                                <QuantityController isHideLabel onChange={(qty)=>{props.onQtyChange(qty,props.currentIndex)}} stock={props.stock} />
                            </div>
                        </RowContainer>
                    </div>
                </ColumnContainer>
            </MobileRowContainer> */}
        </>
    )
} 