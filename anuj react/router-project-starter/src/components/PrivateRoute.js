import { Navigate } from "react-router-dom";

const PrivateRoute = ({IsLogedIn , children}) => {
    if(IsLogedIn) {
        return children;
    }
    else {
        return <Navigate to="login"/>
    }
}

export default PrivateRoute;