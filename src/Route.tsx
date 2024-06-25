import { Navigate } from "react-router-dom";
import { isLogin } from "./feature/storage/Auth";


export { PrivateRoute,LoginRoute };

function PrivateRoute({ children }:{children:any}) {

    if (!isLogin()) {
        return <Navigate to="/login" />
    }
    return children;
}

function LoginRoute({ children }:{children:any}) {

    if (isLogin()) {
        return <Navigate to="/owner/products" />
    }
    return children;
}