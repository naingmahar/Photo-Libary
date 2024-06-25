import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"
import { useCheckSubdomain } from "../../feature/query/login/Login"
import {  RowContainer } from "../../componet/atoms/Container/FlexContainer"
import { IconKey } from "../../componet/atoms/icons"
import { ELABELS } from "../../assets/static_string"
import IconButton from "../../componet/atoms/button/IconButton"
import {  SmLabel } from "../../componet/atoms/typography/typography"
import { useEffect } from "react"

export const ShopDomainName = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    const checkSubdomainState = useCheckSubdomain()

    const showLabel = () => {
       if(checkSubdomainState.isError)
        return <SmLabel className="text-green-600 font-bold">{`Your domain name (${state.shop.subdomain}.picoshop.com) is Valid!`}</SmLabel>
       
       if(checkSubdomainState.isSuccess)
        return <SmLabel className="text-red-600 font-bold">{"Your domain name is already exsit!"}</SmLabel>

       if(!checkSubdomainState.isLoading)  
        return  <SmLabel className="text-amber-600 font-bold"> Press Enter Or Click Verify Button </SmLabel>
    }

    const checkSubdomain = () => {
        checkSubdomainState.mutate(state.shop.subdomain)
    }

    let reg = /([. -_])/g;

    useEffect(()=>{
        let preSubdomain = state.shop.name.toLowerCase().replace(reg,"")
        setState(current=>{
            let shop = {...current.shop,...{subdomain:preSubdomain.toLowerCase()}}
            return {...current,...{shop}}
        })

    },[])

    return (
        <ProgressContainer data={checkSubdomainState.isError} progress={9} title="And lastly, what is your shop url?">
                <div className="mb-10">
                    <RowContainer className="justify-center items-center">
                            <UnderLineInput 
                                className="mb-2" 
                                type="text" 
                                placeholder={"Your domain name or url eg.(example.picoshop.com)"} 
                                value={state.shop.subdomain}
                                onKeydown={(e)=>{
                                    if(e.key == "Enter") checkSubdomain()
                                }}
                                onChange={(subdomain)=>{
                                setState(current=>{
                                    let preSubdomain = subdomain.toLowerCase().replace(reg,"")
                                    let shop = {...current.shop,...{subdomain:preSubdomain}}
                                    return {...current,...{shop}}
                                })
                            }} />
                        <label>.picoshop.com</label>    
                        <IconButton 
                            className="btn-circle bg-opacity-0 ms-5" 
                            iconClass="text-orange-600" 
                            icon={IconKey.refresh} 
                            label={ELABELS.empty} 
                            onPress={()=>{checkSubdomain()}}  />
                    </RowContainer>
                    {showLabel()}
                </div>
        </ProgressContainer>
    )
}