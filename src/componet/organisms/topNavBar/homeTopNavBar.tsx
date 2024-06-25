import { SmLabel } from '../../atoms/typography/typography'
import { Logo } from '../../atoms/icons/icons'
import { useNavigate } from 'react-router-dom'

const HomeTopNavBar = () =>{

    let navigate = useNavigate()
    return(
        <div className="w-screen bg-zinc-800 shadow-sm lg:px-8 py-2 ">
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
        </div>
    )
}

export default HomeTopNavBar