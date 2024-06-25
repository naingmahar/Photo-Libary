import React, {  FC, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { IconKey } from "../../atoms/icons";
import FormInput from "../../atoms/Input/formInput";
import { ELABELS } from "../../../assets/static_string";
import InputLabel from "../../atoms/Input/InputLabel";
import FileUpload from "../../atoms/FileUpload";
import FormTextArea from "../../atoms/Input/formTextarea";
import {  SelectBox } from "../../atoms/DropDown";

export interface IFormField {
    type:"text"|"image"|"dropdown"|"silder"|"textarea",
    label:ELABELS,
    icon:IconKey,
    placeholder?:ELABELS,
    description?:ELABELS,
    fieldName:string,
    dropDownItem?:{key:string,label:string}[],
    value?:any,
    disabled?:boolean,
}

export interface ICoCoFormProps {
    data:IFormField[],
    stateListener?: (state:any) => void,
    removedCard?:boolean
}

export interface ICoCoFormRef {
    getFormState: () => {}
}

const CoCoForm =React.forwardRef<ICoCoFormRef,ICoCoFormProps>((props, ref) => {   

    const [formData,setFormData] = useState<any>({})
    useImperativeHandle(ref, () => ({getFormState: () => {return formData}}), [formData]);

    useEffect(()=>{
        if(props.stateListener)props.stateListener(formData)
    },[formData])
    
    const setFieldData = useCallback((key:any,value:any) => {
        let obj = {[key]:value}
        let newData = {...formData,...obj}
        setFormData(() => newData );
    }, [formData]);

    const textfiledGenerator = (param:IFormField) => {
        return(
            <FormInput 
                key={param.fieldName}
                value={param.value}
                onChange={(val)=>setFieldData(param.fieldName,val)}
                icon={param.icon}  
                placeholder={param.placeholder||ELABELS.empty} 
                label={param.label}
                disabled={param.disabled}
             />
        )
    }

    const textArea = (param:IFormField) => {
        return (
            <FormTextArea 
                key={param.fieldName}
                value={param.value}
                onChange={(val)=>setFieldData(param.fieldName,val)}
                icon={param.icon}  
                placeholder={param.placeholder||ELABELS.empty} 
                label={param.label} />
        )
    }

    const categoryDropDown = (param:IFormField) =>{
        return(
            <SelectBox 
                key={param.fieldName} 
                items={param.dropDownItem||[]} 
                label={param.label} 
                icon={param.icon}
                value={param.value}
                 onPress={(val)=>setFieldData(param.fieldName,val)} />
        )
    } 

    const fileUploadGenerator = (param:IFormField) => {
        return(
            <div key={param.fieldName} className="mb-5" >
                <InputLabel icon={param.icon} label={param.label}  />
                <p className="label-text">{param.description}</p>
                <FileUpload value={param.value} onChange={(val)=>{setFieldData(param.fieldName,val)}} />
            </div>
        )
    }

    const formManager = (param:IFormField) => {
        if(param.type === "text") return textfiledGenerator(param)
        if(param.type === "image") return fileUploadGenerator(param)
        if(param.type === "textarea") return textArea(param)
        if(param.type === "dropdown") return categoryDropDown(param)
        return <div />
    } 

    return(
        <CoCoCard isShadowFree={props.removedCard}>{
            props.data.map((row)=>{
                return formManager(row)
            })
        }</CoCoCard>
    )

})


export const CoCoCard:FC<{children:React.ReactNode,isShadowFree?:boolean}> = (props) => {
    if(props.isShadowFree) return <div className="w-full">{props.children}</div>
    return(
        <div className="shadow-md rounded-lg border-2 p-10 w-full my-10">{props.children}</div>
    )
}


export default CoCoForm