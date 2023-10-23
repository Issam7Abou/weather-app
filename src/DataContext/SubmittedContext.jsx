import React, { createContext, useContext, useState } from 'react';

const SubmittedContext = createContext();

export const useSubmittedContext = () => {
  return useContext(SubmittedContext);
};

export const SubmittedProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <SubmittedContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </SubmittedContext.Provider>
  );
};