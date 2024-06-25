import { ColumnContainer, RowContainer } from "../../atoms/Container/FlexContainer"
import { Icon, IconKey, IconsSize } from "../../atoms/icons"
import { Header, Label, LgLabel, SubHeader } from "../../atoms/typography/typography"

interface IProps {
    label:string,
    isLoading:boolean,
    isSuccess:boolean,
    isFailed:boolean,
    successLabel?:string,
    successDescription?:string,
    failLabel?:string,
    failTitle?:string,
}
export const LoadingLabel = (props:IProps) => {
    if(props.isLoading){
        return (
            <RowContainer className="justify-center items-center py-1 px-0">
                <span className="loading loading-ring lg:loading-lg loading-lg text-info me-5"></span>
                <ColumnContainer className="justify-center py-3">
                    <Label className="text-sky-700 font-semibold">{props.label || ""}</Label>
                </ColumnContainer>
            </RowContainer>
        )
    }

    if(props.isSuccess){
        return (
            <RowContainer className="justify-center items-center py-1">
                <Icon icon={IconKey.success} size={IconsSize.xl} className="text-green-500 me-5" />
                <ColumnContainer className="justify-center py-3">
                    <Label className="text-green-700 font-semibold">{props.successLabel || ".."}</Label>
                </ColumnContainer>
            </RowContainer>
        )
    }

    if(props.isFailed){
        return (
            <RowContainer className="justify-center items-center py-1 px-0">
                <Icon icon={IconKey.fail} size={IconsSize.xl} className="text-red-500 me-5" />
                <ColumnContainer className="justify-center py-3">
                    <Label className="text-orange-600 font-semibold">{props.failTitle || ".."}</Label>
                    <Label className="text-orange-500">{props.failLabel || ""}</Label>
                </ColumnContainer>
            </RowContainer>
        )
    }
}


export const LoadingHeader = (props:IProps) => {
    if(props.isLoading){
        return (
            <ColumnContainer className="justify-center items-center py-1 px-0">
                <span className="loading loading-spinner loading-lg "></span>
                <ColumnContainer className="justify-center items-center py-3">
                    <Header className="font-semibold">{props.label || ""}</Header>
                </ColumnContainer>
            </ColumnContainer>
        )
    }

    if(props.isSuccess){
        return (
            <ColumnContainer className="justify-center items-center py-1">
                 <Icon icon={IconKey.package} size={IconsSize.xxl} className="text-green-500 me-5" />
                <ColumnContainer className="justify-center py-3 items-center">
                    <SubHeader className="font-semibold mb-5">{props.successDescription || ""}</SubHeader>
                    <Header className=" font-semibold">{props.successLabel || ".."}</Header>
                </ColumnContainer>
            </ColumnContainer>
        )
    }

    if(props.isFailed){
        return (
            <ColumnContainer className="justify-center items-center py-1 px-0">
                <Icon icon={IconKey.package} size={IconsSize.xxl} className="text-red-500 me-5" />
                <ColumnContainer className="justify-center py-3 items-center">
                    <Header className=" font-semibold">{props.failTitle || ".."}</Header>
                    <LgLabel className="font-semibold mt-5 text-red-600">{props.failLabel || ""}</LgLabel>
                </ColumnContainer>
            </ColumnContainer>
        )
    }
}