import { AddProductStockQuantity } from "./pages/CreatProduct/AddStockQuantity"
import { ChooseDelivaryTypes } from "./pages/CreatProduct/ChooseDelivaryType"
import { ChooseProductTypes } from "./pages/CreatProduct/ChooseProductType"
import { ConfirmProduct } from "./pages/CreatProduct/ConfirmProduct"
import { AddProductName } from "./pages/CreatProduct/ProductName"
import { AddProductPrice } from "./pages/CreatProduct/ProductPrice"
import { UploadProductPhoto } from "./pages/CreatProduct/UploadProductPhoto"
import { ShopAdminPassword } from "./pages/CreateShop/ShopAdminPassword"
import { ShopConfirm } from "./pages/CreateShop/ShopConfirm"
import { ShopDomainName } from "./pages/CreateShop/ShopDomainName"
import { ShopEmail } from "./pages/CreateShop/ShopEmail"
import { ShopName } from "./pages/CreateShop/ShopName"
import { ShopPhone } from "./pages/CreateShop/ShopPhone"
import { UploadShopImage } from "./pages/CreateShop/UploadShopImage"

interface IRoute {
    routeName:string,
    componet:() => JSX.Element
}
export let RegisterRoutes:IRoute[] = [
    {routeName:"/register/1" ,componet:() => <ChooseProductTypes  />},
    {routeName:"/register/2" ,componet:AddProductName},
    {routeName:"/register/3" ,componet:UploadProductPhoto},
    {routeName:"/register/4" ,componet:AddProductPrice},
    {routeName:"/register/5" ,componet:AddProductStockQuantity},
    {routeName:"/register/6" ,componet:ChooseDelivaryTypes},
    {routeName:"/register/7" ,componet:ConfirmProduct},
    {routeName:"/register/8" ,componet:ShopName},
    {routeName:"/register/9",componet:UploadShopImage},
    {routeName:"/register/10" ,componet:ShopEmail},
    {routeName:"/register/11",componet:ShopAdminPassword},
    {routeName:"/register/12",componet:ShopPhone},
    {routeName:"/register/13",componet:ShopDomainName},
    {routeName:"/register/14",componet:ShopConfirm}
]







