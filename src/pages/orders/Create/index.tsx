import { EFiledName, ELABELS } from "../../../assets/static_string"
import { IconKey } from "../../../componet/atoms/icons"
import CoCoFormPage from "../../../componet/themes/coco/formPage"

const CreateOrderPage = () => {
    return (
        <CoCoFormPage 
            formData={
                [
                    {fieldName:EFiledName.name,label:ELABELS.name,icon:IconKey.name,type:"text"},
                    {fieldName:EFiledName.address,label:ELABELS.addCategory,icon:IconKey.setting,type:"text"},
                    {fieldName:EFiledName.price,label:ELABELS.price,icon:IconKey.price,type:"text"},
                    {fieldName:EFiledName.password,label:ELABELS.image,icon:IconKey.photo,type:"image",description:ELABELS.empty}
                ]}
            onSubmit={()=>{}}
            subTitle={ELABELS.addOrderDescription}
            title={ELABELS.addOrder}
            onCancel={()=>{}}
        >

        </CoCoFormPage>
    )
}


export default CreateOrderPage