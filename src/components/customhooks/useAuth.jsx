import React, { useEffect, useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
const useAuth = () => {
  const auth = getAuth()
  const [currentUser, setcurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
      } else {
        setcurrentUser({});
      }
    });

    // return () => {
    //   currentUser;
    // };
  }, []);
  return { currentUser };

};

export default useAuth;
