import { useLocation, useNavigate } from "react-router-dom"
import { EFiledName, ELABELS } from "../../../assets/static_string"
import { DELIVERY_TYPES, PRODUCT_TYPES } from "../../../common/static-data"
import { IconKey } from "../../../componet/atoms/icons"
import CoCoFormPage from "../../../componet/themes/coco/formPage"
import { fetchCreateProduct, fetchUpdateProduct } from "../../../feature/apiClient/Products"
import { STORAGE_KEY, Storage } from "../../../feature/storage/localstorage"
import { ICreateShop } from "../../../types/models/ICreateShop"
import { ICreateProduct, IProduct } from "../../../types/models/IProducts"
import { ISuccessModelProps, OpenSuccessModel, SuccessModel } from "../../../componet/molecules/Modal/SuccessModel"
import { ErrorModel, IErrorModelProps, OpenErrorModel } from "../../../componet/molecules/Modal/ErrorModel"
import { useState } from "react"

export const ProductCreatePage = () =>{

    const location = useLocation();
    const navigate = useNavigate();
    const paramState:IProduct = location.state;
    const [error,setError] = useState("");

    const getValue = (key:string) => {
        if(!paramState) return

        //@ts-ignore
        if(paramState[key]) return paramState[key]
        return 
    }

    const isUpdate = () => {
        if(paramState && paramState.id) return true
        return false
    }


    const onUpdate = async (props:ICreateProduct) => {
        // let oldProduct:ICreateProduct = {
        //     additionalinfo:paramState.additionalinfo,
        //     category_id:paramState.category_id.toString(),
        //     description:paramState.name,
        //     images:paramState.imagesUrl.length ? [paramState.imagesUrl[0].url] :[] ,
        //     name:paramState.name,
        //     price:paramState.price.toString(),
        //     shop_id:paramState.shop_id.toString(),
        //     qty:paramState.price.toString(),
        //     delivery_method_id:paramState.delivery_method_id.toString()
        // } 
        try {
            await fetchUpdateProduct(paramState.id.toString(),props)
            OpenSuccessModel();
        } catch (error:any) {
            OpenErrorModel()
            setError(error.message)
        }
    }

    const onsubmit = async (props:ICreateProduct) => {

        try {
            let shop = Storage.getItemByObjectOrArray<ICreateShop>(STORAGE_KEY.shop)
            await fetchCreateProduct({
                additionalinfo:props.additionalinfo,
                category_id:props.category_id,
                description:props.name,
                images:props.images,
                name:props.name,
                price:props.price,
                shop_id:shop?.id|| "",
                qty:props.qty,
                delivery_method_id:props.delivery_method_id
            })
            OpenSuccessModel();
        } catch (error:any) {
            OpenErrorModel()
            setError(error.message)
        }
    }
    const generateSuccessModelParam = ():ISuccessModelProps => {
        if(isUpdate()){
            return{
                action:{label:ELABELS.close,onClick:()=>{navigate("/owner/products")}},
                info:"Successfully Updated",
                title:"Product"
            }
        }

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
        <div className="w-screen h-full pt-5">
            <SuccessModel {...generateSuccessModelParam()}  />
            <ErrorModel {...generateErrorModelParam(error)}  />
            <CoCoFormPage 
                formData={
                    [
                        {
                            fieldName:EFiledName.name,
                            label:ELABELS.name,
                            icon:IconKey.name,
                            type:"text",
                            value:getValue(EFiledName.name)
                        },
                        {
                            fieldName:EFiledName.price,
                            label:ELABELS.price,
                            icon:IconKey.price,
                            type:"text",
                            value:getValue(EFiledName.price)
                        },
                        {
                            fieldName:EFiledName.qty,
                            label:ELABELS.qty,
                            icon:IconKey.price,
                            type:"text",
                            value:getValue(EFiledName.price)
                        },
                        {
                            fieldName:EFiledName.description,
                            label:ELABELS.description,
                            icon:IconKey.info,
                            type:"textarea",
                            value:getValue(EFiledName.description)
                        },
                        {
                            fieldName:EFiledName.images,
                            label:ELABELS.image,
                            icon:IconKey.photo,
                            type:"image",
                            value:getValue("imagesUrl")
                        },
                        {
                            fieldName:EFiledName.category,
                            label:ELABELS.category,
                            icon:IconKey.category,
                            type:"dropdown",
                            dropDownItem:PRODUCT_TYPES,
                            value:getValue(EFiledName.category)
                        },
                        {
                            fieldName:EFiledName.delivery_method_id,
                            label:ELABELS.delivery_method_id,
                            icon:IconKey.category,
                            type:"dropdown",
                            dropDownItem:DELIVERY_TYPES,
                            value:getValue(EFiledName.delivery_method_id)
                        },
                        {
                            fieldName:EFiledName.additionalinfo,
                            label:ELABELS.additionalinfo,
                            icon:IconKey.addDocument,
                            type:"text",
                            value:getValue(EFiledName.additionalinfo)
                        },
                    ]}
                onSubmit={(data)=>{
                    paramState ? onUpdate(data) :onsubmit(data)
                }}
                onCancel={()=>{
                    navigate("/owner/products")
                }}
                subTitle={ELABELS.empty}
                title={isUpdate()?ELABELS.updateProduct:ELABELS.addProduct}
            >

            </CoCoFormPage>
        </div>
    )
} 