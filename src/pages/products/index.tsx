import { ELABELS } from "../../assets/static_string"
import PicoButton from "../../componet/atoms/button/PicoButton"
import SearchInput from "../../componet/atoms/Input/searchInput"
import { useGetAllProducts } from "../../feature/query/products/getAllProducts"
import { useNavigate } from "react-router-dom"
import { ProductTable } from "../../componet/organisms/Tables/ProductsTable"
import { useEffect } from "react"

const ProductsPage = () => {
    const getProducts = useGetAllProducts();
    useEffect(()=>{
        getProducts.mutate({shopId:1,page:1})
    },[])

    let navigate = useNavigate();

    return (
        <div className="flex flex-1 flex-col px-3 lg:mx-20 pt-36 lg:pt-10 justify-center items-center">
            <div className="flex flex-1 justify-between items-center w-full mb-10">
                <div className="w-1/4">
                    <article className="prose prose-slate">
                        <h2>Products</h2>
                    </article>
                    <SearchInput onChange={()=>{}} inputStyle="bg-gray-200" placeholder={ELABELS.search} className="mt-3 " />
                </div>
                <PicoButton label={ELABELS.newProducts} onPress={() => { navigate("create")}} />
            </div>
            <div className="flex flex-1 w-full flex-col mb-10">
                <ProductTable data={getProducts.data?.dataList||[]} />
            </div>

        </div>
    )
}

export default ProductsPage