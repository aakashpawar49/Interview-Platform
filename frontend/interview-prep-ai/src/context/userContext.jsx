import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);     // New state to track loading

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        console.log("userContext useEffect: accessToken =", accessToken);
        if (!accessToken) {
            console.log("No token, setting loading to false");
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            console.log("Fetching user profile...");
            try{
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                console.log("User profile fetched:", response.data);
                setUser(response.data);
            } catch (error) {
                console.error("User not authenticated" ,error);
                clearUser();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const updateUser = (userData) => {
        console.log("updateUser called with:", userData);
        setUser(userData);
        localStorage.setItem("token", userData.token);  // Save token
        setLoading(false);
    }

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
