import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

import { CartContextProvider } from "./app/CartContext";
import { UserProgressContext, UserProgressProvider } from "./app/UserProgress";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/UI/Checkout";

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
