import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [bearerToken, setBearerToken] = useState(null)
  const [userProfile, setUserProfile] = useState({})

  useEffect(()=>{

  }, [])

  const value = {
    userProfile,
    bearerToken
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
