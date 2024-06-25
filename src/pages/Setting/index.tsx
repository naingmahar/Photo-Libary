import  { FC, useEffect, useState } from "react"
import { CardContainer } from "../../componet/atoms/Container/CardContainer"
import { RowContainer } from "../../componet/atoms/Container/FlexContainer"
import { SgFlag } from "../../componet/atoms/icons/icons"
import { STORAGE_KEY, Storage } from "../../feature/storage/localstorage"
import { IAPICreateShop } from "../../types/models/ICreateShop"
import { InfoHeader, Label, SmLabel } from "../../componet/atoms/typography/typography"
import ResponsiveButton from "../../componet/atoms/button/responsiveButton"
import { IconKey } from "../../componet/atoms/icons"
import { ELABELS } from "../../assets/static_string"

export const SettingPage:FC = () => {
    const [show,setShow] = useState(false);

    useEffect(()=>{
        if(show) setTimeout(()=>{setShow(false)},1000)
    },[show])

    const shopInfo = Storage.getItemByObjectOrArray<IAPICreateShop>(STORAGE_KEY.shop); 
    return (
        <div className="flex flex-1 flex-col px-3 lg:mx-20 pt-36 lg:pt-30 justify-center items-center max-w-full">
            <CardContainer className="max-w-sm py-5">
                <RowContainer className="flex-grow-0 justify-end">
                    <div className="flex w-5 h-5 justify-center items-center"><SgFlag /></div>
                </RowContainer>
                <RowContainer className="justify-center">
                    <img src={shopInfo?.imageUrl} className="w-40 h-auto" />
                </RowContainer>
                <RowContainer className="justify-center">
                    <InfoHeader>{`Welcome to ${shopInfo?.name}`}</InfoHeader>
                </RowContainer>

                <RowContainer className="justify-center items-center mt-5">
                    <Label className="font-semibold text-gray-500">{`https://${shopInfo?.subdomain}.${window.location.host}`}</Label>
                </RowContainer>

                <RowContainer className="justify-center items-center mt-5">
                    <ResponsiveButton label={ELABELS.orderNow} icon={IconKey.shop} className="btn-neutral" 
                    onPress={()=>{console.log("window.location.origin",shopInfo?.subdomain+"."+window.location.host)
                        window.location.replace("https://"+shopInfo?.subdomain+"."+window.location.host)
                        }} />
                </RowContainer>
                <RowContainer className="justify-center items-center mt-5">
                    <ResponsiveButton label={ELABELS.copyShopUrl} icon={IconKey.shareIcon} className="btn-neutral" 
                    onPress={()=>{
                        setShow(true)
                        navigator.clipboard.writeText("https://"+shopInfo?.subdomain+"."+window.location.host)}}
                    />
                </RowContainer>
            </CardContainer>

            {show&&<RowContainer className="mt-5 justify-center">
                <CardContainer className="flex flex-1 max-w-sm rounded-2xl border-success justify-center" >
                    <SmLabel className="font-semibold">Copied to clipboard!</SmLabel>
                </CardContainer>
            </RowContainer>}
        </div>
    )
}