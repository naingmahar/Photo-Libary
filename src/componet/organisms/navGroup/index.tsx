import { useEffect, useState } from "react"
import { IconKey } from "../../atoms/icons"
import NavTag from "../../molecules/navTag"
import { isMobile } from "react-device-detect"
import BottomNavTag from "../../molecules/bottomNavTag"
import { useLocation } from "react-router-dom"

const NavGroup = () => {

    const [active,setActive] = useState("/")

    const location = useLocation();

    useEffect(()=>{
        console.log("Path Name",window.location.pathname)
        setActive(window.location.pathname)
    },[location])

    const checkRoute = (route:string) => {
        console.warn(route,active)
        return active === route ? true : false
    }

    const navData = [
        {label:"Orders",icon:IconKey.order,route:"/owner/orders"},
        {label:"Customers",icon:IconKey.group,route:"/owner/customers"},
        {label:"Products",icon:IconKey.product,route:"/owner/products"},
        {label:"Setting",icon:IconKey.setting,route:"/owner/setting"},
    ]

    if(isMobile){
        return(
            <>
                {navData.map((navProps)=>(
                    <BottomNavTag key={navProps.route} {...navProps} active={checkRoute(navProps.route)} />
                ))}
            </>
        )
    }

    return(
        <ul className="menu lg:menu-horizontal">
            {navData.map((navProps)=>(
                <NavTag key={navProps.route} {...navProps} active={checkRoute(navProps.route)} />
            ))}
        </ul>
    )
}

export default NavGroup