import {FC, ReactNode} from 'react'
import { Icon, IconKey } from '../../atoms/icons'
import { Logo } from '../../atoms/icons/icons'
import { fetchLogout } from '../../../feature/apiClient/Auth'
import { useNavigate } from 'react-router-dom'

// const TopNavBar:FC<{children?: ReactNode}> = (props) =>{
//     return(
//         <div className="navbar">
//           <div className="flex-none">
//             <a className="btn btn-ghost normal-case text-xl text-black">Pico Shop</a>
//           </div>
//           {props.children}
//           <div className="flex-none gap-2">
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
//                 <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
//                   <span>MX</span>
//                 </div>
//               </label> 
//               <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//                 <li>
//                   <a className="justify-between">
//                     Profile
//                     <span className="badge">New</span>
//                   </a>
//                 </li>
//                 <li><a>Logout</a></li>
//               </ul>
//             </div>
//             <button className="btn btn-ghost btn-circle">
//                 <div className="indicator">
//                     <Icon icon={IconKey.noti} />
//                     <span className="badge badge-xs badge-warning indicator-item"></span>
//                 </div>
//             </button>
//         </div>
//         </div>
//     )
// }


{/* <div className="w-screen bg-zinc-800 shadow-sm px-8 py-2 ">
            <div className="navbar">
                <div className="flex flex-1">
                    <Logo />
                    <a className="btn btn-ghost normal-case text-xl text-white">PicoShop</a>
                </div>
                <div>
                    <button className="btn px-5 me-3 bg-zinc-800 border-zinc-800" onClick={()=>{navigate("/login")}}>
                        <SmLabel className='text-white'>Log In</SmLabel>
                    </button>

                    <button className="btn px-5" onClick={()=>{navigate("/register/1")}}>
                        <SmLabel>Register</SmLabel>
                    </button>

                </div>
            </div>
        </div> */}

// const userInfo = getStoreUserInfo<IUser>();

const TopNavBar:FC<{children?: ReactNode}> = (props) =>{

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetchLogout();
    } catch (error) {}
    finally{
      navigate("/login")
    }
  }

  return(
    <div className="w-screen bg-zinc-800 shadow-sm lg:px-8 py-2 ">
      <div className="navbar">
        <div className="flex-none">
          <Logo />
          <span><a className="btn btn-ghost normal-case text-xl text-white">PicoShop</a></span>
        </div>
        {props.children}
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label className="avatar placeholder" onClick={()=>navigate("shop")}>
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <Icon icon={IconKey.shop} className='text-cyan-50' />
              </div>
            </label>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <Icon icon={IconKey.user} className='text-cyan-50' />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><a onClick={()=>{navigate("profile")}}>Profile</a></li>
              <li></li>
              <li><a onClick={()=>{logout()}}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar