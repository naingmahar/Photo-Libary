import { UnderLineFluid } from "../lineBreak"

export const Collapses = (props:{className?:string,data:{title:string,label:string}[]})=> {
    return(
        <div className={`${props.className}`}>
            {
                props.data.map((data,index)=>{
                    return (
                        <div key={index} className="lg:py-5">
                            <div className="collapse collapse-plus">
                                <input type="checkbox" />
                                <div className="collapse-title lg:text-xl font-medium">
                                    {data.title}
                                </div>
                                <div className="collapse-content"> 
                                    <p>{data.label}</p>
                                </div>
                            </div>
                            <UnderLineFluid />
                        </div>
                    )
                })
            }
           
        </div>
    )
}