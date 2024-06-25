import { useState } from "react"
import { ELABELS } from "../../assets/static_string"
import BasicInput from "../../componet/atoms/Input/BasicInput"
import ResponsiveButton from "../../componet/atoms/button/responsiveButton"
import { useLogin } from "../../feature/query/login/Login"
import { Text } from "../../componet/atoms/typography/typography"
import { useNavigate } from "react-router-dom"

const LoginPage = () =>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate();

    const validate = () =>{
        if(!email)  {
            setError("Email is empty.")
            return
        }
        if(!password){
            setError("Invalid Password")
            return
        }
        return true
    }

    const { mutate, isLoading } = useLogin();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.warn({email,password})
        if(validate()) {
            mutate({email,password},{onSuccess:()=>{
                console.log("LOGIN ACTION ")
                navigate("/owner/products")
            }})
        };
    };



    return(
        <div className="flex flex-1 justify-center items-center min-h-screen">
            <div className="lg:w-5/12 w-11/12">
                <div className="card w-full bg-base-100 shadow-xl lg:p-10 p-5 border-2">
                    <article className="prose prose-slate">
                        <h2 className="text-center">Pico Shop</h2>
                        <BasicInput type="email" onChange={(val)=>{setEmail(val)}} label={ELABELS.email} placeholder={ELABELS.emailPlaceholder} />
                        <BasicInput type="password" onChange={(val)=>{setPassword(val)}} label={ELABELS.password} placeholder={ELABELS.passwordPlaceholder} />
                        {error && <Text className="mt-5 text-center text-sm text-red-500">{error}</Text>}
                        <ResponsiveButton 
                            label={ELABELS.login} 
                            isLoading={isLoading}
                            onPress={(e)=>handleSubmit(e)} 
                            className='my-5 bg-primary' />
                        {/* <ResponsiveButton label={ELABELS.register} onPress={()=>{}}  /> */}
                    </article>
                </div>
            </div>
        </div>
    )
}

export default LoginPage