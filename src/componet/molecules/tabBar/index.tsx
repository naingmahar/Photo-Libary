import { useRef } from "react"
import TabButton from "../../atoms/button/tabButton"
import { isBrowser } from "react-device-detect";
import { ELABELS } from "../../../assets/static_string";

const OrderTabs = [
    {name:ELABELS.allOrders,route:"/orders"},
    {name:ELABELS.customers,route:"/customers"},
    {name:ELABELS.review,route:"/review"},
]

const ProductTabs = [
    {name:ELABELS.products,route:"/products"},
    {name:ELABELS.categories,route:"/categories"},
    {name:ELABELS.bundles,route:"/bundles"},
]

enum ETAB {
    ORDER = "ORDER",
    PRODUCT = "PRODUCT",
    OTHER = "OTHER"
}

const TabBar =  () => {
    const ref = useRef<any>();
    // const scroll = (scrollOffset: number) => {
    //     console.warn("CLICK",ref.current.scrollLeft)
    //     ref.current.scrollLeft += scrollOffset;
    // };
    
    let findTabName = () =>{
        let currentTab:ETAB = ETAB.OTHER;
        let location = window.location.pathname;
        let locationArr = location.split("/")
        let lastLocationPath = `/${locationArr[locationArr.length -1]}`

        const searchTab = (tabs :{name:ELABELS,route:string}[],returnTab:ETAB) => {
            for (let index = 0; index < tabs.length; index++) {
                const tab = tabs[index];
                if(lastLocationPath === tab.route) return returnTab
                // let finddIndex =  location.search(tab.route)
                // if(finddIndex !== -1) return returnTab
            }
        }

        let isOrderTab = searchTab(OrderTabs,ETAB.ORDER) ?? false
        if(isOrderTab) currentTab = ETAB.ORDER

        let isProductTab = searchTab(ProductTabs,ETAB.PRODUCT)?? false
        if(isProductTab) currentTab = ETAB.PRODUCT

        return currentTab
    }

    let currentTabName = findTabName() 

    let tabs = currentTabName == ETAB.ORDER ? OrderTabs : ProductTabs;
    if(currentTabName === ETAB.OTHER) return <div />

    if(isBrowser){
        return(
            <div className="mt-5 lg:px-20 lg:mt-10 px-10 max-w-2xl space-x-5" ref={ref}>
                {
                    tabs.map((tab)=>(
                        <TabButton key={tab.route} label={tab.name} onPress={()=>{}} className="rounded-3xl" />
                    ))
                }
            </div>
        )
    }

    return (
        <div className="carousel carousel-center mt-2 max-w-sm" ref={ref}>
            {
                OrderTabs.map((tab)=>(
                    <TabButton key={tab.route} label={tab.name} onPress={()=>{}} className="carousel-item rounded-3xl ml-3" />
                ))
            }
        </div>
        // <div className="relative carousel carousel-center mt-5 max-w-sm" ref={ref}>
        //     {
        //         OrderTabs.map((order)=>(
        //             <TabButton label={order} onPress={()=>{}} className="carousel-item rounded-3xl" />
        //         ))
        //     }
        //     <a className="absolute py-5 px-3 top-0 bg-white right-0" onClick={()=>scroll(200)}>&#10095;</a>
        //     <a className="absolute py-5 px-3 top-0 bg-white left-0" onClick={()=>scroll(-200)}>&#10094;</a>
        // </div>
    )
}

export default TabBar