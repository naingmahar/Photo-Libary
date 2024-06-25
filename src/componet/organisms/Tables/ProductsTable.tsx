import {  useRecoilValue } from "recoil"
import { IProduct } from "../../../types/models/IProducts"
import { CardContainer } from "../../atoms/Container/CardContainer"
import { CheckTableBody } from "../../molecules/table/tBody"
import CheckTableHeader from "../../molecules/table/theader"
import { TableDetails } from "./SubComponet/TableDetail"
import { selectedTableRow } from "../../../feature/recoilState"
import { NO_IMAGE_URL } from "../../../assets/static_string"


export const ProductTable = (props:{data:IProduct[]}) => {
    const selectedRow = useRecoilValue(selectedTableRow);

    return (
        <div className="overflow-x-auto flex flex-1 w-full">
            <CardContainer>
                <table className="table">
                    <CheckTableHeader headers={["Preview", "Name", "Price","Description"]} status={false} statusOnChange={() => { }} />
                    <CheckTableBody data={props.data || []} />
                </table>
            </CardContainer>
            {selectedRow && 
                <TableDetails 
                    header={selectedRow.data.name} 
                    info={[
                        {label:"Price Shown",text:selectedRow.data.price},
                        {label:"Description",text:selectedRow.data.description},
                        {label:"Image",text:selectedRow.data.imagesUrl.length?selectedRow.data.imagesUrl[0].url:NO_IMAGE_URL,isImage:true},
                        {label:"Show in store",text:"Yes"}
                    ]} />}
        </div>
    )
}