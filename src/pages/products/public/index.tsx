import { FC, useEffect } from "react";
import { useGetAllProducts } from "../../../feature/query/products/getAllProducts";
// import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../../componet/molecules/productCard";
import { PublicNavBar } from "../../../componet/themes/nav";
import { productDetailsState, shopState } from "../../../feature/recoilState";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ShopLoader } from "../../../componet/themes/Lotties/LottieView";
import { RowContainer } from "../../../componet/atoms/Container/FlexContainer";
import { MuiPagenation } from "../../../Lib/@mui/pagiantion";
import { SubDomainProvider } from "../../../componet/provider/SubDomainProvider";

const NO_IMAGE = "https://louisville.edu/history/images/noimage.jpg/"
export const PublicProductList: FC<any> = () => {

    const navigate = useNavigate();
    const getProducts = useGetAllProducts();
    const setShowProduct = useSetRecoilState(productDetailsState);
    const subdomainShop = useRecoilValue(shopState)

    useEffect(()=>{
        console.log("LOGGER",subdomainShop)
        if(subdomainShop) getProducts.mutate({shopId:subdomainShop.id,page:1});
    },[subdomainShop])

    return <SubDomainProvider className="flex flex-1 flex-col w-screen min-h-screen">
        <PublicNavBar />
        <div className="grid lg:px-5 lg:grid-cols-5 gap-4 sm:grid-cols-6 md:grid-cols-6 max-w-full mt-28">
            {
                getProducts.data !== undefined&&getProducts.data?.dataList.map((row, index) => <ProductCard
                onPress={() =>{ 
                    setShowProduct(row)
                    navigate("/details")
                }}
                key={index}
                img={row.imagesUrl[0] ? row.imagesUrl[0].url : NO_IMAGE}
                label={row.name} price={row.price} />)
            }
        </div>
        {
                getProducts.isLoading &&
                <RowContainer className="justify-center items-center w-full">
                    <ShopLoader className="h-72 w-72" />
                </RowContainer>
        }
        <MuiPagenation count={getProducts.data?.totalPage||0} onChange={(e,page)=>{
            console.log(e)
            getProducts.mutate({shopId:subdomainShop.id,page:page})}} />

    </SubDomainProvider>

}