import {FC, useEffect} from "react";
import {useNavigate} from "react-router";

type IAuthRouteProps = any

const PrivateRoute: FC<IAuthRouteProps> = ({children}) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('username') && !localStorage.getItem('password')) {
            navigate('/login')
        }
    }, [children, navigate]);

    return children;
};

export {PrivateRoute};