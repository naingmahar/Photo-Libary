import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const AddProductPrice = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.product.price} progress={36} title="How much the price?">
            <UnderLineInput 
                className="mb-10" 
                placeholder={"Product price"} 
                value={state.product.price <= 0 ?  "":state.product.price.toString() }
                onChange={(data)=>{
                let price = parseInt(data)
                if(price >= 0){
                    setState(current=>{
                        let product = {...current.product,...{price}}
                        console.warn({...current,...{product}})
                        return {...current,...{product}}
                    })
                }else{
                    setState(current=>{
                        let product = {...current.product,...{price:0}}
                        console.warn({...current,...{product}})
                        return {...current,...{product}}
                    })  
                }
                
            }} />
        </ProgressContainer>
    )
}