import './App.css'
import  NavBar  from './componet/themes/nav'
import LoginPage from './pages/Login';
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductCreatePage } from './pages/products/Create';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LoginRoute, PrivateRoute } from './Route';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home';
import { RegisterRoutes } from './CreateShopAndProductRoute';
import { ProductList } from './pages/products/List';
import { PublicProductList } from './pages/products/public';
import { ProfilePage } from './pages/Profile';
import { ShopPage } from './pages/Shop';
import { PubilcProductDetailsPage } from './pages/products/public/details';
import { CreateCustomer } from './pages/customers/Create Customer';
import { OrderPreviewPage } from './pages/products/public/orders';
import { ConfirmOrder } from './pages/products/public/confirmOrder';
import OrderPage from './pages/orders';
import CustomersPage from './pages/customers';
import { SettingPage } from './pages/Setting';


const queryClient = new QueryClient()

function App() {

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="min-h-screen min-w-max h-full">
          <Routes>
            {/* <Route path='/admin'  element={<Navigate to="/admin/products" />} /> */}
            {/* <Route path='/admin/*' element={<PrivateRoute><NavBar /></PrivateRoute>}>
              <Route path="orders" element={<OrderPage />} />
              <Route path="orders/create" element={<CreateOrderPage />} />
              <Route path="customers" element={<CustomersPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/create" element={<ProductCreatePage />} />
            </Route> */}

            <Route path='/owner'  element={<Navigate to="/owner/products" />} />
            <Route path='/owner/*' element={<PrivateRoute><NavBar /></PrivateRoute>}> 
              <Route path='products' element={<ProductList />} />
              <Route path='products/create' element={<ProductCreatePage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='shop' element={<SettingPage />} />
              <Route path="orders" element={<OrderPage />} />
              <Route path='customers' element={<CustomersPage />} />
              <Route path='setting' element={<ShopPage />} />
            </Route>

            <Route path='/login' element={<LoginRoute><LoginPage /></LoginRoute>} />
            <Route path='/' element={<PublicProductList />} />
            <Route path='/carts' element={<OrderPreviewPage />} />
            <Route path='/customer' element={<CreateCustomer />} />
            <Route path='/order' element={<ConfirmOrder />} />
            <Route path='/details' element={<PubilcProductDetailsPage />} />
            <Route path='/home' element={<Home />} />
            
            {
              RegisterRoutes.map(route=>{
                return(
                  <Route key={route.routeName} path={route.routeName} element={<route.componet />} />
                )
              })
            }
            <Route path="*" element={<Navigate to="/owner" />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
