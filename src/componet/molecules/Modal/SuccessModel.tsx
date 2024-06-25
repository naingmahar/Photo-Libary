import { FC, ReactNode } from "react"
import { RowContainer } from "../../atoms/Container/FlexContainer"
import { ELABELS } from "../../../assets/static_string"
import ResponsiveButton from "../../atoms/button/responsiveButton"

export interface ISuccessModelProps {
    children?: ReactNode,
    action:{label:ELABELS,onClick:(e:any)=>any},
    info:string,
    title:string,
    className?:string
}


//@ts-ignore
export const OpenSuccessModel = () =>  document.getElementById('my_modal_success').showModal()

export const SuccessModel: FC<ISuccessModelProps> = (props) => {
    return (
        <dialog id="my_modal_success" className="modal">
            <div className={"modal-box w-11/12 max-w-5xl "+props.className}>
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="py-4">{props.info}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <RowContainer className="justify-center items-center">
                            <ResponsiveButton label={props.action.label} onPress={props.action.onClick} />
                        </RowContainer>
                    </form>
                </div>
            </div>
        </dialog>
    )
}