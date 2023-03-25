import React, { createContext, useState } from 'react';

const CommonContext = createContext(null);

function CommonProvider({ children }) {
  const [commonState, setCommonState] = useState({
    title: '',
    color: '',
  });

  const updateCommonState = (newState) => {
    setCommonState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <CommonContext.Provider value={{ commonState, updateCommonState }}>
      {children}
    </CommonContext.Provider>
  );
}

export { CommonContext, CommonProvider };
