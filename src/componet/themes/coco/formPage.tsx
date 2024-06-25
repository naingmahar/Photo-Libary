import React, { FC, useRef } from "react"
import CoCoForm, {  CoCoCard, ICoCoFormRef, IFormField } from "./form"
import { ELABELS } from "../../../assets/static_string"
import PicoButton from "../../atoms/button/PicoButton"
import { BrowserView, MobileView } from "react-device-detect"
import ResponsiveButton from "../../atoms/button/responsiveButton"

export interface ICoCoFormPageProps {
    formData : IFormField[],
    onSubmit : (data:any) => void,
    onCancel : () => void,
    title:ELABELS,
    subTitle:ELABELS,
    children:React.ReactNode,
    hideActionBar?:boolean,
    isFetching?:boolean,
    className?:string

}

const CoCoFormPage:FC<ICoCoFormPageProps> = (props) => {
    const cocoFromRef = useRef<ICoCoFormRef | any>()
    return (
    <div className={"flex flex-1 flex-col px-3 sm:mx-5 lg:mx-20 lg:pt-10 sm:py-10 justify-center " + props.className}>
        {/* <div className="w-28 mb-10">
            <ResponsiveButton 
                iconSize={IconsSize.sm}
                icon={IconKey.back} 
                label={ELABELS.back} 
                className="btn-sm" onPress={()=>{}} />
        </div> */}
        <div className="flex flex-1 justify-between items-center w-full">
            <article className="prose prose-slate">
                <h2 className="mb-2">{props.title}</h2>
                <p>{props.subTitle}</p>
            </article>
        </div>
        <div className="flex flex-1 flex-col lg:w-6/12 sm:w-full">
            <CoCoCard>
                <CoCoForm data={props.formData} ref={cocoFromRef} removedCard  />
                {props.children}
                <MobileView>
                    <div className="flex flex-1 justify-between flex-row w-full py-3">
                        <PicoButton label={ELABELS.cancel} onPress={()=>props.onCancel()} className="px-8"></PicoButton>
                        <PicoButton 
                            label={ELABELS.save}
                            isLoading={props.isFetching}
                            onPress={()=>props.onSubmit(cocoFromRef.current?.getFormState())} 
                            className="btn-neutral px-8"></PicoButton>
                    </div>
                </MobileView>
                {
                    props.hideActionBar &&
                    <div className="flex flex-1 justify-between flex-row w-full py-3">
                        <div className="w-2/5">
                            <ResponsiveButton label={ELABELS.cancel} onPress={()=>props.onCancel()} className="px-8"></ResponsiveButton>
                        </div>
                        <div className="w-2/5">
                            <ResponsiveButton 
                                label={ELABELS.save}
                                isLoading={props.isFetching}
                                onPress={()=>props.onSubmit(cocoFromRef.current?.getFormState())} 
                                className="btn-neutral text-white px-8"></ResponsiveButton>
                        </div> 
                    </div>
                }
            </CoCoCard>
        </div>
        {
            !props.hideActionBar && 
            <BrowserView>
                <div className="btm-nav z-50 w-full p-3 mt-20 bg-gray-200">
                    <div className="flex flex-1 justify-end flex-row">
                        <PicoButton label={ELABELS.cancel} onPress={()=>props.onCancel()} className="me-2"></PicoButton>
                        <PicoButton 
                            label={ELABELS.save}
                            isLoading={props.isFetching}
                            onPress={()=>props.onSubmit(cocoFromRef.current?.getFormState())} 
                            className="btn-neutral me-10 text-white"></PicoButton>
                    </div>
                </div>
            </BrowserView>
        }
    </div>)
}


export default CoCoFormPage