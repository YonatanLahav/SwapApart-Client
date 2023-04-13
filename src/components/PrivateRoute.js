import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

/**
 * PrivateRoute is a functional component that takes in an element and a user object as props.
 * If the user object is truthy, it returns the element. Otherwise, it redirects the user to the home page.
 *
 * @param {Object} props - Props that include an element, a user object, and rest props.
 * @returns {JSX.Element} Returns an element or redirects to the home page.
 */
export default function PrivateRoute({ element }) {
    const { token } = useContext(UserContext);
    // If the user object is truthy, return the element.
    // Otherwise, redirect the user to the home page using the Navigate component from react-router-dom.
    return token ? (
        element
    ) : (
        <Navigate to="/" replace />
    )
}
