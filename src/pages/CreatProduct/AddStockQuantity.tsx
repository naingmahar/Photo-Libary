import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const AddProductStockQuantity = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.product.quantity} progress={45} title="How many stock do you have?">
            <UnderLineInput 
            className="mb-10" 
            placeholder={"Stock Quantity"} 
            value={state.product.quantity <= 0 ?  "":state.product.quantity.toString() }
            onChange={(data)=>{
                let quantity = parseInt(data)
                if(quantity <= 0) return
                setState(current=>{
                    let product = {...current.product,...{quantity}}
                    console.warn({...current,...{product}})
                    return {...current,...{product}}
                })
            }} />
        </ProgressContainer>
    )
}