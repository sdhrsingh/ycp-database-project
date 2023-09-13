import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [adminId, setAdminId] = useState("");
  const [prn, setPrn] = useState(null);
  const [firstName, setFirstName] = useState("");

  return (
    <AuthContext.Provider value={[adminId, setAdminId, prn, setPrn, firstName, setFirstName]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;