import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import UnderLineInput from "../../componet/atoms/Input/underlineInput"

export const AddProductName = () => {
    const [state,setState] = useRecoilState(shopAndProductState)


    return (
        <ProgressContainer data={state.product.name} progress={9} title="What is your product name?">
            <UnderLineInput className="mb-10" placeholder={"Your product name"} 
                value={state.product.name}
                onChange={(name)=>{
                    setState(current=>{
                        let product = {...current.product,...{name}}
                        return {...current,...{product}}
                    })
                }} 
            />
        </ProgressContainer>
    )
}