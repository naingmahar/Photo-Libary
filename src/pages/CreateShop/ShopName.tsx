import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const ShopName = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.shop.name} progress={9} title="Now, complete your shop details.
        What is your shop name?">
            <UnderLineInput className="mb-10" value={state.shop.name} placeholder={"Your shop name"} 
                onChange={(name)=>{
                    setState(current=>{
                        let shop = {...current.shop,...{name}}
                        return {...current,...{shop}}
                    })
            }} />
        </ProgressContainer>
    )
}