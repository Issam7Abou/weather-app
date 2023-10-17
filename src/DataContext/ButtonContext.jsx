import React, { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export const useButtonContext = () => {
  return useContext(ButtonContext);
};

export const ButtonProvider = ({ children }) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <ButtonContext.Provider value={{ buttonActive, setButtonActive }}>
      {children}
    </ButtonContext.Provider>
  );
};