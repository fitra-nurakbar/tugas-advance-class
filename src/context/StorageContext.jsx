import React, { createContext, useContext, useReducer } from "react";

const StorageData = createContext(null);
const TellerBank = createContext(null);

export default function StorageContext({ children }) {
  const initialTasks = [
    { id: 0, name: "name satu" },
    { id: 1, name: "name dua" },
  ];

  const tasksReducer = (tasks, action) => {
    switch (action.type) {
      case "test": {
        return [
          ...tasks,
          {
            id: action.id,
            name: action.name,
          },
        ];
      }

      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  };

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <StorageData.Provider value={tasks}>
      <TellerBank.Provider value={dispatch}>{children}</TellerBank.Provider>
    </StorageData.Provider>
  );
}

export const useGetData = () => {
  return useContext(StorageData);
};

export const useFungsiDispatch = () => {
  return useContext(TellerBank);
};
