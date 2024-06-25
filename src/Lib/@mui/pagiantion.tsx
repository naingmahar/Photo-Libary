import { Pagination } from "@mui/material"
import { FC } from "react"
import { RowContainer } from "../../componet/atoms/Container/FlexContainer";

interface IProps{
    className?:string,
    count:number,
    onChange:(e:any,page:number)=>any;
}

export const MuiPagenation:FC<IProps> = (props) => {
    return(
        <RowContainer className="justify-center items-center mb-10">
                <Pagination
            onChange={props.onChange }
            className={`${props.className}`}
            count={props.count} />
        </RowContainer>
    )
}