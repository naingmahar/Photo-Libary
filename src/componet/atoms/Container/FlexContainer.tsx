import React from "react"
import { AuxProps } from "../../../types/componets/iContainer"
import { BrowserView, MobileView } from "react-device-detect"

export const RowContainer:React.FC<AuxProps> = (props) => {
    return (
        <div className={`flex flex-1 w-full ${props.className}`}>{props.children}</div>
    )
}

export const ColumnContainer:React.FC<AuxProps> = (props) => {
    return (
        <div className={`flex flex-1 flex-col w-full ${props.className}`}>{props.children}</div>
    )
}


export const BrowserRowContainer:React.FC<AuxProps> = (props) => {
    return (
        <BrowserView className={`flex flex-1 w-full ${props.className}`}>{props.children}</BrowserView>
    )
}

export const BrowserColumnContainer:React.FC<AuxProps> = (props) => {
    return (
        <BrowserView className={`flex flex-1 flex-col w-full ${props.className}`}>{props.children}</BrowserView>
    )
}

export const MobileRowContainer:React.FC<AuxProps> = (props) => {
    return (
        <MobileView className={`flex flex-1 w-full ${props.className}`}>{props.children}</MobileView>
    )
}

export const MobileColumnContainer:React.FC<AuxProps> = (props) => {
    return (
        <MobileView className={`flex flex-1 flex-col w-full ${props.className}`}>{props.children}</MobileView>
    )
}


