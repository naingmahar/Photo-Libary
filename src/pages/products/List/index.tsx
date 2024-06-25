import { FC, useEffect, useState } from "react";
import { useGetAuthProducts } from "../../../feature/query/products/getAllProducts";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../../componet/molecules/productCard";
import { Button } from "../../../componet/atoms/button";
import { CardHeaderText, CardInfoText } from "../../../componet/atoms/typography/typography";
import { CardContainer } from "../../../componet/atoms/Container/CardContainer";
import { ColumnContainer } from "../../../componet/atoms/Container/FlexContainer";
import PicoButton from "../../../componet/atoms/button/PicoButton";
import { StoreUserInfo, getStoreUserInfo } from "../../../feature/storage/UserStorage";
import { IUser } from "../../../types/models/ILogin";
import { fetchSendOTP } from "../../../feature/apiClient/Auth";
import { useVerifyOTP } from "../../../feature/query/login/Login";
import { IPopupAlert, PopupAlert } from "../../../componet/atoms/Alert";
import { BrowserView, MobileView } from "react-device-detect";
import { ELABELS } from "../../../assets/static_string";

export const ProductList: FC<any> = () => {

    const verifyState = useVerifyOTP()
   const [showModal,setModel] = useState(true);
    const getProductState = useGetAuthProducts();
    const [showAlert, setAlert] = useState<IPopupAlert>({ current: "close", label: "", type: "success" });

    useEffect(()=>{
        getProductState.mutate(1)
    },[])

    const getAllValue = () => {
       //@ts-ignore
        let v1 = document.getElementById(`otp0`)?.value
        //@ts-ignore
        let v2 = document.getElementById(`otp1`)?.value
        //@ts-ignore
        let v3 = document.getElementById(`otp2`)?.value
        //@ts-ignore
        let v4 = document.getElementById(`otp3`)?.value
        //@ts-ignore
        let v5 = document.getElementById(`otp4`)?.value
        //@ts-ignore
        let v6 = document.getElementById(`otp5`)?.value
        return [v1,v2,v3,v4,v5,v6]
    }

    const isHasValue = (val:string) => {
        let value = parseInt(String(val))
        if(value >= 0) return true;
        return false
    }

    const isValidValue= () => {
        let temp = "";
        getAllValue().map(row=>{
            if(isHasValue(row)) temp += row;
            else {
                return temp = ""
            }
        })
        return temp
    }

    const setOneOtp = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            document.getElementById(`otp${index + 1}`)?.focus()
        }

        console.warn("VALID VALUE",isValidValue())
        if(isValidValue()){
            verifyOTP(isValidValue())
        };
    }
    let navigate = useNavigate();

    const generateOTPBox = () => {
        let ui = [];
        let borderColor = verifyState.isError ? "border-red-500" : ""
        for (let index = 0; index < 6; index++) {
            ui.push(
                <input
                    key={index}
                    className={`m-2 border h-10 w-10 text-center form-control rounded ${borderColor}`}
                    type="text"
                    id={`otp${index}`}
                    maxLength={1}
                    onChange={(e) => setOneOtp(index, e)}
                    onKeyDown={(e) => {
                        //@ts-ignore
                        let val = document.getElementById(`otp${index}`)?.value
                        if (e.key === "Backspace") {
                            if (!val) {
                                document.getElementById(`otp${index - 1}`)?.focus()
                            }
                        }
                    }}
                />
            )
        }
        return ui;
    }

    let userData = getStoreUserInfo<IUser>();

    const sendOTP = () => {
        fetchSendOTP({ email: userData?.email || "" });
    }

    const closeModel = () => {
        setModel(false);
        setTimeout(()=>{
            setModel(true)
        },1000)
    }
    const verifyOTP = async (code:string) => {
        verifyState.mutate({ email: userData?.email || "", code: code }, {
            onSuccess: (data) => {
                StoreUserInfo(data.data.user);
                setAlert({ current: "show", label: "Confirmed Email", type: "success" })
                closeModel()
            },
            onError: (error:any) => {
                let message = "Retry Again"
                if(error.response && error.response.data && error.response.data.message){
                    message = error.response.data.message
                }
                closeModel()
                setAlert({ current: "show", label: message, type: "error" })
            }
        });
    }



    return <div className="flex flex-1 flex-col px-3 w-screen">
        {/* <div className="flex flex-1 my-5 justify-between items-center">
            <Icon className="text-black" size={IconsSize.lg} icon={IconKey.nav}></Icon>
            <div className="rounded-full p-2 bg-zinc-500 bg-opacity-10">
                <Icon className="text-black" icon={IconKey.user}></Icon>
            </div>
        </div> */}
        {/* <div className="flex flex-1 my-5 justify-center items-center">
            <h3 className="text-xl font-semibold">Welcome to your shop!</h3>
        </div> */}

       {!showModal && <PopupAlert {...showAlert} />}
        {!userData?.email_verified_at &&
            <MobileView className="mt-5 lg:max-w-md">
                <CardContainer className="p-5"> 
                    <CardHeaderText>Verify your account first</CardHeaderText>
                    <CardInfoText className="my-5"> You need to verify your account to continue</CardInfoText>
                    <ColumnContainer>
                        <PicoButton
                            onPress={() => {
                                sendOTP();
                                setModel(true)
                                //@ts-ignore
                                document.getElementById('my_modal_5').showModal()
                            }} label={ELABELS.verifyAccount} />
                    </ColumnContainer>
                </CardContainer>
            </MobileView>
        }

        {!userData?.email_verified_at &&
            <BrowserView className="alert bg-orange-400 my-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>You need to verify your account to continue.</span>
                <div>
                    <button className="btn btn-sm btn-outline" onClick={() => {
                                sendOTP();
                                setModel(true)
                                //@ts-ignore
                                document.getElementById('my_modal_5').showModal()
                            }}>Verify</button>
                </div>
            </BrowserView>
        }

        


        {showModal &&<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <PopupAlert {...showAlert} />
                <div className="px-3">
                    <div className="container mx-auto">
                        <div className="max-w-sm mx-auto md:max-w-lg">
                            <div className="w-full">
                                <div className="bg-white h-64 py-3 rounded text-center">
                                    <h1 className="text-2xl font-bold">OTP Verification</h1>
                                    <div className="flex flex-col mt-4">
                                        <span>Enter the OTP you received at</span>
                                        <span className="font-bold">{userData?.email}</span>
                                    </div>

                                    <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                        {
                                            generateOTPBox()
                                        }
                                    </div>

                                    <div className="flex justify-center text-center mt-5">
                                        <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer" onClick={sendOTP}>
                                            {verifyState.isLoading && <span className="loading loading-spinner loading-md"></span>}
                                            <span className="font-bold">Resend OTP</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>}


        <div className="flex flex-1 lg:px-5 my-5 justify-between items-center">
            <h3 className="text-xl font-semibold">Product</h3>
            <Button onPress={() => { navigate("create") }} className="bg-sky-500 text-white px-3 py-0 btn-sm">{ELABELS.add}</Button>
        </div>
        <div className="grid lg:px-5 lg:grid-cols-6 gap-4 sm:grid-cols-6 md:grid-cols-6 max-w-full">
            {getProductState.data &&
            getProductState.data.map((row, index) => <ProductCard
                onPress={() => navigate("create", { state: row })}
                key={index}
                img={row.imagesUrl[0] ? row.imagesUrl[0].url : "https://louisville.edu/history/images/noimage.jpg/"}
                label={row.name} price={row.price} />)}
        </div>

    </div>

}