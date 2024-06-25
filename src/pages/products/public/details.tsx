import { useRecoilValue, useSetRecoilState } from "recoil"
import { ELABELS } from "../../../assets/static_string"
import { CardContainer } from "../../../componet/atoms/Container/CardContainer"
import { ColumnContainer, RowContainer } from "../../../componet/atoms/Container/FlexContainer"
import InclineButton from "../../../componet/atoms/button/InclineButton"
import { Icon, IconKey } from "../../../componet/atoms/icons"
import { Header, InfoHeader, Label } from "../../../componet/atoms/typography/typography"
import { IAddShoppingCart, productDetailsState, shoppingCartState } from "../../../feature/recoilState"
import { PublicNavBar } from "../../../componet/themes/nav"
import { UnderLineFluid } from "../../../componet/atoms/lineBreak"
import { QuantityController } from "../../../componet/molecules/QuantityController"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const PubilcProductDetailsPage = () => {
    const state= useRecoilValue(productDetailsState)
    const setCart = useSetRecoilState(shoppingCartState);
    const [qty,setQty] = useState(1);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!state || !state?.id) {
            console.warn("HELLO WORLD")
            navigate("/")
        }
    },[])

    const addShoppingCart = () => {
        setCart((previousState)=>{
            let prevIndex = previousState.findIndex((oldCart)=> oldCart.id == state.id)
            if(prevIndex >= 0) {
                previousState.map((data,index)=>{
                    if(index == prevIndex){
                        let newItem:IAddShoppingCart = {
                            count:data.count+qty,
                            id:data.id,
                            item:data.item
                        }
                        return newItem
                    }
                    return data
                })
                return previousState
            }
            return [...previousState,...[{count:qty,id:state.id,item:state}]]
        })
    }
    return (
        <ColumnContainer className="min-h-screen w-screen items-center mb-8">
            <PublicNavBar />
            <ColumnContainer className="justify-center items-center w-screen px-3 pt-10 mt-20 lg:max-w-lg">
                    <CardContainer className="flex flex-1 justify-center items-center">
                        <img src={state?.imagesUrl[0].url} alt={state?.name || ""} />
                    </CardContainer>
                    <CardContainer>
                        <Label>{state?.name || ""}</Label>
                        <Header className="font-bold">{"$ "+state?.price}</Header>

                        <QuantityController className="mb-3" stock={10} onChange={setQty} />
                        <UnderLineFluid />
                            <RowContainer className="py-2">
                                <Icon icon={IconKey.delivery} className="text-black font-bold me-5" />
                                <Label className="font-bold">{state?.delivery_method || ""}</Label>
                            </RowContainer>
                        <UnderLineFluid />
                        <Label className="mt-2">{"Description: "+state?.description || ""}</Label>
                    </CardContainer>
                    <CardContainer>
                        <InfoHeader className="font-semibold">{state?.shop_name||""}</InfoHeader>
                        <Label>{state?.description || ""}</Label>
                    </CardContainer>
            </ColumnContainer>
            <RowContainer className="pt-3 px-2 shadow-sm px-2fixed bottom-0 left-0 flex-1 w-full lg:max-w-lg">
                <InclineButton className="" icon={IconKey.back} label={ELABELS.back} onPress={()=>{}} />
                <InclineButton className="bg-green-500" labelClass="text-white" label={ELABELS.order} onPress={()=>{}} />
                <InclineButton 
                    className="bg-blue-500" 
                    labelClass="text-white" 
                    label={ELABELS.addToCart} 
                    onPress={()=>{
                        navigate(-1)
                        addShoppingCart();
                        // setCart((previous)=>[...previous,...[state]])
                    }} 
                />
            </RowContainer>
        </ColumnContainer>
    )
}