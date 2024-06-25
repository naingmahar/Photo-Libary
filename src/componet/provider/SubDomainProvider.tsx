import { FC, ReactNode, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { shopState } from "../../feature/recoilState"
import { useGetDomainShop } from "../../feature/query/shop/useShop"

interface IProps {
    className?:string,
    children:ReactNode|ReactNode[]
}

export const SubDomainProvider:FC<IProps> = (props) => {
    const setState = useSetRecoilState(shopState)

    let url = window.location.origin
    let pureUrl = url.replace("www.","")
    console.log(pureUrl,pureUrl.search("."))
    let subdomain = pureUrl.search(".") >0 ? pureUrl.split(".")[0] : "raphaelteleshop"

    const domainShop = useGetDomainShop(subdomain);

    useEffect(()=>{
        console.log("SET PARAMA",domainShop.data)
        if(domainShop.data) setState(domainShop.data)
    },[domainShop])

    return(
        <div className={props.className||""}>
            {props.children}
        </div>
    )
}