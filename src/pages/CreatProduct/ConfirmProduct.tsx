import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { RowContainer } from "../../componet/atoms/Container/FlexContainer"
import { Button } from "../../componet/atoms/button"
import { ELABELS } from "../../assets/static_string"
import { useNavigate } from "react-router-dom"
import { ProductCard } from "../../componet/molecules/productCard"
import { useRecoilState } from "recoil"
import { shopAndProductState } from "../../feature/recoilState"

export let IMAGE_BASE_URL = "https://picoshops-staging-s3-files.s3.ap-southeast-1.amazonaws.com/images/"
export const ConfirmProduct = () => {
    let navigate = useNavigate();
    const [state] = useRecoilState(shopAndProductState);
    
    return (
        <ProgressContainer progress={54} title="Your product ready, please review yours now" hideButton>
            <div>
                <ProductCard img={IMAGE_BASE_URL+state.product.images} label={state.product.name} onPress={()=>{}} price={state.product.price} />
                <RowContainer className="pt-24 lg:justify-end justify-center">
                    <Button 
                        useCustomPadding
                        className="px-3" 
                        onPress={()=>{
                        navigate("../register/1")
                        }}
                    >{ELABELS.noIWannaEdit}</Button>
                    <Button 
                        useCustomPadding
                        className="btn-neutral px-3 ms-5" 
                        onPress={()=>{navigate("../register/8")}}>{ELABELS.yesAllGood}</Button>
                </RowContainer>
            </div>
        </ProgressContainer>
    )
}