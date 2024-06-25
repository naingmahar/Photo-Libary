import { FC } from "react";
import { ITypographyProps } from "../../../types/componets/itypography";



export const CardHeaderText:FC<ITypographyProps> = (props) => {
    return <h5 className="text-lg font-bold">{props.children}</h5>
}  

export const CardLabelHeaderText:FC<ITypographyProps> = (props) => {
    return <h6 className="text-base font-semibold">{props.children}</h6>
}

export const CardInfoText:FC<ITypographyProps> = (props) => {
    return <p className={`text-base ${props.className}`}>{props.children}</p>
}

export const CardInfoBoldText:FC<ITypographyProps> = (props) => {
    return <p className="text-base font-semibold">{props.children}</p>
}

export const CardDescriptionText:FC<ITypographyProps> = (props) => {
    return <p className={"text-sm "+props.className}>{props.children}</p>
} 


export const Text:FC<ITypographyProps> = (props) => {
    return <p className={`text-base p-0 m-0  ${props.className}`}>{props.children}</p>
}

export const LgLabel:FC<ITypographyProps> = (props) => {
    return <span className={`text-xl p-0 m-0  ${props.className}`}>{props.children}</span>
}

export const SmLabel:FC<ITypographyProps> = (props) => {
    return <span className={`text-xs p-0 m-0  ${props.className}`}>{props.children}</span>
}

export const ButtonLabel:FC<ITypographyProps> = (props) => {
    return <span className={`text-sm p-0 m-0  ${props.className}`}>{props.children}</span>
}

export const Label:FC<ITypographyProps> = (props) => {
    return <span className={`text-base p-0 m-0  ${props.className}`}>{props.children}</span>
}

export const Header:FC<ITypographyProps> = (props) => {
    return <h1 className={`text-2xl lg:text-4xl p-0 m-0  ${props.className}`}>{props.children}</h1>
}

export const SubHeader:FC<ITypographyProps> = (props) => {
    return <h3 className={`text-xl lg:text-2xl p-0 m-0  ${props.className}`}>{props.children}</h3>
}


export const InfoHeader:FC<ITypographyProps> = (props) => {
    return <h5 className={`text-lg lg:text-xl p-0 m-0  ${props.className}`}>{props.children}</h5>
}

