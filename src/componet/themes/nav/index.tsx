// import NavGroup from "../../organisms/navGroup"
import TopNavBar from "../../organisms/topNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import PublicTopNavBar from "../../organisms/topNavBar/publicTopNavBar";
import { BrowserView, MobileView } from "react-device-detect";
import NavGroup from "../../organisms/navGroup";
import { IconKey } from "../../atoms/icons";
import IconButton from "../../atoms/button/IconButton";
import { ELABELS } from "../../../assets/static_string";
import { useRecoilValue } from "recoil";
import { getShoppingCartCountState } from "../../../feature/recoilState";

const BottomNavBar = () => {
  return(
      <div className="btm-nav shadow-[0px_-1px_2px_0px_#00000024] z-50">
        <NavGroup />  
      </div>
  )
}

// const TopNavBarLg = () =>{
//     return(
//       <>
//         <div className=" w-screen bg-white shadow-sm">
//           <TopNavBar>
//             <div className='flex-1'>
//               <NavGroup />
//             </div>
//           </TopNavBar>
//         </div>
//         <TabBar />
//       </>
//     )
// }

// const TopNavBarSm = () =>{
//   return(
//       <div className="fixed top-0 w-screen z-50 bg-white shadow-sm pb-3">
//         <TopNavBar>
//           <div className='flex-1' />
//         </TopNavBar>
//         <TabBar />
//       </div>
//   )
// }

// const NavBar = () => {
//   return(
//     <>
//       <MobileView><TopNavBarSm /></MobileView>
//       <BrowserView><TopNavBarLg /></BrowserView>
//       <MobileView><BottomNavBar /></MobileView>
//       <Outlet />
//     </>
//   )
// }
const NavBar = () => {
  return(
    <>
      <TopNavBar>
        <div className='flex-1'>
        <BrowserView><NavGroup /></BrowserView>
        </div>
      </TopNavBar>
      <MobileView><BottomNavBar /></MobileView>
      <Outlet />
    </>
  )
}
export const PublicNavBar = () =>{
  const cartCount = useRecoilValue(getShoppingCartCountState);
  const navigate = useNavigate();
  return(
      <div className="fixed top-0 w-screen z-50 bg-white shadow-sm">
        <PublicTopNavBar>
            <div className="flex justify-center items-center h-10 w-12">
              <div className="relative">
                <IconButton 
                    className="btn-link" 
                    iconClass="text-white" 
                    icon={IconKey.shoppingCart} 
                    label={ELABELS.empty} 
                    onPress={()=>{
                      if(cartCount)navigate("/carts")
                    }} />
                  <div className="absolute right-0 top-0 w-5 h-5 text-center bg-red-500 leading-5 text-white rounded-full">
                    {cartCount}
                  </div>
              </div>

              <IconButton 
                    className="btn-link" 
                    iconClass="text-white" 
                    icon={IconKey.shop} 
                    label={ELABELS.empty} 
                    onPress={()=>{
                      navigate("/")
                    }} />

            </div>
        </PublicTopNavBar>
        {/* <TabBar /> */}
      </div>
  )
}
export default NavBar