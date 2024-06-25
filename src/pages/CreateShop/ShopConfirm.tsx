import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import { useEffect } from "react"
import { useRegister } from "../../feature/query/login/Login"
import { useCreateShop } from "../../feature/query/shop/useShop"
import { useCreateProduct } from "../../feature/query/products/createProduct"
import { LoadingLabel } from "../../componet/molecules/LoadingLabel"
import { RowContainer } from "../../componet/atoms/Container/FlexContainer"
import { Button } from "../../componet/atoms/button"
import { ELABELS } from "../../assets/static_string"
import { useNavigate } from "react-router-dom"

export const ShopConfirm = () => {
    const [state] = useRecoilState(shopAndProductState);
    const registerState = useRegister();
    const shopState = useCreateShop();
    const productState = useCreateProduct();
    let navigate = useNavigate();
    useEffect(()=>{
        apiCall()
    },[])

    const productParam = (shopID:string) =>{
        return {
            additionalinfo:"",
            category_id:state.category?.key || "",
            description:state.product.name,
            images:state.product.images,
            name:state.product.name,
            price:state.product.price.toString(),
            shop_id:shopID,
            qty:state.product.quantity.toString(),
            delivery_method_id:state.product.ship?.key ||""
        }
    }

    const apiCall = async () => {
       try {
        await registerState.mutateAsync(state.shop);
        let createShopRes = await shopState.mutateAsync(state.shop);
        await productState.mutateAsync(productParam(String(createShopRes.data.id)))
       } catch (error) {
       }

    }

    
    let isSuccess = registerState.isSuccess&&shopState.isSuccess&&productState.isSuccess;
    return (
        <ProgressContainer 
            data={isSuccess} 
        progress={9} 
        hideButton
        title="Your shop is ready?">

            <div className="mb-10">
                <LoadingLabel 
                    label="Processing User Register" 
                    failTitle={"User Registration Failed"}
                    failLabel={registerState.error?.message}
                    successLabel={"Succeed User Registration"}
                    isLoading={registerState.isLoading}
                    isSuccess={registerState.isSuccess}
                    isFailed={registerState.isError}
                />

                <LoadingLabel 
                    label="Processing Create Shop" 
                    failLabel={shopState.error?.message || "..."}
                    failTitle={"Shop Creation Failed"}
                    successLabel={"Created Shop Registration"}
                    isLoading={shopState.isLoading}
                    isSuccess={shopState.isSuccess}
                    isFailed={shopState.isError}
                />

                <LoadingLabel 
                    label="Processing Create Product" 
                    failLabel={productState.error?.message||"..."}
                    failTitle={"Product Creation Failed"}
                    successLabel={"Created Product"}
                    isLoading={productState.isLoading}
                    isSuccess={productState.isSuccess}
                    isFailed={productState.isError}
                />

            </div>
            {/* <UnderLineInput className="mb-10" placeholder={"https://yourshop.co"} onChange={()=>{}} /> */}

            <RowContainer className="pt-24 justify-end">
                    {!isSuccess && <Button onPress={()=>{
                        navigate("../register/8")
                    }}>{ELABELS.previousPage}</Button>}
                    {isSuccess && <Button 
                        className="btn-neutral ms-5" 
                        onPress={()=>{navigate("/owner")}}>
                            {ELABELS.viewStore}
                    </Button>}
            </RowContainer>
        </ProgressContainer>
    )
}