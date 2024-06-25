import { FC } from "react"
import { ColumnContainer, RowContainer } from "../../atoms/Container/FlexContainer"
import { SmLabel } from "../../atoms/typography/typography"

interface IProps{
    title:string,
    info:string|number|JSX.Element|JSX.Element[],
    isImage?:boolean,
    className?:string,
    isHeader?:boolean
}

export const TableDetailsInfoItem:FC<IProps> = (props) => {
    console.log("Details",props.info)
    return(
        <RowContainer className={`mb-3 ${props.className}`}>
            <ColumnContainer>
                <SmLabel className={`${props.isHeader ? "font-bold":""}`}>{props.title}</SmLabel>
            </ColumnContainer>
            {
                !props.isImage && 
                <ColumnContainer className="items-end">
                    <div className="text-xs p-0 m-0">{props.info}</div>
                </ColumnContainer>
            }
            {
                props.isImage && 
                <ColumnContainer className="items-end">
                    <img src={props.info.toString()} className="w-3/6 h-auto rounded-xl" />
                </ColumnContainer>
            }
        </RowContainer>
    )
}