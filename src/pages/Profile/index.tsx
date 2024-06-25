import { useState } from "react"
import { EFiledName, ELABELS } from "../../assets/static_string"
import { CardContainer } from "../../componet/atoms/Container/CardContainer"
import { MainContainer } from "../../componet/atoms/Container/Container"
import { IconKey } from "../../componet/atoms/icons"
import CoCoFormPage from "../../componet/themes/coco/formPage"
import { getStoreUserInfo } from "../../feature/storage/UserStorage"
import { useUpdateProfile } from "../../feature/query/login/Login"
import { ISuccessModelProps, OpenSuccessModel, SuccessModel } from "../../componet/molecules/Modal/SuccessModel"
import { ErrorModel, IErrorModelProps, OpenErrorModel } from "../../componet/molecules/Modal/ErrorModel"
import { IUser } from "../../types/models/IRegister"


export const ProfilePage = () => {

    const userInfo = getStoreUserInfo<IUser>();

    // const navigate = useNavigate();
    const [error,setError] = useState("");
    const updateState = useUpdateProfile();

    const onSubmit = async (props:IUser) => {
        try {
            updateState.mutateAsync({id:userInfo?.id||"",data:props})
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
            title:"Profile"
        }
    }

    const generateErrorModelParam = (error:string):IErrorModelProps  => {
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
                                value:userInfo?.name
                            },
                            {
                                fieldName:EFiledName.email,
                                label:ELABELS.email,
                                icon:IconKey.name,
                                type:"text",
                                value:userInfo?.email,
                                disabled:true
                            },
                            {
                                fieldName:EFiledName.phone,
                                label:ELABELS.phone,
                                icon:IconKey.phone,
                                type:"text",
                                value:userInfo?.phno
                            }
                        ]}
                    onSubmit={onSubmit}
                    subTitle={ELABELS.accountInfoText}
                    title={ELABELS.account}
                    onCancel={()=>{}}
                >

            </CoCoFormPage>
            </CardContainer>
        </MainContainer>
    )
}