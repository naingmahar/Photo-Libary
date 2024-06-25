import { FC } from "react"
import { CardContainer } from "../../../atoms/Container/CardContainer"
import { UnderLineFluid } from "../../../atoms/lineBreak"
import { CardHeaderText } from "../../../atoms/typography/typography"
import { TableDetailsInfoItem } from "../../../molecules/tableDetails/infoItem"

// let IMAGE = "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png"

export interface ITableDetailsProps {
    header:string,
    info:ITableDetailsPropsInfo[]
}

export interface ITableDetailsPropsInfo {
    label:string,
    text:string|number|JSX.Element|JSX.Element[],
    isImage?:boolean,
    className?:string,
    isHeader?:boolean
}

export const TableDetails:FC<ITableDetailsProps> = (props) => {
    return (
        <div className="lg:w-4/12 ml-2">
                <CardContainer className="px-5" >
                    {/* <RowContainer className="justify-between">
                        <TableDeatailsMenuItem icon={IconKey.edit} label={ELABELS.edit} />
                        <TableDeatailsMenuItem icon={IconKey.delete} label={ELABELS.delete} />
                        <TableDeatailsMenuItem icon={IconKey.close} label={ELABELS.close} />
                    </RowContainer> */}

                    {
                       props.header && 
                       <>
                        {/* <UnderLineFluid className="my-3" /> */}
                        <CardHeaderText>{props.header}</CardHeaderText>
                       </> 
                    }

                    <UnderLineFluid className="my-3" />

                    {
                        props.info.map((row,index)=>(
                            <TableDetailsInfoItem className={row.className} key={index} title={`${row.label}`} info={row.text} isImage={row.isImage} isHeader={row.isHeader} />
                        ))
                    }

                    
                    {/* <TableDetailsInfoItem title="Price Shown" info="K 20,000" />
                    <TableDetailsInfoItem title="Description" info="Chocolate coated donut" />
                    <TableDetailsInfoItem title="Image" info={IMAGE} isImage />
                    <TableDetailsInfoItem title="Show In Store" info="Yes" /> */}

                </CardContainer>
        </div>
    )
}