import { useMemo, useState, useEffect, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const setItemInLocalStorage = (keyName, value) => {
  window.localStorage.setItem(keyName, JSON.stringify(value));
};

export const getItemFromLocalStorage = (keyName) => {
  try {
    const value = window.localStorage.getItem(keyName);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

const AuthContext = createContext();

const kInitialUserState = {
  username: null,
  password: null,
  token: null,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(kInitialUserState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lsUser = getItemFromLocalStorage("user");

    if (lsUser?.username) {
      // set user in state
      setUser(lsUser);
      // navigate them to wherever we want/intend them to go
      navigate(location.pathname);
    } else {
      navigate("/login");
    }
  }, [location.pathname, navigate]); // we only want AuthProvider to run once, hence nothing in the dependency array []

  // we want to handle all of our user login/logout logic in this hook to prevent messiness elsewhere and messing with user's state

  const login = (userData) => {
    setUser(userData);
    setItemInLocalStorage("user", userData);
    navigate("/home");
  };

  const logout = () => {
    setUser(kInitialUserState);
    setItemInLocalStorage("user", kInitialUserState);
    navigate("/login");
  };

  // memoize the value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    // eslint-disable-next-line
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
