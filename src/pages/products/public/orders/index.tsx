import { FC } from "react";
import { ColumnContainer, RowContainer } from "../../../../componet/atoms/Container/FlexContainer";
import { PublicNavBar } from "../../../../componet/themes/nav";
import { useRecoilState } from "recoil";
import { IAddShoppingCart, shoppingCartState } from "../../../../feature/recoilState";
import { SaleCard } from "../../../../componet/molecules/productCard/SaleCard";
import { Button } from "../../../../componet/atoms/button";
import { useNavigate } from "react-router-dom";
import { ELABELS } from "../../../../assets/static_string";
import { UnderLineFluid } from "../../../../componet/atoms/lineBreak";
import { InfoHeader, Label } from "../../../../componet/atoms/typography/typography";
import PicoButton from "../../../../componet/atoms/button/PicoButton";

export const OrderPreviewPage: FC = () => {
    const navigate = useNavigate();
    const [carts, setCarts] = useRecoilState(shoppingCartState);
    let totalAmount = 0;

    const changeOrderCount = (count:number,currentIndex:number) => {
        console.log("Count change",count , currentIndex)
        let temp:IAddShoppingCart[]  = []
        setCarts((previousState)=>{
            previousState.map((data,index)=>{
                if(index == currentIndex){
                    let newItem:IAddShoppingCart = {
                        count:count,
                        id:data.id,
                        item:data.item
                    }
                    temp.push(newItem);
                }else{
                    temp.push(data);
                }

            })
            return temp
        })
    }

    const deleteOrder = (currentIndex:number) => {
        console.log("Delete Order")
        let temp:IAddShoppingCart[] = []
        setCarts((previousState)=>{
            previousState.map((data,index)=>{
                if(index !== currentIndex){temp.push(data)}
            })
            return temp
        })
    }

    return (
        <div>
            <ColumnContainer className="min-h-screen w-screen items-center mb-8">
                <PublicNavBar />
                <div className="w-screen p-2 mt-32 h-screen lg:px-10">
                    {
                        !carts.length &&
                        <RowContainer className="justify-center items-center mt-40">
                            <Button onPress={() => { navigate("/") }}>{ELABELS.continueShopping}</Button>
                        </RowContainer>
                    }
                    <RowContainer>
                        <div className="w-full">
                            {
                                carts.map((row, index) => {
                                    return (
                                        <SaleCard
                                            key={index}
                                            description={row.item.description}
                                            img={row.item.imagesUrl[0].url}
                                            name={row.item.name}
                                            price={row.item.price.toString()}
                                            qty={row.count}
                                            stock={row.item.price}
                                            currentIndex={index}
                                            onDelete={deleteOrder}
                                            onQtyChange={changeOrderCount}
                                        />
                                    )
                                })
                            }
                        </div>
                        {carts.length != 0  && <div className="mx-10 min-h-96 border-s-2" />}
                        {
                            carts.length != 0 &&
                            <ColumnContainer className="flex-grow-0 px-3 sm:mx-5">
                                <div className="w-72 shadow-lg px-3 py-3 rounded-md">
                                    <InfoHeader className="lg:text-md mb-3"> Order Summary </InfoHeader>
                                    {
                                        carts.map((row, index) => {
                                            totalAmount += row.count * row.item.price;
                                            return (
                                                <div key={index} className="flex flex-wrap overflow-hidden">
                                                    <Label className="me-1 w-9/12">{row.item.name + " * " + row.count}</Label>
                                                    <Label className="me-3">{"$ " + row.count * row.item.price}</Label>
                                                </div>
                                            )
                                        })
                                    }
                                    <UnderLineFluid className="mt-3" />
                                    <div className="flex overflow-hidden mt-3">
                                        <Label className="flex flex-1 font-semibold me-1">Total</Label>
                                        <Label className="me-3">{"$ " + totalAmount}</Label>
                                    </div>
                                </div>
                                <PicoButton className="mt-10 bg-black text-white" label={ELABELS.ProcessToCheckout} onPress={() => navigate("/customer")} />
                            </ColumnContainer>
                        }
                    </RowContainer>
                    {/* <IconButton
                        iconClass="text-black"
                        className="shadow-md rounded-full h-14 w-14 fixed bottom-3 right-8"
                        label={ELABELS.empty}
                        icon={IconKey.next}
                        onPress={() => { navigate("/customer") }} /> */}
                </div>

            </ColumnContainer>


        </div>
    )
}