import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { CheckBoxGroup, TCheckBoxGroupRef } from "../../componet/organisms/CheckedBoxList"
import { shopAndProductState } from "../../feature/recoilState"
import { createRef, useEffect } from "react"
import { DELIVERY_TYPES } from "../../common/static-data"

export const ChooseDelivaryTypes = () => {

    const [state,setState] = useRecoilState(shopAndProductState)
    const cbgRef = createRef<TCheckBoxGroupRef>();

    useEffect(()=>{
        if(cbgRef && cbgRef.current){
            if(state && state.product.ship){
                cbgRef.current?.setCheckValue(state.product.ship)
            }
        }
    },[])

    return (
        <ProgressContainer data={state.product.ship} progress={54} title="How do you ship the goods?">
            <CheckBoxGroup 
                className="mb-5"
                ref={cbgRef}
                cb={(data)=>{
                    if(JSON.stringify(data)!== JSON.stringify(state))
                        setState(current=>{
                            let product = {...current.product,...{ship:data}}
                            console.warn({...current,...{product}})
                            return {...current,...{product}}
                        })
                }}
                lst={DELIVERY_TYPES}
             />
        </ProgressContainer>
    )
}