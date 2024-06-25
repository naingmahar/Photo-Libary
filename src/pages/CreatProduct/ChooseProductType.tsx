import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { CheckBoxGroup, TCheckBoxGroupRef } from "../../componet/organisms/CheckedBoxList"
import { shopAndProductState } from "../../feature/recoilState"
import { createRef, useEffect } from "react"
import { PRODUCT_TYPES } from "../../common/static-data"


export const ChooseProductTypes = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    const cbgRef = createRef<TCheckBoxGroupRef>();

    useEffect(()=>{
        if(cbgRef && cbgRef.current){
            if(state && state.category){
                cbgRef.current?.setCheckValue(state.category)
            }
        }
    },[])


    return (
        <ProgressContainer data={state.category} progress={0} title="What are you selling?" isFirst>
            <CheckBoxGroup 
                ref={cbgRef}
                className="mb-5"
                cb={(data)=>{
                    console.log({category:data})
                    if(JSON.stringify(data)!== JSON.stringify(state))
                        setState(current=>{
                            return {...current,...{category:data}}
                        })
                }}
                lst={PRODUCT_TYPES}
             />
        </ProgressContainer>
    )
}