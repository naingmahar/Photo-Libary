import { FC, ReactNode } from "react"
import { RowContainer } from "../../atoms/Container/FlexContainer"
import { Button } from "../../atoms/button"
import { ELABELS } from "../../../assets/static_string"

interface IProps {
    children?: ReactNode,
    cancelAction:{label:ELABELS,action:()=>void},
    successAction:{label:ELABELS,action:()=>void},
}


//@ts-ignore
export const OpenConfirmModel = () =>  document.getElementById('my_modal_confirm').showModal()

export const ConfirmModel: FC<IProps> = (props) => {
    return (
        <dialog id="my_modal_confirm" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog">
                        <RowContainer className="justify-center items-center">
                            {props.cancelAction && <Button onPress={()=>{}}>{props.cancelAction.label}</Button>}
                            {props.successAction && <Button onPress={()=>{}}>{props.successAction.label}</Button>}
                        </RowContainer>
                    </form>
                </div>
            </div>
        </dialog>
    )
}