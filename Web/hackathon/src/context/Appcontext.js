import React, { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const[isuploadClicked,setisuploadClicked]=useState(false);

  const [image, setImage] = useState('');
 
  const contextValue = {
    isuploadClicked,
    setisuploadClicked,
    image, 
    setImage

  };
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
