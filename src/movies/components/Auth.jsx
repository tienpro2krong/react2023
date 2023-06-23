// tao component share data tu Auth provider trong thu muc hooks
import { Suspense } from "react";
import { useOutlet, Await, useLoaderData } from 'react-router-dom';
import { Row, Col, Alert } from 'antd';
import { AuthProvider } from '../hooks/useAuth';
import SpinMovies from './commons/Spin';

const AlertErrors = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Alert message="Error !!!!" type="error" />
            </Col>
        </Row>
    )
}

const AuthLayoutMovies = () => {
    const outlet = useOutlet();
    const { userPromise } = useLoaderData();
    return (
        <Suspense
            fallback={<SpinMovies />}
        >
            <Await
                resolve={userPromise}
                errorElement={<AlertErrors />}
                children={(user) => (
                    <AuthProvider userData={user}>
                        {outlet}
                    </AuthProvider>
                )}
            />
        </Suspense>
    )
}

export default AuthLayoutMovies;