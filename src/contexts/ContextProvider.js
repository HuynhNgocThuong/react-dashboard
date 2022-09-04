import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  useProfile: false,
  notification: false,
};

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => setIsClicked({...initialState, [clicked]: true});

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        // setMode,
        // setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
