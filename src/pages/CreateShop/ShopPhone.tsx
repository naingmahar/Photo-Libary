import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const ShopPhone = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.shop.phone} progress={9} title="What is your phone?">
            <UnderLineInput 
                className="mb-10" 
                type="tel" 
                placeholder={"Your phone"} 
                value={state.shop.phone}
                onChange={(phone)=>{
                setState(current=>{
                    let shop = {...current.shop,...{phone}}
                    return {...current,...{shop}}
                })
            }} />
        </ProgressContainer>
    )
}