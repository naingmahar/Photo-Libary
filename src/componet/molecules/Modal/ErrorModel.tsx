import { FC, ReactNode } from "react"
import { RowContainer } from "../../atoms/Container/FlexContainer"
import { ELABELS } from "../../../assets/static_string"
import { Button } from "../../atoms/button"

export interface IErrorModelProps {
    children?: ReactNode,
    action:{label:ELABELS,onClick:()=>any},
    info:string,
    title:string,
    className?:string
}


//@ts-ignore
export const OpenErrorModel = () =>  document.getElementById('my_modal_error').showModal()

export const ErrorModel: FC<IErrorModelProps> = (props) => {
    return (
        <dialog id="my_modal_error" className="modal">
            <div className={"modal-box w-11/12 max-w-5xl "+props.className}>
                <h3 className="font-bold text-lg text-red-600">{props.title}</h3>
                <p className="py-4 font-semibold">{props.info}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <RowContainer className="justify-center items-center">
                            <Button className="bg-red-600 text-white" onPress={props.action.onClick}>{props.action.label}</Button>
                        </RowContainer>
                    </form>
                </div>
            </div>
        </dialog>
    )
}