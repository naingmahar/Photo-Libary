import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"
import { useCheckEmail } from "../../feature/query/login/Login"
import {  RowContainer } from "../../componet/atoms/Container/FlexContainer"
import { IconKey } from "../../componet/atoms/icons"
import { ELABELS } from "../../assets/static_string"
import IconButton from "../../componet/atoms/button/IconButton"
import {  SmLabel } from "../../componet/atoms/typography/typography"

export const ShopEmail = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    const checkEmailState = useCheckEmail()

    const showLabel = () => {
       if(checkEmailState.isSuccess)
        return <SmLabel className="text-green-600 font-bold">{checkEmailState.data.message || ""}</SmLabel>
       
       if(checkEmailState.isError)
        return <SmLabel className="text-red-600 font-bold">{checkEmailState.error.message || ""}</SmLabel>

       if(!checkEmailState.isLoading)  
        return  <SmLabel className="text-amber-600 font-bold"> Press Enter Or Click Verify Button </SmLabel>
    }

    const checkEmail = () => {
        checkEmailState.mutate({email:state.shop.email})
    }

    return (
        <ProgressContainer data={checkEmailState.isSuccess} progress={9} title="And lastly, what is your shop?">
                <div className="mb-10">
                    <RowContainer>
                            <UnderLineInput 
                                className="mb-2" 
                                type="email" 
                                placeholder={"Your email"} 
                                value={state.shop.email}
                                onKeydown={(e)=>{
                                    if(e.key == "Enter") checkEmail()
                                }}
                                onChange={(email)=>{
                                setState(current=>{
                                    let shop = {...current.shop,...{email}}
                                    return {...current,...{shop}}
                                })
                            }} />
                        <IconButton 
                            className="btn-circle bg-opacity-0 ms-5" 
                            iconClass="text-orange-600" 
                            icon={IconKey.refresh} 
                            label={ELABELS.empty} 
                            onPress={()=>{checkEmail()}}  />
                    </RowContainer>
                    {showLabel()}
                </div>
        </ProgressContainer>
    )
}