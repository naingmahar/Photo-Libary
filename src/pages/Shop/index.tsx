import { useState } from "react"
import { EFiledName, ELABELS } from "../../assets/static_string"
import { CardContainer } from "../../componet/atoms/Container/CardContainer"
import { MainContainer } from "../../componet/atoms/Container/Container"
import { IconKey } from "../../componet/atoms/icons"
import { ErrorModel, IErrorModelProps, OpenErrorModel } from "../../componet/molecules/Modal/ErrorModel"
import { ISuccessModelProps, OpenSuccessModel, SuccessModel } from "../../componet/molecules/Modal/SuccessModel"
import CoCoFormPage from "../../componet/themes/coco/formPage"
import { STORAGE_KEY, Storage } from "../../feature/storage/localstorage"
import { IAPICreateShop, ICreateShop } from "../../types/models/ICreateShop"
import { useUpdateShop } from "../../feature/query/shop/useShop"
// import { useNavigate } from "react-router-dom"


export const ShopPage = () => {

    // const navigate = useNavigate();
    const shopInfo = Storage.getItemByObjectOrArray<IAPICreateShop>(STORAGE_KEY.shop);
    const [error,setError] = useState("");
    const shopState = useUpdateShop();

    const onSubmit = async (props:ICreateShop) => {
        try {
            //@ts-ignore
            let temp:ICreateShop = {...shopInfo,...props}
            shopState.mutateAsync({id:shopInfo?.id||"",data:temp})
            OpenSuccessModel();
        } catch (error:any) {
            OpenErrorModel()
            setError(error.message)
        }
    }

    const generateSuccessModelParam = ():ISuccessModelProps => {
        return{
            action:{label:ELABELS.close,onClick:()=>{}},
            info:"Successfully Added",
            title:"Product"
        }
    }

    const generateErrorModelParam = (error:string):IErrorModelProps => {
        return{
            action:{label:ELABELS.close,onClick:()=>{}},
            info:error,
            title:"Error"
        }
    }

    return(
        <MainContainer>
            <SuccessModel {...generateSuccessModelParam()}  />
            <ErrorModel {...generateErrorModelParam(error)}  />
            <CardContainer>
                <CoCoFormPage 
                    formData={
                        [
                            {
                                fieldName:EFiledName.name,
                                label:ELABELS.name,
                                icon:IconKey.name,
                                type:"text",
                                value:shopInfo?.name
                            },
                            {
                                fieldName:EFiledName.address,
                                label:ELABELS.address,
                                icon:IconKey.name,
                                type:"text",
                                value:shopInfo?.address
                            },
                            {
                                fieldName:EFiledName.description,
                                label:ELABELS.description,
                                icon:IconKey.info,
                                type:"text",
                                value:shopInfo?.description
                            },
                            {
                                fieldName:EFiledName.domainName,
                                label:ELABELS.shopLink,
                                icon:IconKey.shareIcon,
                                type:"text",
                                value:shopInfo?.subdomain+".picoshop.com",
                                disabled:true
                            }
                        ]}
                    onSubmit={onSubmit}
                    subTitle={ELABELS.shopInfo}
                    title={ELABELS.shopDetails}
                    onCancel={()=>{}}
                    isFetching={shopState.isLoading}
                >
            </CoCoFormPage>
            </CardContainer>
        </MainContainer>
    )
}