import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateProduct = ({ children = {} }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // You can return a spinner or null
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login"/>;
    }
    return children;
};

export default PrivateProduct;