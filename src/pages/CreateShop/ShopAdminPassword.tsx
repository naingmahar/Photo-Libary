import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const ShopAdminPassword = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.shop.password} progress={9} title="What is your password?">
            <UnderLineInput className="mb-10" value={state.shop.password} type="password" placeholder={"Your password"} onChange={(password)=>{
                setState(current=>{
                    let shop = {...current.shop,...{password}}
                    return {...current,...{shop}}
                })
            }} />
        </ProgressContainer>
    )
}