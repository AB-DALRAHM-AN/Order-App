import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: '',
  showCart: () => {}, 
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export const UserProgressProvider = ({children}) => {

  const [userProgress, setUserProgress] = useState(0);

  const showCart = () => {
    setUserProgress('cart');
  };

  const hideCart = () => {
    setUserProgress('');
  };

  const showCheckout = () => {
    setUserProgress('checkout');
  };

  const hideCheckout = () => {
    setUserProgress('');
  };

  const userProgressCtx = {
    progress : userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}