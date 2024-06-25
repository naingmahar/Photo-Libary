import { FC, useState } from "react";
import { ColumnContainer, RowContainer } from "../../../componet/atoms/Container/FlexContainer";
import { PublicNavBar } from "../../../componet/themes/nav";
import { ISuccessModelProps, OpenSuccessModel, SuccessModel } from "../../../componet/molecules/Modal/SuccessModel";
import { ErrorModel, IErrorModelProps, OpenErrorModel } from "../../../componet/molecules/Modal/ErrorModel";
import CoCoFormPage from "../../../componet/themes/coco/formPage";
import { EFiledName, ELABELS } from "../../../assets/static_string";
import { IconKey } from "../../../componet/atoms/icons";
import { ICustomer } from "../../../types/models/ICustomer";
import { useCreateCustomer } from "../../../feature/query/login/Login";
import { MainContainer } from "../../../componet/atoms/Container/Container";
import { STORAGE_KEY, Storage } from "../../../feature/storage/localstorage";
import { useNavigate } from "react-router-dom";
import { DELIVERY_TYPES } from "../../../common/static-data";

interface IProps {

}
export const CreateCustomer: FC<IProps> = () => {
    const [error, setError] = useState("");
    const createCustomerState = useCreateCustomer();
    const oldData = Storage.getItemByObjectOrArray<ICustomer>(STORAGE_KEY.customer);
    const navigate = useNavigate();

    const onSubmit = async (props: ICustomer) => {
        try {
            let newData= {...oldData,...props}
            await createCustomerState.mutateAsync(newData)
            OpenSuccessModel();
        } catch (error: any) {
            console.warn("ERROR",error)
            OpenErrorModel()
            setError(error.message)
        }
    }

    const generateSuccessModelParam = (): ISuccessModelProps => {
        return {
            action: { label: ELABELS.close, onClick: () => {navigate("/order") } },
            info: "Successfully Added",
            title: "Profile"
        }
    }

    const generateErrorModelParam = (error: string): IErrorModelProps => {
        return {
            action: { label: ELABELS.close, onClick: () => { } },
            info: error,
            title: "Error"
        }
    }

    return (
        <ColumnContainer className="min-h-screen w-screen items-center mb-8">

            <PublicNavBar />

            <SuccessModel {...generateSuccessModelParam()} />
            <ErrorModel {...generateErrorModelParam(error)} />

            <MainContainer className="mt-24">
                <RowContainer>
                    <CoCoFormPage
                        formData={
                            [
                                {
                                    fieldName: EFiledName.name,
                                    label: ELABELS.name,
                                    icon: IconKey.name,
                                    type: "text",
                                    value:oldData?.name
                                },
                                {
                                    fieldName: EFiledName.email,
                                    label: ELABELS.email,
                                    icon: IconKey.name,
                                    type: "text",
                                    value:oldData?.email
                                },
                                {
                                    fieldName: EFiledName.phone,
                                    label: ELABELS.phone,
                                    icon: IconKey.phone,
                                    type: "text",
                                    value:oldData?.phno
                                },
                                {
                                    fieldName:EFiledName.delivery_method_id,
                                    label:ELABELS.delivery_method_id,
                                    icon:IconKey.delivery,
                                    type:"dropdown",
                                    dropDownItem:DELIVERY_TYPES
                                }
                            ]}
                        onSubmit={onSubmit}
                        subTitle={ELABELS.empty}
                        title={ELABELS.customers}
                        onCancel={() => { }}
                        hideActionBar

                    >

                    </CoCoFormPage>
                    
                </RowContainer>
            </MainContainer>
        </ColumnContainer>
    )
}