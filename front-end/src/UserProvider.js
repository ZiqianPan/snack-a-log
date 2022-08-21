
import React, { useEffect, useState, createContext } from "react";
//noice here we are refrenceing the service we set up earlier
// import { auth } from "./Firebase";
export const UserContext = createContext(null)

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
  //listen for changes
    //   auth.onAuthStateChanged(async (user) => {
    //       console.log(user)
    //     if (user) {
    //       // get return values from Firebase
    //       const { email, displayName, photoURL, uid } = user;
    //     // save them in state
    //       setUser({ email, displayName, photoURL, uid });
    //     } else {
    //       setUser(null);
    //     }
    //   });
    }, []);
    return (
     // render context provider with user state in value
      <UserContext.Provider value={user}>
        <div>{props.children}</div>
      </UserContext.Provider>
    );
  };