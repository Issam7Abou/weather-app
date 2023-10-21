import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <DataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </DataContext.Provider>
  );
};