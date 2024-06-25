import {FC, ReactNode} from 'react'
import { Logo } from '../../atoms/icons/icons'


const PublicTopNavBar:FC<{children?: ReactNode}> = (props) =>{
    return(
        <div className="w-screen bg-zinc-800 shadow-sm lg:px-8 py-2 ">
            <div className="navbar">
                <div className="flex flex-1">
                    <Logo />
                    <a className="btn btn-ghost normal-case text-xl text-white">PicoShop</a>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default PublicTopNavBar