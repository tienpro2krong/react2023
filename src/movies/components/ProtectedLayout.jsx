import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();
    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {outlet}
        </>
    )
}

export default ProtectedLayout;