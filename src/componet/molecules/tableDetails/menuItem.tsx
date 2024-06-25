import { ELABELS } from "../../../assets/static_string"
import { RowContainer } from "../../atoms/Container/FlexContainer"
import { Icon, IconKey } from "../../atoms/icons"
import { SmLabel } from "../../atoms/typography/typography"

interface ITableDeatailsMenuItem {
    icon:IconKey,
    label:ELABELS
}
export const TableDeatailsMenuItem:React.FC<ITableDeatailsMenuItem> = (props) => {
    return (
        <RowContainer className="justify-center items-center">
            <Icon icon={props.icon} />
            <SmLabel className="ml-1">{props.label}</SmLabel>
        </RowContainer>
    )
}