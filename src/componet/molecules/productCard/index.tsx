interface IProductCard {
    img:string,
    label:string,
    price:string|number
    onPress:()=>any;
}

export const ProductCard = (props:IProductCard) => {
    return(
        <div onClick={()=>{props.onPress()}} className="card bg-base-100 shadow-xl p-5 mb-5">
            <figure><img className="max-h-60" src={props.img} alt={props.label} /></figure>
            <div className="card-body px-0 py-0">
                <div className="bg-zinc-400 bg-opacity-10 px-5 py-2 my-2 rounded-lg">
                    <p>{props.label} | 💰 {props.price}</p>
                </div>
                
            </div>
        </div>
    )
}
