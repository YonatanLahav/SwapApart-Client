import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ element, user, ...rest }) {
    return user ? (
        element
    ) : (
        <Navigate to="/" replace />
    )
}
